"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Will ScoreVera hurt my credit score?",
    a: "No. ScoreVera only uses soft inquiries to pull your credit report. Soft pulls have zero impact on your score. Hard inquiries (which do affect your score) only happen when a lender pulls your credit for a loan or credit card application — not when you check it yourself.",
  },
  {
    q: "How is ScoreVera different from Credit Karma or Credit Sesame?",
    a: "Credit Karma shows you your score and serves you targeted credit card offers. ScoreVera is a credit improvement tool — we analyze your report across 22 factors, generate a personalized action plan ranked by impact, and track your progress every week. Our goal is to raise your score, not monetize it.",
  },
  {
    q: "How long until I see my score go up?",
    a: "Quick wins like paying down revolving balances typically reflect within one billing cycle (30-45 days). Our users see an average of 47 points in their first 90 days. Some factors — like resolving collection accounts or building credit age — take longer, but we give you a clear timeline for each action.",
  },
  {
    q: "What if I have bankruptcies or serious negative marks?",
    a: "ScoreVera is designed for all credit situations, including serious negatives. Bankruptcies and charge-offs age off your report after 7-10 years, but there's still a lot you can do in the meantime. We'll focus on the items that can improve now and monitor the others so you know exactly when they'll fall off.",
  },
  {
    q: "Is my data secure? Do you sell it?",
    a: "We use 256-bit AES encryption for all stored data and TLS 1.3 for all data in transit. We connect to bureaus via read-only OAuth — meaning we cannot move funds, open accounts, or modify anything on your credit file. We never sell your data to third parties. Ever. You can request full deletion of your account and all associated data at any time.",
  },
  {
    q: "Do I need all three bureau scores to use ScoreVera?",
    a: "No — you can start on the Free plan with a single bureau. The Pro plan connects all three because lenders often check multiple bureaus, and there can be significant differences between them. We'll show you where each bureau diverges and which to prioritize.",
  },
  {
    q: "What exactly is the Vera Score™?",
    a: "The Vera Score™ is ScoreVera's proprietary credit health index. It analyzes your credit profile across 22 factors — more granular than a standard FICO® score — and scores each one from 0–100. Unlike your FICO® score (which is a single number), the Vera Score™ shows you exactly which areas are dragging you down and by how much.",
  },
  {
    q: "Can ScoreVera help me dispute errors on my credit report?",
    a: "Yes. Dispute automation is included in the Pro plan. We identify potentially incorrect items — like accounts you don't recognize, incorrect late payment dates, or paid collections still showing as open — and file bureau disputes on your behalf. You'll be notified when disputes are resolved.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      className="section-pad px-6 md:px-8"
      id="faq"
      style={{
        backgroundColor: "#0e1117",
        borderTop: "1px solid #1e2738",
      }}
    >
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-14 text-center">
          <div
            className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#c9a55a" }}
          >
            FAQ
          </div>
          <h2
            className="text-4xl font-bold md:text-5xl"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Questions we get
            <br />
            <span style={{ color: "#c9a55a" }}>every day.</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden"
              style={{ border: "1px solid #1e2738" }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors"
                style={{
                  backgroundColor: open === i ? "#151b25" : "#0e1117",
                }}
              >
                <span
                  className="text-base font-semibold"
                  style={{
                    color: open === i ? "#f9fafb" : "#d1d5db",
                    fontFamily: "var(--font-fraunces), Georgia, serif",
                  }}
                >
                  {faq.q}
                </span>
                <span
                  className="shrink-0 flex h-6 w-6 items-center justify-center rounded-full transition-all"
                  style={{
                    backgroundColor: open === i ? "rgba(201,165,90,0.2)" : "transparent",
                    border: `1px solid ${open === i ? "rgba(201,165,90,0.4)" : "#1e2738"}`,
                  }}
                >
                  <svg
                    className="w-3 h-3 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke={open === i ? "#c9a55a" : "#6b7280"}
                    style={{ transform: open === i ? "rotate(180deg)" : "rotate(0deg)" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              {open === i && (
                <div
                  className="px-6 pb-5"
                  style={{ backgroundColor: "#151b25" }}
                >
                  <p className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact nudge */}
        <div className="mt-10 text-center">
          <p className="text-sm" style={{ color: "#6b7280" }}>
            Still have questions?{" "}
            <a
              href="mailto:hello@scorevera.com"
              className="font-semibold transition-colors hover:text-white"
              style={{ color: "#c9a55a" }}
            >
              Email our team →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
