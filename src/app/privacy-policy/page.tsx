import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | ScoreVera",
  description:
    "Learn how ScoreVera collects, uses, and protects your personal information and credit report data.",
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
              Privacy Policy
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
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: "1.8", marginBottom: "14px" }}>
                ScoreVera ("we," "us," or "our") operates scorevera.com and the ScoreVera credit dispute
                software platform (the "Service"). This Privacy Policy explains what information we collect,
                how we use it, and your rights regarding that information. By using the Service, you agree
                to the practices described below.
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
                1. Information We Collect
              </h2>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: "1.8", marginBottom: "14px" }}>
                <strong style={{ color: "var(--t1)" }}>Account Information.</strong> When you create an account,
                we collect your name, email address, and billing information. This information is required to
                provide the Service and process your subscription.
              </p>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: "1.8", marginBottom: "14px" }}>
                <strong style={{ color: "var(--t1)" }}>Credit Report Data.</strong> You may upload or manually
                enter information from your credit reports obtained from Equifax, Experian, or TransUnion.
                This data is used exclusively to generate dispute letters on your behalf. We treat this data
                as highly sensitive and apply strict controls to its handling and storage.
              </p>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: "1.8", marginBottom: "14px" }}>
                <strong style={{ color: "var(--t1)" }}>Usage Data.</strong> We automatically collect information
                about how you interact with the Service, including pages visited, features used, browser type,
                operating system, IP address, and referring URLs. This data helps us improve the product and
                diagnose technical issues.
              </p>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: "1.8", marginBottom: "0" }}>
                <strong style={{ color: "var(--t1)" }}>Communications.</strong> If you contact us for support
                or send feedback, we retain those communications to resolve your inquiry and improve the Service.
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
                2. How We Use Your Information
              </h2>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: "1.8", marginBottom: "14px" }}>
                <strong style={{ color: "var(--t1)" }}>Provide the Service.</strong> We use your account
                information and credit report data to generate FCRA-compliant dispute letters, manage your
                account, process payments, and deliver customer support.
              </p>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: "1.8", marginBottom: "14px" }}>
                <strong style={{ color: "var(--t1)" }}>Improve the Product.</strong> Aggregated, anonymized
                usage data helps us identify areas for improvement, prioritize new features, and measure
                the effectiveness of existing functionality. We do not use identifiable credit report data
                for product analytics.
              </p>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: "1.8", marginBottom: "0" }}>
                <strong style={{ color: "var(--t1)" }}>Communicate with You.</strong> We may send transactional
                emails (receipts, account alerts), product updates, and — with your consent — marketing
                communications. You may opt out of marketing emails at any time via the unsubscribe link
                in any message or by emailing privacy@scorevera.com.
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
                3. Data Security
              </h2>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: "1.8", marginBottom: "14px" }}>
                We use industry-standard encryption (TLS in transit, AES-256 at rest) to protect your data.
                Access to personally identifiable information and credit report data is restricted to
                authorized personnel who require it to operate the Service.
              </p>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: "1.8", marginBottom: "0" }}>
                We do not sell, rent, or share your personal information or credit report data with third
                parties for their own marketing purposes. We may share data with trusted service providers
                (payment processors, cloud hosting) who are contractually obligated to protect it and use
                it only to perform services for ScoreVera. In limited circumstances, we may disclose data
                when required by law or to protect the rights and safety of our users.
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
                4. Credit Report Data
              </h2>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: "1.8", marginBottom: "14px" }}>
                Credit report data you provide is processed solely for the purpose of generating dispute
                letters and tracking your dispute progress within the Service. We never sell, license,
                or otherwise transfer your credit report data to any third party.
              </p>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: "1.8", marginBottom: "0" }}>
                You may request deletion of all credit report data associated with your account at any
                time (see Your Rights below). Upon account cancellation, credit report data is permanently
                deleted from our systems within 30 days unless you request earlier deletion.
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
                5. Your Rights
              </h2>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: "1.8", marginBottom: "14px" }}>
                <strong style={{ color: "var(--t1)" }}>Access.</strong> You may request a copy of the personal
                information we hold about you at any time by contacting privacy@scorevera.com.
              </p>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: "1.8", marginBottom: "14px" }}>
                <strong style={{ color: "var(--t1)" }}>Correction.</strong> If any information we hold is
                inaccurate, you may request that we correct it. Most account details can be updated
                directly within your account settings.
              </p>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: "1.8", marginBottom: "14px" }}>
                <strong style={{ color: "var(--t1)" }}>Deletion.</strong> You may request deletion of your
                account and all associated data by emailing privacy@scorevera.com. We will fulfill deletion
                requests within 30 days, subject to any legal obligations to retain certain records.
              </p>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: "1.8", marginBottom: "0" }}>
                <strong style={{ color: "var(--t1)" }}>Portability.</strong> You may request an export of
                your account data in a machine-readable format. Contact privacy@scorevera.com to initiate
                a data export.
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
                6. Cookies & Tracking
              </h2>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: "1.8", marginBottom: "14px" }}>
                We use essential cookies to maintain your session and remember your preferences. We may also
                use analytics cookies (such as those provided by anonymized analytics platforms) to understand
                how users navigate the Service. We do not use advertising or cross-site tracking cookies.
              </p>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: "1.8", marginBottom: "0" }}>
                You can configure your browser to refuse cookies, though some features of the Service may
                not function correctly without them.
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
                7. Children's Privacy
              </h2>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: "1.8", marginBottom: "0" }}>
                The Service is not directed to children under 18. We do not knowingly collect personal
                information from minors. If you believe a minor has provided us with personal information,
                please contact privacy@scorevera.com and we will promptly delete it.
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
                8. Changes to This Policy
              </h2>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: "1.8", marginBottom: "0" }}>
                We may update this Privacy Policy from time to time. When we do, we will revise the "Last
                updated" date at the top of this page and, where changes are material, notify you by email
                or via a notice within the Service. Your continued use of the Service after any update
                constitutes acceptance of the revised policy.
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
                9. Contact
              </h2>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: "1.8", marginBottom: "0" }}>
                If you have questions about this Privacy Policy or want to exercise your rights, contact us
                at{" "}
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
