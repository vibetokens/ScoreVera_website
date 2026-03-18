import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About ScoreVera | Built by Someone Who's Been There",
  description:
    "Jason Murphy went from a 559 to a 716 credit score in 30 days. He couldn't find a tool that actually helped, so he built ScoreVera — credit dispute software for everyday Americans.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="page-hero" style={{ paddingTop: "100px" }}>
          <div className="wrap">
            <span className="eyebrow">Our Story</span>
            <h1>Built because the system was broken for regular people.</h1>
            <p>
              ScoreVera didn&apos;t start as a startup idea. It started as
              frustration — one person trying to fix his credit and finding
              nothing but overpriced companies and confusing paperwork.
            </p>
          </div>
        </section>

        {/* FOUNDER STORY */}
        <section className="page-section">
          <div className="wrap">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "48px",
                alignItems: "center",
              }}
              className="inner-founder"
            >
              <style>{`
                @media(min-width:900px){.inner-founder{grid-template-columns:340px 1fr !important;gap:72px !important}}
              `}</style>

              {/* Founder Photo */}
              <div className="f-img">
                <img
                  src="/images/sv-founder-murphy.jpg"
                  alt="Jason Murphy, founder of ScoreVera"
                  width={340}
                  height={453}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div className="f-tag">
                  <div className="f-tag-name">Jason Murphy</div>
                  <div className="f-tag-role">Founder, ScoreVera</div>
                </div>
              </div>

              {/* Story Text */}
              <div>
                <h2
                  style={{
                    fontFamily: "var(--f-d)",
                    fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                    color: "var(--t1)",
                    letterSpacing: "-.025em",
                    lineHeight: 1.2,
                    marginBottom: "20px",
                  }}
                >
                  From 559 to 716 in 30 days. No credit repair company. Just
                  the law.
                </h2>

                {/* Score Badge */}
                <div className="score-proof" style={{ marginBottom: "24px" }}>
                  <span className="sp-n sp-before">559</span>
                  <span className="sp-n sp-arrow">→</span>
                  <span className="sp-n sp-after">716</span>
                  <div className="sp-meta">
                    <span className="sp-main">+157 pts</span>
                    <span className="sp-sub">30 days</span>
                  </div>
                </div>

                <p className="body-lg" style={{ marginBottom: "16px" }}>
                  In early 2025, Jason Murphy was dealing with the fallout of a
                  rough financial stretch — medical bills, a job loss, and a
                  handful of inaccurate negative items dragging his credit score
                  into the 500s. He knew his rights under the Fair Credit
                  Reporting Act. He knew he could dispute inaccurate items
                  himself. What he didn&apos;t have was a clear, structured way
                  to do it.
                </p>
                <p className="body-lg" style={{ marginBottom: "16px" }}>
                  He tried the credit repair companies. The quotes ranged from
                  $79 to $149 a month — with no guarantees and no transparency
                  about what they were actually doing. Then he found out the
                  truth: under the Credit Repair Organizations Act, these
                  companies cannot do a single thing you cannot do yourself for
                  free.
                </p>
                <p className="body-lg" style={{ marginBottom: "16px" }}>
                  So Jason did it himself. He wrote FCRA dispute letters,
                  tracked the 30-day investigation windows, followed up when
                  bureaus ignored him, and escalated when needed. In 30 days,
                  his score went from 559 to 716.
                </p>
                <p className="body-lg">
                  Then he built ScoreVera so anyone could do the same thing —
                  with the right process, the right letters, and a clear guide
                  on every step.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MISSION */}
        <section
          className="page-section"
          style={{ background: "var(--surface)" }}
        >
          <div className="wrap">
            <div style={{ maxWidth: "680px" }}>
              <span className="eyebrow" style={{ marginBottom: "16px", display: "block" }}>
                Our Mission
              </span>
              <h2
                style={{
                  fontFamily: "var(--f-d)",
                  fontSize: "clamp(1.5rem, 3vw, 2.125rem)",
                  color: "var(--t1)",
                  letterSpacing: "-.025em",
                  lineHeight: 1.25,
                  marginBottom: "20px",
                }}
              >
                Credit repair companies charge $100+/mo to do what you can
                legally do yourself.
              </h2>
              <p className="body-lg" style={{ marginBottom: "16px" }}>
                We built software to give you the process, not the runaround.
                ScoreVera is not a credit repair company. We don&apos;t touch
                your disputes, submit your letters, or promise specific results.
                What we do is give you the same structured, FCRA-compliant
                process that professionals use — so you can run it yourself,
                on your own timeline, without paying a monthly fee to someone
                else.
              </p>
              <p className="body-lg">
                Every American has the right to dispute inaccurate information
                on their credit report. ScoreVera makes sure you actually know
                how to use that right.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT SCOREVERA IS */}
        <section className="page-section">
          <div className="wrap">
            <span className="eyebrow" style={{ marginBottom: "16px", display: "block" }}>
              What ScoreVera Is (and Isn&apos;t)
            </span>
            <h2
              style={{
                fontFamily: "var(--f-d)",
                fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
                color: "var(--t1)",
                letterSpacing: "-.025em",
                marginBottom: "32px",
              }}
            >
              A software tool. Not a service.
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "12px",
              }}
            >
              {[
                {
                  label: "What it is",
                  good: true,
                  items: [
                    "A software platform that guides you through the dispute process",
                    "An FCRA letter generator for § 611, § 609, debt validation, goodwill, and escalation",
                    "A 30-day investigation tracker with follow-up reminders",
                    "A next-best-action system based on bureau responses",
                    "A tool you control, from start to finish",
                  ],
                },
                {
                  label: "What it isn't",
                  good: false,
                  items: [
                    "A credit repair company",
                    "A service that submits disputes for you",
                    "A guarantee of any specific score change",
                    "Legal advice or credit counseling",
                    "A monthly subscription to someone else doing the work",
                  ],
                },
              ].map((col) => (
                <div
                  key={col.label}
                  className="compare-card"
                  style={{
                    borderColor: col.good
                      ? "rgba(16,185,129,.18)"
                      : "rgba(239,68,68,.12)",
                  }}
                >
                  <span
                    className="c-lbl"
                    style={{ color: col.good ? "var(--green)" : "var(--red)" }}
                  >
                    {col.label}
                  </span>
                  <ul className="c-list">
                    {col.items.map((item) => (
                      <li key={item}>
                        <svg
                          className="ci"
                          viewBox="0 0 16 16"
                          fill="none"
                          aria-hidden="true"
                          style={{
                            color: col.good ? "var(--green)" : "var(--red)",
                          }}
                        >
                          {col.good ? (
                            <path
                              d="M3 8l3.5 3.5L13 4.5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          ) : (
                            <path
                              d="M4 4l8 8M12 4l-8 8"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          )}
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="page-cta">
          <div className="wrap">
            <h2>Ready to dispute your own credit report?</h2>
            <p>
              ScoreVera gives you the same tools Jason used — organized,
              FCRA-compliant, and completely in your hands.
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
