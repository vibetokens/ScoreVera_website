import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Security | ScoreVera",
  description:
    "How ScoreVera protects your credit report data — TLS encryption, AES-256 at rest, no third-party data sales, account-level isolation, and full user control over deletion.",
};

const pillars = [
  {
    id: "encryption",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 11V7a4 4 0 018 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="16" r="1.5" fill="currentColor" />
      </svg>
    ),
    eyebrow: "Encryption",
    heading: "Data encrypted in transit and at rest",
    body: "All data transmitted between your browser and ScoreVera's servers is encrypted using TLS (Transport Layer Security), the same standard used by banks and financial institutions. Data stored on our servers — including your credit report information, account details, and generated letters — is encrypted at rest using AES-256 encryption. AES-256 is the encryption standard used by the U.S. government for classified information. Your data is unreadable to anyone who does not hold the decryption keys, which are themselves protected and rotated regularly.",
  },
  {
    id: "report-handling",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 2v6h6M9 13h6M9 17h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    eyebrow: "Credit Report Handling",
    heading: "Uploaded reports are processed, not stored long-term",
    body: "When you upload a credit report PDF, it is processed to extract the information needed to identify disputable items and pre-fill your dispute letters. The raw PDF is not retained indefinitely. Extracted data (account names, reported statuses, balances, dates) is stored within your account so you can manage disputes over time, but the original uploaded document is removed after processing is complete. If you choose to delete your report data from your account settings, that extracted data is permanently removed from our systems. We do not retain copies of your credit reports beyond what is necessary to operate your active disputes.",
  },
  {
    id: "no-data-sales",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4.93 4.93l14.14 14.14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 12h6M12 9v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    eyebrow: "No Data Sales",
    heading: "Your data is never sold or shared with third parties",
    body: "ScoreVera does not sell, rent, license, or otherwise transfer your personal information, credit report data, or account data to any third party for any purpose. We do not share your data with advertisers, data brokers, marketing platforms, or analytics firms. The only third parties who access your data are our infrastructure providers — cloud hosting and payment processors — who are contractually prohibited from using your data for any purpose other than providing services to ScoreVera. We do not use your credit report data for aggregate analytics or product research. Your financial information is not a product we sell.",
  },
  {
    id: "access-controls",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    eyebrow: "Access Controls",
    heading: "Account-level isolation — your data is yours alone",
    body: "ScoreVera enforces strict account-level data isolation. Each user account is scoped to its own data partition, and there are no mechanisms by which one user can access another user's credit report data, letters, or dispute records. Our internal access controls follow the principle of least privilege — team members only have access to the data they need to perform their specific role, and internal access to user data is logged and audited. Credit report data is never accessible to customer-facing tools or external integrations unless you explicitly export or share it yourself.",
  },
  {
    id: "infrastructure",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="3" width="20" height="7" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="2" y="14" width="20" height="7" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 7h.01M6 18h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    eyebrow: "Infrastructure",
    heading: "Hosted on enterprise-grade cloud infrastructure",
    body: "ScoreVera is hosted on a major U.S.-based cloud provider with physical data centers that maintain SOC 2 Type II certifications, ISO 27001 compliance, and 24/7 physical security. Our infrastructure includes redundant storage, automated backups, and geographic redundancy to ensure availability and data durability. We follow SOC 2-aligned security practices across our own operations, including security review processes for new code, dependency management, and routine vulnerability assessments. Our hosting environment is isolated from other tenants through virtual private cloud architecture, providing an additional layer of network-level separation.",
  },
  {
    id: "your-control",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    eyebrow: "Your Control",
    heading: "Delete your data at any time, from your account settings",
    body: "You have full control over your data within ScoreVera. You can delete individual dispute records, remove uploaded credit report data, or close your account entirely — all from your account settings without contacting support. When you delete data, it is removed immediately from your active account and purged from our systems within 30 days, including backups. There is no retention of deleted user data beyond what is required by law. Account deletion removes all your personal information, credit report data, and generated letters permanently. If you close your account and change your mind within 30 days, contact us at security@scorevera.com to request a data recovery.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="page-hero" style={{ paddingTop: "100px" }}>
          <div className="wrap">
            <span className="eyebrow">Security</span>
            <h1 className="h-xl">
              Your credit data is the most sensitive information you&apos;ll ever upload.
            </h1>
            <p className="body-lg" style={{ maxWidth: "640px" }}>
              We treat it accordingly. Here&apos;s exactly how ScoreVera
              protects your data — what we encrypt, what we don&apos;t store,
              what we never sell, and how you stay in control.
            </p>
          </div>
        </section>

        {/* QUICK SUMMARY */}
        <div className="info-band">
          <div className="wrap">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "24px",
              }}
            >
              {[
                { label: "TLS in transit" },
                { label: "AES-256 at rest" },
                { label: "No third-party data sales" },
                { label: "Delete anytime" },
                { label: "SOC 2-aligned infrastructure" },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                    style={{ color: "var(--gold)", flexShrink: 0 }}
                  >
                    <path
                      d="M3 8l3.5 3.5L13 4.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span style={{ fontSize: ".875rem", color: "var(--t2)" }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECURITY PILLARS */}
        <section className="page-section">
          <div className="wrap">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: "16px",
              }}
            >
              {pillars.map((pillar) => (
                <div
                  key={pillar.id}
                  id={pillar.id}
                  style={{
                    background: "var(--elevated)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    padding: "28px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "10px",
                      background: "rgba(201,165,90,.1)",
                      border: "1px solid rgba(201,165,90,.18)",
                      color: "var(--gold)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {pillar.icon}
                  </div>
                  <div>
                    <span
                      className="eyebrow"
                      style={{ marginBottom: "8px", display: "block", fontSize: ".6875rem" }}
                    >
                      {pillar.eyebrow}
                    </span>
                    <h2
                      style={{
                        fontFamily: "var(--f-d)",
                        fontSize: "1.0625rem",
                        color: "var(--t1)",
                        letterSpacing: "-.02em",
                        lineHeight: 1.3,
                        marginBottom: "12px",
                      }}
                    >
                      {pillar.heading}
                    </h2>
                    <p style={{ fontSize: ".875rem", color: "var(--t2)", lineHeight: 1.7, margin: 0 }}>
                      {pillar.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT WE DON'T DO */}
        <section className="page-section" style={{ background: "var(--surface)" }}>
          <div className="wrap">
            <div style={{ maxWidth: "680px" }}>
              <span className="eyebrow" style={{ marginBottom: "14px", display: "block" }}>
                What We Don&apos;t Do
              </span>
              <h2
                style={{
                  fontFamily: "var(--f-d)",
                  fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
                  color: "var(--t1)",
                  letterSpacing: "-.025em",
                  marginBottom: "28px",
                }}
              >
                A clear list of things ScoreVera will never do with your data
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  "Sell your personal information or credit report data to any third party",
                  "Share your data with advertisers, data brokers, or credit bureaus for marketing",
                  "Use your credit report data for aggregate product analytics or AI training",
                  "Retain uploaded credit report PDFs after processing is complete",
                  "Keep your data after you delete it or close your account (beyond 30-day purge window)",
                  "Access your account data except for support purposes when you request it",
                  "Submit disputes or take any action on your behalf without your explicit action",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "flex-start",
                      padding: "12px 16px",
                      background: "var(--elevated)",
                      border: "1px solid var(--border)",
                      borderRadius: "8px",
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                      style={{
                        color: "rgba(239,68,68,.7)",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    >
                      <path
                        d="M4 4l8 8M12 4l-8 8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span style={{ fontSize: ".875rem", color: "var(--t2)", lineHeight: 1.6 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="page-section">
          <div className="wrap">
            <div style={{ maxWidth: "560px" }}>
              <span className="eyebrow" style={{ marginBottom: "14px", display: "block" }}>
                Security Contact
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
                Questions or concerns about security?
              </h2>
              <p className="body-lg" style={{ marginBottom: "20px" }}>
                If you have discovered a potential security vulnerability, have
                a question about how we handle your data, or want to request
                deletion of your information, contact our security team directly.
              </p>
              <a
                href="mailto:security@scorevera.com"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "var(--gold)",
                  fontFamily: "var(--f-m)",
                  fontSize: "1rem",
                  textDecoration: "none",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 6l-10 7L2 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                security@scorevera.com
              </a>
              <p
                style={{
                  fontSize: ".8125rem",
                  color: "var(--t3)",
                  marginTop: "12px",
                  lineHeight: 1.6,
                }}
              >
                We take security reports seriously and will respond within 48
                hours. For responsible disclosure of security vulnerabilities,
                please include as much detail as possible about the nature of
                the issue and the steps to reproduce it.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="page-cta">
          <div className="wrap">
            <h2>Your data. Your disputes. Your control.</h2>
            <p>
              ScoreVera is built on the principle that your financial
              information belongs to you — not us. Start disputing for free.
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
