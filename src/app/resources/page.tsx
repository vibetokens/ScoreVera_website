import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Resources | ScoreVera",
  description:
    "Free credit dispute resources from ScoreVera — guides, letter templates, FCRA rights, credit report error explainers, and links to official sources.",
};

const featuredArticles = [
  {
    title: "How to Read Your Credit Report: A Plain-English Guide",
    href: "/learn/how-to-read-your-credit-report",
  },
  {
    title: "What Is the Fair Credit Reporting Act and How Does It Protect You?",
    href: "/learn/what-is-the-fcra",
  },
  {
    title: "The 7 Most Common Credit Report Errors (and How to Dispute Them)",
    href: "/learn/common-credit-report-errors",
  },
  {
    title: "Debt Validation vs. Credit Dispute: What Is the Difference?",
    href: "/learn/debt-validation-vs-dispute",
  },
  {
    title: "How the 30-Day Investigation Window Works",
    href: "/learn/30-day-dispute-window",
  },
  {
    title: "Round 2 Disputes: What to Do When a Bureau Says Verified",
    href: "/learn/round-2-disputes",
  },
];

const internalResources = [
  {
    label: "Free Guides",
    href: "/learn",
    description:
      "Deep-dive articles on the FCRA, dispute strategy, letter writing, and credit score mechanics.",
    eyebrow: "Education",
  },
  {
    label: "Letter Library",
    href: "/letter-library",
    description:
      "Every letter type in the ScoreVera system: § 611 disputes, § 609 requests, debt validation, goodwill, escalation, and CFPB complaints.",
    eyebrow: "Templates",
  },
  {
    label: "Your FCRA Rights",
    href: "/fcra-rights",
    description:
      "A plain-English breakdown of your rights under the Fair Credit Reporting Act — what you can dispute, when, and what the bureaus are required to do.",
    eyebrow: "Know Your Rights",
  },
  {
    label: "Dispute Letters",
    href: "/dispute-letters",
    description:
      "How to write an effective credit dispute letter — structure, legal citations, and common mistakes that get letters ignored.",
    eyebrow: "How-To",
  },
  {
    label: "Credit Report Errors",
    href: "/credit-report-errors",
    description:
      "The most common errors on credit reports, why they happen, and which ones are worth disputing.",
    eyebrow: "Reference",
  },
  {
    label: "FAQ",
    href: "/faq",
    description:
      "Straight answers to the most common questions about ScoreVera and the dispute process.",
    eyebrow: "Support",
  },
];

const externalResources = [
  {
    label: "AnnualCreditReport.com",
    href: "https://www.annualcreditreport.com/",
    description:
      "The only federally authorized source for free credit reports from Equifax, Experian, and TransUnion. You are entitled to one free report per bureau per year (and more frequently under recent FTC rules).",
    tag: "Official",
  },
  {
    label: "Consumer Financial Protection Bureau (CFPB)",
    href: "https://www.consumerfinance.gov/",
    description:
      "File complaints against credit bureaus and debt collectors. The CFPB also publishes guides on your credit rights, debt collection rules, and how to dispute errors.",
    tag: "Federal Agency",
  },
  {
    label: "FTC: Credit, Loans, and Debt",
    href: "https://consumer.ftc.gov/credit-loans-debt",
    description:
      "The Federal Trade Commission's consumer credit hub — guides on credit reports, credit repair, debt collection, and your rights under the FDCPA and FCRA.",
    tag: "Federal Agency",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero" style={{ paddingTop: "100px" }}>
          <div className="wrap">
            <span className="eyebrow">Resources</span>
            <h1>Everything you need to run your own dispute process.</h1>
            <p className="body-lg">
              Guides, templates, rights explainers, and official sources —
              all in one place.
            </p>
          </div>
        </section>

        {/* Internal Resources Grid */}
        <section className="page-section">
          <div className="wrap">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "16px",
                marginBottom: "72px",
              }}
            >
              {internalResources.map((r) => (
                <a
                  key={r.href}
                  href={r.href}
                  style={{
                    background: "var(--elevated)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    padding: "28px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    transition: "border-color .15s",
                    textDecoration: "none",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--f-m)",
                      fontSize: ".6875rem",
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      color: "var(--blue-lo)",
                    }}
                  >
                    {r.eyebrow}
                  </span>
                  <h2
                    style={{
                      fontFamily: "var(--f-u)",
                      fontSize: "1.0625rem",
                      fontWeight: 600,
                      color: "var(--t1)",
                      lineHeight: 1.35,
                    }}
                  >
                    {r.label}
                  </h2>
                  <p
                    style={{
                      fontSize: ".875rem",
                      color: "var(--t2)",
                      lineHeight: 1.65,
                    }}
                  >
                    {r.description}
                  </p>
                  <span
                    style={{
                      fontSize: ".8125rem",
                      color: "var(--gold)",
                      fontWeight: 500,
                      marginTop: "auto",
                      paddingTop: "8px",
                    }}
                  >
                    Browse &rarr;
                  </span>
                </a>
              ))}
            </div>

            {/* Featured Articles */}
            <div style={{ marginBottom: "72px" }}>
              <span
                className="eyebrow"
                style={{ marginBottom: "20px", display: "block" }}
              >
                Featured Articles
              </span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0",
                  maxWidth: "680px",
                }}
              >
                {featuredArticles.map((article) => (
                  <a
                    key={article.href}
                    href={article.href}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "16px",
                      padding: "18px 0",
                      borderBottom: "1px solid var(--border)",
                      color: "var(--t1)",
                      fontSize: ".9375rem",
                      lineHeight: 1.45,
                      textDecoration: "none",
                      transition: "color .15s",
                    }}
                  >
                    <span>{article.title}</span>
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      style={{
                        width: "14px",
                        height: "14px",
                        flexShrink: 0,
                        color: "var(--t3)",
                      }}
                    >
                      <path
                        d="M3 8h10M8 3l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* External Resources */}
            <div>
              <span
                className="eyebrow"
                style={{ marginBottom: "20px", display: "block" }}
              >
                Official External Sources
              </span>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: "16px",
                }}
              >
                {externalResources.map((r) => (
                  <a
                    key={r.href}
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      borderRadius: "10px",
                      padding: "24px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      textDecoration: "none",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "8px",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--f-m)",
                          fontSize: ".6875rem",
                          letterSpacing: ".08em",
                          textTransform: "uppercase",
                          color: "var(--t3)",
                          background: "var(--elevated)",
                          border: "1px solid var(--border)",
                          borderRadius: "4px",
                          padding: "2px 8px",
                        }}
                      >
                        {r.tag}
                      </span>
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        style={{
                          width: "12px",
                          height: "12px",
                          flexShrink: 0,
                          color: "var(--t3)",
                        }}
                      >
                        <path
                          d="M3 13L13 3M7 3h6v6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--f-u)",
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "var(--t1)",
                        lineHeight: 1.35,
                      }}
                    >
                      {r.label}
                    </h3>
                    <p
                      style={{
                        fontSize: ".875rem",
                        color: "var(--t2)",
                        lineHeight: 1.65,
                      }}
                    >
                      {r.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="page-cta">
          <div className="wrap">
            <h2>Ready to put the knowledge to work?</h2>
            <p>
              ScoreVera takes you from credit report to dispute letters in
              minutes — with the right process, in the right order.
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
