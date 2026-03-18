import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Common Credit Report Errors | ScoreVera",
  description:
    "Learn about the most common credit report errors — wrong account status, duplicate accounts, outdated negatives, identity theft, and more — and how to dispute each one.",
};

const errors = [
  {
    id: "wrong-personal-info",
    number: "01",
    title: "Wrong Personal Information",
    what: "Your name is misspelled, an old address remains listed, your Social Security number has a digit transposed, or your date of birth is incorrect.",
    why: "Bureaus aggregate data from thousands of sources. When furnishers submit data, small discrepancies in name spelling or address can cause information to attach to the wrong consumer file — or fail to match correctly, creating a mixed file.",
    impact:
      "Personal information errors can cause legitimate accounts to not appear on your report (lowering available credit history) or cause someone else's accounts to appear on yours (damaging your score and raising identity theft concerns).",
    strategy: "File Disclosure Request (§ 609) to confirm what's in your file, then Bureau Dispute Letter (§ 611) to correct each inaccuracy.",
  },
  {
    id: "not-your-accounts",
    number: "02",
    title: "Accounts That Aren't Yours",
    what: "An account appears on your report that you never opened — a credit card, loan, or line of credit with a creditor you have no relationship with.",
    why: "This can result from a mixed file (your file merged with a person who has a similar name or SSN), identity theft (someone opened an account using your information), or an authorized user arrangement that wasn't properly disclosed.",
    impact:
      "Unrecognized accounts — especially delinquent or maxed-out ones — can severely damage your score. They also signal possible identity theft that needs immediate action beyond a dispute.",
    strategy:
      "Bureau Dispute Letter (§ 611) citing the account as not yours, Furnisher Direct Dispute (§ 623) to the creditor, and a fraud alert or security freeze if identity theft is suspected.",
  },
  {
    id: "wrong-account-status",
    number: "03",
    title: "Wrong Account Status",
    what: "An account that you paid off and closed still shows as open. A debt that was paid in full still shows as delinquent. A settled account shows as charged-off with a balance remaining.",
    why: "Furnishers don't always update their records promptly — or at all. A creditor that sold a debt to a collector may continue reporting the original delinquency even though they no longer own the debt.",
    impact:
      "An account showing open when closed incorrectly increases your apparent utilization or debt load. An account showing delinquent when paid is one of the most damaging inaccuracies on a credit report — a single 30-day late payment can drop a score by 60–90 points.",
    strategy:
      "Bureau Dispute Letter (§ 611) with proof of payment or closure. If the bureau verifies the status as accurate, escalate with a Furnisher Direct Dispute (§ 623) to the original creditor.",
  },
  {
    id: "wrong-balance",
    number: "04",
    title: "Inaccurate Balance or Credit Limit",
    what: "Your reported balance is higher than your actual balance. Your credit limit is reported lower than your actual limit. A paid account still shows a balance.",
    why: "Credit card companies report balances at different times in the billing cycle. Data entry errors, delays in reporting, and system mismatches between furnisher and bureau records all contribute to balance inaccuracies.",
    impact:
      "Your credit utilization ratio — balances divided by total credit limits — accounts for roughly 30% of your FICO score. Even a few hundred dollars in incorrect balances or a lower-than-actual credit limit can meaningfully damage your utilization percentage.",
    strategy:
      "Bureau Dispute Letter (§ 611) with a recent account statement showing the accurate balance and credit limit. This is one of the faster disputes to resolve when you have documentation.",
  },
  {
    id: "duplicate-accounts",
    number: "05",
    title: "Duplicate Accounts",
    what: "The same debt appears more than once on your credit report — often after a debt is sold from an original creditor to one or more collection agencies, each of which also reports the account.",
    why: "When a creditor sells a debt, both the original creditor (showing a charge-off) and the new collector (showing an active collection) may report the same underlying debt. In some cases, a debt passes through multiple collectors, resulting in three or more entries for a single obligation.",
    impact:
      "Duplicate accounts make your report look more delinquent than it is. They inflate the apparent number of collection accounts, the total negative balance, and in some models, the number of recent derogatory marks.",
    strategy:
      "Bureau Dispute Letter (§ 611) for each duplicate entry, identifying the original debt and showing the entries are duplicates. Debt Validation Letter (§ 809(b)) to any collection agency whose entry is the duplicate.",
  },
  {
    id: "outdated-items",
    number: "06",
    title: "Outdated Negative Items",
    what: "A negative item — collection, charge-off, late payment, judgment — is still appearing on your report after its legal reporting window has expired.",
    why: "The FCRA requires most negative items to be removed after 7 years from the original date of delinquency. Bureaus should remove these automatically, but the system isn't perfect. Items sometimes persist through data re-aging (when a collector reports a new delinquency date to reset the clock).",
    impact:
      "An outdated collection or charge-off costs you score points it has no legal right to cost you. Re-aged items — where the delinquency date has been falsely moved forward — are particularly damaging and are themselves a violation of the FCRA.",
    strategy:
      "Bureau Dispute Letter (§ 611) citing the original delinquency date and the 7-year reporting limit. If the item was re-aged, note the FCRA violation explicitly and consider filing a CFPB Complaint.",
  },
  {
    id: "incorrect-payment-history",
    number: "07",
    title: "Incorrect Payment History",
    what: "Your report shows a late payment — 30, 60, or 90 days — for a month when you actually paid on time or paid before the end of the grace period.",
    why: "Payment data is reported by furnishers in monthly batches. Timing mismatches, system errors, and misapplied payments can all result in a payment being flagged as late in the furnisher's records even when you paid on time.",
    impact:
      "A single 30-day late payment can reduce a credit score by 60–90 points depending on the rest of the profile. An inaccurate late payment is both financially damaging and completely correctable with proper documentation.",
    strategy:
      "Bureau Dispute Letter (§ 611) with bank statements, payment confirmations, or account screenshots proving the payment was made on time. If the bureau verifies the late payment, escalate with a Furnisher Direct Dispute (§ 623).",
  },
  {
    id: "fraudulent-accounts",
    number: "08",
    title: "Fraudulent Accounts",
    what: "Accounts opened in your name that you did not open, or inquiries from lenders you never contacted — both signs that someone has obtained and used your personal information.",
    why: "Identity theft remains one of the most common sources of credit report errors. Stolen SSNs, data breaches, mail theft, and social engineering attacks give fraudsters enough information to apply for credit in your name.",
    impact:
      "Fraudulent accounts and the resulting delinquencies can be devastating to credit scores. They also represent ongoing financial and legal risk beyond credit reporting — unpaid fraudulent debts can lead to collection calls, lawsuits, and wage garnishment.",
    strategy:
      "File a police report and an identity theft report at IdentityTheft.gov. Place a fraud alert or security freeze with all three bureaus. Then dispute each fraudulent account with a Bureau Dispute Letter (§ 611) attaching your identity theft report as documentation.",
  },
];

export default function CreditReportErrorsPage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="page-hero" style={{ paddingTop: "100px" }}>
          <div className="wrap">
            <span className="eyebrow">Credit Report Errors</span>
            <h1 className="h-xl">
              1 in 5 Americans has an error on their credit report.
            </h1>
            <p className="body-lg" style={{ maxWidth: "640px" }}>
              The three major bureaus process hundreds of millions of data points
              from thousands of furnishers every month. Errors are not rare —
              they are expected. Here&apos;s what to look for and how to fix
              each type.
            </p>
          </div>
        </section>

        {/* STAT BAND */}
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
                { stat: "1 in 5", label: "Consumers with errors on at least one report" },
                { stat: "1 in 20", label: "Reports with errors significant enough to affect decisions" },
                { stat: "79%", label: "Of disputes result in some modification or deletion" },
                { stat: "30 days", label: "Bureau investigation window after dispute" },
              ].map((item) => (
                <div key={item.stat}>
                  <div
                    style={{
                      fontSize: "1.5rem",
                      fontFamily: "var(--f-d)",
                      color: "var(--gold)",
                      letterSpacing: "-.02em",
                      marginBottom: "6px",
                    }}
                  >
                    {item.stat}
                  </div>
                  <div style={{ fontSize: ".8125rem", color: "var(--t3)", lineHeight: 1.5 }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* WHY ERRORS HAPPEN */}
        <section className="page-section">
          <div className="wrap">
            <div style={{ maxWidth: "680px" }}>
              <span className="eyebrow" style={{ marginBottom: "14px", display: "block" }}>
                Why This Happens
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
                Credit bureaus don&apos;t collect your data — they receive it.
              </h2>
              <p className="body-lg" style={{ marginBottom: "16px" }}>
                Equifax, Experian, and TransUnion do not independently verify the
                information they receive. They accept data submitted by
                furnishers — banks, credit card companies, collection agencies,
                auto lenders — and aggregate it into your report. When a
                furnisher submits incorrect data, the bureau reports it. When a
                furnisher fails to update closed accounts, the bureau keeps
                reporting them as open.
              </p>
              <p className="body-lg">
                This means the accuracy of your credit report is only as good as
                the accuracy of every furnisher reporting to it. And with
                hundreds of furnishers sending updates on millions of consumers
                every month, errors are mathematically inevitable. The FCRA
                exists precisely because Congress recognized this — and gave
                consumers the right to dispute anything that isn&apos;t accurate
                and verifiable.
              </p>
            </div>
          </div>
        </section>

        {/* ERROR TYPES */}
        <section className="page-section" style={{ background: "var(--surface)" }}>
          <div className="wrap">
            <span className="eyebrow" style={{ marginBottom: "14px", display: "block" }}>
              Error Types
            </span>
            <h2
              style={{
                fontFamily: "var(--f-d)",
                fontSize: "clamp(1.375rem, 2.5vw, 2rem)",
                color: "var(--t1)",
                letterSpacing: "-.025em",
                marginBottom: "48px",
              }}
            >
              8 types of errors to look for on your report
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {errors.map((error, i) => (
                <div
                  key={error.id}
                  id={error.id}
                  style={{
                    background: "var(--elevated)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    padding: "28px 32px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "20px",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--f-m)",
                        fontSize: ".75rem",
                        color: "var(--gold)",
                        minWidth: "28px",
                        paddingTop: "3px",
                      }}
                    >
                      {error.number}
                    </span>
                    <div style={{ flex: 1 }}>
                      <h3
                        style={{
                          fontFamily: "var(--f-d)",
                          fontSize: "1.125rem",
                          color: "var(--t1)",
                          letterSpacing: "-.02em",
                          marginBottom: "20px",
                        }}
                      >
                        {error.title}
                      </h3>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                          gap: "20px",
                        }}
                      >
                        {[
                          { label: "What it looks like", text: error.what },
                          { label: "Why it happens", text: error.why },
                          { label: "Impact on your score", text: error.impact },
                        ].map((col) => (
                          <div key={col.label}>
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
                              {col.label}
                            </div>
                            <p
                              style={{
                                fontSize: ".875rem",
                                color: "var(--t2)",
                                lineHeight: 1.65,
                                margin: 0,
                              }}
                            >
                              {col.text}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div
                        style={{
                          marginTop: "20px",
                          background: "rgba(201,165,90,.06)",
                          border: "1px solid rgba(201,165,90,.14)",
                          borderRadius: "7px",
                          padding: "12px 16px",
                          display: "flex",
                          gap: "10px",
                          alignItems: "flex-start",
                        }}
                      >
                        <span style={{ color: "var(--gold)", fontSize: ".75rem", paddingTop: "1px" }}>
                          ▸
                        </span>
                        <div>
                          <span
                            style={{
                              fontSize: ".6875rem",
                              fontFamily: "var(--f-m)",
                              color: "var(--gold)",
                              letterSpacing: ".06em",
                              textTransform: "uppercase",
                              marginRight: "8px",
                            }}
                          >
                            Dispute strategy:
                          </span>
                          <span style={{ fontSize: ".875rem", color: "var(--t2)" }}>
                            {error.strategy}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT TO DO */}
        <section className="page-section">
          <div className="wrap">
            <div style={{ maxWidth: "680px" }}>
              <span className="eyebrow" style={{ marginBottom: "14px", display: "block" }}>
                Next Steps
              </span>
              <h2
                style={{
                  fontFamily: "var(--f-d)",
                  fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
                  color: "var(--t1)",
                  letterSpacing: "-.025em",
                  marginBottom: "24px",
                }}
              >
                You can&apos;t dispute what you haven&apos;t found.
              </h2>
              <p className="body-lg" style={{ marginBottom: "16px" }}>
                The first step is getting your actual credit reports — not just a
                credit score from a monitoring service. Get your full reports from
                all three bureaus at{" "}
                <a
                  href="https://www.annualcreditreport.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--gold)", textDecoration: "none" }}
                >
                  AnnualCreditReport.com
                </a>{" "}
                — the only federally mandated free report source.
              </p>
              <p className="body-lg" style={{ marginBottom: "16px" }}>
                Review each bureau&apos;s report separately. The same account can
                be reported differently — or not at all — across Equifax, Experian,
                and TransUnion. An error on one bureau won&apos;t necessarily appear
                on the others, and you need to dispute it with each bureau reporting
                the inaccuracy.
              </p>
              <p className="body-lg">
                Once you&apos;ve identified the errors, ScoreVera helps you build
                the right letter for each item, track the 30-day investigation
                windows, and know what to do when the bureau responds.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="page-cta">
          <div className="wrap">
            <h2>Upload your report. Find the errors. Dispute them.</h2>
            <p>
              ScoreVera analyzes your credit report, identifies the items that can
              be disputed, and generates the right letters for each one.
            </p>
            <a
              href="https://app.scorevera.com/"
              className="btn btn-p"
              style={{ fontSize: "1rem", padding: "14px 32px" }}
            >
              Start Identifying Errors
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
