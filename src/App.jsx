import { useEffect, useMemo, useState } from "react";
import "./App.css";

import Shell from "./components/Shell";
import ToolPicker from "./components/ToolPicker";
import CuttingStage from "./components/CuttingStage";
import PaperStuckStage from "./components/PaperStuckStage";
import PaperOpenStage from "./components/PaperOpenStage";

import {
  ALLOWED_PERSONAL_ROUTES,
  TOOLS,
  QUOTES,
  FOOD_LIST,
} from "./data/content";

import { safeLowerPathSegment, formatNameForDisplay } from "./utils/routing";
import { pickRandom } from "./utils/pick";
import knifeCursor from "./assets/cursors/knife.png";
import hammerCursor from "./assets/cursors/hammer.png";

const REQUIRED_HITS = 3;

export default function App() {
  const routeSlug = useMemo(() => safeLowerPathSegment(), []);
  const isPersonal = useMemo(
    () => routeSlug && ALLOWED_PERSONAL_ROUTES.includes(routeSlug),
    [routeSlug],
  );

  const displayName = useMemo(
    () => (isPersonal ? formatNameForDisplay(routeSlug) : "[your name]"),
    [isPersonal, routeSlug],
  );

  // phases: chooseTool -> cutting -> paperStuck -> paperOpen
  const [phase, setPhase] = useState("chooseTool");
  const [selectedToolKey, setSelectedToolKey] = useState(null);
  const [hits, setHits] = useState(0);
  const [message, setMessage] = useState("");
  const [selectedFood, setSelectedFood] = useState(null);

  const selectedTool = selectedToolKey ? TOOLS[selectedToolKey] : null;

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

  function triggerScreenFlash() {
    setFlashKey((k) => k + 1);
  }

  function pickFoodForTool(toolKey) {
    const options = FOOD_LIST.filter((f) => f.tool === toolKey);
    return pickRandom(options);
  }

  function repickMessage() {
    const raw = pickRandom(eligibleQUOTES);
    setMessage(raw.replaceAll("[NAME]", displayName));
  }

  useEffect(() => {
    if (!message) repickMessage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eligibleQUOTES, displayName]);

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
