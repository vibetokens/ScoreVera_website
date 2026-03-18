import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Newsletter | ScoreVera",
  description:
    "Credit intel, once a week. FCRA updates, dispute strategy, and credit score tips from ScoreVera. No spam, unsubscribe anytime.",
};

const previews = [
  {
    issue: "Issue #14",
    date: "March 11, 2026",
    title: "The 5 most disputed items on credit reports — and why they keep coming back",
    description:
      "Collections, charge-offs, hard inquiries, late payments, and identity errors account for the vast majority of dispute activity. This issue breaks down why each one requires a different strategy — and why disputing them all the same way is the most common mistake.",
    tag: "Dispute Strategy",
    tagColor: "var(--blue-lo)",
    tagBg: "var(--blue-dim)",
  },
  {
    issue: "Issue #11",
    date: "February 18, 2026",
    title: "How Round 2 disputes work — and why most people do them wrong",
    description:
      "If your first dispute came back verified, you have not exhausted your options. Round 2 is different: it targets the furnisher directly, invokes your right to method-of-verification, and sets up escalation if needed. Most people either give up at Round 1 or repeat the same letter. Neither works.",
    tag: "Advanced Tactics",
    tagColor: "var(--gold)",
    tagBg: "var(--gold-dim)",
  },
  {
    issue: "Issue #8",
    date: "January 28, 2026",
    title: "What debt collectors can and cannot do under the FDCPA",
    description:
      "The Fair Debt Collection Practices Act gives you more rights than most people realize — the right to demand validation, the right to cease communication, and the right to sue for violations. This issue covers the practical limits collectors operate under and how to use those limits when you are disputing a collection account.",
    tag: "Know Your Rights",
    tagColor: "var(--green)",
    tagBg: "var(--green-dim)",
  },
];

export default function NewsletterPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero" style={{ paddingTop: "100px" }}>
          <div className="wrap">
            <span className="eyebrow">Newsletter</span>
            <h1>Credit intel, once a week.</h1>
            <p className="body-lg">
              FCRA updates, dispute strategy, and credit score tips —
              written for people who want to understand the system, not just
              hear about it. No spam. Unsubscribe anytime.
            </p>
          </div>
        </section>

        {/* Signup */}
        <section
          className="page-section"
          style={{ background: "var(--surface)" }}
        >
          <div className="wrap">
            <div
              style={{
                maxWidth: "560px",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--f-d)",
                  fontSize: "clamp(1.375rem, 3vw, 1.875rem)",
                  color: "var(--t1)",
                  letterSpacing: "-.02em",
                  lineHeight: 1.25,
                  marginBottom: "12px",
                }}
              >
                Stay current on your rights.
              </h2>
              <p
                className="body-lg"
                style={{ marginBottom: "28px", color: "var(--t2)" }}
              >
                Join readers who are actively improving their credit and
                learning the FCRA process. One email per week. Plain English.
              </p>

              <NewsletterForm />
              <p
                style={{
                  marginTop: "12px",
                  fontSize: ".8125rem",
                  color: "var(--t3)",
                }}
              >
                No spam. No selling your email. Unsubscribe with one click at
                any time.
              </p>
            </div>
          </div>
        </section>

        {/* Issue Previews */}
        <section className="page-section">
          <div className="wrap">
            <div
              style={{
                marginBottom: "40px",
              }}
            >
              <span
                className="eyebrow"
                style={{ marginBottom: "12px", display: "block" }}
              >
                Recent Issues
              </span>
              <h2
                style={{
                  fontFamily: "var(--f-d)",
                  fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)",
                  color: "var(--t1)",
                  letterSpacing: "-.02em",
                  lineHeight: 1.25,
                }}
              >
                What we&apos;ve covered lately.
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "20px",
              }}
            >
              {previews.map((issue) => (
                <div
                  key={issue.issue}
                  style={{
                    background: "var(--elevated)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    padding: "28px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "12px",
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--f-m)",
                        fontSize: ".75rem",
                        color: "var(--t3)",
                        letterSpacing: ".04em",
                      }}
                    >
                      {issue.issue} &middot; {issue.date}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--f-m)",
                        fontSize: ".6875rem",
                        fontWeight: 600,
                        letterSpacing: ".08em",
                        textTransform: "uppercase",
                        color: issue.tagColor,
                        background: issue.tagBg,
                        borderRadius: "4px",
                        padding: "2px 8px",
                      }}
                    >
                      {issue.tag}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--f-u)",
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "var(--t1)",
                      lineHeight: 1.4,
                    }}
                  >
                    {issue.title}
                  </h3>
                  <p
                    style={{
                      fontSize: ".875rem",
                      color: "var(--t2)",
                      lineHeight: 1.7,
                    }}
                  >
                    {issue.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="page-cta">
          <div className="wrap">
            <h2>Ready to dispute — not just read about it?</h2>
            <p>
              The newsletter explains the process. ScoreVera runs it.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
              <a
                href="https://app.scorevera.com/"
                className="btn btn-p"
                style={{ fontSize: "1rem", padding: "14px 32px" }}
              >
                Get Started Free
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
