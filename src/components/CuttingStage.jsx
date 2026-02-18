// import { useState } from "react";

export default function CuttingStage({
  tool,
  foodText,
  hits,
  onHit,
  onReset,
  onScreenFlash,
}) {
  const requiredHits = tool.requiredHits;
  // const [flash, setFlash] = useState(false);

  // function triggerFlash() {
  //   setFlash(false);
  //   requestAnimationFrame(() => setFlash(true));
  //   setTimeout(() => setFlash(false), 260);
  // }

  return (
    <div className="stack">
      <h2 className="sectionTitle">
        Tool: <span className="strong">{tool.label}</span>
      </h2>

      <div
        className="panel panel--clickable pulse"
        onClick={() => {
          // triggerFlash();
          onScreenFlash();
          onHit();
        }}
      >
        <div className="panelLabel">Target:</div>
        <div className="panelMain">{foodText}</div>

        <p className="panelText">
          Click <span className="strong">{requiredHits}</span> times to{" "}
          <span className="strong">{tool.actionVerb.toLowerCase()}</span>.
        </p>

        <p className="panelMeta">
          Progress: {hits}/{requiredHits} ({tool.hitWord}
          {requiredHits === 1 ? "" : "s"})
        </p>
      </div>

      <div className="row">
        <button className="button button--ghost" onClick={onReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
