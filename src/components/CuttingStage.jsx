// import { useState } from "react";

export default function CuttingStage({
  tool,
  foodText,
  image,
  isMagical,
  hits,
  requiredHits,
  onHit,
  onReset,
  onScreenFlash,
  appCursorStyle,
}) {
  return (
    <div className="stack">
      <h2 className="sectionTitle">
        Tool: <span className="strong">{tool.label}</span>
      </h2>

      <div
        className={"panel panel--clickable pulse"}
        style={appCursorStyle}
        onClick={() => {
          // triggerFlash();
          onScreenFlash();
          onHit();
        }}
      >
        <div className="panelLabel">Target:</div>
        <div className="panelMain">{foodText}</div>
        {image && (
          <img
            className={`foodImg ${isMagical ? "panel--magical" : ""}`}
            src={image}
            alt="Food"
          />
        )}
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
