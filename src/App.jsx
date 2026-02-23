import { useEffect, useMemo, useState, useRef } from "react";
import "./App.css";

import Shell from "./components/Shell";
import ToolPicker from "./components/ToolPicker";
import CuttingStage from "./components/CuttingStage";
import PaperStuckStage from "./components/PaperStuckStage";
import PaperOpenStage from "./components/PaperOpenStage";

import {
  SPECIAL_ROUTE,
  SPECIAL_FULL_NAME,
  TOOLS,
  QUOTES,
  FOOD_LIST,
} from "./data/content";

import { safeLowerPathSegment } from "./utils/routing";
import { seededShuffle, pickRandom } from "./utils/pick";
import { preloadImages } from "./utils/preload";
import knifeCursor from "./assets/cursors/knife.png";
import hammerCursor from "./assets/cursors/hammer.png";

const REQUIRED_HITS = 3;

export default function App() {
  const routeSlug = useMemo(() => safeLowerPathSegment(), []);
  const isPersonal = routeSlug === SPECIAL_ROUTE;

  const displayName = isPersonal
    ? `Captain ${SPECIAL_FULL_NAME}`
    : "[your name]";

  // phases: chooseTool -> cutting -> paperStuck -> paperOpen
  const [phase, setPhase] = useState("chooseTool");
  const [selectedToolKey, setSelectedToolKey] = useState(null);
  const [hits, setHits] = useState(0);
  const [message, setMessage] = useState("");
  const [selectedFood, setSelectedFood] = useState(null);

  const selectedTool = selectedToolKey ? TOOLS[selectedToolKey] : null;

  const [isLoadingAssets, setIsLoadingAssets] = useState(true);

  const [quoteQueue, setQuoteQueue] = useState([]);
  const [quoteIndex, setQuoteIndex] = useState(0);

  const knifeQueueRef = useRef([]);
  const hammerQueueRef = useRef([]);
  const knifeIndexRef = useRef(0);
  const hammerIndexRef = useRef(0);

  const eligibleQUOTES = useMemo(() => {
    const base = [...QUOTES.generic];
    if (isPersonal) base.push(...QUOTES.personal);
    return base;
  }, [isPersonal]);

  const [flashKey, setFlashKey] = useState(0);

  const cursorUrl =
    phase === "cutting"
      ? selectedToolKey === "knife"
        ? knifeCursor
        : selectedToolKey === "hammer"
          ? hammerCursor
          : null
      : null;

  const appCursorStyle = cursorUrl
    ? { cursor: `url(${cursorUrl}) 8 8, auto` }
    : undefined;

  function currentTenMinSeed() {
    return Math.floor(Date.now() / (1000 * 60 * 10));
  }

  function buildQuoteQueue() {
    const seed = currentTenMinSeed();
    const shuffled = seededShuffle(eligibleQUOTES, seed).map((q) =>
      q.replaceAll("[NAME]", displayName),
    );
    setQuoteQueue(shuffled);
    setQuoteIndex(0);
  }

  function triggerScreenFlash() {
    setFlashKey((k) => k + 1);
  }

  function buildFoodQueues() {
    const seed = Date.now();
    const knifeFoods = FOOD_LIST.filter((f) => f.tool === "knife");
    const hammerFoods = FOOD_LIST.filter((f) => f.tool === "hammer");

    knifeQueueRef.current = seededShuffle(knifeFoods, seed);
    hammerQueueRef.current = seededShuffle(hammerFoods, seed + 1);

    knifeIndexRef.current = 0;
    hammerIndexRef.current = 0;
  }

  function pickFoodForTool(toolKey) {
    if (toolKey === "knife") {
      const q = knifeQueueRef.current;
      if (q.length === 0) return null;

      const food = q[knifeIndexRef.current % q.length];
      knifeIndexRef.current += 1;
      return food;
    }

    if (toolKey === "hammer") {
      const q = hammerQueueRef.current;
      if (q.length === 0) return null;

      const food = q[hammerIndexRef.current % q.length];
      hammerIndexRef.current += 1;
      return food;
    }

    return null;
  }

  function repickMessage() {
    const needsRebuild =
      quoteQueue.length === 0 || quoteIndex >= quoteQueue.length;

    if (needsRebuild) {
      const seed = currentTenMinSeed();
      const shuffled = seededShuffle(eligibleQUOTES, seed).map((q) =>
        q.replaceAll("[NAME]", displayName),
      );

      setQuoteQueue(shuffled);
      setQuoteIndex(1);
      setMessage(shuffled[0] ?? "");
      return;
    }

    setMessage(quoteQueue[quoteIndex] ?? "");
    setQuoteIndex((i) => i + 1);
  }

  useEffect(() => {
    // initialize the first quote immediately
    repickMessage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eligibleQUOTES, displayName]);

  useEffect(() => {
    const id = setInterval(
      () => {
        buildQuoteQueue(); // rebuild using the new seed when time window changes
      },
      1000 * 60 * 10,
    );

    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eligibleQUOTES, displayName]);

  useEffect(() => {
    buildFoodQueues();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const urls = FOOD_LIST.flatMap((f) => [
      f.images?.whole,
      f.images?.opened,
    ]).filter(Boolean);

    preloadImages(urls).then(() => setIsLoadingAssets(false));
  }, []);

  function resetGame() {
    setPhase("chooseTool");
    setSelectedToolKey(null);
    setSelectedFood(null);
    setHits(0);
    repickMessage();
  }

  function chooseTool(toolKey) {
    setSelectedToolKey(toolKey);
    setSelectedFood(pickFoodForTool(toolKey));
    setHits(0);
    setPhase("cutting");
  }

  function doHit() {
    const nextHits = hits + 1;
    setHits(nextHits);
    if (nextHits >= REQUIRED_HITS) {
      setPhase("paperStuck");
    }
  }

  function revealPaper() {
    setPhase("paperOpen");
  }

  return (
    <Shell
      title={`Foody Fortune ✨ - For ${displayName}`}
      subtitle="Pick a tool, open the fruit, and find a little note inside."
      badge={
        <>
          <span className="modeBadge">
            <span className="muted">Mode:</span>{" "}
            {isPersonal ? "Personal" : "Generic"}
          </span>
          {phase === "paperOpen" && (
            <>
              <div className="badgeDivider" aria-hidden="true" />
              <button className="button button--primary" onClick={resetGame}>
                Play Again ↻
              </button>
            </>
          )}
        </>
      }
      footer={
        <>
          Tip: Personal links work only for whitelisted routes in{" "}
          <span className="mono">ALLOWED_PERSONAL_ROUTES</span>.
        </>
      }
    >
      {isLoadingAssets ? (
        <div className="fade">
          <div className="panel">
            <div className="panelMain">Loading game assets… ✨</div>
            <div className="panelMeta">This takes a moment the first time.</div>
          </div>
        </div>
      ) : (
        <>{/* your existing game UI */}</>
      )}
      <div key={flashKey} className="screenFlash" />

      {phase === "chooseTool" && (
        <div className="fade">
          <ToolPicker
            tools={TOOLS}
            foodText={"🍎 Choose a tool to reveal today’s item…"}
            onChoose={chooseTool}
          />
        </div>
      )}

      {phase === "cutting" && selectedTool && selectedFood && (
        <div className="fade">
          <CuttingStage
            tool={selectedTool}
            foodText={
              selectedFood
                ? `✨ A ${selectedFood.type === "magical" ? "mysterious" : ""} ${selectedFood.name} appears before you...`
                : "✨ ..."
            }
            image={selectedFood?.images?.whole}
            isMagical={selectedFood?.type === "magical"}
            hits={hits}
            requiredHits={REQUIRED_HITS}
            onHit={doHit}
            onReset={resetGame}
            onScreenFlash={triggerScreenFlash}
            appCursorStyle={appCursorStyle}
          />
        </div>
      )}

      {phase === "paperStuck" && (
        <div className="fade">
          <PaperStuckStage
            cutText={"It breaks open…"}
            paperStuckText={"📜 A note is stuck inside…"}
            image={selectedFood?.images?.opened}
            isMagical={selectedFood?.type === "magical"}
            onOpen={revealPaper}
            onReset={resetGame}
            onScreenFlash={triggerScreenFlash}
          />
        </div>
      )}

      {phase === "paperOpen" && (
        <div className="fade">
          <PaperOpenStage message={message} cutText={"It breaks open…"} />
        </div>
      )}
    </Shell>
  );
}
