"use client";

import { useState } from "react";

const plans = [
  {
    name: "Free",
    price: { monthly: 0, annual: 0 },
    description: "See where you stand. No credit card required.",
    cta: "Start for Free",
    ctaHref: "#",
    highlighted: false,
    features: [
      { text: "Credit score from 1 bureau", included: true },
      { text: "Basic score breakdown (5 factors)", included: true },
      { text: "3 action items", included: true },
      { text: "All 3 bureau reports", included: false },
      { text: "Full 22-factor Vera Score™ analysis", included: false },
      { text: "Personalized action plan (unlimited)", included: false },
      { text: "Weekly score sync", included: false },
      { text: "Dispute automation", included: false },
      { text: "Score simulator", included: false },
    ],
  },
  {
    name: "Essential",
    price: { monthly: 19, annual: 14 },
    description: "Everything you need to build a serious plan.",
    cta: "Start Essential",
    ctaHref: "#",
    highlighted: false,
    badge: null,
    features: [
      { text: "Credit score from 1 bureau", included: true },
      { text: "Basic score breakdown (5 factors)", included: true },
      { text: "3 action items", included: true },
      { text: "All 3 bureau reports", included: true },
      { text: "Full 22-factor Vera Score™ analysis", included: true },
      { text: "Personalized action plan (unlimited)", included: true },
      { text: "Weekly score sync", included: false },
      { text: "Dispute automation", included: false },
      { text: "Score simulator", included: false },
    ],
  },
  {
    name: "Pro",
    price: { monthly: 39, annual: 29 },
    description: "Active tracking, disputes, and simulation tools.",
    cta: "Start Pro — Most Popular",
    ctaHref: "#",
    highlighted: true,
    badge: "Most Popular",
    features: [
      { text: "Credit score from 1 bureau", included: true },
      { text: "Basic score breakdown (5 factors)", included: true },
      { text: "3 action items", included: true },
      { text: "All 3 bureau reports", included: true },
      { text: "Full 22-factor Vera Score™ analysis", included: true },
      { text: "Personalized action plan (unlimited)", included: true },
      { text: "Weekly score sync", included: true },
      { text: "Dispute automation", included: true },
      { text: "Score simulator", included: true },
    ],
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="section-pad px-6 md:px-8" id="pricing">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div
            className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#c9a55a" }}
          >
            Pricing
          </div>
          <h2
            className="mb-4 text-4xl font-bold md:text-5xl"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Simple, transparent pricing.
            <br />
            <span style={{ color: "#c9a55a" }}>Cancel anytime.</span>
          </h2>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 mt-6">
            <span
              className="text-sm font-medium"
              style={{ color: annual ? "#6b7280" : "#f9fafb" }}
            >
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative h-7 w-14 rounded-full transition-colors focus:outline-none"
              style={{
                backgroundColor: annual ? "#c9a55a" : "#1e2738",
              }}
              aria-label="Toggle annual billing"
            >
              <span
                className="absolute top-1 left-1 h-5 w-5 rounded-full bg-white transition-transform"
                style={{ transform: annual ? "translateX(28px)" : "translateX(0)" }}
              />
            </button>
            <span
              className="text-sm font-medium"
              style={{ color: annual ? "#f9fafb" : "#6b7280" }}
            >
              Annual{" "}
              <span
                className="ml-1 rounded-full px-2 py-0.5 text-xs font-semibold"
                style={{ backgroundColor: "rgba(201,165,90,0.2)", color: "#c9a55a" }}
              >
                Save 25%
              </span>
            </span>
          </div>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative flex flex-col rounded-2xl p-8 transition-all"
              style={{
                backgroundColor: plan.highlighted ? "#151b25" : "#0e1117",
                border: plan.highlighted
                  ? "1px solid rgba(201,165,90,0.4)"
                  : "1px solid #1e2738",
                boxShadow: plan.highlighted
                  ? "0 0 50px rgba(201,165,90,0.08)"
                  : "none",
              }}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold"
                  style={{
                    background: "linear-gradient(135deg, #c9a55a 0%, #a8843c 100%)",
                    color: "#07090d",
                  }}
                >
                  {plan.badge}
                </div>
              )}

              {/* Plan name */}
              <div
                className="mb-1 text-sm font-semibold uppercase tracking-widest"
                style={{ color: plan.highlighted ? "#c9a55a" : "#6b7280" }}
              >
                {plan.name}
              </div>

              {/* Price */}
              <div className="mb-2 flex items-end gap-1">
                <span
                  className="text-5xl font-bold"
                  style={{
                    fontFamily: "var(--font-fraunces), Georgia, serif",
                    color: "#f9fafb",
                  }}
                >
                  ${annual ? plan.price.annual : plan.price.monthly}
                </span>
                {(plan.price.monthly > 0) && (
                  <span className="mb-2 text-sm" style={{ color: "#6b7280" }}>
                    /mo
                  </span>
                )}
              </div>

              <p className="mb-7 text-sm leading-relaxed" style={{ color: "#9ca3af" }}>
                {plan.description}
              </p>

              {/* CTA */}
              <a
                href={plan.ctaHref}
                className="mb-8 flex items-center justify-center rounded-full py-3 text-sm font-bold transition-all hover:scale-105"
                style={
                  plan.highlighted
                    ? {
                        background: "linear-gradient(135deg, #c9a55a 0%, #a8843c 100%)",
                        color: "#07090d",
                        boxShadow: "0 0 20px rgba(201,165,90,0.3)",
                      }
                    : {
                        backgroundColor: "#1c2433",
                        color: "#d1d5db",
                        border: "1px solid #1e2738",
                      }
                }
              >
                {plan.cta}
              </a>

              {/* Features */}
              <ul className="flex-1 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    {feature.included ? (
                      <svg
                        className="w-4 h-4 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke={plan.highlighted ? "#c9a55a" : "#22c55e"}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg
                        className="w-4 h-4 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#374151"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    )}
                    <span
                      className="text-sm"
                      style={{ color: feature.included ? "#d1d5db" : "#374151" }}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="mt-10 flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-center">
          <div className="flex items-center gap-2 text-sm" style={{ color: "#9ca3af" }}>
            <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="#22c55e">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            30-day money-back guarantee
          </div>
          <div className="hidden sm:block h-4 w-px" style={{ backgroundColor: "#1e2738" }} />
          <div className="flex items-center gap-2 text-sm" style={{ color: "#9ca3af" }}>
            <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="#22c55e">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            Cancel anytime, no penalty
          </div>
          <div className="hidden sm:block h-4 w-px" style={{ backgroundColor: "#1e2738" }} />
          <div className="flex items-center gap-2 text-sm" style={{ color: "#9ca3af" }}>
            <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="#22c55e">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            No impact on your credit score to sign up
          </div>
        </div>
      </div>
    </section>
  );
}
