import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Apply | ScoreVera",
  description:
    "Apply for a ScoreVera Operator, Professional, or Creator account. Volume access for credit coaches, mortgage professionals, financial advisors, and nonprofits.",
};

export default function ApplyPage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="page-hero" style={{ paddingTop: "100px" }}>
          <div className="wrap">
            <span className="eyebrow">Account Application</span>
            <h1>Apply for a ScoreVera Account</h1>
            <p>
              The Operator and Professional plans are available by application
              and approval. Tell us about your use case and we&apos;ll reach out
              within 48 hours with a custom onboarding plan.
            </p>
          </div>
        </section>

        {/* WHO SHOULD APPLY */}
        <section className="page-section">
          <div className="wrap">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "16px",
                marginBottom: "0",
              }}
            >
              <div>
                <h2 style={{ marginBottom: "12px" }}>Who Should Apply</h2>
                <p style={{ marginBottom: "10px" }}>
                  The application process is designed for people who need
                  volume access or want to use ScoreVera on behalf of multiple
                  clients in a professional capacity.
                </p>
                <ul>
                  <li>
                    <strong style={{ color: "var(--t1)" }}>Operators</strong> —
                    credit coaches, financial advisors, or nonprofits managing
                    disputes for many clients at once
                  </li>
                  <li>
                    <strong style={{ color: "var(--t1)" }}>
                      Mortgage &amp; Real Estate Professionals
                    </strong>{" "}
                    — who need clients dispute-ready before closing
                  </li>
                  <li>
                    <strong style={{ color: "var(--t1)" }}>
                      Enterprise Accounts
                    </strong>{" "}
                    — organizations requiring custom pricing, white-label
                    options, or API access
                  </li>
                  <li>
                    <strong style={{ color: "var(--t1)" }}>
                      Creator Program
                    </strong>{" "}
                    — content creators, educators, or influencers in the
                    personal finance space
                  </li>
                </ul>
              </div>

              <div>
                <h2 style={{ marginBottom: "12px" }}>What to Expect</h2>
                <ul>
                  <li>Application review within 48 hours</li>
                  <li>
                    A custom onboarding call to walk through your specific
                    workflow
                  </li>
                  <li>
                    Pricing based on your use case — volume discounts available
                    for 50+ active clients
                  </li>
                  <li>
                    Dedicated support during your first 30 days
                  </li>
                  <li>
                    Clear terms on what ScoreVera can and cannot do (we are
                    software, not a credit repair service)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* APPLICATION FORM */}
        <section className="page-section" style={{ borderBottom: "none" }}>
          <div className="wrap">
            <div style={{ maxWidth: "640px" }}>
              <h2 style={{ marginBottom: "8px" }}>Application Form</h2>
              <p style={{ marginBottom: "32px" }}>
                Fill out the form below and we&apos;ll review your application.
                All fields marked optional are genuinely optional.
              </p>

              <div
                style={{
                  background: "var(--elevated)",
                  border: "1px solid var(--border)",
                  borderRadius: "14px",
                  padding: "32px",
                }}
              >
                <style>{`
                  .apply-field { margin-bottom: 20px }
                  .apply-label { font-size: .8125rem; color: var(--t3); margin-bottom: 6px; display: block }
                  .apply-input, .apply-select, .apply-textarea {
                    width: 100%;
                    background: var(--raised);
                    border: 1px solid var(--border);
                    border-radius: 8px;
                    padding: 10px 14px;
                    color: var(--t1);
                    font-size: .9375rem;
                    font-family: var(--f-u);
                    outline: none;
                    transition: border-color .15s;
                  }
                  .apply-input:focus, .apply-select:focus, .apply-textarea:focus {
                    border-color: var(--border-hi);
                  }
                  .apply-select { appearance: none; cursor: pointer; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%2364748B' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 14px center; padding-right: 36px; }
                  .apply-select option { background: var(--elevated); color: var(--t1); }
                  .apply-textarea { resize: vertical; min-height: 120px; line-height: 1.65 }
                  .apply-optional { color: var(--t3); font-size: .75rem; margin-left: 4px }
                `}</style>

                <div className="apply-field">
                  <label className="apply-label" htmlFor="apply-name">
                    Full Name
                  </label>
                  <input
                    id="apply-name"
                    type="text"
                    className="apply-input"
                    placeholder="Jane Smith"
                    autoComplete="name"
                  />
                </div>

                <div className="apply-field">
                  <label className="apply-label" htmlFor="apply-email">
                    Email Address
                  </label>
                  <input
                    id="apply-email"
                    type="email"
                    className="apply-input"
                    placeholder="jane@example.com"
                    autoComplete="email"
                  />
                </div>

                <div className="apply-field">
                  <label className="apply-label" htmlFor="apply-org">
                    Company / Organization
                    <span className="apply-optional">(optional)</span>
                  </label>
                  <input
                    id="apply-org"
                    type="text"
                    className="apply-input"
                    placeholder="Acme Financial LLC"
                    autoComplete="organization"
                  />
                </div>

                <div className="apply-field">
                  <label className="apply-label" htmlFor="apply-role">
                    How do you plan to use ScoreVera?
                  </label>
                  <select id="apply-role" className="apply-select">
                    <option value="" disabled selected>
                      Select your role…
                    </option>
                    <option value="credit-coach">Credit Coach</option>
                    <option value="financial-advisor">Financial Advisor</option>
                    <option value="mortgage-professional">
                      Mortgage Professional
                    </option>
                    <option value="real-estate-agent">Real Estate Agent</option>
                    <option value="nonprofit">Nonprofit</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="apply-field">
                  <label className="apply-label" htmlFor="apply-volume">
                    Number of clients you work with per month
                  </label>
                  <select id="apply-volume" className="apply-select">
                    <option value="" disabled selected>
                      Select a range…
                    </option>
                    <option value="1-10">1–10</option>
                    <option value="11-50">11–50</option>
                    <option value="51-200">51–200</option>
                    <option value="200+">200+</option>
                  </select>
                </div>

                <div className="apply-field" style={{ marginBottom: "28px" }}>
                  <label className="apply-label" htmlFor="apply-usecase">
                    Tell us about your use case
                  </label>
                  <textarea
                    id="apply-usecase"
                    className="apply-textarea"
                    placeholder="Describe how you'd use ScoreVera — what your clients need, your current workflow, and anything else that would help us evaluate your application."
                  />
                </div>

                <button
                  type="button"
                  className="btn btn-p"
                  style={{ width: "100%", justifyContent: "center", fontSize: "1rem", padding: "14px 24px" }}
                >
                  Submit Application
                </button>

                <p
                  style={{
                    textAlign: "center",
                    fontSize: ".8125rem",
                    color: "var(--t3)",
                    marginTop: "16px",
                    marginBottom: "0",
                  }}
                >
                  We&apos;ll review and respond within 48 hours.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="page-cta">
          <div className="wrap">
            <h2>Not sure which plan is right for you?</h2>
            <p>
              The Free and Core plans are available immediately — no application
              needed. Apply only if you need volume access or custom pricing.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="https://app.scorevera.com/"
                className="btn btn-p"
                style={{ fontSize: "1rem", padding: "14px 32px" }}
              >
                Start Free
              </a>
              <a
                href="/pricing"
                className="btn btn-g"
                style={{ fontSize: "1rem", padding: "14px 32px" }}
              >
                View Pricing
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
