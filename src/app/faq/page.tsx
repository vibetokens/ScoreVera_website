import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FAQ | ScoreVera",
  description:
    "Answers to the most common questions about ScoreVera — what it is, how disputes work under the FCRA, and what to expect from the process.",
};

const faqs = [
  {
    q: "Is ScoreVera a credit repair company?",
    a: "No. ScoreVera is credit dispute software — a tool you use yourself, not a service that does it for you. Under the Credit Repair Organizations Act (CROA), credit repair companies cannot do a single thing that you cannot legally do yourself for free. ScoreVera gives you the structure, letter templates, and timing guidance to run your own FCRA dispute process. We do not submit disputes on your behalf, and we do not charge the kind of fees credit repair companies charge because we are not doing what they do.",
  },
  {
    q: "Will disputing hurt my credit score?",
    a: "No. Filing a dispute with a credit bureau does not affect your credit score. The FCRA grants you the right to dispute inaccurate or unverifiable information at any time. The investigation process itself — which the bureau is required to complete within 30 days — does not generate an inquiry or otherwise impact your score. What can affect your score is the outcome: if a negative item is removed, your score may improve. If it is verified and stays, nothing changes from the act of disputing.",
  },
  {
    q: "How long does a dispute take?",
    a: "Under the Fair Credit Reporting Act (§ 611), credit bureaus are required to complete their investigation within 30 days of receiving your dispute — or 45 days if you provide additional information during the investigation window. After that, they must notify you of the results in writing and provide a free copy of your credit report if the dispute results in a change. ScoreVera tracks these windows for you and alerts you when it is time to follow up or escalate.",
  },
  {
    q: "What if the bureau rejects my dispute?",
    a: "Rejection is not the end. If a bureau verifies an item you believe is inaccurate or unverifiable, you have several escalation options: you can send a debt validation letter to the furnisher (the original creditor or collection agency), request the method of verification from the bureau, file a complaint with the Consumer Financial Protection Bureau (CFPB) or the FTC, or add a 100-word consumer statement to your report. For serious violations, you may have grounds for legal action under FCRA § 616 and § 617. ScoreVera's Guided plan includes escalation logic that walks you through what to do next based on the bureau's response.",
  },
  {
    q: "Can I dispute accurate information?",
    a: "No — and you should not try. The FCRA gives you the right to dispute information that is inaccurate, incomplete, or unverifiable. Disputing accurate information is not only ineffective (the bureau will verify it and it will stay), it is also potentially fraudulent. ScoreVera is designed to help you identify and dispute genuinely problematic items: wrong balances, accounts that are not yours, duplicate entries, outdated negative items past their reporting window, and items that cannot be verified by the furnisher.",
  },
  {
    q: "What credit reports work with ScoreVera?",
    a: "ScoreVera supports PDF credit reports from all three major bureaus: Equifax, Experian, and TransUnion. You can obtain free copies of your reports at AnnualCreditReport.com, which is the only federally authorized source for free annual credit reports. Once you upload your PDF, ScoreVera parses the report to identify negative items, account statuses, and dispute opportunities. We recommend pulling all three reports because the information on each can differ significantly.",
  },
  {
    q: "Do I need a lawyer to dispute my credit report?",
    a: "No. The FCRA is a federal consumer protection law designed to be used directly by consumers without legal representation. You have the right to dispute inaccurate information on your own, at no cost, by writing directly to the credit bureaus and the furnishers of the information. ScoreVera gives you the letter templates, sequencing guidance, and tracking tools to exercise those rights correctly. That said, if a bureau or furnisher has committed a knowing violation of the FCRA, you may have grounds for a civil lawsuit — in that case, consulting a consumer protection attorney is worth considering.",
  },
  {
    q: "What is the difference between the plans?",
    a: "ScoreVera has four plans. Free ($0) lets you upload your credit report and identify negative items — no letters or tracking. Core System ($29/mo) unlocks the full dispute letter engine, all core letter types, 30-day timeline tracking, and one profile. Guided System ($49/mo, most popular) adds next-best-action guidance, multi-round sequencing, escalation logic, and mistake guardrails — this is the plan for people who want the system to help them think through each step. Operator ($99/mo) includes everything in Guided plus multiple profiles, bulk workflows, and client-level tracking — built for people running the process for themselves and others at scale.",
  },
  {
    q: "How do I cancel my subscription?",
    a: "You can cancel at any time from your account settings. There are no contracts, no cancellation fees, and no minimum commitment. If you cancel, your subscription remains active through the end of the billing period you have already paid for, and then it stops. We do not do auto-renewals after cancellation or charge you again without your consent. If you have any trouble canceling, email support@scorevera.com and we will take care of it.",
  },
  {
    q: "Is my credit report data secure?",
    a: "Yes. Your credit report data is encrypted in transit and at rest. We do not sell your data to third parties — ever. Your uploaded report is used only to power your ScoreVera account. You can delete your data from your account settings at any time, and we will remove it from our systems. We take consumer data privacy seriously, especially given the sensitivity of credit information. For specific security questions, email security@scorevera.com.",
  },
];

export default function FAQPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero" style={{ paddingTop: "100px" }}>
          <div className="wrap">
            <span className="eyebrow">Frequently Asked Questions</span>
            <h1>Straight answers about ScoreVera and the dispute process.</h1>
            <p className="body-lg">
              No fluff. If your question is not here, email{" "}
              <a
                href="mailto:support@scorevera.com"
                style={{ color: "var(--gold)", textDecoration: "underline" }}
              >
                support@scorevera.com
              </a>
              .
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
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  style={{
                    borderBottom: "1px solid var(--border)",
                    padding: "32px 0",
                  }}
                >
                  <h2
                    style={{
                      fontFamily: "var(--f-u)",
                      fontSize: "clamp(1rem, 2vw, 1.125rem)",
                      fontWeight: 600,
                      color: "var(--t1)",
                      lineHeight: 1.4,
                      marginBottom: "14px",
                    }}
                  >
                    {faq.q}
                  </h2>
                  <p
                    className="body-lg"
                    style={{ color: "var(--t2)", lineHeight: 1.75 }}
                  >
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="page-cta">
          <div className="wrap">
            <h2>Ready to start your dispute?</h2>
            <p>
              Upload your credit report for free. See exactly what needs to be
              addressed before you spend a dollar.
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
