import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "For Consumers | ScoreVera — Fix Your Own Credit",
  description:
    "ScoreVera gives everyday Americans the tools to dispute inaccurate, unverifiable, or outdated items on their credit reports — without paying a credit repair company. Start free.",
};

const WINS = [
  {
    icon: "🗑",
    title: "Collections Removed",
    desc: "Unverifiable collection accounts deleted after a proper FCRA § 611 dispute.",
  },
  {
    icon: "✓",
    title: "Late Payments Corrected",
    desc: "Inaccurate late payment marks updated or removed after furnisher investigation.",
  },
  {
    icon: "🔍",
    title: "Hard Inquiries Deleted",
    desc: "Unauthorized or unrecognized hard inquiries removed under § 609.",
  },
  {
    icon: "⚡",
    title: "Charge-Offs Disputed",
    desc: "Old charge-offs challenged for accuracy, completeness, and verifiability.",
  },
  {
    icon: "📋",
    title: "Outdated Items Cleared",
    desc: "Negative items past the 7-year reporting window flagged and removed.",
  },
  {
    icon: "🏥",
    title: "Medical Debt Disputes",
    desc: "Medical collections challenged — especially after recent CFPB reporting rule changes.",
  },
];

const STEPS = [
  {
    num: "01",
    label: "Upload",
    title: "Pull your free credit report",
    desc: "Get your report from AnnualCreditReport.com — free, no credit card. Upload it to ScoreVera.",
  },
  {
    num: "02",
    label: "Identify",
    title: "ScoreVera flags the problems",
    desc: "The system scans for collections, charge-offs, late payments, inquiries, and items that may be inaccurate, outdated, or unverifiable.",
  },
  {
    num: "03",
    label: "Generate",
    title: "Get your dispute letters",
    desc: "ScoreVera generates FCRA-compliant dispute letters — § 611 disputes, § 609 file requests, debt validation letters, and goodwill letters — tailored to each item.",
  },
  {
    num: "04",
    label: "Send & Track",
    title: "Send to the bureaus, track the clock",
    desc: "Bureaus have 30 days to investigate. ScoreVera tracks your timelines and tells you exactly when to follow up or escalate.",
  },
];

export default function ForConsumersPage() {
  return (
    <>
      <Header />
      <main>

        {/* HERO */}
        <section className="page-hero" style={{ paddingTop: "100px" }}>
          <div className="wrap">
            <span className="eyebrow">For Consumers</span>
            <h1>
              You don&apos;t need a credit repair company.
              <br />
              You need the right process.
            </h1>
            <p>
              Under the Fair Credit Reporting Act, you have the right to dispute
              anything inaccurate, unverifiable, or outdated on your credit
              report — at no cost to you. ScoreVera gives you the tools to do
              it correctly.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "28px" }}>
              <a href="https://app.scorevera.com/" className="btn btn-p">
                Upload Your Credit Report
              </a>
              <a href="/learn/how-to-dispute-credit-report" className="btn btn-g">
                How Disputes Work
              </a>
            </div>
          </div>
        </section>

        {/* WHO THIS IS FOR */}
        <section className="page-section">
          <div className="wrap">
            <div style={{ maxWidth: "720px" }}>
              <span
                className="eyebrow"
                style={{ marginBottom: "16px", display: "block" }}
              >
                Who This Is For
              </span>
              <h2>If any of these are on your credit report, keep reading.</h2>
              <p>
                ScoreVera is built for people dealing with the kinds of credit
                problems that drag scores down and block approvals — the same
                problems that credit repair companies charge $79 to $149 a month
                to &quot;fix.&quot;
              </p>
              <ul>
                <li>Collection accounts — paid, unpaid, or sold to a third-party collector</li>
                <li>Charge-offs from credit cards, personal loans, or medical debt</li>
                <li>Late payments, even if the underlying account is now current</li>
                <li>Hard inquiries from applications you don&apos;t recognize</li>
                <li>Accounts that aren&apos;t yours (mixed files, identity errors)</li>
                <li>Negative items older than 7 years still appearing on your report</li>
                <li>Inaccurate balances, payment statuses, or account dates</li>
                <li>Medical debt collections — especially post-2024 CFPB rule changes</li>
              </ul>
              <p style={{ marginTop: "8px" }}>
                You do not need a lawyer. You do not need a credit repair company.
                You need the process — and ScoreVera gives you exactly that.
              </p>
            </div>
          </div>
        </section>

        {/* YOUR FCRA RIGHTS */}
        <section
          className="page-section"
          style={{ background: "var(--surface)" }}
        >
          <div className="wrap">
            <div style={{ maxWidth: "720px" }}>
              <span
                className="eyebrow"
                style={{ marginBottom: "16px", display: "block" }}
              >
                Your Legal Rights
              </span>
              <h2>What the FCRA actually lets you do.</h2>
              <p>
                The Fair Credit Reporting Act (15 U.S.C. § 1681 et seq.) is
                federal law. It gives every American consumer specific,
                enforceable rights with respect to their credit reports. Credit
                repair companies use these exact same rights — they cannot do
                anything on your behalf that you cannot do yourself for free.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: "12px",
                  marginTop: "28px",
                }}
              >
                {[
                  {
                    section: "FCRA § 611",
                    title: "Right to Dispute Inaccurate Information",
                    desc: "You can dispute any item you believe is inaccurate, incomplete, or unverifiable. The bureau must investigate within 30 days.",
                  },
                  {
                    section: "FCRA § 609",
                    title: "Right to Access Your File",
                    desc: "You can request the source information behind any entry on your report — who provided it, what they reported, and when.",
                  },
                  {
                    section: "FCRA § 623",
                    title: "Right to Dispute With Furnishers",
                    desc: "You can dispute directly with the original lender or collector who reported the information — not just the credit bureau.",
                  },
                  {
                    section: "FCRA § 605",
                    title: "Right to Remove Outdated Items",
                    desc: "Most negative items must be removed after 7 years. Bankruptcies after 10. If it&apos;s still there past the window, you can demand removal.",
                  },
                ].map((right) => (
                  <div
                    key={right.section}
                    style={{
                      background: "var(--elevated)",
                      border: "1px solid var(--border)",
                      borderRadius: "11px",
                      padding: "22px 20px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--f-m)",
                        fontSize: ".625rem",
                        letterSpacing: ".12em",
                        textTransform: "uppercase" as const,
                        color: "var(--gold)",
                        display: "block",
                        marginBottom: "10px",
                      }}
                    >
                      {right.section}
                    </span>
                    <div
                      style={{
                        fontSize: ".9375rem",
                        fontWeight: 700,
                        color: "var(--t1)",
                        marginBottom: "8px",
                      }}
                    >
                      {right.title}
                    </div>
                    <p
                      style={{
                        fontSize: ".875rem",
                        color: "var(--t2)",
                        lineHeight: 1.65,
                        margin: 0,
                      }}
                    >
                      {right.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* HOW SCOREVERA HELPS */}
        <section className="page-section">
          <div className="wrap">
            <span
              className="eyebrow"
              style={{ marginBottom: "16px", display: "block" }}
            >
              How ScoreVera Works
            </span>
            <h2 style={{ maxWidth: "560px", marginBottom: "40px" }}>
              Upload your report. Get your letters. Track the clock.
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column" as const,
              }}
            >
              {STEPS.map((step, i) => (
                <div
                  key={step.num}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "48px 1fr",
                    gap: "0 16px",
                    position: "relative" as const,
                  }}
                >
                  {/* Spine */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column" as const,
                      alignItems: "center",
                    }}
                  >
                    <div className="step-circ">
                      {step.num}
                    </div>
                    {i < STEPS.length - 1 && (
                      <div className="step-line" />
                    )}
                  </div>
                  {/* Content */}
                  <div className="step-content">
                    <span className="step-tag">{step.label}</span>
                    <div className="step-title">{step.title}</div>
                    <p className="step-desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMMON WINS */}
        <section
          className="page-section"
          style={{ background: "var(--surface)" }}
        >
          <div className="wrap">
            <span
              className="eyebrow"
              style={{ marginBottom: "16px", display: "block" }}
            >
              Common Outcomes
            </span>
            <h2 style={{ marginBottom: "8px" }}>
              What people are disputing successfully.
            </h2>
            <p
              className="body-lg"
              style={{ maxWidth: "560px", marginBottom: "36px" }}
            >
              Results depend on what&apos;s on your report and how bureaus
              respond. But these are the most common items ScoreVera users
              successfully dispute.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "12px",
              }}
            >
              {WINS.map((win) => (
                <div
                  key={win.title}
                  style={{
                    background: "var(--elevated)",
                    border: "1px solid var(--border)",
                    borderRadius: "11px",
                    padding: "22px 20px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.5rem",
                      marginBottom: "12px",
                      lineHeight: 1,
                    }}
                    aria-hidden="true"
                  >
                    {win.icon}
                  </div>
                  <div
                    style={{
                      fontSize: ".9375rem",
                      fontWeight: 700,
                      color: "var(--t1)",
                      marginBottom: "8px",
                    }}
                  >
                    {win.title}
                  </div>
                  <p
                    style={{
                      fontSize: ".875rem",
                      color: "var(--t2)",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {win.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING MENTION */}
        <section className="page-section">
          <div className="wrap">
            <div
              style={{
                maxWidth: "680px",
                background: "var(--elevated)",
                border: "1px solid var(--border)",
                borderRadius: "14px",
                padding: "36px 32px",
              }}
            >
              <span
                className="eyebrow"
                style={{ marginBottom: "16px", display: "block" }}
              >
                Pricing
              </span>
              <h2 style={{ marginBottom: "16px" }}>
                Start free. Upgrade when you&apos;re ready.
              </h2>
              <p>
                ScoreVera&apos;s free plan lets you pull your report, scan for
                issues, and see exactly what needs attention before you commit
                to anything.
              </p>
              <p>
                The full dispute system — letter generator, timeline tracker,
                follow-up engine, and escalation workflows — is{" "}
                <strong style={{ color: "var(--t1)" }}>$29/month</strong>.
                Cancel any time. No contracts. No commissions. No one else
                touching your disputes.
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap" as const,
                  gap: "10px",
                  marginTop: "24px",
                }}
              >
                <a href="https://app.scorevera.com/" className="btn btn-p">
                  Get Started Free
                </a>
                <a href="/#pricing" className="btn btn-g">
                  Compare Plans
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="page-cta">
          <div className="wrap">
            <h2>Your credit report is free. So is getting started.</h2>
            <p>
              Pull your report from AnnualCreditReport.com, upload it to
              ScoreVera, and see what&apos;s dragging your score down — in
              minutes, not months.
            </p>
            <a
              href="https://app.scorevera.com/"
              className="btn btn-p"
              style={{ fontSize: "1rem", padding: "14px 32px" }}
            >
              Upload Your Free Credit Report
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
