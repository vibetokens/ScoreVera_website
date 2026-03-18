import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Your FCRA Rights | ScoreVera",
  description:
    "A complete guide to your rights under the Fair Credit Reporting Act (FCRA) — including your right to dispute errors, access your file, and hold bureaus accountable.",
};

const sections = [
  {
    id: "what-is-fcra",
    eyebrow: "Background",
    heading: "What Is the FCRA?",
    body: [
      "The Fair Credit Reporting Act (FCRA) is a federal law passed in 1970 and significantly amended in 2003 by the Fair and Accurate Credit Transactions Act (FACTA). It governs how consumer reporting agencies — Equifax, Experian, and TransUnion — collect, maintain, and distribute your credit information.",
      "Before the FCRA, credit bureaus operated with virtually no oversight. Consumers had no right to see their own files, no ability to challenge errors, and no legal remedy when inaccurate information destroyed their ability to borrow, rent, or get a job. The FCRA changed that.",
      "Today, the FCRA gives every American a specific set of enforceable rights. Bureaus and the companies that report data to them (called furnishers) are legally obligated to follow these rules. When they don't, you have the right to take legal action.",
    ],
  },
  {
    id: "right-to-access",
    eyebrow: "§ 609",
    heading: "Your Right to Access Your File",
    body: [
      "Under FCRA § 609, you have the right to request a full disclosure of your credit file from any consumer reporting agency. This includes every account, inquiry, and piece of personal information they have on record.",
      "By law, you are entitled to one free credit report from each of the three major bureaus every 12 months through AnnualCreditReport.com — the only federally mandated free report source. You may also be entitled to an additional free report if you have been denied credit, employment, or housing based on your credit file, or if you are a victim of identity theft.",
      "Your file disclosure includes the sources of the information — meaning you can identify which creditors reported which items. This is critical when preparing targeted dispute letters.",
    ],
  },
  {
    id: "right-to-dispute",
    eyebrow: "§ 611",
    heading: "Your Right to Dispute",
    body: [
      "FCRA § 611 is the cornerstone of consumer dispute rights. It requires credit bureaus to investigate any item you dispute as inaccurate or incomplete — within 30 days of receiving your dispute (45 days in some circumstances).",
      "During the investigation window, the bureau must contact the furnisher (the company that reported the item), forward your dispute documentation, and wait for the furnisher's response. If the furnisher cannot verify the accuracy of the item, the bureau is legally required to delete or correct it.",
      "If the bureau completes its investigation and you disagree with the result, you have the right to add a 100-word consumer statement to your file explaining your position. You can also re-dispute with new information, dispute directly with the furnisher under § 623, or file a complaint with the CFPB.",
    ],
  },
  {
    id: "furnisher-obligations",
    eyebrow: "§ 623",
    heading: "Furnisher Obligations",
    body: [
      "Credit bureaus don't create the data on your report — they receive it from furnishers: banks, credit card companies, collection agencies, and other creditors. The FCRA § 623 places direct obligations on these furnishers.",
      "Furnishers are prohibited from reporting information they know or have reasonable cause to believe is inaccurate. When you dispute an item directly with a furnisher, they are required to conduct their own investigation, correct any errors they find, and notify the bureaus to update your file.",
      "This means you have two separate dispute channels: the bureau (via § 611) and the furnisher directly (via § 623). In many cases, disputing through both channels simultaneously — or escalating to the furnisher after an unsatisfactory bureau response — is the most effective strategy.",
    ],
  },
  {
    id: "reporting-windows",
    eyebrow: "Time Limits",
    heading: "How Long Items Stay on Your Report",
    body: [
      "The FCRA sets strict limits on how long negative information can remain on your credit report. Most negative items — late payments, collections, charge-offs, repossessions, and civil judgments — must be removed after 7 years from the date of first delinquency.",
      "Chapter 7 bankruptcy can remain for 10 years from the filing date. Chapter 13 bankruptcy is typically removed after 7 years. Unpaid tax liens, which were previously allowed to remain indefinitely, have been voluntarily removed by all three bureaus in recent years.",
      "Items that stay beyond their legal reporting window are violations of the FCRA. You have the right to dispute any item that has aged past its limit, and the bureau is required to remove it. This is one of the most straightforward disputes to win.",
    ],
  },
  {
    id: "cannot-be-denied",
    eyebrow: "Access Rights",
    heading: "What You Cannot Be Denied",
    body: [
      "Under the FCRA, you cannot be denied access to your own credit file. A consumer reporting agency must provide your file disclosure upon request — period. They cannot charge you a fee to access your own information in the circumstances entitling you to a free report.",
      "You also cannot be penalized for exercising your dispute rights. Filing a dispute is not itself a negative action, and bureaus cannot mark your file or reduce your score simply because you challenged an item.",
      "If you are denied credit, insurance, employment, or housing based wholly or partly on your credit report, the entity that made that decision must provide you with an adverse action notice — including the name, address, and phone number of the credit bureau that supplied the report, so you can access your file and dispute any inaccuracies that contributed to the denial.",
    ],
  },
  {
    id: "exercise-rights",
    eyebrow: "How ScoreVera Helps",
    heading: "How to Exercise Your Rights",
    body: [
      "Knowing your FCRA rights is the first step. Exercising them effectively requires the right letters, sent to the right parties, at the right time, with the right documentation. That's where most people get stuck.",
      "ScoreVera structures the entire dispute process around FCRA law. Each letter we generate cites the applicable statute. Each investigation window is tracked so you know exactly when a response is due. When a bureau comes back with a result, ScoreVera recommends the appropriate next action — whether that's accepting the outcome, escalating to the furnisher, filing a CFPB complaint, or re-disputing with additional evidence.",
      "You submit every letter yourself. You control every step. ScoreVera is the process framework — built on the same legal rights you already have.",
    ],
  },
];

export default function FCRARightsPage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="page-hero" style={{ paddingTop: "100px" }}>
          <div className="wrap">
            <span className="eyebrow">Know Your Rights</span>
            <h1 className="h-xl">
              Your rights under the Fair Credit Reporting Act.
            </h1>
            <p className="body-lg" style={{ maxWidth: "640px" }}>
              The FCRA gives every American the legal right to access, dispute,
              and correct their credit report — for free, without a lawyer, and
              without paying a credit repair company. Here&apos;s exactly what
              the law says.
            </p>
          </div>
        </section>

        {/* INFO BAND — Quick stats */}
        <div className="info-band">
          <div className="wrap">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "32px",
              }}
            >
              {[
                { stat: "1970", label: "Year FCRA was enacted" },
                { stat: "30 days", label: "Bureau investigation window" },
                { stat: "7 years", label: "Max reporting for most negatives" },
                { stat: "Free", label: "Your annual bureau report" },
              ].map((item) => (
                <div key={item.stat} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: "1.5rem",
                      fontFamily: "var(--f-d)",
                      color: "var(--gold)",
                      letterSpacing: "-.02em",
                      marginBottom: "4px",
                    }}
                  >
                    {item.stat}
                  </div>
                  <div style={{ fontSize: ".8125rem", color: "var(--t3)" }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CONTENT SECTIONS */}
        {sections.map((section, i) => (
          <section
            key={section.id}
            id={section.id}
            className="page-section"
            style={{
              background: i % 2 === 1 ? "var(--surface)" : undefined,
            }}
          >
            <div className="wrap">
              <div style={{ maxWidth: "720px" }}>
                <span
                  className="eyebrow"
                  style={{ marginBottom: "14px", display: "block" }}
                >
                  {section.eyebrow}
                </span>
                <h2
                  style={{
                    fontFamily: "var(--f-d)",
                    fontSize: "clamp(1.375rem, 2.5vw, 2rem)",
                    color: "var(--t1)",
                    letterSpacing: "-.025em",
                    lineHeight: 1.2,
                    marginBottom: "24px",
                  }}
                >
                  {section.heading}
                </h2>
                {section.body.map((para, j) => (
                  <p
                    key={j}
                    className="body-lg"
                    style={{ marginBottom: j < section.body.length - 1 ? "16px" : "0" }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* RIGHTS QUICK-REFERENCE GRID */}
        <section className="page-section" style={{ background: "var(--surface)" }}>
          <div className="wrap">
            <span className="eyebrow" style={{ marginBottom: "16px", display: "block" }}>
              Quick Reference
            </span>
            <h2
              style={{
                fontFamily: "var(--f-d)",
                fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
                color: "var(--t1)",
                letterSpacing: "-.025em",
                marginBottom: "36px",
              }}
            >
              Your FCRA rights at a glance
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "12px",
              }}
            >
              {[
                {
                  section: "§ 609",
                  right: "Access your full credit file",
                  detail: "Request a complete file disclosure from any bureau at any time.",
                },
                {
                  section: "§ 611",
                  right: "Dispute inaccurate information",
                  detail: "Bureaus must investigate within 30 days and remove unverifiable items.",
                },
                {
                  section: "§ 612",
                  right: "Free annual credit report",
                  detail: "One free report from each bureau every 12 months, mandated by law.",
                },
                {
                  section: "§ 613",
                  right: "Know who has accessed your file",
                  detail: "You can see every inquiry — hard and soft — on your credit report.",
                },
                {
                  section: "§ 615",
                  right: "Adverse action notice",
                  detail: "Anyone who denies you credit based on your report must tell you which bureau.",
                },
                {
                  section: "§ 623",
                  right: "Dispute directly with furnishers",
                  detail: "Go directly to the creditor reporting the error — they must investigate too.",
                },
              ].map((item) => (
                <div
                  key={item.section}
                  style={{
                    background: "var(--elevated)",
                    border: "1px solid var(--border)",
                    borderRadius: "10px",
                    padding: "20px 24px",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: ".75rem",
                      fontFamily: "var(--f-m)",
                      color: "var(--gold)",
                      background: "rgba(201,165,90,.1)",
                      border: "1px solid rgba(201,165,90,.2)",
                      borderRadius: "4px",
                      padding: "2px 8px",
                      marginBottom: "10px",
                      letterSpacing: ".03em",
                    }}
                  >
                    {item.section}
                  </span>
                  <div
                    style={{
                      fontFamily: "var(--f-d)",
                      fontSize: ".9375rem",
                      color: "var(--t1)",
                      marginBottom: "6px",
                      letterSpacing: "-.015em",
                    }}
                  >
                    {item.right}
                  </div>
                  <div style={{ fontSize: ".875rem", color: "var(--t3)", lineHeight: 1.6 }}>
                    {item.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="page-cta">
          <div className="wrap">
            <h2>Put your FCRA rights to work.</h2>
            <p>
              ScoreVera structures every step of the dispute process around the
              law — so you know exactly what to send, when to send it, and what
              to do next.
            </p>
            <a
              href="https://app.scorevera.com/"
              className="btn btn-p"
              style={{ fontSize: "1rem", padding: "14px 32px" }}
            >
              Start Your Disputes Free
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
