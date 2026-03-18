import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Changelog | ScoreVera",
  description:
    "ScoreVera product updates — new features, improvements, and fixes from launch through the latest release.",
};

const entries = [
  {
    date: "March 2026",
    version: "v2.3",
    tag: "Feature",
    tagColor: "var(--blue-lo)",
    tagBg: "var(--blue-dim)",
    headline: "Multi-round sequencing logic",
    body: "Added automated sequencing intelligence that determines the correct dispute round based on your bureau response history. If Round 1 results come back verified, the system now recommends the exact next step — debt validation, method-of-verification request, or CFPB escalation — based on the item type and furnisher pattern. Eliminates the guesswork of 'what do I do now?'",
  },
  {
    date: "February 2026",
    version: "v2.2",
    tag: "New Plan",
    tagColor: "var(--gold)",
    tagBg: "var(--gold-dim)",
    headline: "Operator plan launched",
    body: "Introduced the Operator plan ($99/mo) for users running the dispute process across multiple profiles — financial coaches, family members, or personal use at scale. Operator includes multiple profiles, bulk workflow management, and client-level tracking dashboards. This is not a credit repair service — Operator users still run each dispute themselves.",
  },
  {
    date: "January 2026",
    version: "v2.1",
    tag: "Letter",
    tagColor: "var(--green)",
    tagBg: "var(--green-dim)",
    headline: "CFPB complaint letter added",
    body: "Added a formal CFPB complaint letter template to the escalation library. When a bureau fails to investigate properly or continues to report inaccurate information after a dispute, this letter guides you through the CFPB complaint filing process. Includes field-level instructions for the CFPB portal and a parallel direct letter to the bureau referencing the complaint.",
  },
  {
    date: "December 2025",
    version: "v2.0",
    tag: "Major Release",
    tagColor: "var(--gold)",
    tagBg: "var(--gold-dim)",
    headline: "Next-best-action guidance launched",
    body: "The biggest release since launch. The Guided System plan now includes a next-best-action engine that reads your dispute status and recommends the exact next step at every stage. Based on bureau response type, item category, time elapsed, and prior dispute history, the system eliminates the most common mistake in DIY disputing: doing the right thing in the wrong order.",
  },
  {
    date: "November 2025",
    version: "v1.5",
    tag: "Improvement",
    tagColor: "var(--blue-lo)",
    tagBg: "var(--blue-dim)",
    headline: "Timeline tracker redesigned",
    body: "Rebuilt the 30-day investigation tracker from the ground up. The new timeline view shows each dispute item's exact deadline, days remaining, and status at a glance. Added automatic reminders for follow-up windows and a visual indicator when an investigation period is about to expire without a bureau response — which itself is a violation you can escalate.",
  },
  {
    date: "October 2025",
    version: "v1.4",
    tag: "Letter",
    tagColor: "var(--green)",
    tagBg: "var(--green-dim)",
    headline: "Goodwill letter template added",
    body: "Added a goodwill deletion request template for accounts that are accurate but where the creditor may agree to remove the negative item as a goodwill gesture — typically for long-standing customers with otherwise clean histories. The template includes guidance on when goodwill letters are likely to be effective and when to skip them and go straight to dispute.",
  },
  {
    date: "September 2025",
    version: "v1.3",
    tag: "Improvement",
    tagColor: "var(--blue-lo)",
    tagBg: "var(--blue-dim)",
    headline: "Bureau PDF parsing improved across all three bureaus",
    body: "Significantly improved PDF parsing accuracy for Equifax, Experian, and TransUnion report formats. Each bureau formats their PDFs differently — and they change the format periodically. This update improves negative item detection accuracy, account number parsing, balance extraction, and date-of-last-activity identification. Reduced misread rates by approximately 40% based on internal testing.",
  },
  {
    date: "August 2025",
    version: "v1.2",
    tag: "Feature",
    tagColor: "var(--blue-lo)",
    tagBg: "var(--blue-dim)",
    headline: "Debt validation letter engine added",
    body: "Added a dedicated debt validation workflow for collections accounts. Under the Fair Debt Collection Practices Act (FDCPA), you have the right to demand that a debt collector validate the debt before you respond to it. This workflow generates the correct validation letter and explains what happens if the collector fails to validate — including your rights to dispute and have the item removed.",
  },
  {
    date: "July 2025",
    version: "v1.1",
    tag: "Improvement",
    tagColor: "var(--blue-lo)",
    tagBg: "var(--blue-dim)",
    headline: "Account identification and categorization refined",
    body: "Improved the logic that categorizes negative items after upload — collections, charge-offs, late payments, hard inquiries, public records, and outdated items are now detected with higher accuracy. Added a 'reporting window checker' that flags items approaching or exceeding the 7-year FCRA reporting limit so you can dispute them on that basis specifically.",
  },
  {
    date: "June 2025",
    version: "v1.0",
    tag: "Launch",
    tagColor: "var(--gold)",
    tagBg: "var(--gold-dim)",
    headline: "ScoreVera launched",
    body: "ScoreVera launched publicly with the Free and Core System plans. The platform supports PDF uploads from all three major credit bureaus, FCRA § 611 and § 609 dispute letter generation, and basic 30-day investigation tracking. Built by Jason Murphy — who went from a 559 to a 716 credit score in 30 days using the same process the platform now automates.",
  },
];

export default function ChangelogPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero" style={{ paddingTop: "100px" }}>
          <div className="wrap">
            <span className="eyebrow">Changelog</span>
            <h1>What has changed and when.</h1>
            <p className="body-lg">
              Product updates, new features, and improvements — newest first.
            </p>
          </div>
        </section>

        <section className="page-section">
          <div className="wrap">
            <div
              style={{
                maxWidth: "760px",
                display: "flex",
                flexDirection: "column",
                gap: "0",
              }}
            >
              {entries.map((entry, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: "16px",
                    borderBottom: "1px solid var(--border)",
                    padding: "36px 0",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
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
                      {entry.date}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--f-m)",
                        fontSize: ".6875rem",
                        fontWeight: 600,
                        letterSpacing: ".08em",
                        textTransform: "uppercase",
                        color: "var(--t2)",
                        background: "var(--elevated)",
                        border: "1px solid var(--border)",
                        borderRadius: "4px",
                        padding: "2px 8px",
                      }}
                    >
                      {entry.version}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--f-m)",
                        fontSize: ".6875rem",
                        fontWeight: 600,
                        letterSpacing: ".08em",
                        textTransform: "uppercase",
                        color: entry.tagColor,
                        background: entry.tagBg,
                        borderRadius: "4px",
                        padding: "2px 8px",
                      }}
                    >
                      {entry.tag}
                    </span>
                  </div>

                  <h2
                    style={{
                      fontFamily: "var(--f-u)",
                      fontSize: "clamp(1rem, 2vw, 1.125rem)",
                      fontWeight: 600,
                      color: "var(--t1)",
                      lineHeight: 1.35,
                    }}
                  >
                    {entry.headline}
                  </h2>

                  <p
                    className="body-lg"
                    style={{ color: "var(--t2)", lineHeight: 1.75 }}
                  >
                    {entry.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="page-cta">
          <div className="wrap">
            <h2>Want to see what is new in the app?</h2>
            <p>
              Log in or create a free account to access the latest version of
              ScoreVera.
            </p>
            <a
              href="https://app.scorevera.com/"
              className="btn btn-p"
              style={{ fontSize: "1rem", padding: "14px 32px" }}
            >
              Open ScoreVera
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
