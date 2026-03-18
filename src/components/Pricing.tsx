const checkIcon = (
  <svg className="pf-ok" viewBox="0 0 15 15" fill="none">
    <path d="M2.5 7.5l4 4 6-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const lockIcon = (
  <svg className="pf-ok pf-lock" viewBox="0 0 15 15" fill="none">
    <rect x="3" y="6.5" width="9" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
    <path d="M5 6.5V5a3 3 0 016 0v1.5" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

const plans = [
  {
    name: "Free",
    price: "$0",
    priceClass: "plan-price free",
    per: null,
    tag: "See what is wrong before committing.",
    featured: false,
    badge: null,
    delay: "",
    btnClass: "btn btn-g",
    btnText: "Upload Your Report",
    features: [
      { icon: checkIcon, text: "Upload your credit report", locked: false },
      { icon: checkIcon, text: "Identify negative items", locked: false },
      { icon: checkIcon, text: "Understand what needs action", locked: false },
      { icon: lockIcon, text: "Letter generation", locked: true },
    ],
  },
  {
    name: "Core System",
    price: "$29",
    priceClass: "plan-price",
    per: "/mo",
    tag: "Take action. Full structure for your disputes.",
    featured: false,
    badge: null,
    delay: "d1",
    btnClass: "btn btn-g",
    btnText: "Start Fixing Your Report",
    features: [
      { icon: checkIcon, text: "Full dispute letter engine", locked: false },
      { icon: checkIcon, text: "All core letter types", locked: false },
      { icon: checkIcon, text: "30-day timeline tracking", locked: false },
      { icon: checkIcon, text: "Export and send letters", locked: false },
      { icon: checkIcon, text: "1 profile", locked: false },
    ],
  },
  {
    name: "Guided System",
    price: "$49",
    priceClass: "plan-price",
    per: "/mo",
    tag: "Remove second-guessing. Keep the process moving.",
    featured: true,
    badge: "Most Popular",
    delay: "d2",
    btnClass: "btn btn-b",
    btnText: "Let the System Guide You",
    features: [
      { icon: checkIcon, text: "Everything in Core", locked: false },
      { icon: checkIcon, text: "Next-best-action guidance", locked: false },
      { icon: checkIcon, text: "Multi-round sequencing", locked: false },
      { icon: checkIcon, text: "Escalation logic", locked: false },
      { icon: checkIcon, text: "Mistake guardrails", locked: false },
    ],
  },
  {
    name: "Operator",
    price: "$99",
    priceClass: "plan-price",
    per: "/mo",
    tag: "Run the system at scale for yourself or others.",
    featured: false,
    badge: null,
    delay: "d3",
    btnClass: "btn btn-g",
    btnText: "Run the System",
    features: [
      { icon: checkIcon, text: "Everything in Guided", locked: false },
      { icon: checkIcon, text: "Multiple profiles", locked: false },
      { icon: checkIcon, text: "Bulk workflows", locked: false },
      { icon: checkIcon, text: "Client-level tracking", locked: false },
      { icon: checkIcon, text: "Built for repeatable use", locked: false },
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="wrap">
        <div className="sh center rv">
          <span className="eyebrow">Pricing</span>
          <h2 className="h-xl">Pick the level of control you want.</h2>
          <p className="body-lg">
            Start free. Upgrade when you want the system to do more of the thinking for you. No
            installs. No contracts. Cancel anytime.
          </p>
        </div>

        <div className="plans">
          {plans.map((plan) => (
            <div
              className={`plan rv${plan.delay ? ` ${plan.delay}` : ""}${plan.featured ? " feat" : ""}`}
              key={plan.name}
            >
              {plan.badge && (
                <div className="plan-badge">
                  <span className="pb-dot" />
                  {plan.badge}
                </div>
              )}

              <div>
                <div
                  className="plan-name"
                  style={plan.featured ? { color: "var(--blue-lo)" } : undefined}
                >
                  {plan.name}
                </div>
                <div style={{ marginTop: "10px" }}>
                  <span className={plan.priceClass}>{plan.price}</span>
                  {plan.per && <span className="plan-per">{plan.per}</span>}
                </div>
              </div>

              <p className="plan-tag">{plan.tag}</p>

              <div className={`plan-sep${plan.featured ? " blue" : ""}`} />

              <ul className="plan-feats">
                {plan.features.map((feat, i) => (
                  <li key={i}>
                    {feat.icon}
                    {feat.text}
                    {feat.locked && <span className="pf-lk">(locked)</span>}
                  </li>
                ))}
              </ul>

              <a href="https://app.scorevera.com/register" className={plan.btnClass}>
                {plan.btnText}
              </a>
            </div>
          ))}
        </div>

        <p className="pricing-note rv">
          Most people get the most value from Guided — it removes second-guessing and keeps the
          process moving.
        </p>
      </div>
    </section>
  );
}
