"use client";

import { trackEvent } from "@/lib/analytics";

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
    tag: "See exactly what is wrong before you commit.",
    featured: false,
    badge: null,
    delay: "",
    btnClass: "btn btn-g",
    btnText: "Analyze My Report",
    features: [
      { icon: checkIcon, text: "Upload your credit report", locked: false },
      { icon: checkIcon, text: "Identify all negative items", locked: false },
      { icon: checkIcon, text: "Understand what needs action", locked: false },
      { icon: lockIcon, text: "Dispute letter generation", locked: true },
      { icon: lockIcon, text: "30-day investigation tracking", locked: true },
    ],
  },
  {
    name: "Pro",
    price: "$29",
    priceClass: "plan-price",
    per: "/mo",
    tag: "Everything you need to dispute, track, and win.",
    featured: true,
    badge: "Full Access",
    delay: "d1",
    btnClass: "btn btn-b",
    btnText: "Start Fixing My Report",
    features: [
      { icon: checkIcon, text: "Unlimited dispute letters", locked: false },
      { icon: checkIcon, text: "All letter types — all 3 bureaus", locked: false },
      { icon: checkIcon, text: "30-day FCRA investigation tracking", locked: false },
      { icon: checkIcon, text: "Round 2 escalation guidance", locked: false },
      { icon: checkIcon, text: "Export & mail-ready letters", locked: false },
      { icon: checkIcon, text: "Cancel anytime, no contract", locked: false },
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="wrap">
        <div className="sh center rv">
          <span className="eyebrow">Pricing</span>
          <h2 className="h-xl">Simple. One plan. No surprises.</h2>
          <p className="body-lg">
            Start free to see what is on your report. Upgrade to $29/mo when you are ready to take
            action. Cancel anytime.
          </p>
        </div>

        <div className="plans plans-duo">
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

              <a
                href="https://app.scorevera.com/"
                className={plan.btnClass}
                onClick={() => trackEvent("cta_click", { location: `pricing_${plan.name.toLowerCase()}`, text: plan.btnText })}
              >
                {plan.btnText}
              </a>
            </div>
          ))}
        </div>

        <p className="pricing-note rv">
          No install. No credit card required to analyze. Upgrade in seconds when you are ready to
          fight back.
        </p>
      </div>
    </section>
  );
}
