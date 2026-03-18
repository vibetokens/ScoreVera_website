import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Partner Hub | ScoreVera",
  description:
    "ScoreVera Partner Hub — training resources, marketing materials, support contacts, and quick access to your partner dashboard.",
};

const quickLinks = [
  {
    label: "Partner Dashboard",
    href: "https://app.scorevera.com/partner",
    external: true,
    description: "Log in to your partner account to manage referrals, track activity, and access your commission reports.",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" style={{ width: "20px", height: "20px" }}>
        <rect x="2" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <rect x="11" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <rect x="2" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <rect x="11" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    label: "Resource Downloads",
    href: "#resources",
    external: false,
    description: "Marketing materials, overview PDFs, email templates, and social content — available after onboarding.",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" style={{ width: "20px", height: "20px" }}>
        <path d="M10 3v10M6 9l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 17h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Partner Support",
    href: "mailto:partners@scorevera.com",
    external: false,
    description: "Direct email to our partner team. We respond within one business day — not a shared support queue.",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" style={{ width: "20px", height: "20px" }}>
        <path d="M3 5h14a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.4" />
        <path d="M2.5 5.5l7.5 6 7.5-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
];

const trainingModules = [
  {
    title: "Platform Overview for Partners",
    duration: "15 min",
    description:
      "A walkthrough of the ScoreVera platform from the perspective of a coach or counselor presenting it to a client. Covers the upload flow, letter generation, and timeline tracker.",
  },
  {
    title: "How to Present ScoreVera to Clients",
    duration: "20 min",
    description:
      "Guidance on framing ScoreVera correctly with clients — emphasizing that it is software they use themselves, not a service that does it for them. Includes talking points, common objections, and answers.",
  },
  {
    title: "Compliance Guidance for Partners",
    duration: "10 min",
    description:
      "What partners can and cannot say when recommending ScoreVera. Covers CROA restrictions, proper disclaimers, and the distinction between providing software access and providing credit repair services.",
  },
  {
    title: "Understanding the FCRA for Client Presentations",
    duration: "25 min",
    description:
      "A primer on the Fair Credit Reporting Act — your rights, the dispute process, and the timeline. Designed to help partners speak confidently about the legal foundation that makes ScoreVera's approach legitimate.",
  },
];

const marketingMaterials = [
  {
    title: "ScoreVera Partner Overview (PDF)",
    description:
      "A two-page overview of ScoreVera for sharing with clients, in employer benefit catalogs, or in program documentation. Available in branded and co-branded versions.",
    status: "available",
  },
  {
    title: "Email Templates",
    description:
      "A set of four email templates for introducing ScoreVera to your client list, following up after initial contact, announcing an employer benefit, and re-engaging inactive clients.",
    status: "available",
  },
  {
    title: "Social Content Pack",
    description:
      "Pre-written posts for LinkedIn, Instagram, and Facebook — covering credit rights education, ScoreVera introductions, and FCRA tips. Includes caption copy and recommended hashtags.",
    status: "onboarding",
  },
  {
    title: "Client FAQ One-Pager",
    description:
      "A printable or digital FAQ sheet for clients who want to understand what ScoreVera is before signing up. Covers what it is, what it is not, and what to expect.",
    status: "available",
  },
];

export default function PartnerHubPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero" style={{ paddingTop: "100px" }}>
          <div className="wrap">
            <span className="eyebrow">Partner Hub</span>
            <h1>Welcome, Partner.</h1>
            <p className="body-lg">
              Everything you need to support your clients, run your
              partnership, and get help when you need it — in one place.
            </p>
          </div>
        </section>

        {/* Quick Links */}
        <section className="page-section">
          <div className="wrap">
            <span
              className="eyebrow"
              style={{ marginBottom: "20px", display: "block" }}
            >
              Quick Access
            </span>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "16px",
                marginBottom: "0",
              }}
            >
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  style={{
                    background: "var(--elevated)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    padding: "28px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                    textDecoration: "none",
                    transition: "border-color .15s",
                  }}
                >
                  <div
                    style={{
                      color: "var(--gold)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    {link.icon}
                    {link.external && (
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        style={{
                          width: "12px",
                          height: "12px",
                          color: "var(--t3)",
                        }}
                      >
                        <path
                          d="M3 13L13 3M7 3h6v6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--f-u)",
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "var(--t1)",
                        marginBottom: "8px",
                      }}
                    >
                      {link.label}
                    </div>
                    <p
                      style={{
                        fontSize: ".875rem",
                        color: "var(--t2)",
                        lineHeight: 1.65,
                      }}
                    >
                      {link.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Training */}
        <section
          className="page-section"
          style={{ background: "var(--surface)" }}
        >
          <div className="wrap">
            <span
              className="eyebrow"
              style={{ marginBottom: "16px", display: "block" }}
            >
              Training Resources
            </span>
            <h2
              style={{
                fontFamily: "var(--f-d)",
                fontSize: "clamp(1.375rem, 3vw, 1.875rem)",
                color: "var(--t1)",
                letterSpacing: "-.02em",
                lineHeight: 1.25,
                marginBottom: "40px",
                maxWidth: "600px",
              }}
            >
              Get up to speed on the platform and how to use it with clients.
            </h2>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "0" }}
            >
              {trainingModules.map((mod, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    gap: "20px",
                    alignItems: "start",
                    padding: "24px 0",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--f-u)",
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "var(--t1)",
                        marginBottom: "8px",
                        lineHeight: 1.4,
                      }}
                    >
                      {mod.title}
                    </h3>
                    <p
                      style={{
                        fontSize: ".875rem",
                        color: "var(--t2)",
                        lineHeight: 1.65,
                      }}
                    >
                      {mod.description}
                    </p>
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--f-m)",
                      fontSize: ".75rem",
                      color: "var(--t3)",
                      letterSpacing: ".04em",
                      whiteSpace: "nowrap",
                      paddingTop: "3px",
                    }}
                  >
                    {mod.duration}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Marketing Materials */}
        <section id="resources" className="page-section">
          <div className="wrap">
            <span
              className="eyebrow"
              style={{ marginBottom: "16px", display: "block" }}
            >
              Marketing Materials
            </span>
            <h2
              style={{
                fontFamily: "var(--f-d)",
                fontSize: "clamp(1.375rem, 3vw, 1.875rem)",
                color: "var(--t1)",
                letterSpacing: "-.02em",
                lineHeight: 1.25,
                marginBottom: "12px",
              }}
            >
              Ready-to-use materials for your clients and channels.
            </h2>
            <p
              className="body-lg"
              style={{ marginBottom: "40px", color: "var(--t2)" }}
            >
              Some materials are available immediately after onboarding.
              Others are sent directly once your partnership is confirmed.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "16px",
              }}
            >
              {marketingMaterials.map((m, i) => (
                <div
                  key={i}
                  style={{
                    background: "var(--elevated)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--f-m)",
                        fontSize: ".6875rem",
                        fontWeight: 600,
                        letterSpacing: ".08em",
                        textTransform: "uppercase",
                        color:
                          m.status === "available"
                            ? "var(--green)"
                            : "var(--t3)",
                        background:
                          m.status === "available"
                            ? "var(--green-dim)"
                            : "var(--elevated)",
                        border: "1px solid var(--border)",
                        borderRadius: "4px",
                        padding: "2px 8px",
                      }}
                    >
                      {m.status === "available"
                        ? "Available"
                        : "After Onboarding"}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--f-u)",
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "var(--t1)",
                      lineHeight: 1.4,
                    }}
                  >
                    {m.title}
                  </h3>
                  <p
                    style={{
                      fontSize: ".875rem",
                      color: "var(--t2)",
                      lineHeight: 1.65,
                    }}
                  >
                    {m.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support */}
        <section
          className="page-section"
          style={{ background: "var(--surface)" }}
        >
          <div className="wrap">
            <div
              style={{
                maxWidth: "640px",
              }}
            >
              <span
                className="eyebrow"
                style={{ marginBottom: "16px", display: "block" }}
              >
                Partner Support
              </span>
              <h2
                style={{
                  fontFamily: "var(--f-d)",
                  fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                  color: "var(--t1)",
                  letterSpacing: "-.02em",
                  lineHeight: 1.3,
                  marginBottom: "16px",
                }}
              >
                Need help? We respond within 24 hours.
              </h2>
              <p className="body-lg" style={{ color: "var(--t2)", marginBottom: "24px" }}>
                Partner questions go directly to the partner team — not a
                shared support queue. For technical issues, billing questions,
                or anything related to your partnership agreement, email us
                and we will take care of it.
              </p>
              <a
                href="mailto:partners@scorevera.com"
                className="btn btn-g"
                style={{ fontSize: ".9375rem" }}
              >
                partners@scorevera.com
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
