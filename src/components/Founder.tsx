export default function Founder() {
  return (
    <section className="section-pad relative px-6 md:px-8 overflow-hidden" id="founder">
      {/* Background accent */}
      <div
        className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #c9a55a 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2 lg:gap-20">
          {/* Portrait */}
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div
              className="relative rounded-2xl overflow-hidden aspect-[3/4]"
              style={{
                border: "1px solid #1e2738",
                background: "linear-gradient(160deg, #151b25 0%, #0e1117 100%)",
              }}
            >
              {/* Placeholder portrait */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div
                  className="w-28 h-28 rounded-full flex items-center justify-center text-4xl font-bold"
                  style={{
                    background: "linear-gradient(135deg, #c9a55a 0%, #a8843c 100%)",
                    color: "#07090d",
                    fontFamily: "var(--font-fraunces), Georgia, serif",
                  }}
                >
                  MC
                </div>
                <div className="text-center px-8">
                  <div
                    className="text-xl font-semibold text-white"
                    style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                  >
                    Marcus Chen
                  </div>
                  <div className="text-sm mt-1" style={{ color: "#6b7280" }}>
                    Founder & CEO, ScoreVera
                  </div>
                </div>
              </div>

              {/* Score badge */}
              <div
                className="absolute bottom-6 left-6 right-6 rounded-xl p-4"
                style={{
                  backgroundColor: "rgba(7,9,13,0.85)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(201,165,90,0.3)",
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-medium mb-0.5" style={{ color: "#9ca3af" }}>
                      Marcus's score before ScoreVera
                    </div>
                    <div
                      className="text-3xl font-bold"
                      style={{
                        color: "#ef4444",
                        fontFamily: "var(--font-fraunces), Georgia, serif",
                      }}
                    >
                      521
                    </div>
                  </div>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: "#6b7280" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <div>
                    <div className="text-xs font-medium mb-0.5 text-right" style={{ color: "#9ca3af" }}>
                      14 months later
                    </div>
                    <div
                      className="text-3xl font-bold text-right"
                      style={{
                        color: "#22c55e",
                        fontFamily: "var(--font-fraunces), Georgia, serif",
                      }}
                    >
                      748
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gold corner accent */}
            <div
              className="absolute -top-3 -right-3 w-24 h-24 rounded-xl opacity-30"
              style={{ border: "2px solid #c9a55a" }}
              aria-hidden="true"
            />
          </div>

          {/* Story */}
          <div>
            <div
              className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#c9a55a" }}
            >
              Why I Built This
            </div>

            <h2
              className="mb-6 text-4xl font-bold leading-tight md:text-5xl"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              I was denied a mortgage
              <br />
              <span style={{ color: "#c9a55a" }}>because nobody told me</span>
              <br />
              the rules.
            </h2>

            <div className="space-y-5 text-base leading-relaxed" style={{ color: "#d1d5db" }}>
              <p>
                In 2018, I tried to buy my first home. I had a decent income, no late
                payments — or so I thought. The denial letter cited an &quot;elevated
                credit utilization ratio&quot; and &quot;insufficient credit mix.&quot; I
                didn&apos;t even know what those phrases meant.
              </p>
              <p>
                I spent the next year obsessively learning the credit system: the algorithms
                Equifax, Experian, and TransUnion use; how FICO® weighs each factor; which
                actions move the needle fast and which ones waste your time.
              </p>
              <p>
                Fourteen months later, I went from 521 to 748 — and I got the mortgage.
                But I was also furious. This information exists. It just isn&apos;t presented
                in a way regular people can act on.
              </p>
              <p
                className="font-semibold text-white"
              >
                So I built ScoreVera to give everyone what I had to fight to find.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#pricing"
                className="flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #c9a55a 0%, #a8843c 100%)",
                  color: "#07090d",
                  boxShadow: "0 0 20px rgba(201,165,90,0.3)",
                }}
              >
                Start My Plan
              </a>
              <div className="flex items-center gap-3 text-sm" style={{ color: "#9ca3af" }}>
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: "#22c55e" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                No credit card required to start
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
