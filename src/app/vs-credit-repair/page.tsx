import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ScoreVera vs. Credit Repair Companies | What's the Difference?",
  description:
    "Credit repair companies charge $79–$149/month to do what you can legally do yourself for free. Here's the real difference between ScoreVera and traditional credit repair.",
};

const comparison = [
  {
    category: "Cost",
    repair: "$79–$149/month",
    scorevera: "$0–$49/month",
    repairBad: true,
    scoreVeraGood: true,
  },
  {
    category: "Submits disputes for you",
    repair: "Yes",
    scorevera: "No — you submit",
    repairBad: false,
    scoreVeraGood: false,
    note: "Both legally result in the same outcome. You don't need a middleman.",
  },
  {
    category: "Uses your FCRA legal rights",
    repair: "Yes",
    scorevera: "Yes",
    repairBad: false,
    scoreVeraGood: true,
  },
  {
    category: "You're in control",
    repair: "No",
    scorevera: "Yes — fully",
    repairBad: true,
    scoreVeraGood: true,
  },
  {
    category: "Transparency",
    repair: "Low — black box",
    scorevera: "Full — every step visible",
    repairBad: true,
    scoreVeraGood: true,
  },
  {
    category: "Can guarantee results",
    repair: "Never legally",
    scorevera: "Never legally",
    repairBad: false,
    scoreVeraGood: false,
    note: "No one can legally guarantee a score change. Anyone claiming otherwise is violating the CROA.",
  },
  {
    category: "Can do more than you can",
    repair: "No — it's illegal to claim this",
    scorevera: "No — same FCRA rights",
    repairBad: true,
    scoreVeraGood: false,
    note: "Under the CROA, credit repair companies cannot do anything you cannot do yourself.",
  },
  {
    category: "Letter types generated",
    repair: "Generic templates",
    scorevera: "§611, §609, debt validation, goodwill, escalation",
    repairBad: false,
    scoreVeraGood: true,
  },
  {
    category: "Dispute tracking",
    repair: "Opaque — you get updates when they feel like it",
    scorevera: "Real-time 30-day countdown per dispute",
    repairBad: true,
    scoreVeraGood: true,
  },
  {
    category: "Contract required",
    repair: "Often yes — monthly recurring",
    scorevera: "No contract, cancel anytime",
    repairBad: true,
    scoreVeraGood: true,
  },
];

export default function VsCreditRepairPage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="page-hero" style={{ paddingTop: "100px" }}>
          <div className="wrap">
            <span className="eyebrow">The Comparison</span>
            <h1>
              ScoreVera vs. Credit Repair Companies
            </h1>
            <p>
              Credit repair companies charge $79–$149/month to use the same
              legal rights you already have for free. Here&apos;s what&apos;s
              really going on — and why you probably don&apos;t need them.
            </p>
          </div>
        </section>

        {/* WHY PEOPLE HIRE CREDIT REPAIR */}
        <section className="page-section" style={{ background: "var(--surface)" }}>
          <div className="wrap">
            <div style={{ maxWidth: "680px" }}>
              <span className="eyebrow" style={{ marginBottom: "16px", display: "block" }}>
                Why It Happens
              </span>
              <h2>Why people hire credit repair companies</h2>
              <p>
                It&apos;s not because people are naive. It&apos;s because the
                credit dispute process is deliberately hard to understand. The
                Fair Credit Reporting Act runs over 70 pages. Dispute letters
                have to cite the right statutes. Bureaus respond in legalese.
                Deadlines matter. Most people don&apos;t know where to start.
              </p>
              <p>
                Credit repair companies exploit that confusion. They position
                themselves as experts who know something you don&apos;t —
                people who have special access, special relationships with
                bureaus, or proprietary methods that produce better results.
              </p>
              <p>
                None of that is true. And there&apos;s a federal law that says
                so.
              </p>
            </div>
          </div>
        </section>

        {/* CROA SECTION */}
        <section className="page-section">
          <div className="wrap">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "40px",
                alignItems: "start",
              }}
              className="croa-inner"
            >
              <style>{`
                @media(min-width:900px){.croa-inner{grid-template-columns:1fr 1fr !important;gap:72px !important}}
              `}</style>

              <div style={{ maxWidth: "560px" }}>
                <span className="eyebrow" style={{ marginBottom: "16px", display: "block" }}>
                  Federal Law
                </span>
                <h2>The Credit Repair Organizations Act (CROA)</h2>
                <p>
                  The CROA is a federal law — 15 U.S.C. § 1679 — that governs
                  credit repair companies. It exists specifically because
                  Congress recognized that the credit repair industry was
                  misleading consumers.
                </p>
                <p>
                  The most important line in the entire law:
                </p>
                <blockquote
                  style={{
                    fontFamily: "var(--f-d)",
                    fontStyle: "italic",
                    fontWeight: 300,
                    fontSize: "clamp(1rem, 2vw, 1.25rem)",
                    color: "var(--t1)",
                    borderLeft: "2px solid var(--gold)",
                    paddingLeft: "20px",
                    margin: "20px 0 24px",
                    lineHeight: 1.6,
                  }}
                >
                  &ldquo;No credit repair organization may charge or receive
                  any money for the performance of any service which the
                  organization has agreed to perform before such service is
                  fully performed.&rdquo;
                </blockquote>
                <p>
                  The CROA also explicitly states that credit repair companies
                  cannot perform any service that you could not legally perform
                  yourself. They cannot contact bureaus on your behalf using
                  special channels. They cannot remove accurate information.
                  They cannot guarantee results. They have no powers you
                  don&apos;t have.
                </p>
              </div>

              <div>
                <div
                  style={{
                    background: "var(--elevated)",
                    border: "1px solid var(--border-md)",
                    borderRadius: "12px",
                    padding: "28px 24px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--f-m)",
                      fontSize: ".5625rem",
                      letterSpacing: ".12em",
                      textTransform: "uppercase",
                      color: "var(--t4)",
                      display: "block",
                      marginBottom: "20px",
                      paddingBottom: "12px",
                      borderBottom: "1px solid var(--border)",
                    }}
                  >
                    What the CROA requires credit repair companies to tell you
                  </span>
                  <ul
                    style={{
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: "14px",
                    }}
                  >
                    {[
                      "You have the right to dispute inaccurate information yourself, for free.",
                      "They cannot do anything you cannot legally do on your own.",
                      "They cannot guarantee any specific result or score increase.",
                      "You have a 3-day right to cancel any credit repair contract.",
                      "They must give you a written contract before taking any payment.",
                    ].map((item) => (
                      <li
                        key={item}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "10px",
                          fontSize: ".9rem",
                          color: "var(--t2)",
                          lineHeight: 1.65,
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
                            marginTop: "3px",
                            color: "var(--gold)",
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
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="page-section" style={{ background: "var(--surface)" }}>
          <div className="wrap">
            <div className="sh">
              <span className="eyebrow">Side by Side</span>
              <h2
                className="h-xl"
                style={{ marginTop: "14px", marginBottom: "8px" }}
              >
                Credit Repair Co. vs. ScoreVera
              </h2>
              <p className="body-lg">
                Here&apos;s what you&apos;re actually comparing.
              </p>
            </div>

            {/* Mobile: card-per-row. Desktop: table */}
            <div
              style={{
                border: "1px solid var(--border)",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              {/* Header row */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  background: "var(--elevated)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    padding: "14px 20px",
                    fontFamily: "var(--f-m)",
                    fontSize: ".625rem",
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "var(--t4)",
                  }}
                >
                  Category
                </div>
                <div
                  style={{
                    padding: "14px 20px",
                    fontFamily: "var(--f-m)",
                    fontSize: ".625rem",
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "var(--red)",
                    borderLeft: "1px solid var(--border)",
                  }}
                >
                  Credit Repair Co.
                </div>
                <div
                  style={{
                    padding: "14px 20px",
                    fontFamily: "var(--f-m)",
                    fontSize: ".625rem",
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    borderLeft: "1px solid var(--border)",
                  }}
                >
                  ScoreVera
                </div>
              </div>

              {/* Data rows */}
              {comparison.map((row, i) => (
                <div
                  key={row.category}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    background:
                      i % 2 === 0 ? "var(--elevated)" : "var(--raised)",
                    borderBottom:
                      i < comparison.length - 1
                        ? "1px solid var(--border)"
                        : "none",
                  }}
                >
                  <div
                    style={{
                      padding: "14px 20px",
                      fontSize: ".875rem",
                      color: "var(--t2)",
                      lineHeight: 1.5,
                    }}
                  >
                    {row.category}
                    {row.note && (
                      <div
                        style={{
                          fontFamily: "var(--f-m)",
                          fontSize: ".6875rem",
                          color: "var(--t4)",
                          marginTop: "4px",
                          lineHeight: 1.55,
                        }}
                      >
                        {row.note}
                      </div>
                    )}
                  </div>
                  <div
                    style={{
                      padding: "14px 20px",
                      fontSize: ".875rem",
                      color: row.repairBad ? "var(--red)" : "var(--t2)",
                      borderLeft: "1px solid var(--border)",
                      lineHeight: 1.5,
                    }}
                  >
                    {row.repair}
                  </div>
                  <div
                    style={{
                      padding: "14px 20px",
                      fontSize: ".875rem",
                      color: row.scoreVeraGood ? "var(--green)" : "var(--t2)",
                      borderLeft: "1px solid var(--border)",
                      lineHeight: 1.5,
                    }}
                  >
                    {row.scorevera}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROBLEM / MATH SECTION */}
        <section className="page-section">
          <div className="wrap">
            <div style={{ maxWidth: "680px" }}>
              <span className="eyebrow" style={{ marginBottom: "16px", display: "block" }}>
                The Real Cost
              </span>
              <h2>$79–$149/month adds up fast.</h2>
              <p>
                Most credit repair programs run 6–12 months. At the industry
                average of $99/month, that&apos;s $594 to $1,188 to use your
                own legal rights — rights you already have, with or without
                them.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                  gap: "12px",
                  margin: "24px 0",
                }}
              >
                {[
                  { label: "6 months @ $99/mo", value: "$594", bad: true },
                  { label: "12 months @ $99/mo", value: "$1,188", bad: true },
                  { label: "ScoreVera Guided (annual)", value: "$288", bad: false },
                  { label: "ScoreVera Free", value: "$0", bad: false },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      background: "var(--elevated)",
                      border: `1px solid ${item.bad ? "rgba(239,68,68,.15)" : "rgba(16,185,129,.18)"}`,
                      borderRadius: "10px",
                      padding: "18px 16px",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--f-m)",
                        fontSize: "1.5rem",
                        fontWeight: 500,
                        color: item.bad ? "var(--red)" : "var(--green)",
                        letterSpacing: "-.04em",
                        lineHeight: 1,
                        marginBottom: "6px",
                      }}
                    >
                      {item.value}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--f-m)",
                        fontSize: ".625rem",
                        color: "var(--t4)",
                        letterSpacing: ".06em",
                        textTransform: "uppercase",
                        lineHeight: 1.4,
                      }}
                    >
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              <p>
                ScoreVera starts free. If you want the full Guided plan — which
                includes multi-round sequencing, next-best-action guidance, and
                escalation logic — it&apos;s $24/month or $288/year. For one
                person. One time. Not a monthly charge for someone else to do
                what you can do yourself.
              </p>
            </div>
          </div>
        </section>

        {/* CONCLUSION */}
        <section className="page-section" style={{ background: "var(--surface)" }}>
          <div className="wrap">
            <div style={{ maxWidth: "680px" }}>
              <h2>If you can follow a checklist, you don&apos;t need to pay someone else to do this.</h2>
              <p>
                That&apos;s the honest conclusion. The credit dispute process is
                not magic. It&apos;s a sequence of legally defined steps — file
                a dispute, wait 30 days, review the response, follow up or
                escalate. Anyone who tells you it&apos;s more complicated than
                that is either confused or trying to charge you for it.
              </p>
              <p>
                ScoreVera exists to make that process structured, clear, and
                accessible to anyone. Not because we think credit repair
                companies are evil — but because most people paying them
                don&apos;t realize they could do the same thing themselves,
                for a fraction of the cost, and stay fully in control of
                their own credit file.
              </p>
              <p>
                The law is on your side. ScoreVera helps you use it.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="page-cta">
          <div className="wrap">
            <h2>Try ScoreVera free. No credit card required.</h2>
            <p>
              Upload your report, see what can be disputed, and generate your
              first FCRA letter — all on the free plan.
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
                Try ScoreVera Free
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
