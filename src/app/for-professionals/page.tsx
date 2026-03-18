import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "For Professionals | ScoreVera — Help Clients Get Credit-Ready",
  description:
    "Mortgage brokers, real estate agents, and financial planners use ScoreVera to help clients fix avoidable credit issues before deals fall through. Software — not credit repair.",
};

const PROFESSIONAL_TYPES = [
  {
    title: "Mortgage Brokers",
    problem: "Loan denied or delayed",
    desc: "A client with a 609 score doesn't have to stay at a 609. Help them identify and dispute the items keeping them below your qualification threshold — before they lose the rate lock.",
  },
  {
    title: "Real Estate Agents",
    problem: "Deal falls through at the last minute",
    desc: "Deals die when buyers can't qualify. Get clients into the dispute process 60–90 days before they need to apply — and increase the odds your transaction actually closes.",
  },
  {
    title: "Financial Planners",
    problem: "High-interest debt dragging clients backward",
    desc: "Clients with damaged credit pay more for everything. Integrate credit cleanup into your planning process as a defined first step — before you tackle investment strategy.",
  },
  {
    title: "Tax Professionals",
    problem: "Clients stuck because of old IRS liens or errors",
    desc: "Resolved tax issues often leave incorrect data on credit reports. Help clients dispute outdated or inaccurate IRS-related entries once the underlying issue is addressed.",
  },
];

const KEY_BENEFITS = [
  {
    title: "Give clients a clear action plan",
    desc: "Instead of telling clients they need to &quot;fix their credit,&quot; give them a specific, structured process with letters generated for each item that needs attention.",
  },
  {
    title: "Track their progress",
    desc: "See where each client stands in their dispute timeline. Know when bureau investigations are due, when to follow up, and when items have been resolved.",
  },
  {
    title: "Clients run the process themselves",
    desc: "Your clients use their own legal rights under the FCRA. You guide the strategy. They submit the letters. The result stays with them after the transaction closes.",
  },
  {
    title: "No deal, no problem — they still benefit",
    desc: "Even clients who don't qualify this cycle benefit from the process. You become the advisor who actually helped them — not just the one who said &quot;come back later.&quot;",
  },
];

export default function ForProfessionalsPage() {
  return (
    <>
      <Header />
      <main>

        {/* HERO */}
        <section className="page-hero" style={{ paddingTop: "100px" }}>
          <div className="wrap">
            <span className="eyebrow">For Professionals</span>
            <h1>
              Get your clients credit-ready
              <br />
              before the deal falls through.
            </h1>
            <p>
              Too many transactions die because of avoidable credit problems.
              ScoreVera gives mortgage brokers, real estate agents, and financial
              planners a structured way to help clients clean up their credit —
              before it becomes your problem.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap" as const,
                gap: "12px",
                marginTop: "28px",
              }}
            >
              <a href="https://app.scorevera.com/" className="btn btn-p">
                Start Professional Plan
              </a>
              <a
                href="mailto:hello@scorevera.com?subject=Professional%20Plan%20Question"
                className="btn btn-g"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* THE PROBLEM */}
        <section className="page-section">
          <div className="wrap">
            <div style={{ maxWidth: "720px" }}>
              <span
                className="eyebrow"
                style={{ marginBottom: "16px", display: "block" }}
              >
                The Problem
              </span>
              <h2>Credit problems kill deals that didn&apos;t have to die.</h2>
              <p>
                Your client has the income, the down payment, and the intent to
                close. Then underwriting pulls their credit and finds a
                collection account from 2021 that should have been disputed six
                months ago. The rate lock expires. The deal falls through. You
                start over.
              </p>
              <p>
                This happens because most professionals don&apos;t have a
                concrete answer when a client asks, &quot;What do I do about
                this?&quot; You can tell them to dispute it. You can tell them
                to call the bureaus. But without a structured process, most
                clients don&apos;t follow through — or they do it wrong and
                waste the 30-day investigation window.
              </p>
              <p>
                ScoreVera gives you something specific to hand them. Not a
                referral to a credit repair company. Not a pamphlet. A real
                system they can use right now.
              </p>
            </div>
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section
          className="page-section"
          style={{ background: "var(--surface)" }}
        >
          <div className="wrap">
            <span
              className="eyebrow"
              style={{ marginBottom: "16px", display: "block" }}
            >
              Who This Is For
            </span>
            <h2 style={{ marginBottom: "36px" }}>
              Built for professionals whose outcomes depend on client credit.
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "12px",
              }}
            >
              {PROFESSIONAL_TYPES.map((type) => (
                <div
                  key={type.title}
                  style={{
                    background: "var(--elevated)",
                    border: "1px solid var(--border)",
                    borderRadius: "11px",
                    padding: "24px 22px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "12px",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: ".9375rem",
                        fontWeight: 700,
                        color: "var(--t1)",
                      }}
                    >
                      {type.title}
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--f-m)",
                        fontSize: ".5625rem",
                        letterSpacing: ".08em",
                        textTransform: "uppercase" as const,
                        color: "var(--red)",
                        background: "rgba(239,68,68,.08)",
                        border: "1px solid rgba(239,68,68,.15)",
                        padding: "2px 7px",
                        borderRadius: "4px",
                        whiteSpace: "nowrap" as const,
                        flexShrink: 0,
                      }}
                    >
                      {type.problem}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: ".875rem",
                      color: "var(--t2)",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {type.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT HELPS */}
        <section className="page-section">
          <div className="wrap">
            <span
              className="eyebrow"
              style={{ marginBottom: "16px", display: "block" }}
            >
              How ScoreVera Helps
            </span>
            <h2 style={{ marginBottom: "12px" }}>
              You guide the process. Your clients run it.
            </h2>
            <p
              className="body-lg"
              style={{ maxWidth: "580px", marginBottom: "40px" }}
            >
              ScoreVera is a tool your clients use directly — not a service you
              provide on their behalf. That distinction matters both legally and
              practically.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "12px",
              }}
            >
              {KEY_BENEFITS.map((benefit) => (
                <div
                  key={benefit.title}
                  style={{
                    background: "var(--elevated)",
                    border: "1px solid rgba(59,130,246,.15)",
                    borderRadius: "11px",
                    padding: "22px 20px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                      style={{
                        color: "var(--blue-lo)",
                        flexShrink: 0,
                        marginTop: "2px",
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
                    <div
                      style={{
                        fontSize: ".9375rem",
                        fontWeight: 700,
                        color: "var(--t1)",
                      }}
                      dangerouslySetInnerHTML={{ __html: benefit.title }}
                    />
                  </div>
                  <p
                    style={{
                      fontSize: ".875rem",
                      color: "var(--t2)",
                      lineHeight: 1.65,
                      margin: 0,
                      paddingLeft: "26px",
                    }}
                    dangerouslySetInnerHTML={{ __html: benefit.desc }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW THE WORKFLOW LOOKS */}
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
                The Workflow
              </span>
              <h2 style={{ marginBottom: "24px" }}>
                From &quot;your credit needs work&quot; to a concrete action plan
                in one session.
              </h2>

              {[
                {
                  step: "1",
                  title: "Client pulls their free credit report",
                  body: "Direct them to AnnualCreditReport.com. Free, no credit card required. All three bureaus.",
                },
                {
                  step: "2",
                  title: "Upload and scan with ScoreVera",
                  body: "ScoreVera analyzes the report and flags collections, charge-offs, late payments, inquiries, and outdated items — organized by bureau.",
                },
                {
                  step: "3",
                  title: "Review the action plan together",
                  body: "You and your client go through what ScoreVera found. Prioritize by impact. Decide which items to dispute first.",
                },
                {
                  step: "4",
                  title: "Client generates and sends dispute letters",
                  body: "ScoreVera generates FCRA-compliant letters for each item. Your client reviews, signs, and mails them. The 30-day clock starts.",
                },
                {
                  step: "5",
                  title: "Track and follow up",
                  body: "ScoreVera tracks each dispute timeline. You check in with your client at key milestones. Bureau responses guide the next round.",
                },
              ].map((item, i, arr) => (
                <div
                  key={item.step}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "48px 1fr",
                    gap: "0 16px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column" as const,
                      alignItems: "center",
                    }}
                  >
                    <div className="step-circ">{item.step}</div>
                    {i < arr.length - 1 && <div className="step-line" />}
                  </div>
                  <div className="step-content">
                    <div className="step-title">{item.title}</div>
                    <p className="step-desc">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPLIANCE NOTE */}
        <section className="page-section">
          <div className="wrap">
            <div
              style={{
                maxWidth: "680px",
                background: "var(--elevated)",
                border: "1px solid rgba(201,165,90,.2)",
                borderRadius: "12px",
                padding: "28px 28px",
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
                  marginBottom: "12px",
                }}
              >
                Compliance Note
              </span>
              <p
                style={{
                  fontSize: ".9375rem",
                  color: "var(--t1)",
                  lineHeight: 1.75,
                  fontWeight: 500,
                  marginBottom: "12px",
                }}
              >
                ScoreVera is software. Professionals using it are not providing
                credit repair services.
              </p>
              <p
                style={{
                  fontSize: ".9rem",
                  color: "var(--t2)",
                  lineHeight: 1.75,
                  marginBottom: "10px",
                }}
              >
                The Credit Repair Organizations Act (CROA) regulates companies
                that provide credit repair services for a fee. ScoreVera is a
                software tool — it generates letters and tracks timelines, but
                your clients are the ones submitting disputes using their own
                legal rights. You are not submitting disputes on their behalf.
              </p>
              <p
                style={{
                  fontSize: ".9rem",
                  color: "var(--t2)",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                That said, regulations vary by state and by profession. If you
                are a licensed mortgage broker, financial planner, or attorney,
                review how your licensing rules interact with credit-related
                guidance before recommending any specific tool or process to
                clients. When in doubt, consult your compliance officer or a
                licensed attorney.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="page-cta">
          <div className="wrap">
            <h2>Your clients can fix their credit. You can help them do it.</h2>
            <p>
              Stop losing deals to avoidable credit problems. Give clients a
              structured, legal process — and position yourself as the
              professional who helped them get there.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap" as const,
                gap: "12px",
                justifyContent: "center",
              }}
            >
              <a
                href="https://app.scorevera.com/"
                className="btn btn-p"
                style={{ fontSize: "1rem", padding: "14px 32px" }}
              >
                Start Professional Plan
              </a>
              <a
                href="mailto:hello@scorevera.com?subject=Professional%20Plan%20Question"
                className="btn btn-g"
                style={{ fontSize: "1rem", padding: "14px 32px" }}
              >
                Talk to Us First
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
