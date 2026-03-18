import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Credit Dispute Letters | ScoreVera Letter Engine",
  description:
    "ScoreVera generates 7 types of FCRA-compliant dispute letters — bureau disputes, furnisher disputes, debt validation, goodwill, escalation, CFPB complaints, and file disclosures.",
};

const letters = [
  {
    index: "01",
    statute: "FCRA § 611",
    title: "Bureau Dispute Letter",
    what: "A formal written dispute submitted directly to Equifax, Experian, or TransUnion challenging an inaccurate, incomplete, or unverifiable item on your credit report.",
    when: "Use this as your first action when you identify an error on your credit report. Send a separate letter to each bureau reporting the disputed item.",
    result:
      "The bureau is required by law to investigate within 30 days, contact the furnisher, and delete or correct the item if it cannot be verified. You receive written results of the investigation.",
    plans: ["Core", "Guided", "Operator"],
  },
  {
    index: "02",
    statute: "FCRA § 609",
    title: "File Disclosure Request",
    what: "A formal request to a credit bureau for a complete disclosure of your credit file — every account, inquiry, personal information record, and source of that information.",
    when: "Use this when you need your full file (beyond a standard credit report), when you suspect your file has been mixed with another consumer's, or when you need to identify the source of a specific item.",
    result:
      "The bureau must provide your complete file disclosure. This gives you the source information needed to write targeted dispute letters and identify which furnisher reported each item.",
    plans: ["Free", "Core", "Guided", "Operator"],
  },
  {
    index: "03",
    statute: "FCRA § 623",
    title: "Furnisher Direct Dispute",
    what: "A dispute letter sent directly to the creditor, lender, or collection agency that reported the inaccurate item to the credit bureau — bypassing the bureau entirely.",
    when: "Use this when a § 611 bureau dispute comes back 'verified' but you believe the furnisher has inaccurate records, or when you want to dispute through both channels simultaneously.",
    result:
      "The furnisher is required to conduct its own investigation, correct any inaccuracies it finds in its records, and notify the credit bureaus to update your file. Furnisher disputes can resolve items that bureau disputes miss.",
    plans: ["Core", "Guided", "Operator"],
  },
  {
    index: "04",
    statute: "FDCPA § 809(b)",
    title: "Debt Validation Letter",
    what: "A letter sent to a debt collector demanding written verification that the debt is valid, that the amount is accurate, and that the collector has the legal right to collect it.",
    when: "Send within 30 days of first contact from a debt collector. You can also send one at any time if a collection account appears on your credit report and you are uncertain of its validity.",
    result:
      "The collector must stop all collection activity — including credit reporting — until they provide written validation. If they cannot validate the debt, they are legally prohibited from continuing to report it.",
    plans: ["Core", "Guided", "Operator"],
  },
  {
    index: "05",
    statute: "Goodwill Request",
    title: "Goodwill Letter",
    what: "A letter requesting that a creditor voluntarily remove or update a negative item that is technically accurate — typically a single late payment from an otherwise positive account history.",
    when: "Use after you have paid the account in full and have a strong history with the creditor. Most effective for isolated late payments, not for collections or charge-offs.",
    result:
      "There is no legal obligation for a creditor to honor a goodwill request. However, many creditors will remove a single late payment as a courtesy, particularly for long-standing customers with otherwise good records. Results vary by creditor.",
    plans: ["Guided", "Operator"],
  },
  {
    index: "06",
    statute: "Escalation",
    title: "Escalation Letter",
    what: "A follow-up dispute letter sent after an initial investigation returns an unsatisfactory result — either a 'verified as accurate' response you believe is incorrect, or a response that failed to address all disputed items.",
    when: "Use when your § 611 bureau dispute or § 623 furnisher dispute comes back verified but you have additional documentation, evidence, or a legal argument that was not considered in the initial investigation.",
    result:
      "Escalation letters force a second review with your new evidence. They also create a documented record of your dispute history, which is important if you need to eventually pursue legal action under the FCRA for willful or negligent noncompliance.",
    plans: ["Guided", "Operator"],
  },
  {
    index: "07",
    statute: "CFPB Complaint",
    title: "CFPB Complaint Letter",
    what: "A formal complaint to the Consumer Financial Protection Bureau documenting a bureau's or furnisher's failure to comply with the FCRA — including failure to investigate, failure to correct, or repeated reporting of inaccurate information.",
    when: "Use when a bureau or furnisher has violated your FCRA rights and internal disputes have been exhausted. CFPB complaints go on record and are forwarded to the company for a required response.",
    result:
      "The CFPB forwards your complaint to the company and requires a written response within 15 days. CFPB complaints create an official regulatory paper trail and often prompt companies to resolve disputes that were previously denied. The complaint record also supports any future legal action.",
    plans: ["Guided", "Operator"],
  },
];

const planColors: Record<string, string> = {
  Free: "rgba(148,163,184,.15)",
  Core: "rgba(99,102,241,.15)",
  Guided: "rgba(201,165,90,.15)",
  Operator: "rgba(16,185,129,.15)",
};

const planText: Record<string, string> = {
  Free: "var(--t2)",
  Core: "#818CF8",
  Guided: "var(--gold)",
  Operator: "#34D399",
};

export default function DisputeLettersPage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="page-hero" style={{ paddingTop: "100px" }}>
          <div className="wrap">
            <span className="eyebrow">Letter Engine</span>
            <h1 className="h-xl">
              Every dispute letter you need. Generated for your situation.
            </h1>
            <p className="body-lg" style={{ maxWidth: "640px" }}>
              ScoreVera generates 7 types of credit dispute letters — each
              citing the correct federal statute, tailored to the specific item
              you&apos;re disputing, ready to print and mail or send certified.
              You submit them. We build them.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "8px" }}>
              <a href="https://app.scorevera.com/" className="btn btn-p">
                Generate Your Letters
              </a>
              <a href="/letter-library" className="btn btn-g">
                Browse the Library
              </a>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS BAND */}
        <div className="info-band">
          <div className="wrap">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "32px",
                textAlign: "center",
              }}
            >
              {[
                { step: "1", label: "Upload or enter your credit report items" },
                { step: "2", label: "ScoreVera identifies what to dispute" },
                { step: "3", label: "Generate FCRA-compliant letters" },
                { step: "4", label: "Send them yourself — track results" },
              ].map((item) => (
                <div key={item.step}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: "rgba(201,165,90,.12)",
                      border: "1px solid rgba(201,165,90,.25)",
                      color: "var(--gold)",
                      fontFamily: "var(--f-d)",
                      fontSize: ".9375rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 10px",
                    }}
                  >
                    {item.step}
                  </div>
                  <div style={{ fontSize: ".875rem", color: "var(--t2)", lineHeight: 1.5 }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* LETTER TYPES */}
        <section className="page-section">
          <div className="wrap">
            <span className="eyebrow" style={{ marginBottom: "14px", display: "block" }}>
              The Full Toolkit
            </span>
            <h2
              style={{
                fontFamily: "var(--f-d)",
                fontSize: "clamp(1.375rem, 2.5vw, 2rem)",
                color: "var(--t1)",
                letterSpacing: "-.025em",
                marginBottom: "48px",
                maxWidth: "560px",
              }}
            >
              7 letter types for every stage of the dispute process
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {letters.map((letter) => (
                <div
                  key={letter.index}
                  style={{
                    background: "var(--elevated)",
                    border: "1px solid var(--border)",
                    borderRadius: "10px",
                    padding: "28px 32px",
                  }}
                >
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr",
                      gap: "20px",
                    }}
                  >
                    {/* Header row */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "16px",
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--f-m)",
                          fontSize: ".75rem",
                          color: "var(--t3)",
                          minWidth: "24px",
                          paddingTop: "3px",
                        }}
                      >
                        {letter.index}
                      </span>
                      <div style={{ flex: 1 }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            flexWrap: "wrap",
                            marginBottom: "6px",
                          }}
                        >
                          <h3
                            style={{
                              fontFamily: "var(--f-d)",
                              fontSize: "1.125rem",
                              color: "var(--t1)",
                              letterSpacing: "-.02em",
                              margin: 0,
                            }}
                          >
                            {letter.title}
                          </h3>
                          <span
                            style={{
                              fontSize: ".6875rem",
                              fontFamily: "var(--f-m)",
                              color: "var(--gold)",
                              background: "rgba(201,165,90,.1)",
                              border: "1px solid rgba(201,165,90,.2)",
                              borderRadius: "4px",
                              padding: "2px 8px",
                              letterSpacing: ".04em",
                              textTransform: "uppercase",
                            }}
                          >
                            {letter.statute}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Body grid */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                        gap: "20px",
                        paddingLeft: "40px",
                      }}
                    >
                      <div>
                        <div
                          style={{
                            fontSize: ".6875rem",
                            fontFamily: "var(--f-m)",
                            color: "var(--t3)",
                            letterSpacing: ".06em",
                            textTransform: "uppercase",
                            marginBottom: "6px",
                          }}
                        >
                          What it is
                        </div>
                        <p style={{ fontSize: ".875rem", color: "var(--t2)", lineHeight: 1.65, margin: 0 }}>
                          {letter.what}
                        </p>
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: ".6875rem",
                            fontFamily: "var(--f-m)",
                            color: "var(--t3)",
                            letterSpacing: ".06em",
                            textTransform: "uppercase",
                            marginBottom: "6px",
                          }}
                        >
                          When to use it
                        </div>
                        <p style={{ fontSize: ".875rem", color: "var(--t2)", lineHeight: 1.65, margin: 0 }}>
                          {letter.when}
                        </p>
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: ".6875rem",
                            fontFamily: "var(--f-m)",
                            color: "var(--t3)",
                            letterSpacing: ".06em",
                            textTransform: "uppercase",
                            marginBottom: "6px",
                          }}
                        >
                          Expected result
                        </div>
                        <p style={{ fontSize: ".875rem", color: "var(--t2)", lineHeight: 1.65, margin: 0 }}>
                          {letter.result}
                        </p>
                      </div>
                    </div>

                    {/* Plan tags */}
                    <div
                      style={{
                        paddingLeft: "40px",
                        display: "flex",
                        gap: "6px",
                        flexWrap: "wrap",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ fontSize: ".75rem", color: "var(--t3)", marginRight: "4px" }}>
                        Available on:
                      </span>
                      {letter.plans.map((plan) => (
                        <span
                          key={plan}
                          style={{
                            fontSize: ".6875rem",
                            fontFamily: "var(--f-m)",
                            color: planText[plan],
                            background: planColors[plan],
                            borderRadius: "4px",
                            padding: "2px 8px",
                          }}
                        >
                          {plan}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IMPORTANT NOTE */}
        <section className="page-section" style={{ background: "var(--surface)" }}>
          <div className="wrap">
            <div style={{ maxWidth: "680px" }}>
              <span className="eyebrow" style={{ marginBottom: "16px", display: "block" }}>
                Important to Understand
              </span>
              <h2
                style={{
                  fontFamily: "var(--f-d)",
                  fontSize: "clamp(1.25rem, 2vw, 1.625rem)",
                  color: "var(--t1)",
                  letterSpacing: "-.025em",
                  marginBottom: "20px",
                }}
              >
                ScoreVera generates letters. You send them.
              </h2>
              <p className="body-lg" style={{ marginBottom: "16px" }}>
                Every letter ScoreVera generates is submitted by you — directly
                to the bureau, furnisher, or agency. We do not submit letters on
                your behalf, act as your representative, or operate as a credit
                repair service. This is intentional: under federal law, every
                right these letters invoke belongs to you personally, and you
                have every legal ability to exercise those rights yourself.
              </p>
              <p className="body-lg">
                ScoreVera&apos;s role is to make sure your letters are
                correctly structured, cite the right statutes, and go to the
                right place — so your disputes are treated seriously from the
                moment they arrive.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="page-cta">
          <div className="wrap">
            <h2>Generate your dispute letters today.</h2>
            <p>
              Upload your credit report, identify what to dispute, and get
              FCRA-compliant letters ready to send — in minutes.
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
