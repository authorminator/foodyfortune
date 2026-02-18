export default function ToolPicker({ tools, foodText, onChoose }) {
  return (
    <div className="stack">
      <h2 className="sectionTitle">Choose your tool:</h2>

      <div className="grid">
        {Object.values(tools).map((tool) => (
          <button
            key={tool.key}
            className="button button--ghost"
            onClick={() => onChoose(tool.key)}
          >
            <div className="toolLabel">{tool.label}</div>
            <div className="toolMeta">
              {tool.actionVerb} • {tool.requiredHits} clicks
            </div>
          </button>
        ))}
      </div>

      <div className="panel">
        <div className="panelLabel">On the table:</div>
        <div className="panelMain">{foodText}</div>
      </div>
    </div>
  );
}
