import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pricing | ScoreVera",
  description:
    "ScoreVera plans start at $0. Free, Core System ($29/mo), Guided System ($49/mo), and Operator ($99/mo). No contracts. Cancel anytime.",
};

const checkIcon = (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    style={{
      width: "16px",
      height: "16px",
      flexShrink: 0,
      color: "var(--green)",
    }}
  >
    <path
      d="M2.5 7.5l4 4 6-7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const lockIcon = (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    style={{
      width: "16px",
      height: "16px",
      flexShrink: 0,
      color: "var(--t3)",
    }}
  >
    <rect
      x="3"
      y="6.5"
      width="9"
      height="7"
      rx="1.5"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <path
      d="M5 6.5V5a3 3 0 016 0v1.5"
      stroke="currentColor"
      strokeWidth="1.2"
    />
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
    btnClass: "btn btn-g",
    btnText: "Upload Your Report",
    features: [
      { icon: checkIcon, text: "Upload your credit report", locked: false },
      { icon: checkIcon, text: "Identify negative items", locked: false },
      {
        icon: checkIcon,
        text: "Understand what needs action",
        locked: false,
      },
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

const billingFaqs = [
  {
    q: "Is there a contract or commitment?",
    a: "No. All plans are month-to-month. You can cancel anytime from your account settings — no phone calls, no cancellation fees, no runaround.",
  },
  {
    q: "Can I switch plans after signing up?",
    a: "Yes. You can upgrade or downgrade at any time. Upgrades take effect immediately. Downgrades apply at the start of your next billing cycle.",
  },
  {
    q: "Do you offer refunds?",
    a: "We offer a 7-day refund on your first month if ScoreVera is not what you expected. After that, billing is non-refundable but you can cancel to stop future charges. Email support@scorevera.com for refund requests.",
  },
  {
    q: "What happens to my data if I cancel?",
    a: "Your account remains accessible through the end of your paid period. After that, you can export your letters and data before we archive your account. You can also request full deletion at any time from account settings.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero" style={{ paddingTop: "100px" }}>
          <div className="wrap">
            <span className="eyebrow">Pricing</span>
            <h1>Pick the level of control you want.</h1>
            <p className="body-lg">
              Start free. Upgrade when you want the system to do more of the
              thinking for you. No installs. No contracts. Cancel anytime.
            </p>
          </div>
        </section>

        <section className="page-section">
          <div className="wrap">
            <div className="plans">
              {plans.map((plan) => (
                <div
                  className={`plan${plan.featured ? " feat" : ""}`}
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
                      style={
                        plan.featured
                          ? { color: "var(--blue-lo)" }
                          : undefined
                      }
                    >
                      {plan.name}
                    </div>
                    <div style={{ marginTop: "10px" }}>
                      <span className={plan.priceClass}>{plan.price}</span>
                      {plan.per && (
                        <span className="plan-per">{plan.per}</span>
                      )}
                    </div>
                  </div>

                  <p className="plan-tag">{plan.tag}</p>

                  <div
                    className={`plan-sep${plan.featured ? " blue" : ""}`}
                  />

                  <ul className="plan-feats">
                    {plan.features.map((feat, i) => (
                      <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                        {feat.icon}
                        <span style={feat.locked ? { color: "var(--t3)" } : undefined}>
                          {feat.text}
                          {feat.locked && (
                            <span
                              style={{
                                marginLeft: "6px",
                                fontSize: ".75rem",
                                color: "var(--t3)",
                              }}
                            >
                              (locked)
                            </span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://app.scorevera.com/"
                    className={plan.btnClass}
                    style={{ marginTop: "auto" }}
                  >
                    {plan.btnText}
                  </a>
                </div>
              ))}
            </div>

            <p
              style={{
                textAlign: "center",
                color: "var(--t2)",
                fontSize: ".9375rem",
                marginTop: "32px",
              }}
            >
              Most people get the most value from Guided — it removes
              second-guessing and keeps the process moving.
            </p>
          </div>
        </section>

        {/* Billing FAQ */}
        <section
          className="page-section"
          style={{ background: "var(--surface)" }}
        >
          <div className="wrap">
            <div style={{ maxWidth: "680px" }}>
              <span
                className="eyebrow"
                style={{ marginBottom: "16px", display: "block" }}
              >
                Billing Questions
              </span>
              <h2
                style={{
                  fontFamily: "var(--f-d)",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  color: "var(--t1)",
                  letterSpacing: "-.025em",
                  lineHeight: 1.2,
                  marginBottom: "40px",
                }}
              >
                Simple billing. No surprises.
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0",
                }}
              >
                {billingFaqs.map((faq, i) => (
                  <div
                    key={i}
                    style={{
                      borderBottom: "1px solid var(--border)",
                      padding: "24px 0",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--f-u)",
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "var(--t1)",
                        marginBottom: "10px",
                      }}
                    >
                      {faq.q}
                    </h3>
                    <p className="body-lg">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="page-cta">
          <div className="wrap">
            <h2>Start with the free plan — no credit card required.</h2>
            <p>
              Upload your credit report, see what is on it, and decide if
              ScoreVera is right for you. Upgrade when you are ready to act.
            </p>
            <a
              href="https://app.scorevera.com/"
              className="btn btn-p"
              style={{ fontSize: "1rem", padding: "14px 32px" }}
            >
              Get Started Free
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
