import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Credit & Dispute Glossary | ScoreVera",
  description:
    "Plain-English definitions of every credit, debt, and FCRA term you'll encounter when disputing your credit report.",
};

type Term = {
  term: string;
  definition: string;
  link?: string;
};

type Section = {
  letter: string;
  terms: Term[];
};

const glossary: Section[] = [
  {
    letter: "A",
    terms: [
      {
        term: "Adverse Action Notice",
        definition:
          "Written notice a creditor must send when they deny credit, increase rates, or take negative action based on your credit report. Must include which bureau was used and your right to a free report.",
        link: "/blog/how-to-get-your-credit-report-after-being-denied-credit",
      },
      {
        term: "Annual Credit Report",
        definition:
          "Your free credit report from AnnualCreditReport.com. You're entitled to weekly free reports from all three major bureaus.",
        link: "/blog/how-to-get-free-credit-report",
      },
      {
        term: "Authorized User",
        definition:
          "Someone added to another person's credit card account. The account history appears on the authorized user's credit report.",
        link: "/blog/build-credit-from-scratch",
      },
    ],
  },
  {
    letter: "B",
    terms: [
      {
        term: "Balance",
        definition: "The total amount currently owed on an account.",
      },
      {
        term: "Bankruptcy",
        definition:
          "A legal process that discharges or restructures debt. Chapter 7 stays on your report 10 years; Chapter 13 stays 7 years.",
        link: "/blog/what-happens-to-your-credit-report-after-bankruptcy",
      },
      {
        term: "Bureau",
        definition:
          "Short for credit bureau. The three major bureaus are Equifax, Experian, and TransUnion.",
        link: "/blog/equifax-experian-transunion-differences",
      },
    ],
  },
  {
    letter: "C",
    terms: [
      {
        term: "CFPB (Consumer Financial Protection Bureau)",
        definition:
          "Federal agency that enforces consumer financial laws including the FCRA and FDCPA. Accepts consumer complaints at consumerfinance.gov.",
        link: "/blog/escalate-dispute-to-cfpb",
      },
      {
        term: "Charge-Off",
        definition:
          "When a creditor writes off a debt as a loss after ~180 days of non-payment. The debt still exists and can be collected. It stays on your report 7 years.",
        link: "/blog/how-to-dispute-charge-off-credit-report",
      },
      {
        term: "ChexSystems",
        definition:
          "A specialty consumer reporting agency that tracks bank account history. Used by banks when opening new accounts.",
        link: "/blog/what-is-chexsystems-and-how-to-dispute-it",
      },
      {
        term: "Collection Account",
        definition:
          "A debt that has been transferred to a collection agency after the original creditor gave up on collecting it.",
        link: "/blog/how-to-remove-collection-from-credit-report",
      },
      {
        term: "Consumer Statement",
        definition:
          "A 100-word statement you can add to your credit report to explain a disputed item that wasn't removed. Your right under FCRA § 611(b).",
      },
      {
        term: "Credit Bureau",
        definition:
          "Companies that collect and maintain credit history data. The three major ones are Equifax, Experian, and TransUnion.",
        link: "/blog/equifax-experian-transunion-differences",
      },
      {
        term: "Credit Freeze",
        definition:
          "Restricts access to your credit file, preventing new accounts from being opened in your name.",
        link: "/blog/credit-report-freeze-vs-fraud-alert",
      },
      {
        term: "Credit Mix",
        definition:
          "One of the five FICO score factors. Having both revolving (credit cards) and installment (loans) accounts.",
        link: "/blog/how-credit-scores-are-calculated",
      },
      {
        term: "Credit Repair Organization",
        definition:
          "A company that charges fees to dispute items on your behalf. Regulated by CROA. Not the same as credit dispute software.",
      },
      {
        term: "Credit Utilization",
        definition:
          "The percentage of your available revolving credit you're currently using. One of the most impactful FICO factors.",
        link: "/blog/credit-utilization-guide",
      },
      {
        term: "CROA (Credit Repair Organizations Act)",
        definition:
          "Federal law regulating credit repair companies. Prohibits advance fees and false claims.",
      },
    ],
  },
  {
    letter: "D",
    terms: [
      {
        term: "Debt Buyer",
        definition:
          "A company that purchases charged-off debt from creditors at a discount and then attempts to collect it.",
      },
      {
        term: "Debt Validation",
        definition:
          "Your right under the FDCPA to request proof that a debt collector has the right to collect a debt and that the amount is accurate.",
        link: "/blog/debt-validation-letter-guide",
      },
      {
        term: "Default",
        definition:
          "Failure to make payments as agreed. Different creditors define default differently, but typically after 90–180 days.",
      },
      {
        term: "Derogatory Mark",
        definition:
          "Any negative item on your credit report: late payments, collections, charge-offs, bankruptcies, judgments.",
      },
      {
        term: "Dispute",
        definition:
          "A formal request to a credit bureau or data furnisher to investigate and correct inaccurate information.",
        link: "/blog/how-to-dispute-credit-report-error",
      },
    ],
  },
  {
    letter: "E",
    terms: [
      {
        term: "E-OSCAR",
        definition:
          "The electronic system credit bureaus use to process disputes with data furnishers. Known for treating disputes as form codes rather than individual reviews.",
        link: "/blog/what-is-e-oscar-credit-bureau-dispute-processing",
      },
      {
        term: "Equifax",
        definition: "One of the three major US credit bureaus.",
      },
      {
        term: "Experian",
        definition: "One of the three major US credit bureaus.",
      },
    ],
  },
  {
    letter: "F",
    terms: [
      {
        term: "FCRA (Fair Credit Reporting Act)",
        definition:
          "Federal law governing credit bureaus, data furnishers, and consumers' rights to accurate credit reports.",
        link: "/blog/fcra-rights-dispute-process",
      },
      {
        term: "FDCPA (Fair Debt Collection Practices Act)",
        definition:
          "Federal law limiting what third-party debt collectors can do and say when collecting debts.",
      },
      {
        term: "FICO Score",
        definition:
          "The most widely used credit scoring model, used in 90%+ of lending decisions. Scored 300–850.",
        link: "/blog/how-credit-scores-are-calculated",
      },
      {
        term: "Fraud Alert",
        definition:
          "A notice placed on your credit file asking lenders to take extra steps to verify your identity before extending credit. Less restrictive than a freeze.",
        link: "/blog/credit-report-freeze-vs-fraud-alert",
      },
      {
        term: "Furnisher",
        definition:
          "Any company that provides information to credit bureaus — banks, credit card issuers, collection agencies, etc. They have legal obligations under FCRA § 623.",
        link: "/blog/fcra-623-furnisher-dispute-rights",
      },
    ],
  },
  {
    letter: "G",
    terms: [
      {
        term: "Goodwill Letter",
        definition:
          "A letter asking a creditor to remove an accurate negative item as a courtesy based on your prior good history.",
        link: "/blog/goodwill-letter-late-payment",
      },
    ],
  },
  {
    letter: "H",
    terms: [
      {
        term: "Hard Inquiry",
        definition:
          "A credit check made when you apply for credit. Can temporarily lower your score 5–10 points.",
        link: "/blog/how-to-remove-hard-inquiry-credit-report",
      },
      {
        term: "HELOC",
        definition:
          "Home Equity Line of Credit. A revolving credit line secured by your home.",
      },
    ],
  },
  {
    letter: "I",
    terms: [
      {
        term: "Identity Theft",
        definition:
          "When someone uses your personal information to open accounts or make purchases in your name.",
        link: "/blog/credit-report-errors-after-identity-theft",
      },
      {
        term: "Inquiry",
        definition:
          "A record of when someone accessed your credit report. Hard inquiries affect your score; soft inquiries don't.",
        link: "/blog/hard-vs-soft-inquiries",
      },
      {
        term: "Installment Loan",
        definition:
          "A loan repaid in fixed monthly payments over a set term: car loans, mortgages, student loans, personal loans.",
      },
    ],
  },
  {
    letter: "J",
    terms: [
      {
        term: "Judgment",
        definition:
          "A court ruling that you owe a debt. Judgments can lead to wage garnishment. Paid judgments may still appear on your report.",
      },
    ],
  },
  {
    letter: "L",
    terms: [
      {
        term: "Late Payment",
        definition:
          "A payment made 30+ days past the due date. First reportable at 30 days.",
        link: "/blog/how-to-remove-late-payments-from-credit-report",
      },
    ],
  },
  {
    letter: "M",
    terms: [
      {
        term: "Medical Debt",
        definition:
          "Debt from healthcare services. As of 2025, medical debt under $500 and paid medical debt are no longer factored into most credit scores.",
        link: "/blog/medical-debt-credit-report-errors",
      },
      {
        term: "Method of Verification",
        definition:
          "A request to a credit bureau to explain how they verified a disputed item. Useful when a dispute is rejected.",
        link: "/blog/method-of-verification-letter",
      },
      {
        term: "Mixed File",
        definition:
          "When another consumer's information appears on your credit report due to similar names or SSNs.",
        link: "/blog/how-to-fix-mixed-credit-file",
      },
    ],
  },
  {
    letter: "N",
    terms: [
      {
        term: "Negative Item",
        definition: "Any derogatory mark on your credit report.",
      },
    ],
  },
  {
    letter: "O",
    terms: [
      {
        term: "Original Creditor",
        definition:
          "The company you originally borrowed from, before any debt was sold or sent to collections.",
        link: "/blog/original-creditor-vs-collection-agency-credit-report",
      },
      {
        term: "Original Delinquency Date",
        definition:
          "The date of your first missed payment that led to a charge-off. Critical for calculating when a negative item should fall off your report.",
      },
    ],
  },
  {
    letter: "P",
    terms: [
      {
        term: "Pay-for-Delete",
        definition:
          "An agreement to pay a collection in exchange for its removal from your credit report.",
        link: "/blog/pay-for-delete-agreement-credit-report",
      },
      {
        term: "Payment History",
        definition:
          "The largest factor in FICO (35%). Record of on-time vs. late payments across all accounts.",
      },
      {
        term: "Promissory Note",
        definition:
          "A written promise to repay a debt, typically used for personal loans and student loans.",
      },
    ],
  },
  {
    letter: "R",
    terms: [
      {
        term: "Re-aging",
        definition:
          "The illegal practice of resetting the date of delinquency when debt is sold, making it appear newer than it is.",
      },
      {
        term: "Repossession",
        definition:
          "When a lender reclaims collateral (usually a vehicle) after default.",
        link: "/blog/how-to-remove-a-repossession-from-credit-report",
      },
      {
        term: "Revolving Credit",
        definition:
          "Credit with no fixed payoff date — you can carry a balance and make minimum payments. Credit cards are revolving.",
      },
    ],
  },
  {
    letter: "S",
    terms: [
      {
        term: "Section 609 Letter",
        definition:
          "A dispute letter that invokes FCRA § 609 to request verification of items on your report.",
        link: "/blog/fcra-section-609-letter-guide",
      },
      {
        term: "Section 611",
        definition:
          "The FCRA provision giving you the right to dispute inaccurate information and requiring bureaus to investigate within 30 days.",
        link: "/blog/fcra-section-611-dispute-rights",
      },
      {
        term: "Section 623",
        definition:
          "The FCRA provision placing obligations on data furnishers to report accurate information and respond to disputes.",
        link: "/blog/fcra-623-furnisher-dispute-rights",
      },
      {
        term: "Soft Inquiry",
        definition:
          "A credit check that doesn't affect your score: checking your own report, background checks, pre-approval screening.",
      },
      {
        term: "Statute of Limitations",
        definition:
          "The time limit for a creditor to sue you to collect a debt. Varies by state and debt type.",
        link: "/blog/statute-of-limitations-debt-by-state",
      },
    ],
  },
  {
    letter: "T",
    terms: [
      {
        term: "Tradeline",
        definition:
          "Any account that appears on your credit report: credit cards, loans, collections, etc.",
      },
      {
        term: "TransUnion",
        definition: "One of the three major US credit bureaus.",
      },
    ],
  },
  {
    letter: "U",
    terms: [
      {
        term: "Utilization Rate",
        definition: "See Credit Utilization.",
      },
    ],
  },
  {
    letter: "V",
    terms: [
      {
        term: "VantageScore",
        definition:
          "An alternative credit scoring model created by the three bureaus. Scored 300–850 like FICO but not used in most lending decisions.",
      },
    ],
  },
  {
    letter: "W",
    terms: [
      {
        term: "Written Contract",
        definition:
          "A signed agreement to repay a debt. Statute of limitations varies by state.",
      },
    ],
  },
  {
    letter: "Z",
    terms: [
      {
        term: "Zombie Debt",
        definition:
          "Old debt past the statute of limitations that collectors attempt to revive, sometimes illegally.",
        link: "/blog/zombie-debt-credit-report",
      },
    ],
  },
];

export default function GlossaryPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero" style={{ paddingTop: "100px" }}>
          <div className="wrap">
            <span className="eyebrow">Reference</span>
            <h1>Credit &amp; Dispute Glossary</h1>
            <p className="body-lg">
              Plain-English definitions of every credit, debt, and FCRA term
              you'll encounter when disputing your credit report.
            </p>
          </div>
        </section>

        <section className="page-section">
          <div className="wrap">
            <div style={{ maxWidth: "760px" }}>
              {glossary.map((section) => (
                <div key={section.letter} id={`letter-${section.letter}`}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      padding: "48px 0 16px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--f-d)",
                        fontSize: "clamp(2rem, 4vw, 2.75rem)",
                        fontWeight: 700,
                        color: "var(--gold)",
                        lineHeight: 1,
                        minWidth: "48px",
                      }}
                    >
                      {section.letter}
                    </span>
                    <div
                      style={{
                        flex: 1,
                        height: "1px",
                        background: "var(--border)",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0",
                    }}
                  >
                    {section.terms.map((item, i) => (
                      <div
                        key={i}
                        style={{
                          borderBottom: "1px solid var(--border)",
                          padding: "24px 0",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "baseline",
                            flexWrap: "wrap",
                            gap: "10px",
                            marginBottom: "8px",
                          }}
                        >
                          <h2
                            style={{
                              fontFamily: "var(--f-d)",
                              fontSize: "clamp(1rem, 2vw, 1.125rem)",
                              fontWeight: 600,
                              color: "var(--t1)",
                              lineHeight: 1.3,
                              margin: 0,
                            }}
                          >
                            {item.term}
                          </h2>
                          {item.link && (
                            <a
                              href={item.link}
                              style={{
                                fontFamily: "var(--f-m)",
                                fontSize: "0.7rem",
                                color: "var(--gold)",
                                textDecoration: "none",
                                letterSpacing: "0.05em",
                                textTransform: "uppercase",
                                whiteSpace: "nowrap",
                                opacity: 0.85,
                              }}
                            >
                              Learn more →
                            </a>
                          )}
                        </div>
                        <p
                          className="body-lg"
                          style={{
                            color: "var(--t2)",
                            lineHeight: 1.75,
                            margin: 0,
                          }}
                        >
                          {item.definition}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="page-cta">
          <div className="wrap">
            <h2>Know the terms. Now use them.</h2>
            <p>
              Upload your credit report and let ScoreVera identify exactly which
              items to dispute — and build the letters to do it.
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
