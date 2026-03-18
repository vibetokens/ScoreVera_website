export default function BureauStrip() {
  const bureaus = [
    {
      name: "Equifax",
      description: "Full report pull & analysis",
      color: "#e03121",
      abbr: "EFX",
    },
    {
      name: "Experian",
      description: "FICO® Score 8 monitoring",
      color: "#0066b3",
      abbr: "EXP",
    },
    {
      name: "TransUnion",
      description: "VantageScore 3.0 tracking",
      color: "#00adef",
      abbr: "TU",
    },
  ];

  const features = [
    { icon: "🔄", label: "Real-time sync" },
    { icon: "🔒", label: "Bank-grade encryption" },
    { icon: "📊", label: "Score factor analysis" },
    { icon: "⚡", label: "Instant alerts" },
    { icon: "🎯", label: "Dispute automation" },
    { icon: "📈", label: "Progress tracking" },
  ];

  return (
    <section
      className="relative py-16 px-6 md:px-8"
      style={{
        backgroundColor: "#0e1117",
        borderTop: "1px solid #1e2738",
        borderBottom: "1px solid #1e2738",
      }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Label */}
        <p
          className="mb-10 text-center text-xs font-semibold uppercase tracking-widest"
          style={{ color: "#6b7280" }}
        >
          Connected to all three major credit bureaus
        </p>

        {/* Bureau cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-12">
          {bureaus.map((bureau) => (
            <div
              key={bureau.name}
              className="flex items-center gap-4 rounded-xl p-5 transition-all hover:scale-105"
              style={{
                backgroundColor: "#151b25",
                border: "1px solid #1e2738",
              }}
            >
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-white"
                style={{ backgroundColor: bureau.color }}
              >
                {bureau.abbr}
              </div>
              <div>
                <div className="font-semibold text-white text-base" style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}>
                  {bureau.name}
                </div>
                <div className="text-sm" style={{ color: "#9ca3af" }}>
                  {bureau.description}
                </div>
              </div>
              <svg
                className="ml-auto shrink-0 w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ color: "#22c55e" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          ))}
        </div>

        {/* Feature pills */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {features.map((f) => (
            <span
              key={f.label}
              className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid #1e2738",
                color: "#9ca3af",
              }}
            >
              <span>{f.icon}</span>
              {f.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
