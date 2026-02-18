export default function PaperOpenStage({ message, cutText, onPlayAgain }) {
  return (
    <div className="stack">
      <div className="panel pop">
        <div className="panelLabel">You found a note:</div>
        <div className="message">{message}</div>
        <div className="panelMeta" style={{ marginTop: 14 }}>
          {cutText}
        </div>
      </div>

      <div className="row">
        <button className="button button--primary" onClick={onPlayAgain}>
          Play again
        </button>
      </div>
    </div>
  );
}
