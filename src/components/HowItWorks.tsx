const steps = [
  {
    step: "01",
    title: "Connect Your Credit",
    description:
      "Securely link your credit file in under two minutes. We pull your full reports from all three bureaus via read-only, bank-grade encrypted connections — no password sharing required.",
    detail: "Equifax · Experian · TransUnion",
    color: "#c9a55a",
  },
  {
    step: "02",
    title: "Get Your Vera Score™",
    description:
      "Our proprietary model scores your credit profile across 22 dimensions — not just the number, but the why behind it. Payment history, utilization, mix, age, inquiries — all ranked by impact.",
    detail: "22-factor analysis · Ready in 90 seconds",
    color: "#3b82f6",
  },
  {
    step: "03",
    title: "Receive Your Action Plan",
    description:
      "ScoreVera generates a ranked list of actions specific to your profile. Each task shows the exact point impact, the estimated time to complete, and step-by-step instructions in plain English.",
    detail: "Ranked by ROI · Personalized to you",
    color: "#c9a55a",
  },
  {
    step: "04",
    title: "Track Progress Weekly",
    description:
      "As you complete tasks, your dashboard updates in real time. Weekly score syncs show you exactly how each action moved your number. Dispute automation handles bureau errors for you.",
    detail: "Weekly syncs · Automated disputes",
    color: "#3b82f6",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-pad px-6 md:px-8" id="how-it-works">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div
            className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#c9a55a" }}
          >
            The Process
          </div>
          <h2
            className="text-4xl font-bold md:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            From confused
            <br />
            <span style={{ color: "#c9a55a" }}>to credit-confident</span>
            <br />
            in four steps.
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden lg:block"
            style={{ backgroundColor: "#1e2738" }}
            aria-hidden="true"
          />

          <div className="space-y-6 lg:space-y-0">
            {steps.map((step, i) => (
              <div
                key={step.step}
                className={`relative flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Content */}
                <div
                  className={`${i % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div
                    className="rounded-2xl p-8 transition-all hover:-translate-y-0.5"
                    style={{
                      backgroundColor: "#0e1117",
                      border: "1px solid #1e2738",
                    }}
                  >
                    <div
                      className="mb-4 text-sm font-bold tracking-widest"
                      style={{
                        fontFamily: "var(--font-jetbrains), monospace",
                        color: step.color,
                      }}
                    >
                      STEP {step.step}
                    </div>
                    <h3
                      className="mb-3 text-2xl font-bold text-white md:text-3xl"
                      style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                    >
                      {step.title}
                    </h3>
                    <p className="mb-5 leading-relaxed" style={{ color: "#9ca3af" }}>
                      {step.description}
                    </p>
                    <span
                      className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold"
                      style={{
                        backgroundColor: `${step.color}15`,
                        color: step.color,
                        border: `1px solid ${step.color}30`,
                        fontFamily: "var(--font-jetbrains), monospace",
                      }}
                    >
                      {step.detail}
                    </span>
                  </div>
                </div>

                {/* Step indicator (desktop) */}
                <div
                  className={`hidden lg:flex items-center justify-center ${
                    i % 2 === 1 ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div
                    className="relative flex h-20 w-20 items-center justify-center rounded-full text-2xl font-bold z-10"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}20, ${step.color}10)`,
                      border: `2px solid ${step.color}50`,
                      fontFamily: "var(--font-fraunces), Georgia, serif",
                      color: step.color,
                      boxShadow: `0 0 30px ${step.color}20`,
                    }}
                  >
                    {step.step}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-bold transition-all hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #c9a55a 0%, #a8843c 100%)",
              color: "#07090d",
              boxShadow: "0 0 30px rgba(201,165,90,0.3)",
            }}
          >
            Start in Two Minutes
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
