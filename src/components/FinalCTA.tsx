export default function FinalCTA() {
  return (
    <section className="relative px-6 py-24 md:px-8 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, #c9a55a 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Pre-headline */}
        <div
          className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
          style={{
            borderColor: "rgba(201,165,90,0.3)",
            backgroundColor: "rgba(201,165,90,0.08)",
          }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: "#c9a55a" }}
          />
          <span
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#c9a55a" }}
          >
            Your plan is waiting
          </span>
        </div>

        {/* Headline */}
        <h2
          className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl"
          style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
        >
          Every point you&apos;re missing
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #c9a55a 0%, #ddb97a 50%, #c9a55a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            costs you money.
          </span>
        </h2>

        {/* Subheadline */}
        <p
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed md:text-xl"
          style={{ color: "#d1d5db" }}
        >
          A 100-point score improvement can lower your mortgage rate by 0.5–1%,
          saving you tens of thousands of dollars over the life of a loan. Start
          your plan free today — no credit card required.
        </p>

        {/* CTA button */}
        <a
          href="#pricing"
          className="group inline-flex items-center gap-3 rounded-full px-10 py-5 text-lg font-bold transition-all duration-200 hover:scale-105"
          style={{
            background: "linear-gradient(135deg, #c9a55a 0%, #a8843c 100%)",
            color: "#07090d",
            boxShadow: "0 0 40px rgba(201,165,90,0.4), 0 8px 32px rgba(0,0,0,0.5)",
          }}
        >
          See My Free Credit Plan
          <svg
            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </a>

        {/* Trust signals */}
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-8">
          {[
            "No credit card required",
            "Zero impact on your score",
            "30-day money-back guarantee",
          ].map((label) => (
            <div key={label} className="flex items-center gap-2 text-sm" style={{ color: "#9ca3af" }}>
              <svg
                className="w-3.5 h-3.5 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#22c55e"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
              {label}
            </div>
          ))}
        </div>

        {/* Score meter illustration */}
        <div
          className="mx-auto mt-14 max-w-sm rounded-2xl p-6"
          style={{
            backgroundColor: "rgba(14,17,23,0.8)",
            border: "1px solid rgba(201,165,90,0.25)",
            backdropFilter: "blur(16px)",
          }}
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-center" style={{ color: "#6b7280" }}>
            Vera Score™ Improvement Potential
          </p>
          <div className="flex items-center gap-4">
            <div className="text-center">
              <div
                className="text-4xl font-bold"
                style={{
                  fontFamily: "var(--font-fraunces), Georgia, serif",
                  color: "#ef4444",
                }}
              >
                580
              </div>
              <div className="text-xs mt-1" style={{ color: "#6b7280" }}>Today</div>
            </div>
            <div className="flex-1">
              <div className="relative h-3 rounded-full overflow-hidden" style={{ backgroundColor: "#1e2738" }}>
                <div
                  className="absolute left-0 top-0 bottom-0 rounded-full"
                  style={{
                    width: "65%",
                    background: "linear-gradient(90deg, #ef4444, #f59e0b, #22c55e)",
                  }}
                />
              </div>
              <div className="flex justify-between mt-1.5 text-[10px]" style={{ color: "#6b7280" }}>
                <span>300</span>
                <span
                  className="font-bold text-xs"
                  style={{
                    fontFamily: "var(--font-jetbrains), monospace",
                    color: "#c9a55a",
                  }}
                >
                  +120 pts possible
                </span>
                <span>850</span>
              </div>
            </div>
            <div className="text-center">
              <div
                className="text-4xl font-bold"
                style={{
                  fontFamily: "var(--font-fraunces), Georgia, serif",
                  color: "#22c55e",
                }}
              >
                700
              </div>
              <div className="text-xs mt-1" style={{ color: "#6b7280" }}>Goal</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
