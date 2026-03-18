const objections = [
  {
    objection: "\"I've tried credit repair before — it didn't work.\"",
    rebuttal:
      "Most credit repair services send generic dispute letters. ScoreVera analyzes your specific profile and gives you a ranked action plan — only tackling disputes where they'll actually succeed, and pairing them with behavioral changes that compound over time.",
    icon: "🔄",
  },
  {
    objection: "\"Isn't this just what Credit Karma already does?\"",
    rebuttal:
      "Credit Karma shows you your score and offers you credit cards. ScoreVera tells you exactly why your score is where it is and gives you a prioritized list of concrete actions, modeled against your specific file — not generic advice.",
    icon: "📊",
  },
  {
    objection: "\"What if my credit is already destroyed?\"",
    rebuttal:
      "The lower your starting score, the more opportunity there is to improve it. Scores below 580 often have high-impact, low-effort fixes — like resolving a single collection account or reducing one card's balance — that can move the needle 30-50 points fast.",
    icon: "💡",
  },
  {
    objection: "\"I don't trust putting my financial data anywhere online.\"",
    rebuttal:
      "We use the same 256-bit AES encryption as your bank. We connect to bureaus via read-only OAuth — meaning we can't open accounts, move funds, or alter anything. Your data is never sold. You can delete your account and all data instantly.",
    icon: "🔒",
  },
  {
    objection: "\"This sounds like it'll just hurt my score to check it.\"",
    rebuttal:
      "Checking your own credit is a soft inquiry — it has zero impact on your score. Only hard inquiries (when a lender pulls your credit for a new application) affect your score. ScoreVera only performs soft pulls.",
    icon: "✅",
  },
  {
    objection: "\"How long does it actually take to see results?\"",
    rebuttal:
      "Quick wins like reducing utilization can reflect on your score within 30-45 days (one billing cycle). Our users see an average of 47 points in 90 days. Negative items like collections take 3-6 months to resolve, but we track every step.",
    icon: "⏱️",
  },
];

export default function Objections() {
  return (
    <section
      className="section-pad px-6 md:px-8"
      id="objections"
      style={{ backgroundColor: "#07090d" }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div
            className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#c9a55a" }}
          >
            We&apos;ve Heard Every Excuse
          </div>
          <h2
            className="text-4xl font-bold md:text-5xl"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Let&apos;s address what&apos;s
            <br />
            <span style={{ color: "#c9a55a" }}>holding you back.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {objections.map((item, i) => (
            <article
              key={i}
              className="rounded-2xl p-7 transition-all hover:-translate-y-0.5"
              style={{
                backgroundColor: "#0e1117",
                border: "1px solid #1e2738",
              }}
            >
              <div className="mb-4 text-2xl">{item.icon}</div>
              <p
                className="mb-4 text-base font-semibold leading-snug"
                style={{
                  color: "#d1d5db",
                  fontFamily: "var(--font-fraunces), Georgia, serif",
                }}
              >
                {item.objection}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                {item.rebuttal}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
