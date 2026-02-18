import { useEffect, useMemo, useState } from "react";
import "./App.css";

import Shell from "./components/Shell";
import ToolPicker from "./components/ToolPicker";
import CuttingStage from "./components/CuttingStage";
import PaperStuckStage from "./components/PaperStuckStage";
import PaperOpenStage from "./components/PaperOpenStage";

import {
  ALLOWED_PERSONAL_ROUTES,
  DEFAULT_FOOD_KEY,
  TOOLS,
  FOODS,
  MESSAGES,
} from "./data/content";

import { safeLowerPathSegment, formatNameForDisplay } from "./utils/routing";
import { pickRandom } from "./utils/pick";

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

  const food = FOODS[DEFAULT_FOOD_KEY];

  // phases: chooseTool -> cutting -> paperStuck -> paperOpen
  const [phase, setPhase] = useState("chooseTool");
  const [selectedToolKey, setSelectedToolKey] = useState(null);
  const [hits, setHits] = useState(0);
  const [message, setMessage] = useState("");

  const selectedTool = selectedToolKey ? TOOLS[selectedToolKey] : null;

  const eligibleMessages = useMemo(() => {
    const base = [...MESSAGES.generic];
    if (isPersonal) base.push(...MESSAGES.personal);
    return base;
  }, [isPersonal]);

  const [flashKey, setFlashKey] = useState(0);

  function triggerScreenFlash() {
    setFlashKey((k) => k + 1);
  }

  function repickMessage() {
    const raw = pickRandom(eligibleMessages);
    setMessage(raw.replaceAll("[NAME]", displayName));
  }

  useEffect(() => {
    if (!message) repickMessage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eligibleMessages, displayName]);

  function resetGame() {
    setPhase("chooseTool");
    setSelectedToolKey(null);
    setHits(0);
    repickMessage();
  }

  function chooseTool(toolKey) {
    setSelectedToolKey(toolKey);
    setHits(0);
    setPhase("cutting");
  }

  function doHit() {
    if (!selectedTool) return;
    const nextHits = hits + 1;
    setHits(nextHits);
    if (nextHits >= selectedTool.requiredHits) {
      setPhase("paperStuck");
    }
  }

  function revealPaper() {
    setPhase("paperOpen");
  }

  return (
    <Shell
      title={`Fortune Fruit ✨ (${displayName})`}
      subtitle="Pick a tool, open the fruit, and find a little note inside."
      badge={
        <>
          <span className="muted">Mode:</span>{" "}
          {isPersonal ? "Personal" : "Generic"}
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
            foodText={food.wholeText}
            onChoose={chooseTool}
          />
        </div>
      )}

      {phase === "cutting" && selectedTool && (
        <div className="fade">
          <CuttingStage
            tool={selectedTool}
            foodText={food.wholeText}
            hits={hits}
            onHit={doHit}
            onReset={resetGame}
            onScreenFlash={triggerScreenFlash}
          />
        </div>
      )}

      {phase === "paperStuck" && (
        <div className="fade">
          <PaperStuckStage
            cutText={food.cutText}
            paperStuckText={food.paperStuckText}
            onOpen={revealPaper}
            onReset={resetGame}
            onScreenFlash={triggerScreenFlash}
          />
        </div>
      )}

      {phase === "paperOpen" && (
        <div className="fade">
          <PaperOpenStage
            message={message}
            cutText={food.cutText}
            onPlayAgain={resetGame}
          />
        </div>
      )}
    </Shell>
  );
}
