const pillars = [
  {
    number: "01",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Total Transparency",
    description:
      "We pull your full reports from Equifax, Experian, and TransUnion and show you exactly what each bureau sees — no black boxes, no guesswork.",
    accent: "#c9a55a",
  },
  {
    number: "02",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Precision Over Speed",
    description:
      "Quick fixes that hurt you long-term aren't in our vocabulary. Every recommendation is modeled against your specific credit profile for maximum, lasting impact.",
    accent: "#3b82f6",
  },
  {
    number: "03",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: "Plain-English Plans",
    description:
      "No jargon. No credit-industry speak. We translate every factor into a clear task: what to do, when to do it, and exactly how many points it's worth.",
    accent: "#c9a55a",
  },
  {
    number: "04",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Privacy First",
    description:
      "Your financial data never leaves our encrypted infrastructure. We use read-only bureau connections — we can't move money, open accounts, or touch your credit.",
    accent: "#3b82f6",
  },
];

export default function Pillars() {
  return (
    <section className="section-pad px-6 md:px-8" id="pillars">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div
            className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#c9a55a" }}
          >
            Our Principles
          </div>
          <h2
            className="text-4xl font-bold md:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Built on four
            <br />
            <span style={{ color: "#c9a55a" }}>unbreakable commitments</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <article
              key={pillar.number}
              className="group relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{
                backgroundColor: "#0e1117",
                border: "1px solid #1e2738",
              }}
            >
              {/* Number */}
              <div
                className="mb-5 text-xs font-bold tracking-widest"
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  color: pillar.accent,
                  opacity: 0.6,
                }}
              >
                {pillar.number}
              </div>

              {/* Icon */}
              <div
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
                style={{
                  backgroundColor: `${pillar.accent}15`,
                  color: pillar.accent,
                  border: `1px solid ${pillar.accent}30`,
                }}
              >
                {pillar.icon}
              </div>

              {/* Content */}
              <h3
                className="mb-3 text-xl font-bold text-white"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>
                {pillar.description}
              </p>

              {/* Hover accent line */}
              <div
                className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: pillar.accent }}
                aria-hidden="true"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
