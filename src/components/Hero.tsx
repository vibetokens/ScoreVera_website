export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-24 pb-20 md:px-8 md:pt-32 md:pb-28">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div
          className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #c9a55a 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Eyebrow */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
          style={{ borderColor: "rgba(201,165,90,0.3)", backgroundColor: "rgba(201,165,90,0.08)" }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full animate-pulse"
            style={{ backgroundColor: "#c9a55a" }}
          />
          <span
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#c9a55a" }}
          >
            Credit Intelligence Platform
          </span>
        </div>

        {/* Headline */}
        <h1
          className="mb-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl"
          style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
        >
          Your credit score
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #c9a55a 0%, #ddb97a 50%, #c9a55a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            is a solvable problem.
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed md:text-xl"
          style={{ color: "#d1d5db" }}
        >
          ScoreVera reads your full credit report from all three bureaus, finds
          every factor holding you back, and hands you a precise step-by-step
          plan to raise your score — in plain English.
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#pricing"
            className="group flex items-center gap-2 rounded-full px-8 py-4 text-base font-bold transition-all duration-200 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #c9a55a 0%, #a8843c 100%)",
              color: "#07090d",
              boxShadow: "0 0 30px rgba(201,165,90,0.35), 0 4px 16px rgba(0,0,0,0.4)",
            }}
          >
            See My Credit Plan
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#how-it-works"
            className="flex items-center gap-2 rounded-full border px-8 py-4 text-base font-semibold transition-all duration-200 hover:bg-white/5"
            style={{ borderColor: "#1e2738", color: "#d1d5db" }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Watch How It Works
          </a>
        </div>

        {/* Social proof bar */}
        <div className="mt-14 flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-10">
          <div className="flex flex-col items-center sm:items-start">
            <span
              className="text-3xl font-bold"
              style={{
                fontFamily: "var(--font-fraunces), Georgia, serif",
                color: "#c9a55a",
              }}
            >
              47 pts
            </span>
            <span className="text-sm" style={{ color: "#6b7280" }}>
              avg score increase in 90 days
            </span>
          </div>
          <div className="hidden sm:block h-10 w-px" style={{ backgroundColor: "#1e2738" }} />
          <div className="flex flex-col items-center sm:items-start">
            <span
              className="text-3xl font-bold"
              style={{
                fontFamily: "var(--font-fraunces), Georgia, serif",
                color: "#c9a55a",
              }}
            >
              12,400+
            </span>
            <span className="text-sm" style={{ color: "#6b7280" }}>
              credit plans generated
            </span>
          </div>
          <div className="hidden sm:block h-10 w-px" style={{ backgroundColor: "#1e2738" }} />
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-1 mb-0.5">
              {[1,2,3,4,5].map((i) => (
                <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#c9a55a">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm" style={{ color: "#6b7280" }}>
              4.9/5 from 800+ reviews
            </span>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: "linear-gradient(to bottom, transparent, #07090d)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
