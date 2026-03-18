import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | ScoreVera",
  description:
    "Read ScoreVera's Terms of Service. ScoreVera is a software tool that helps you exercise your FCRA rights — not a credit repair company.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <div className="wrap">
          <div style={{ maxWidth: "720px", margin: "0 auto", padding: "72px 0 100px" }}>
            <span className="eyebrow" style={{ marginBottom: "14px", display: "block" }}>Legal</span>
            <h1
              style={{
                fontFamily: "var(--f-d)",
                fontSize: "clamp(1.875rem,4vw,2.5rem)",
                color: "var(--t1)",
                lineHeight: "1.15",
                letterSpacing: "-.03em",
                marginBottom: "20px",
              }}
            >
              Terms of Service
            </h1>
            <p
              style={{
                fontSize: ".8125rem",
                fontFamily: "var(--f-m)",
                color: "var(--t3)",
                marginBottom: "48px",
              }}
            >
              Last updated: March 2026
            </p>

            <div style={{ marginBottom: "40px" }}>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: "1.8", marginBottom: "0" }}>
                Please read these Terms of Service ("Terms") carefully before using ScoreVera's website
                or software platform (the "Service"), operated by ScoreVera ("we," "us," or "our"). By
                creating an account or using the Service, you agree to be bound by these Terms. If you
                do not agree, do not use the Service.
              </p>
            </div>

            <div style={{ marginBottom: "40px" }}>
              <h2
                style={{
                  fontFamily: "var(--f-d)",
                  fontSize: "1.25rem",
                  color: "var(--t1)",
                  marginBottom: "12px",
                  letterSpacing: "-.02em",
                }}
              >
                1. Acceptance of Terms
              </h2>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: "1.8", marginBottom: "0" }}>
                By accessing or using the Service, you represent that you are at least 18 years old, have
                the legal capacity to enter into a binding agreement, and agree to comply with these Terms
                and all applicable laws. We reserve the right to update these Terms at any time. Continued
                use of the Service after changes are posted constitutes your acceptance of the revised Terms.
              </p>
            </div>

            <div style={{ marginBottom: "40px" }}>
              <h2
                style={{
                  fontFamily: "var(--f-d)",
                  fontSize: "1.25rem",
                  color: "var(--t1)",
                  marginBottom: "12px",
                  letterSpacing: "-.02em",
                }}
              >
                2. Service Description
              </h2>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: "1.8", marginBottom: "14px" }}>
                ScoreVera is a <strong style={{ color: "var(--t1)" }}>self-service software tool</strong> that
                helps individuals identify potentially inaccurate items on their credit reports and generate
                dispute letters based on their rights under the Fair Credit Reporting Act (FCRA).
              </p>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: "1.8", marginBottom: "14px" }}>
                <strong style={{ color: "var(--t1)" }}>ScoreVera is not a credit repair organization</strong> as
                defined under the Credit Repair Organizations Act (CROA), 15 U.S.C. § 1679 et seq. We do
                not act on your behalf, do not contact credit bureaus or creditors on your behalf, and do
                not make any representations that we can improve your credit score. All dispute letters are
                submitted directly by you.
              </p>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: "1.8", marginBottom: "0" }}>
                The Service does not constitute legal advice. If you have questions about your specific
                legal rights or situation, you should consult a qualified attorney.
              </p>
            </div>

            <div style={{ marginBottom: "40px" }}>
              <h2
                style={{
                  fontFamily: "var(--f-d)",
                  fontSize: "1.25rem",
                  color: "var(--t1)",
                  marginBottom: "12px",
                  letterSpacing: "-.02em",
                }}
              >
                3. User Responsibilities
              </h2>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: "1.8", marginBottom: "14px" }}>
                You are responsible for providing accurate information when using the Service, including
                the contents of any credit report data you enter. You agree not to submit disputes for
                items you know to be accurate, as doing so may constitute fraud and violates these Terms.
              </p>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: "1.8", marginBottom: "0" }}>
                You are solely responsible for all actions taken in connection with the dispute letters
                generated by the Service. ScoreVera provides tools and templates; you decide whether to
                use them and bear responsibility for how you use them.
              </p>
            </div>

            <div style={{ marginBottom: "40px" }}>
              <h2
                style={{
                  fontFamily: "var(--f-d)",
                  fontSize: "1.25rem",
                  color: "var(--t1)",
                  marginBottom: "12px",
                  letterSpacing: "-.02em",
                }}
              >
                4. Prohibited Uses
              </h2>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: "1.8", marginBottom: "14px" }}>
                You agree not to use the Service to:
              </p>
              <ul
                style={{
                  fontSize: ".9375rem",
                  color: "var(--t2)",
                  lineHeight: "1.8",
                  paddingLeft: "1.5rem",
                  marginBottom: "0",
                }}
              >
                <li style={{ marginBottom: "8px" }}>Dispute accurate information with intent to deceive creditors or bureaus</li>
                <li style={{ marginBottom: "8px" }}>Violate any applicable federal, state, or local law or regulation</li>
                <li style={{ marginBottom: "8px" }}>Resell, sublicense, or commercially redistribute access to the Service</li>
                <li style={{ marginBottom: "8px" }}>Reverse engineer, decompile, or attempt to extract the source code of the platform</li>
                <li style={{ marginBottom: "8px" }}>Upload malicious code or interfere with the integrity of the Service</li>
                <li style={{ marginBottom: "0" }}>Use automated tools to scrape, crawl, or extract data from the Service</li>
              </ul>
            </div>

            <div style={{ marginBottom: "40px" }}>
              <h2
                style={{
                  fontFamily: "var(--f-d)",
                  fontSize: "1.25rem",
                  color: "var(--t1)",
                  marginBottom: "12px",
                  letterSpacing: "-.02em",
                }}
              >
                5. Subscription & Billing
              </h2>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: "1.8", marginBottom: "14px" }}>
                Access to ScoreVera is provided on a monthly subscription basis. Your subscription renews
                automatically each month until cancelled. You may cancel at any time through your account
                settings or by contacting support; cancellation takes effect at the end of the current
                billing period.
              </p>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: "1.8", marginBottom: "0" }}>
                All fees are charged in U.S. dollars. We reserve the right to change subscription pricing
                with at least 30 days' advance notice. Continued use of the Service after a price change
                takes effect constitutes acceptance of the new pricing. We do not offer refunds for partial
                subscription periods except where required by applicable law.
              </p>
            </div>

            <div style={{ marginBottom: "40px" }}>
              <h2
                style={{
                  fontFamily: "var(--f-d)",
                  fontSize: "1.25rem",
                  color: "var(--t1)",
                  marginBottom: "12px",
                  letterSpacing: "-.02em",
                }}
              >
                6. Intellectual Property
              </h2>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: "1.8", marginBottom: "0" }}>
                All content, software, templates, designs, and functionality comprising the Service are
                owned by ScoreVera and protected by applicable intellectual property laws. Your subscription
                grants you a limited, non-exclusive, non-transferable license to use the Service for your
                personal dispute purposes only. You retain ownership of any personal data you provide, and
                we claim no intellectual property rights over your credit report data.
              </p>
            </div>

            <div style={{ marginBottom: "40px" }}>
              <h2
                style={{
                  fontFamily: "var(--f-d)",
                  fontSize: "1.25rem",
                  color: "var(--t1)",
                  marginBottom: "12px",
                  letterSpacing: "-.02em",
                }}
              >
                7. Disclaimers & No Guaranteed Results
              </h2>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: "1.8", marginBottom: "14px" }}>
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS
                OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: "1.8", marginBottom: "14px" }}>
                We make no guarantee that using the Service will result in any improvement to your credit
                score or the removal of any item from your credit report. Results depend entirely on the
                response of the credit bureaus or furnishers, the accuracy of the disputed items, and
                factors outside our control. Your FCRA rights belong to you — ScoreVera helps you
                exercise them, but cannot guarantee any particular outcome.
              </p>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: "1.8", marginBottom: "0" }}>
                <strong style={{ color: "var(--t1)" }}>CROA Notice.</strong> You have the right to dispute
                inaccurate information in your credit report directly with any consumer reporting agency
                at no charge. You are not required to pay for assistance in disputing inaccurate information.
                ScoreVera charges for software tools and productivity features, not for the right to dispute
                itself, which you already possess under federal law.
              </p>
            </div>

            <div style={{ marginBottom: "40px" }}>
              <h2
                style={{
                  fontFamily: "var(--f-d)",
                  fontSize: "1.25rem",
                  color: "var(--t1)",
                  marginBottom: "12px",
                  letterSpacing: "-.02em",
                }}
              >
                8. Limitation of Liability
              </h2>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: "1.8", marginBottom: "0" }}>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, SCOREVERA AND ITS OFFICERS, DIRECTORS,
                EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE,
                INCLUDING BUT NOT LIMITED TO LOSS OF CREDIT OPPORTUNITIES, FINANCIAL LOSS, OR EMOTIONAL
                DISTRESS. IN NO EVENT SHALL OUR AGGREGATE LIABILITY EXCEED THE AMOUNT YOU PAID TO
                SCOREVERA IN THE THREE MONTHS PRECEDING THE CLAIM.
              </p>
            </div>

            <div style={{ marginBottom: "40px" }}>
              <h2
                style={{
                  fontFamily: "var(--f-d)",
                  fontSize: "1.25rem",
                  color: "var(--t1)",
                  marginBottom: "12px",
                  letterSpacing: "-.02em",
                }}
              >
                9. Governing Law
              </h2>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: "1.8", marginBottom: "0" }}>
                These Terms shall be governed by and construed in accordance with the laws of the United
                States and the state in which ScoreVera is principally operated, without regard to conflict
                of law principles. Any disputes arising under these Terms shall be resolved through binding
                arbitration on an individual basis, except where prohibited by law. You waive any right to
                participate in a class action lawsuit or class-wide arbitration.
              </p>
            </div>

            <div style={{ marginBottom: "0" }}>
              <h2
                style={{
                  fontFamily: "var(--f-d)",
                  fontSize: "1.25rem",
                  color: "var(--t1)",
                  marginBottom: "12px",
                  letterSpacing: "-.02em",
                }}
              >
                10. Contact
              </h2>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: "1.8", marginBottom: "0" }}>
                Questions about these Terms? Contact us at{" "}
                <a
                  href="mailto:privacy@scorevera.com"
                  style={{ color: "var(--gold)", textDecoration: "none" }}
                >
                  privacy@scorevera.com
                </a>
                . ScoreVera is founded and operated by Jason Murphy.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
