import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "For Operators | ScoreVera — Run the System at Scale",
  description:
    "Credit coaches, financial advisors, and community organizations can use ScoreVera to manage dispute workflows for multiple clients — without doing the same work twice. $99/mo Operator plan.",
};

const OPERATOR_TYPES = [
  {
    title: "Credit Coaches",
    desc: "Run structured dispute workflows for coaching clients. Track each person's progress separately without mixing up timelines or letters.",
  },
  {
    title: "Financial Advisors",
    desc: "Help clients clean up credit as part of broader financial planning. Get visibility into each client's dispute status without taking over the process.",
  },
  {
    title: "Housing Counselors",
    desc: "Prepare clients for mortgage qualification by walking them through credit cleanup as a defined, repeatable process.",
  },
  {
    title: "Community Organizations",
    desc: "Run financial empowerment programs that include credit dispute education and support — without hiring a credit repair company.",
  },
  {
    title: "Nonprofit Financial Programs",
    desc: "Serve multiple program participants through one account. Each client runs their own disputes using their own rights.",
  },
  {
    title: "Debt Counselors",
    desc: "Add credit dispute support to your existing debt management or counseling work — structured, repeatable, and compliant.",
  },
];

const OPERATOR_FEATURES = [
  {
    label: "Multiple Client Profiles",
    desc: "Create and manage separate dispute profiles for each client. Reports, letters, and timelines stay organized and separate.",
  },
  {
    label: "Bulk Workflows",
    desc: "Manage multiple clients moving through the dispute process at the same time. See who needs follow-up, who has responses due, and who is stuck.",
  },
  {
    label: "Client-Level Tracking",
    desc: "30-day bureau investigation windows tracked per client. You know exactly where each person stands without manual spreadsheets.",
  },
  {
    label: "Letter Generation at Scale",
    desc: "Generate FCRA-compliant dispute letters for each client — § 611 disputes, debt validation letters, goodwill requests, and escalation templates.",
  },
  {
    label: "Repeatable Process",
    desc: "Every client goes through the same structured workflow. No reinventing the wheel. No missed steps. Consistent outcomes.",
  },
  {
    label: "Dashboard Visibility",
    desc: "See all clients in one place. Prioritize by urgency. Know at a glance who has bureau responses waiting and who is still in the dispute window.",
  },
];

export default function ForOperatorsPage() {
  return (
    <>
      <Header />
      <main>

        {/* HERO */}
        <section className="page-hero" style={{ paddingTop: "100px" }}>
          <div className="wrap">
            <span className="eyebrow">For Operators</span>
            <h1>
              Help more people fix their credit
              <br />
              without doing the same work twice.
            </h1>
            <p>
              If you&apos;re running credit dispute workflows for multiple
              clients manually, you already know the problem: it&apos;s
              repetitive, error-prone, and doesn&apos;t scale. ScoreVera&apos;s
              Operator plan gives you the system to run it cleanly — for as
              many clients as you need.
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
                Start Operator Plan
              </a>
              <a href="/#pricing" className="btn btn-g">
                See Pricing
              </a>
            </div>
          </div>
        </section>

        {/* WHO OPERATORS ARE */}
        <section className="page-section">
          <div className="wrap">
            <span
              className="eyebrow"
              style={{ marginBottom: "16px", display: "block" }}
            >
              Who Uses the Operator Plan
            </span>
            <h2 style={{ marginBottom: "12px" }}>
              Built for anyone running disputes on behalf of multiple people.
            </h2>
            <p
              className="body-lg"
              style={{ maxWidth: "600px", marginBottom: "36px" }}
            >
              You&apos;re not a credit repair company. You&apos;re a
              professional who helps people take action — and you need a tool
              that matches how you actually work.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "12px",
              }}
            >
              {OPERATOR_TYPES.map((type) => (
                <div
                  key={type.title}
                  style={{
                    background: "var(--elevated)",
                    border: "1px solid var(--border)",
                    borderRadius: "11px",
                    padding: "22px 20px",
                    transition: "border-color .2s",
                  }}
                >
                  <div
                    style={{
                      fontSize: ".9375rem",
                      fontWeight: 700,
                      color: "var(--t1)",
                      marginBottom: "8px",
                    }}
                  >
                    {type.title}
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

        {/* THE PROBLEM */}
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
                The Operator Problem
              </span>
              <h2>Doing this manually is costing you time you don&apos;t have.</h2>
              <p>
                When you run credit disputes for multiple clients without a
                system, the process breaks down fast. Timelines overlap. Letters
                get mixed up. You lose track of who is waiting on bureau
                responses and who needs a follow-up sent today.
              </p>
              <p>
                Most credit professionals are managing this in spreadsheets,
                email threads, and handwritten notes. For one client, that&apos;s
                manageable. For five clients, it&apos;s stressful. For ten or
                more, it becomes a liability.
              </p>
              <p>
                The other option is turning to credit repair company software
                built for companies that submit disputes on their clients&apos;
                behalf — which creates compliance exposure you don&apos;t want
                and don&apos;t need.
              </p>
              <p>
                ScoreVera&apos;s Operator plan is built for a different model:
                your clients run their own disputes, using their own legal
                rights, with your guidance. You provide the process. They submit
                their own letters. No CROA exposure. No gray areas.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT YOU GET */}
        <section className="page-section">
          <div className="wrap">
            <span
              className="eyebrow"
              style={{ marginBottom: "16px", display: "block" }}
            >
              Operator Plan Features
            </span>
            <h2 style={{ marginBottom: "12px" }}>
              Everything you need to run the system at scale.
            </h2>
            <p
              className="body-lg"
              style={{ maxWidth: "580px", marginBottom: "36px" }}
            >
              The Operator plan is the full ScoreVera system — extended for
              multi-client use. One dashboard, multiple profiles, repeatable
              workflows.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "12px",
              }}
            >
              {OPERATOR_FEATURES.map((feat) => (
                <div
                  key={feat.label}
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
                        color: "var(--green)",
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
                    >
                      {feat.label}
                    </div>
                  </div>
                  <p
                    style={{
                      fontSize: ".875rem",
                      color: "var(--t2)",
                      lineHeight: 1.65,
                      margin: 0,
                      paddingLeft: "26px",
                    }}
                  >
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPLIANCE NOTE */}
        <section
          className="page-section"
          style={{ background: "var(--surface)" }}
        >
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
                Important: Not a Credit Repair Model
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
                ScoreVera is software. It is not a credit repair organization
                under CROA, and the Operator plan does not change that.
              </p>
              <p
                style={{
                  fontSize: ".9rem",
                  color: "var(--t2)",
                  lineHeight: 1.75,
                  marginBottom: "10px",
                }}
              >
                The Operator model is built so that each client submits their
                own disputes, using their own legal rights under the FCRA. You
                provide the guidance, the workflow, and the structure. They take
                the action. ScoreVera generates the letters — but clients send
                them.
              </p>
              <p
                style={{
                  fontSize: ".9rem",
                  color: "var(--t2)",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                This is the same model used by HUD-approved housing counselors,
                nonprofit financial coaches, and credit educators across the
                country. If you have compliance questions specific to your
                practice or organization, consult a licensed attorney familiar
                with CROA and your state&apos;s credit services laws.
              </p>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="page-section">
          <div className="wrap">
            <div style={{ maxWidth: "560px" }}>
              <span
                className="eyebrow"
                style={{ marginBottom: "16px", display: "block" }}
              >
                Pricing
              </span>
              <h2 style={{ marginBottom: "16px" }}>$99/month. No seat limits.</h2>
              <p>
                The Operator plan is{" "}
                <strong style={{ color: "var(--t1)" }}>$99/month</strong>. Flat
                rate. You can manage as many client profiles as your workflow
                supports. Cancel any time.
              </p>
              <p>
                Compare to hiring a credit repair company at $79 to $149 per
                client per month. With ScoreVera, you run the process once,
                correctly — and your clients keep the results without an ongoing
                bill attached.
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
                  Start Operator Plan
                </a>
                <a href="/#pricing" className="btn btn-g">
                  Compare All Plans
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="page-cta">
          <div className="wrap">
            <h2>Ready to stop reinventing the process for every client?</h2>
            <p>
              ScoreVera&apos;s Operator plan gives you the structure to run
              credit disputes cleanly — at scale, without the compliance
              exposure of a credit repair model.
            </p>
            <a
              href="https://app.scorevera.com/"
              className="btn btn-p"
              style={{ fontSize: "1rem", padding: "14px 32px" }}
            >
              Start Operator Plan — $99/mo
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
