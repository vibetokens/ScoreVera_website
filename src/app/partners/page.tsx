import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Partners | ScoreVera",
  description:
    "Partner with ScoreVera. Referral, reseller, and enterprise integration programs for financial coaches, housing counselors, nonprofits, and employer wellness programs.",
};

const whoWePartnerWith = [
  {
    title: "Financial Coaches",
    description:
      "Independent coaches who work with clients on budgeting, debt management, and credit rebuilding. ScoreVera gives you a structured, FCRA-compliant system to offer clients — without the liability of doing it for them.",
  },
  {
    title: "Housing Counselors",
    description:
      "HUD-approved and non-HUD housing counseling agencies helping clients qualify for mortgages or rental housing. Credit disputes are often a critical step — ScoreVera systematizes the process.",
  },
  {
    title: "Nonprofit Credit Counseling Organizations",
    description:
      "501(c)(3) organizations providing free or low-cost financial education. We offer nonprofit pricing and co-branded materials for organizations serving underbanked communities.",
  },
  {
    title: "Employer Wellness Programs",
    description:
      "Companies offering financial wellness benefits to employees. Credit health is one of the most impactful and underserved areas of employee financial wellbeing.",
  },
];

const whatPartnersGet = [
  {
    item: "Co-branded materials",
    detail:
      "Customized PDFs, email templates, and landing pages with your organization's branding alongside ScoreVera.",
  },
  {
    item: "Volume pricing",
    detail:
      "Discounted rates for organizations distributing ScoreVera access to multiple clients or employees.",
  },
  {
    item: "Dedicated partner support",
    detail:
      "A direct support contact, not a ticket queue. Partner questions get answered within one business day.",
  },
  {
    item: "Revenue share",
    detail:
      "Referral and reseller partners earn a percentage of every paid subscription they generate — paid monthly with no cap.",
  },
  {
    item: "Training and onboarding",
    detail:
      "Walkthrough sessions to help your team understand the platform, how to present it to clients, and compliance guidance.",
  },
];

const partnerTypes = [
  {
    type: "Referral Partner",
    desc: "You send clients or leads to ScoreVera. We handle everything else. You earn a referral commission on every paid subscription they start.",
    best: "Financial coaches, bloggers, content creators, and community organizations.",
  },
  {
    type: "Reseller",
    desc: "You purchase ScoreVera access at volume pricing and distribute it to your clients or members — either bundled with your services or as a standalone offering.",
    best: "Credit counseling organizations, employer benefit programs, and financial education platforms.",
  },
  {
    type: "Enterprise Integration",
    desc: "API-level integration with your existing platform — CRM, client portal, or financial wellness dashboard. Custom scoping required.",
    best: "Fintech platforms, large employers, and organizations with existing technology infrastructure.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero" style={{ paddingTop: "100px" }}>
          <div className="wrap">
            <span className="eyebrow">Partners</span>
            <h1>Help your clients fix their credit — with the right tool.</h1>
            <p className="body-lg">
              ScoreVera partners with financial coaches, housing counselors,
              nonprofits, and employer wellness programs to bring structured
              FCRA dispute software to the people who need it most.
            </p>
          </div>
        </section>

        {/* Who We Partner With */}
        <section className="page-section">
          <div className="wrap">
            <span
              className="eyebrow"
              style={{ marginBottom: "20px", display: "block" }}
            >
              Who We Work With
            </span>
            <h2
              style={{
                fontFamily: "var(--f-d)",
                fontSize: "clamp(1.375rem, 3vw, 2rem)",
                color: "var(--t1)",
                letterSpacing: "-.02em",
                lineHeight: 1.2,
                marginBottom: "40px",
                maxWidth: "640px",
              }}
            >
              Built for professionals who work with people on credit.
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "16px",
              }}
            >
              {whoWePartnerWith.map((w) => (
                <div
                  key={w.title}
                  style={{
                    background: "var(--elevated)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    padding: "28px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--f-u)",
                      fontSize: "1.0625rem",
                      fontWeight: 600,
                      color: "var(--t1)",
                      lineHeight: 1.35,
                    }}
                  >
                    {w.title}
                  </h3>
                  <p
                    style={{
                      fontSize: ".875rem",
                      color: "var(--t2)",
                      lineHeight: 1.7,
                    }}
                  >
                    {w.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Types */}
        <section
          className="page-section"
          style={{ background: "var(--surface)" }}
        >
          <div className="wrap">
            <span
              className="eyebrow"
              style={{ marginBottom: "20px", display: "block" }}
            >
              Partner Types
            </span>
            <h2
              style={{
                fontFamily: "var(--f-d)",
                fontSize: "clamp(1.375rem, 3vw, 2rem)",
                color: "var(--t1)",
                letterSpacing: "-.02em",
                lineHeight: 1.2,
                marginBottom: "40px",
              }}
            >
              Three ways to partner.
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "20px",
              }}
            >
              {partnerTypes.map((pt) => (
                <div
                  key={pt.type}
                  style={{
                    background: "var(--elevated)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    padding: "28px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--f-u)",
                      fontSize: "1.0625rem",
                      fontWeight: 700,
                      color: "var(--gold)",
                      lineHeight: 1.3,
                    }}
                  >
                    {pt.type}
                  </h3>
                  <p
                    style={{
                      fontSize: ".9rem",
                      color: "var(--t2)",
                      lineHeight: 1.7,
                    }}
                  >
                    {pt.desc}
                  </p>
                  <div
                    style={{
                      borderTop: "1px solid var(--border)",
                      paddingTop: "14px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--f-m)",
                        fontSize: ".6875rem",
                        letterSpacing: ".08em",
                        textTransform: "uppercase",
                        color: "var(--t3)",
                        display: "block",
                        marginBottom: "6px",
                      }}
                    >
                      Best for
                    </span>
                    <p
                      style={{
                        fontSize: ".875rem",
                        color: "var(--t1)",
                        lineHeight: 1.5,
                      }}
                    >
                      {pt.best}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Partners Get */}
        <section className="page-section">
          <div className="wrap">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "56px",
                alignItems: "start",
              }}
            >
              <div>
                <span
                  className="eyebrow"
                  style={{ marginBottom: "16px", display: "block" }}
                >
                  What Partners Get
                </span>
                <h2
                  style={{
                    fontFamily: "var(--f-d)",
                    fontSize: "clamp(1.375rem, 3vw, 1.875rem)",
                    color: "var(--t1)",
                    letterSpacing: "-.02em",
                    lineHeight: 1.25,
                    marginBottom: "20px",
                  }}
                >
                  We make it easy to offer ScoreVera to your clients.
                </h2>
                <p className="body-lg" style={{ color: "var(--t2)" }}>
                  Every partnership is structured to make it simple for your
                  team to introduce ScoreVera without complexity or compliance
                  risk. You stay in control of your client relationships — we
                  provide the tool and the support.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {whatPartnersGet.map((w, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "20px 0",
                      borderBottom: "1px solid var(--border)",
                      display: "flex",
                      gap: "16px",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "var(--gold)",
                        flexShrink: 0,
                        marginTop: "7px",
                      }}
                    />
                    <div>
                      <div
                        style={{
                          fontSize: ".9375rem",
                          fontWeight: 600,
                          color: "var(--t1)",
                          marginBottom: "6px",
                        }}
                      >
                        {w.item}
                      </div>
                      <p
                        style={{
                          fontSize: ".875rem",
                          color: "var(--t2)",
                          lineHeight: 1.65,
                        }}
                      >
                        {w.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="page-cta">
          <div className="wrap">
            <h2>Become a partner.</h2>
            <p>
              Email us at{" "}
              <a
                href="mailto:partners@scorevera.com"
                style={{ color: "var(--gold)", textDecoration: "underline" }}
              >
                partners@scorevera.com
              </a>{" "}
              with a brief description of your organization and how you work
              with clients. We will follow up within two business days.
            </p>
            <a
              href="mailto:partners@scorevera.com"
              className="btn btn-p"
              style={{ fontSize: "1rem", padding: "14px 32px" }}
            >
              Start the Conversation
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
