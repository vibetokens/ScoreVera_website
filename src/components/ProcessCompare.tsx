const oldWay = [
  { text: "Pull one bureau report manually" },
  { text: "Spend hours decoding credit jargon" },
  { text: "Google generic advice that may not apply" },
  { text: "File disputes blindly and wait months" },
  { text: "Hope for improvement with no timeline" },
  { text: "Pay expensive credit repair agencies" },
  { text: "See a number — not understand the why" },
];

const scoreVera = [
  { text: "All 3 bureau reports pulled in 90 seconds" },
  { text: "22-factor analysis in plain English" },
  { text: "Personalized action plan ranked by impact" },
  { text: "Smart dispute automation — only winnable cases" },
  { text: "Weekly progress tracking with exact point deltas" },
  { text: "Fraction of the cost of a credit repair agency" },
  { text: "Understand every factor and what to do about it" },
];

export default function ProcessCompare() {
  return (
    <section
      className="section-pad px-6 md:px-8"
      id="compare"
      style={{
        backgroundColor: "#0e1117",
        borderTop: "1px solid #1e2738",
        borderBottom: "1px solid #1e2738",
      }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div
            className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#c9a55a" }}
          >
            Why ScoreVera
          </div>
          <h2
            className="text-4xl font-bold md:text-5xl"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            The old way is
            <br />
            <span style={{ color: "#c9a55a" }}>costing you points.</span>
          </h2>
        </div>

        {/* Comparison */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Old Way */}
          <div
            className="rounded-2xl p-8"
            style={{
              backgroundColor: "#151b25",
              border: "1px solid #ef444420",
            }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full"
                style={{ backgroundColor: "#ef444420" }}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#ef4444">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3
                className="text-xl font-bold"
                style={{
                  fontFamily: "var(--font-fraunces), Georgia, serif",
                  color: "#ef4444",
                }}
              >
                The Old Way
              </h3>
            </div>

            <ul className="space-y-4">
              {oldWay.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: "#ef4444" }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ScoreVera */}
          <div
            className="rounded-2xl p-8 relative overflow-hidden"
            style={{
              backgroundColor: "#151b25",
              border: "1px solid rgba(201,165,90,0.3)",
              boxShadow: "0 0 40px rgba(201,165,90,0.08)",
            }}
          >
            {/* Subtle gold glow */}
            <div
              className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10 pointer-events-none"
              style={{
                background: "radial-gradient(circle, #c9a55a, transparent)",
                filter: "blur(30px)",
              }}
              aria-hidden="true"
            />

            <div className="mb-6 flex items-center gap-3 relative z-10">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full"
                style={{ backgroundColor: "rgba(201,165,90,0.2)" }}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#c9a55a">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3
                className="text-xl font-bold"
                style={{
                  fontFamily: "var(--font-fraunces), Georgia, serif",
                  color: "#c9a55a",
                }}
              >
                With ScoreVera
              </h3>
            </div>

            <ul className="space-y-4 relative z-10">
              {scoreVera.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#c9a55a">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm leading-relaxed" style={{ color: "#d1d5db" }}>
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom stat */}
        <div className="mt-12 text-center">
          <p className="text-lg font-semibold" style={{ color: "#9ca3af" }}>
            The average ScoreVera user saves{" "}
            <span
              style={{
                color: "#c9a55a",
                fontFamily: "var(--font-fraunces), Georgia, serif",
              }}
            >
              $3,200/year
            </span>{" "}
            in interest after improving their score.
          </p>
        </div>
      </div>
    </section>
  );
}
