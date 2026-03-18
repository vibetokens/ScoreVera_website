import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How ScoreVera Works | Step-by-Step Credit Dispute System",
  description:
    "ScoreVera walks you through every step of the FCRA dispute process — from uploading your credit report to tracking 30-day investigation windows and escalating when needed.",
};

const steps = [
  {
    n: "01",
    tag: "Upload",
    title: "Upload your credit report",
    desc: "Pull your credit report from AnnualCreditReport.com or directly from Equifax, Experian, or TransUnion. Upload the PDF to ScoreVera. We support reports from all three major bureaus.",
    vis: [
      "Equifax_Report_2025.pdf",
      "Experian_Report_2025.pdf",
      "TransUnion_Report_2025.pdf",
    ],
  },
  {
    n: "02",
    tag: "Analysis",
    title: "ScoreVera identifies negative items",
    desc: "Our parser scans your report and flags every negative item — late payments, collections, charge-offs, hard inquiries, public records, and more. Each item is categorized by type and potential disputability under FCRA.",
    vis: [
      "Late payment — Capital One (2022-09) — Potentially inaccurate",
      "Collection — Midland Credit — Verify validity",
      "Charge-off — Bank of America — Dispute grounds found",
    ],
  },
  {
    n: "03",
    tag: "Letter Engine",
    title: "Generate the right dispute letter",
    desc: "ScoreVera selects the correct legal strategy for each item and generates an FCRA-compliant letter. Choose from § 611 dispute (accuracy), § 609 method of verification, debt validation, goodwill adjustment, or escalation letters. Every letter is customized to your specific situation.",
    vis: [
      "§ 611 — Accuracy Dispute",
      "§ 609 — Method of Verification",
      "Debt Validation (FDCPA)",
      "Goodwill Adjustment",
      "CFPB Escalation",
    ],
  },
  {
    n: "04",
    tag: "Sending",
    title: "Send to the bureau — we tell you exactly how",
    desc: "ScoreVera gives you the exact mailing address, recommended delivery method (certified mail vs. online portal), and what to include in the envelope. We do not submit letters for you — you stay in control and you keep the paper trail.",
    vis: [
      "Send via: Certified Mail (USPS)",
      "Address: Equifax Dispute Dept.",
      "Include: Copy of ID + proof of address",
      "Keep: Tracking number + signed receipt",
    ],
  },
  {
    n: "05",
    tag: "Tracking",
    title: "Track your 30-day investigation window",
    desc: "Under FCRA § 611, bureaus have 30 days to investigate a dispute. ScoreVera starts the clock the moment you log your send date. You get a clear countdown, and we remind you before the window closes so you know exactly when to follow up.",
    vis: [
      "Dispute sent: March 1",
      "Bureau deadline: March 31",
      "Days remaining: 18",
      "Status: Under investigation",
    ],
  },
  {
    n: "06",
    tag: "Follow-Up",
    title: "Follow up or escalate if needed",
    desc: "If the bureau doesn't respond in time, verifies without adequate investigation, or returns an unsatisfactory result, ScoreVera tells you exactly what to do next. That might mean a second dispute letter, a direct dispute to the furnisher, a CFPB complaint, or a demand letter — we generate all of them.",
    vis: [
      "Bureau response: Verified — no change",
      "Next action: Furnisher direct dispute",
      "Or: File CFPB complaint",
      "Or: Escalation letter to bureau",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="page-hero" style={{ paddingTop: "100px" }}>
          <div className="wrap">
            <span className="eyebrow">The Process</span>
            <h1>
              Here&apos;s exactly what happens when you use ScoreVera.
            </h1>
            <p>
              Six clear steps. No guesswork. No waiting for someone else to
              tell you what&apos;s happening with your credit report. You own
              the process from start to finish.
            </p>
          </div>
        </section>

        {/* STEPS */}
        <section className="page-section">
          <div className="wrap">
            <div className="steps">
              {steps.map((step) => (
                <div className="step" key={step.n}>
                  <div className="step-spine">
                    <div className="step-circ">{step.n}</div>
                    <div className="step-line" />
                  </div>
                  <div className="step-content">
                    <span className="step-tag">{step.tag}</span>
                    <div className="step-title">{step.title}</div>
                    <p className="step-desc">{step.desc}</p>
                  </div>
                  <div className="step-vis">
                    <div className="sv-in">
                      <span className="sv-lbl">
                        {step.tag} — ScoreVera Output
                      </span>
                      {step.vis.map((line) => (
                        <span key={line} style={{ display: "block", color: "var(--t2)", marginBottom: "4px" }}>
                          {line}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT SCOREVERA DOES NOT DO */}
        <section
          className="page-section"
          style={{ background: "var(--surface)" }}
        >
          <div className="wrap">
            <div style={{ maxWidth: "680px" }}>
              <span className="eyebrow" style={{ marginBottom: "16px", display: "block" }}>
                Important Distinction
              </span>
              <h2>What ScoreVera does NOT do</h2>
              <p>
                ScoreVera is software, not a service. There are three things we
                will never do — and you should be skeptical of any company that
                claims otherwise.
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  marginTop: "24px",
                }}
              >
                {[
                  {
                    title: "We do not submit disputes for you",
                    desc: "You write the letter. You mail the letter. You own the paper trail. This matters legally — and it keeps you in control of your own credit file.",
                  },
                  {
                    title: "We do not guarantee results",
                    desc: "No one can legally guarantee a specific score increase or item removal. Results depend on the content of your report, bureau responses, and the accuracy of the disputed information. Anyone who promises otherwise is lying.",
                  },
                  {
                    title: "We do not work like a credit repair company",
                    desc: "Credit repair companies charge monthly fees and act as intermediaries. ScoreVera is a tool. You use it, you run the process, you see exactly what's happening at every step. There is no middleman taking your money.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="compare-card"
                    style={{ borderColor: "rgba(239,68,68,.12)" }}
                  >
                    <div
                      style={{
                        fontSize: ".9375rem",
                        fontWeight: 700,
                        color: "var(--t1)",
                        marginBottom: "8px",
                      }}
                    >
                      {item.title}
                    </div>
                    <p
                      style={{
                        fontSize: ".875rem",
                        color: "var(--t2)",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="page-cta">
          <div className="wrap">
            <h2>See the process for yourself.</h2>
            <p>
              Start free. Upload your report, get your analysis, and generate
              your first dispute letter without paying anything.
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
                Start Free
              </a>
              <a
                href="/features"
                className="btn btn-g"
                style={{ fontSize: "1rem", padding: "14px 32px" }}
              >
                See All Features
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
