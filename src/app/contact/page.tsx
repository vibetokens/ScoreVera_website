import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | ScoreVera",
  description:
    "Get in touch with ScoreVera. Support, press, security, privacy, and partnership inquiries — we respond within 1–2 business days.",
};

const contacts = [
  {
    label: "General Support",
    email: "support@scorevera.com",
    description:
      "Questions about your account, billing, or how to use the platform.",
  },
  {
    label: "Press",
    email: "press@scorevera.com",
    description:
      "Media inquiries, interview requests, brand assets, and background information.",
  },
  {
    label: "Security",
    email: "security@scorevera.com",
    description:
      "To report a vulnerability or security concern. We take these seriously and respond promptly.",
  },
  {
    label: "Privacy",
    email: "privacy@scorevera.com",
    description:
      "Data deletion requests, privacy questions, and CCPA/GDPR inquiries.",
  },
  {
    label: "Partnerships",
    email: "partners@scorevera.com",
    description:
      "Financial coaches, housing counselors, nonprofits, and enterprise integrations.",
  },
];


export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero" style={{ paddingTop: "100px" }}>
          <div className="wrap">
            <span className="eyebrow">Contact</span>
            <h1>We&apos;re here when you need us.</h1>
            <p className="body-lg">
              Use the right address for a faster response — or use the form
              below and we will route it.
            </p>
          </div>
        </section>

        {/* Contact Addresses */}
        <section className="page-section">
          <div className="wrap">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "16px",
                marginBottom: "72px",
              }}
            >
              {contacts.map((c) => (
                <div
                  key={c.email}
                  style={{
                    background: "var(--elevated)",
                    border: "1px solid var(--border)",
                    borderRadius: "10px",
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--f-m)",
                      fontSize: ".6875rem",
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      color: "var(--t3)",
                    }}
                  >
                    {c.label}
                  </div>
                  <a
                    href={`mailto:${c.email}`}
                    style={{
                      color: "var(--gold)",
                      fontSize: ".9375rem",
                      fontWeight: 500,
                      textDecoration: "underline",
                      textUnderlineOffset: "3px",
                      wordBreak: "break-all",
                    }}
                  >
                    {c.email}
                  </a>
                  <p
                    style={{
                      fontSize: ".875rem",
                      color: "var(--t2)",
                      lineHeight: 1.6,
                    }}
                  >
                    {c.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div
              style={{
                maxWidth: "640px",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--f-d)",
                  fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
                  color: "var(--t1)",
                  letterSpacing: "-.02em",
                  lineHeight: 1.25,
                  marginBottom: "8px",
                }}
              >
                Send us a message
              </h2>
              <p
                className="body-lg"
                style={{ marginBottom: "32px", color: "var(--t3)" }}
              >
                We&apos;ll respond within 1–2 business days.
              </p>

              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
