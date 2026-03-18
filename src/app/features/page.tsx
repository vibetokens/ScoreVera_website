import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ScoreVera Features | Credit Dispute System",
  description:
    "ScoreVera includes a credit report parser, FCRA letter engine, 30-day investigation tracker, next-best-action guidance, multi-round sequencing, escalation logic, and more.",
};

const features = [
  {
    tag: "Core",
    title: "Report Analysis",
    desc: "Upload your credit report PDF from any bureau — Equifax, Experian, or TransUnion. ScoreVera parses it automatically and identifies every negative item on the file: late payments, collections, charge-offs, hard inquiries, public records, and accounts with incorrect balances or status. Each item is categorized, dated, and evaluated for potential dispute grounds under the FCRA.",
    items: [
      "Supports PDF reports from all 3 major bureaus",
      "Identifies late payments, collections, charge-offs, and more",
      "Flags items with inaccurate dates, balances, or account status",
      "Surfaces items past the 7-year reporting window",
    ],
    accent: "var(--blue)",
    accentDim: "var(--blue-dim)",
  },
  {
    tag: "Core",
    title: "Letter Engine",
    desc: "ScoreVera generates FCRA-compliant dispute letters matched to the specific item and situation. The engine covers the full dispute playbook — not just a generic template, but the right legal strategy for each item.",
    items: [
      "§ 611 accuracy dispute — challenge inaccurate information",
      "§ 609 method of verification — demand proof the bureau can verify",
      "Debt validation letter (FDCPA) — require collectors to prove the debt",
      "Goodwill adjustment — request removal of paid negative items",
      "Escalation letter — follow up after inadequate bureau response",
      "CFPB complaint template — for unresponsive or repeat violations",
    ],
    accent: "var(--gold)",
    accentDim: "var(--gold-dim)",
  },
  {
    tag: "Core",
    title: "Timeline Tracking",
    desc: "Under FCRA § 611, bureaus have 30 days to investigate a dispute. ScoreVera tracks every dispute you open — logging the send date, calculating the bureau deadline, and alerting you before the window closes.",
    items: [
      "Per-dispute 30-day investigation countdown",
      "Follow-up reminders before deadlines",
      "Logs bureau response dates and outcomes",
      "Tracks multiple open disputes simultaneously",
    ],
    accent: "var(--cyan)",
    accentDim: "rgba(34,211,238,0.10)",
  },
  {
    tag: "Guided Plan",
    title: "Next-Best-Action Guidance",
    desc: "After the bureau responds — or fails to — ScoreVera tells you exactly what to do next. This isn't a generic FAQ. It's a decision engine based on the actual outcome of your dispute: verified, deleted, modified, or ignored.",
    items: [
      "Reads bureau response type (verified, deleted, modified)",
      "Recommends specific follow-up action for each outcome",
      "Guides escalation to furnisher if bureau won't act",
      "Triggers CFPB complaint flow when appropriate",
    ],
    accent: "var(--green)",
    accentDim: "var(--green-dim)",
  },
  {
    tag: "Guided Plan",
    title: "Multi-Round Sequencing",
    desc: "Effective credit dispute is rarely a one-shot process. ScoreVera sequences your disputes across multiple rounds, building on each bureau response to maximize the impact of every letter sent.",
    items: [
      "Plans Round 1, Round 2, and Round 3 dispute sequences",
      "Adjusts strategy based on prior bureau responses",
      "Prevents duplicate disputes that can be dismissed",
      "Prioritizes high-impact items first",
    ],
    accent: "var(--blue)",
    accentDim: "var(--blue-dim)",
  },
  {
    tag: "Guided Plan",
    title: "Escalation Logic",
    desc: "When a bureau verifies without adequate investigation, ignores your dispute, or repeatedly returns the same result without explanation, ScoreVera knows it's time to escalate. We generate the right escalation path — directly to the furnisher, through the CFPB, or via a formal demand letter.",
    items: [
      "Detects inadequate bureau responses",
      "Generates furnisher direct dispute letters",
      "Creates CFPB complaint drafts with all required detail",
      "Produces formal demand letters when violations may have occurred",
    ],
    accent: "var(--gold)",
    accentDim: "var(--gold-dim)",
  },
  {
    tag: "Operator",
    title: "Multi-Profile Management",
    desc: "The Operator plan lets you manage disputes for multiple people from a single dashboard — ideal for financial coaches, non-profit credit counselors, or anyone helping family members navigate the process.",
    items: [
      "Manage up to 10+ individual credit profiles",
      "Separate dispute timelines per profile",
      "Bulk report upload and analysis",
      "Activity log per profile for accountability",
    ],
    accent: "var(--blue)",
    accentDim: "var(--blue-dim)",
  },
  {
    tag: "Platform",
    title: "Browser-Based. No Download Required.",
    desc: "ScoreVera runs entirely in your browser. There's nothing to install, no app to update, and no desktop software to manage. Open the URL, log in, and start working. It works on Mac, Windows, iPhone, and Android.",
    items: [
      "Works on any modern browser",
      "No desktop software or app download",
      "Accessible from any device with internet access",
      "Data stays in your secure account",
    ],
    accent: "var(--green)",
    accentDim: "var(--green-dim)",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="page-hero" style={{ paddingTop: "100px" }}>
          <div className="wrap">
            <span className="eyebrow">Product</span>
            <h1>Everything you need to dispute your credit report correctly.</h1>
            <p>
              ScoreVera is a full credit dispute system — not a single letter
              generator, not a PDF checklist. Every feature is built around the
              actual FCRA dispute process from upload to resolution.
            </p>
          </div>
        </section>

        {/* FEATURES */}
        {features.map((f, i) => (
          <section
            key={f.title}
            className="page-section"
            style={{
              background: i % 2 === 1 ? "var(--surface)" : undefined,
            }}
          >
            <div className="wrap">
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "40px",
                  alignItems: "start",
                }}
                className={`feature-inner-${i}`}
              >
                <style>{`
                  @media(min-width:900px){.feature-inner-${i}{grid-template-columns:1fr 1fr !important; gap:72px !important}}
                `}</style>

                <div>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontFamily: "var(--f-m)",
                      fontSize: ".625rem",
                      letterSpacing: ".12em",
                      textTransform: "uppercase",
                      color: f.accent,
                      background: f.accentDim,
                      border: `1px solid ${f.accent}33`,
                      padding: "3px 9px",
                      borderRadius: "4px",
                      marginBottom: "14px",
                    }}
                  >
                    {f.tag}
                  </div>
                  <h2>{f.title}</h2>
                  <p>{f.desc}</p>
                </div>

                <div
                  style={{
                    background: "var(--elevated)",
                    border: "1px solid var(--border-md)",
                    borderRadius: "12px",
                    padding: "24px",
                  }}
                >
                  <span
                    className="sv-lbl"
                    style={{
                      display: "block",
                      fontFamily: "var(--f-m)",
                      fontSize: ".5625rem",
                      letterSpacing: ".12em",
                      textTransform: "uppercase",
                      color: "var(--t4)",
                      marginBottom: "16px",
                      paddingBottom: "12px",
                      borderBottom: "1px solid var(--border)",
                    }}
                  >
                    {f.title} — What&apos;s included
                  </span>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                    {f.items.map((item) => (
                      <li
                        key={item}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "10px",
                          fontSize: ".9rem",
                          color: "var(--t2)",
                          lineHeight: 1.6,
                        }}
                      >
                        <svg
                          viewBox="0 0 16 16"
                          fill="none"
                          aria-hidden="true"
                          style={{
                            width: "15px",
                            height: "15px",
                            flexShrink: 0,
                            marginTop: "2px",
                            color: f.accent,
                          }}
                        >
                          <path
                            d="M3 8l3.5 3.5L13 4.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="page-cta" style={{ background: "var(--surface)" }}>
          <div className="wrap">
            <h2>Start using ScoreVera today.</h2>
            <p>
              The free plan gives you full report analysis and your first
              dispute letter. No credit card required.
            </p>
            <div
              style={{
                display: "flex",
                gap: "12px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a
                href="https://app.scorevera.com/"
                className="btn btn-p"
                style={{ fontSize: "1rem", padding: "14px 32px" }}
              >
                Get Started Free
              </a>
              <a
                href="/how-it-works"
                className="btn btn-g"
                style={{ fontSize: "1rem", padding: "14px 32px" }}
              >
                See How It Works
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
