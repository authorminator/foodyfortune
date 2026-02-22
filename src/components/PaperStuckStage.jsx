import { useState } from "react";

export default function PaperStuckStage({
  cutText,
  paperStuckText,
  image,
  isMagical,
  onOpen,
  onReset,
  onScreenFlash,
}) {
  // const [flash, setFlash] = useState(false);

  // function triggerFlash() {
  //   setFlash(false);
  //   requestAnimationFrame(() => setFlash(true));
  //   setTimeout(() => setFlash(false), 260);
  // }

  return (
    <div className="stack">
      {/* <div
        className={`panel panel--clickable pulse ${flash ? "flash" : ""}`}
        onClick={() => { */}
      <div
        className={`panel panel--clickable pulse`}
        onClick={() => {
          // triggerFlash();
          onScreenFlash();
          onOpen();
        }}
      >
        <div className="panelMain">{cutText}</div>
        {image && (
          <img
            className={`foodImg ${isMagical ? "panel--magical" : ""}`}
            src={image}
            alt="Opened food"
          />
        )}
        <div className="panelMain" style={{ marginTop: 8 }}>
          {paperStuckText}
        </div>
        <p className="panelText">One more click to open the note.</p>
      </div>

      <div className="row">
        <button className="button button--ghost" onClick={onReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
