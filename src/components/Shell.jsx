export default function Shell({ title, subtitle, badge, children, footer }) {
  return (
    <div className="shell">
      <div className="card">
        <div className="header">
          <div>
            <h1 className="title">{title}</h1>
            <p className="subtitle">{subtitle}</p>
          </div>
          {badge ? <div className="badge">{badge}</div> : null}
        </div>

        <hr className="divider" />

        <div className="content">{children}</div>

        {footer ? (
          <>
            <hr className="divider" />
            <div className="footer">{footer}</div>
          </>
        ) : null}
      </div>
    </div>
  );
}
