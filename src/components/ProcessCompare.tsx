const xIcon = (
  <svg className="ci ci-x" viewBox="0 0 16 16" fill="none">
    <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const okIcon = (
  <svg className="ci ci-ok" viewBox="0 0 16 16" fill="none">
    <path d="M3 8l4 4 6-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const badItems = [
  "Sending random letters found online",
  "Wrong timing and sequencing",
  "No tracking, no follow-through",
  "Stopping before the process is done",
];

const goodItems = [
  "FCRA-compliant letters for each situation",
  "Controlled sequencing and timing",
  "30-day investigation tracking",
  "Clear next step, every round",
];

export default function ProcessCompare() {
  return (
    <section id="process" className="section">
      <div className="wrap">
        <div className="inner">
          <div>
            <span className="eyebrow rv" style={{ marginBottom: "14px", display: "inline-flex" }}>
              The Real Problem
            </span>
            <h2 className="h-xl rv" style={{ marginBottom: "14px" }}>
              This works when it is done correctly.
            </h2>
            <p className="body-lg rv d1" style={{ marginBottom: "14px" }}>
              Most people just don&apos;t do it correctly. They send random letters. Too many. Too fast.
              Or they stop too early.
            </p>
            <p className="body-lg rv d2">
              <strong style={{ color: "var(--t1)" }}>ScoreVera fixes that.</strong> It tells you what
              to send, controls the timing, and tracks what happens next.
            </p>
          </div>

          <div className="compare rv d1">
            <div className="compare-card bad">
              <span className="c-lbl bad">Without a system</span>
              <ul className="c-list">
                {badItems.map((item, i) => (
                  <li key={i}>{xIcon}{item}</li>
                ))}
              </ul>
            </div>

            <div className="compare-card good">
              <span className="c-lbl good">With ScoreVera</span>
              <ul className="c-list">
                {goodItems.map((item, i) => (
                  <li key={i}>{okIcon}{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
