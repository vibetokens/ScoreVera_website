import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Press | ScoreVera",
  description:
    "Press resources for ScoreVera — background on the company, key facts, founder quote, and press contact information.",
};

const facts = [
  { label: "Founded", value: "2025" },
  { label: "Founder", value: "Jason Murphy" },
  { label: "Category", value: "Credit dispute software" },
  { label: "What it is not", value: "A credit repair company or service" },
  {
    label: "What it does",
    value:
      "Helps consumers understand and exercise their FCRA dispute rights through structured software",
  },
  {
    label: "Key law",
    value:
      "Fair Credit Reporting Act (FCRA) — gives all Americans the right to dispute inaccurate credit information at no cost",
  },
  {
    label: "Plans",
    value: "Free, Core System ($29/mo), Guided System ($49/mo), Operator ($99/mo)",
  },
  { label: "Headquarters", value: "United States" },
  { label: "Website", value: "scorevera.com" },
  { label: "App", value: "app.scorevera.com" },
];

export default function PressPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero" style={{ paddingTop: "100px" }}>
          <div className="wrap">
            <span className="eyebrow">Press</span>
            <h1>Media resources and contact information.</h1>
            <p className="body-lg">
              For press inquiries, interview requests, or background on
              ScoreVera, contact{" "}
              <a
                href="mailto:press@scorevera.com"
                style={{ color: "var(--gold)", textDecoration: "underline" }}
              >
                press@scorevera.com
              </a>
              .
            </p>
          </div>
        </section>

        {/* About */}
        <section className="page-section">
          <div className="wrap">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "48px",
                alignItems: "start",
              }}
            >
              <div>
                <span
                  className="eyebrow"
                  style={{ marginBottom: "20px", display: "block" }}
                >
                  About ScoreVera
                </span>
                <p
                  className="body-lg"
                  style={{ marginBottom: "16px", color: "var(--t2)" }}
                >
                  ScoreVera is credit dispute software that helps everyday
                  Americans exercise their rights under the Fair Credit
                  Reporting Act. The platform guides users through the dispute
                  process — generating FCRA-compliant letters, tracking
                  30-day investigation windows, and providing next-best-action
                  guidance based on bureau responses.
                </p>
                <p
                  className="body-lg"
                  style={{ marginBottom: "16px", color: "var(--t2)" }}
                >
                  ScoreVera is not a credit repair company. It does not
                  submit disputes on behalf of users or charge for actions
                  users could take themselves for free. Instead, it provides
                  the structure, templates, and process intelligence to help
                  people run their own dispute process correctly — the same
                  way a professional would.
                </p>
                <p className="body-lg" style={{ color: "var(--t2)" }}>
                  Founded in 2025 by Jason Murphy — who went from a 559 to a
                  716 credit score in 30 days by running the FCRA dispute
                  process himself — ScoreVera was built because no tool
                  existed that made the process accessible to ordinary people
                  without a lawyer or a credit repair company.
                </p>
              </div>

              {/* Key Facts */}
              <div
                style={{
                  background: "var(--elevated)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  padding: "32px",
                }}
              >
                <h2
                  style={{
                    fontFamily: "var(--f-u)",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--t1)",
                    letterSpacing: ".04em",
                    textTransform: "uppercase",
                    marginBottom: "24px",
                  }}
                >
                  Key Facts
                </h2>
                <dl
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0",
                  }}
                >
                  {facts.map((fact) => (
                    <div
                      key={fact.label}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "140px 1fr",
                        gap: "12px",
                        padding: "14px 0",
                        borderBottom: "1px solid var(--border)",
                      }}
                    >
                      <dt
                        style={{
                          fontFamily: "var(--f-m)",
                          fontSize: ".75rem",
                          color: "var(--t3)",
                          letterSpacing: ".04em",
                          paddingTop: "2px",
                        }}
                      >
                        {fact.label}
                      </dt>
                      <dd
                        style={{
                          fontSize: ".875rem",
                          color: "var(--t1)",
                          lineHeight: 1.5,
                        }}
                      >
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Quote */}
        <section
          className="page-section"
          style={{ background: "var(--surface)" }}
        >
          <div className="wrap">
            <div style={{ maxWidth: "720px" }}>
              <span
                className="eyebrow"
                style={{ marginBottom: "24px", display: "block" }}
              >
                From the Founder
              </span>
              <blockquote
                style={{
                  fontFamily: "var(--f-d)",
                  fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
                  fontStyle: "italic",
                  fontWeight: 300,
                  color: "var(--t1)",
                  lineHeight: 1.5,
                  letterSpacing: "-.01em",
                  marginBottom: "24px",
                  borderLeft: "3px solid var(--gold)",
                  paddingLeft: "28px",
                }}
              >
                &ldquo;I built ScoreVera because I couldn&apos;t find a tool
                that actually helped me run my own dispute process correctly.
                Now thousands of people are doing what I did.&rdquo;
              </blockquote>
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "var(--raised)",
                    border: "1px solid var(--border-md)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: ".9375rem",
                    color: "var(--gold)",
                    fontFamily: "var(--f-u)",
                    flexShrink: 0,
                  }}
                >
                  J
                </div>
                <div>
                  <div
                    style={{
                      fontSize: ".9375rem",
                      fontWeight: 600,
                      color: "var(--t1)",
                    }}
                  >
                    Jason Murphy
                  </div>
                  <div
                    style={{ fontSize: ".8125rem", color: "var(--t3)" }}
                  >
                    Founder, ScoreVera
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage + Contact */}
        <section className="page-section">
          <div className="wrap">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "40px",
                alignItems: "start",
              }}
            >
              <div>
                <span
                  className="eyebrow"
                  style={{ marginBottom: "16px", display: "block" }}
                >
                  Coverage
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
                  We&apos;re a young company. Let&apos;s talk.
                </h2>
                <p className="body-lg" style={{ color: "var(--t2)" }}>
                  We&apos;re a young company. If you&apos;re writing about
                  credit reform, FCRA consumer rights, or fintech tools for
                  everyday Americans, we&apos;d love to talk. We can provide
                  data, founder access, and background on how the credit
                  dispute process works for people who have never heard of the
                  FCRA.
                </p>
              </div>

              <div
                style={{
                  background: "var(--elevated)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--f-u)",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--t1)",
                    letterSpacing: ".04em",
                    textTransform: "uppercase",
                  }}
                >
                  Press Contact
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--f-m)",
                        fontSize: ".75rem",
                        color: "var(--t3)",
                        letterSpacing: ".06em",
                        textTransform: "uppercase",
                        marginBottom: "4px",
                      }}
                    >
                      Email
                    </div>
                    <a
                      href="mailto:press@scorevera.com"
                      style={{
                        color: "var(--gold)",
                        fontSize: ".9375rem",
                        textDecoration: "underline",
                        textUnderlineOffset: "3px",
                      }}
                    >
                      press@scorevera.com
                    </a>
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--f-m)",
                        fontSize: ".75rem",
                        color: "var(--t3)",
                        letterSpacing: ".06em",
                        textTransform: "uppercase",
                        marginBottom: "4px",
                      }}
                    >
                      Response time
                    </div>
                    <p style={{ fontSize: ".875rem", color: "var(--t2)" }}>
                      Within 24 hours on business days
                    </p>
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--f-m)",
                        fontSize: ".75rem",
                        color: "var(--t3)",
                        letterSpacing: ".06em",
                        textTransform: "uppercase",
                        marginBottom: "4px",
                      }}
                    >
                      Brand assets
                    </div>
                    <p style={{ fontSize: ".875rem", color: "var(--t2)" }}>
                      Logo files and brand kit available on request.
                      Email press@scorevera.com with your outlet and deadline.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
