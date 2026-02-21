import parchment from "../assets/parchment.jpg";

export default function PaperOpenStage({ message, cutText }) {
  return (
    <div className="stack-flex">
      <div className="panel panel--note pop">
        <img className="noteImg" src={parchment} alt="Parchment note" />
        <div className="noteText">
          <div className="noteLabel">You found a note:</div>
          <div className="message noteMessage">{message}</div>
          <div className="noteMeta">{cutText}</div>
        </div>
      </div>
    </div>
  );
}
