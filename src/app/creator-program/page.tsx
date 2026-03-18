import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Creator Program | ScoreVera",
  description:
    "Join the ScoreVera Creator Program. Earn recurring commissions, get exclusive discount codes for your audience, and help your followers actually fix their credit.",
};

const HOW_IT_WORKS = [
  {
    num: "01",
    title: "Apply",
    desc: "Fill out the application below. Tell us about your platform, your audience, and the kind of content you create. We review every application personally — no bots, no auto-approvals.",
  },
  {
    num: "02",
    title: "Get Your Link",
    desc: "Once approved, you get your unique affiliate link, an exclusive discount code for your audience, and access to the creator dashboard and content resources.",
  },
  {
    num: "03",
    title: "Earn Per Conversion",
    desc: "Every person who subscribes through your link earns you a recurring commission. As long as they stay subscribed, you keep earning — monthly, automatically.",
  },
];

const WHAT_YOU_GET = [
  {
    title: "Affiliate Dashboard",
    desc: "Track your clicks, conversions, active referrals, and earnings in one place. Updated in real time.",
  },
  {
    title: "Exclusive Discount Codes",
    desc: "Your audience gets a discount through your personal code. Makes it easier for them to sign up — and gives your recommendation something concrete to offer.",
  },
  {
    title: "Early Feature Access",
    desc: "New ScoreVera features come to you before they go public. Create content ahead of the curve and drive sign-ups while the buzz is fresh.",
  },
  {
    title: "Creator-Only Slack",
    desc: "A private channel for ScoreVera creators. Ask questions, share ideas, collaborate with other finance creators, and get direct access to the team.",
  },
  {
    title: "Demo Videos & Screenshots",
    desc: "We provide polished walkthrough videos, product screenshots, and visual assets you can use in your content — no screen recording required.",
  },
  {
    title: "Copy Templates",
    desc: "Captions, hooks, email swipes, and description templates written by the ScoreVera team. Edit to match your voice and post.",
  },
];

const PLATFORMS = ["YouTube", "TikTok", "Instagram", "Other"];

const CONTENT_FOCUS_OPTIONS = [
  "Credit & Dispute Strategy",
  "Personal Finance & Budgeting",
  "Debt Payoff & Recovery",
  "FCRA & Consumer Rights",
  "Mortgage & Real Estate",
  "General Finance",
  "Other",
];

export default function CreatorProgramPage() {
  return (
    <>
      <Header />
      <main>

        {/* HERO */}
        <section className="page-hero" style={{ paddingTop: "100px" }}>
          <div className="wrap">
            <span className="eyebrow">Creator Program</span>
            <h1>
              Earn while helping your audience
              <br />
              actually fix their credit.
            </h1>
            <p>
              ScoreVera&apos;s Creator Program gives finance creators recurring
              commissions, audience discount codes, and real product to
              demonstrate — not just a link to paste in a description.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap" as const,
                gap: "12px",
                marginTop: "28px",
              }}
            >
              <a href="#apply" className="btn btn-p">
                Apply Now
              </a>
              <a href="/for-creators" className="btn btn-g">
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="page-section">
          <div className="wrap">
            <span
              className="eyebrow"
              style={{ marginBottom: "16px", display: "block" }}
            >
              How It Works
            </span>
            <h2 style={{ marginBottom: "40px" }}>Three steps to get started.</h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column" as const,
                maxWidth: "680px",
              }}
            >
              {HOW_IT_WORKS.map((step, i) => (
                <div
                  key={step.num}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "48px 1fr",
                    gap: "0 16px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column" as const,
                      alignItems: "center",
                    }}
                  >
                    <div className="step-circ">{step.num}</div>
                    {i < HOW_IT_WORKS.length - 1 && (
                      <div className="step-line" />
                    )}
                  </div>
                  <div className="step-content">
                    <div className="step-title">{step.title}</div>
                    <p className="step-desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT YOU GET */}
        <section
          className="page-section"
          style={{ background: "var(--surface)" }}
        >
          <div className="wrap">
            <span
              className="eyebrow"
              style={{ marginBottom: "16px", display: "block" }}
            >
              What You Get
            </span>
            <h2 style={{ marginBottom: "12px" }}>
              Everything you need to create and earn.
            </h2>
            <p
              className="body-lg"
              style={{ maxWidth: "560px", marginBottom: "36px" }}
            >
              Approved creators get a full toolkit — not just a link. We make
              it easy to create content that converts.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "12px",
              }}
            >
              {WHAT_YOU_GET.map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: "var(--elevated)",
                    border: "1px solid rgba(201,165,90,.15)",
                    borderRadius: "11px",
                    padding: "22px 20px",
                  }}
                >
                  <div
                    style={{
                      fontSize: ".9375rem",
                      fontWeight: 700,
                      color: "var(--t1)",
                      marginBottom: "8px",
                    }}
                  >
                    {item.title}
                  </div>
                  <p
                    style={{
                      fontSize: ".875rem",
                      color: "var(--t2)",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMMISSION STRUCTURE */}
        <section className="page-section">
          <div className="wrap">
            <div style={{ maxWidth: "680px" }}>
              <span
                className="eyebrow"
                style={{ marginBottom: "16px", display: "block" }}
              >
                Commission Structure
              </span>
              <h2 style={{ marginBottom: "16px" }}>
                Recurring commissions per active subscriber.
              </h2>
              <p>
                You earn a commission for every ScoreVera subscriber who signed
                up through your link or discount code. That commission recurs
                every month they remain active — so a single piece of content
                can generate income for months or years.
              </p>
              <p>
                Exact commission rates are provided in your creator dashboard
                after acceptance. Commissions are paid monthly with a standard
                holding period to account for refunds and cancellations.
              </p>

              {/* Who qualifies */}
              <div
                style={{
                  background: "var(--elevated)",
                  border: "1px solid var(--border)",
                  borderRadius: "11px",
                  padding: "22px 20px",
                  marginTop: "28px",
                }}
              >
                <div
                  style={{
                    fontSize: ".9375rem",
                    fontWeight: 700,
                    color: "var(--t1)",
                    marginBottom: "12px",
                  }}
                >
                  Who Qualifies
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column" as const,
                    gap: "9px",
                    margin: 0,
                    padding: 0,
                  }}
                >
                  {[
                    "Finance creators on YouTube, TikTok, Instagram, or other platforms",
                    "Engaged audiences — quality matters more than follower count",
                    "1,000+ followers minimum (across one or more platforms)",
                    "Content that aligns with credit, debt, FCRA rights, or personal finance",
                    "Willingness to create honest, educational content about ScoreVera",
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        fontSize: ".875rem",
                        color: "var(--t2)",
                        lineHeight: 1.55,
                      }}
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                        style={{
                          color: "var(--green)",
                          flexShrink: 0,
                          marginTop: "1px",
                        }}
                      >
                        <path
                          d="M3 8l3.5 3.5L13 4.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* APPLICATION FORM */}
        <section
          id="apply"
          className="page-section"
          style={{ background: "var(--surface)" }}
        >
          <div className="wrap">
            <span
              className="eyebrow"
              style={{ marginBottom: "16px", display: "block" }}
            >
              Apply
            </span>
            <h2 style={{ marginBottom: "8px" }}>
              Apply for the Creator Program.
            </h2>
            <p
              className="body-lg"
              style={{ maxWidth: "500px", marginBottom: "36px" }}
            >
              Fill out the form below. We review applications personally and
              respond within 48 hours.
            </p>

            {/* FORM CARD */}
            <div
              style={{
                maxWidth: "620px",
                background: "var(--elevated)",
                border: "1px solid var(--border-md)",
                borderRadius: "16px",
                padding: "36px 32px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column" as const,
                  gap: "20px",
                }}
              >

                {/* Name */}
                <div>
                  <label
                    htmlFor="cp-name"
                    style={{
                      display: "block",
                      fontFamily: "var(--f-m)",
                      fontSize: ".625rem",
                      letterSpacing: ".1em",
                      textTransform: "uppercase" as const,
                      color: "var(--t3)",
                      marginBottom: "8px",
                    }}
                  >
                    Full Name
                  </label>
                  <div
                    id="cp-name"
                    aria-label="Full Name field"
                    style={{
                      width: "100%",
                      background: "var(--surface)",
                      border: "1px solid var(--border-md)",
                      borderRadius: "7px",
                      padding: "12px 14px",
                      fontSize: ".9375rem",
                      color: "var(--t3)",
                      fontFamily: "var(--f-u)",
                      minHeight: "46px",
                    }}
                  >
                    &nbsp;
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="cp-email"
                    style={{
                      display: "block",
                      fontFamily: "var(--f-m)",
                      fontSize: ".625rem",
                      letterSpacing: ".1em",
                      textTransform: "uppercase" as const,
                      color: "var(--t3)",
                      marginBottom: "8px",
                    }}
                  >
                    Email Address
                  </label>
                  <div
                    id="cp-email"
                    aria-label="Email Address field"
                    style={{
                      width: "100%",
                      background: "var(--surface)",
                      border: "1px solid var(--border-md)",
                      borderRadius: "7px",
                      padding: "12px 14px",
                      fontSize: ".9375rem",
                      color: "var(--t3)",
                      fontFamily: "var(--f-u)",
                      minHeight: "46px",
                    }}
                  >
                    &nbsp;
                  </div>
                </div>

                {/* Platform */}
                <div>
                  <div
                    style={{
                      display: "block",
                      fontFamily: "var(--f-m)",
                      fontSize: ".625rem",
                      letterSpacing: ".1em",
                      textTransform: "uppercase" as const,
                      color: "var(--t3)",
                      marginBottom: "8px",
                    }}
                  >
                    Primary Platform
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap" as const,
                      gap: "8px",
                    }}
                  >
                    {PLATFORMS.map((platform) => (
                      <div
                        key={platform}
                        style={{
                          background: "var(--surface)",
                          border: "1px solid var(--border-md)",
                          borderRadius: "7px",
                          padding: "9px 16px",
                          fontSize: ".875rem",
                          color: "var(--t2)",
                          cursor: "default",
                          fontFamily: "var(--f-u)",
                          fontWeight: 500,
                        }}
                      >
                        {platform}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Followers */}
                <div>
                  <label
                    htmlFor="cp-followers"
                    style={{
                      display: "block",
                      fontFamily: "var(--f-m)",
                      fontSize: ".625rem",
                      letterSpacing: ".1em",
                      textTransform: "uppercase" as const,
                      color: "var(--t3)",
                      marginBottom: "8px",
                    }}
                  >
                    Approximate Follower / Subscriber Count
                  </label>
                  <div
                    id="cp-followers"
                    aria-label="Follower count field"
                    style={{
                      width: "100%",
                      background: "var(--surface)",
                      border: "1px solid var(--border-md)",
                      borderRadius: "7px",
                      padding: "12px 14px",
                      fontSize: ".9375rem",
                      color: "var(--t3)",
                      fontFamily: "var(--f-u)",
                      minHeight: "46px",
                    }}
                  >
                    &nbsp;
                  </div>
                </div>

                {/* Content Focus */}
                <div>
                  <div
                    style={{
                      display: "block",
                      fontFamily: "var(--f-m)",
                      fontSize: ".625rem",
                      letterSpacing: ".1em",
                      textTransform: "uppercase" as const,
                      color: "var(--t3)",
                      marginBottom: "8px",
                    }}
                  >
                    Content Focus
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap" as const,
                      gap: "8px",
                    }}
                  >
                    {CONTENT_FOCUS_OPTIONS.map((focus) => (
                      <div
                        key={focus}
                        style={{
                          background: "var(--surface)",
                          border: "1px solid var(--border-md)",
                          borderRadius: "7px",
                          padding: "7px 14px",
                          fontSize: ".8125rem",
                          color: "var(--t2)",
                          cursor: "default",
                          fontFamily: "var(--f-u)",
                        }}
                      >
                        {focus}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Why You Want to Join */}
                <div>
                  <label
                    htmlFor="cp-why"
                    style={{
                      display: "block",
                      fontFamily: "var(--f-m)",
                      fontSize: ".625rem",
                      letterSpacing: ".1em",
                      textTransform: "uppercase" as const,
                      color: "var(--t3)",
                      marginBottom: "8px",
                    }}
                  >
                    Why Do You Want to Join?
                  </label>
                  <div
                    id="cp-why"
                    aria-label="Why you want to join field"
                    style={{
                      width: "100%",
                      background: "var(--surface)",
                      border: "1px solid var(--border-md)",
                      borderRadius: "7px",
                      padding: "12px 14px",
                      fontSize: ".9375rem",
                      color: "var(--t3)",
                      fontFamily: "var(--f-u)",
                      minHeight: "100px",
                    }}
                  >
                    &nbsp;
                  </div>
                </div>

                {/* Submit */}
                <div>
                  <div
                    className="btn btn-p"
                    style={{
                      width: "100%",
                      fontSize: "1rem",
                      padding: "14px",
                      justifyContent: "center",
                      cursor: "default",
                    }}
                  >
                    Apply Now
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--f-m)",
                      fontSize: ".6875rem",
                      color: "var(--t3)",
                      letterSpacing: ".04em",
                      textAlign: "center" as const,
                      marginTop: "12px",
                      lineHeight: 1.6,
                    }}
                  >
                    We&apos;ll reach out within 48 hours.
                  </p>
                </div>

              </div>
            </div>

            <p
              style={{
                fontFamily: "var(--f-m)",
                fontSize: ".6875rem",
                color: "var(--t4)",
                maxWidth: "560px",
                lineHeight: 1.7,
                marginTop: "20px",
              }}
            >
              Note: Form submission is not yet wired — this is a preview of the
              application structure. To apply now, email{" "}
              <a
                href="mailto:creators@scorevera.com"
                style={{ color: "var(--t3)", textDecoration: "underline" }}
              >
                creators@scorevera.com
              </a>{" "}
              with your platform link and a brief note about your audience.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="page-cta">
          <div className="wrap">
            <h2>Ready to be the creator who actually helped?</h2>
            <p>
              Apply today. We&apos;ll review your application and get back to
              you within 48 hours with next steps, your affiliate link, and
              your audience discount code.
            </p>
            <a
              href="#apply"
              className="btn btn-p"
              style={{ fontSize: "1rem", padding: "14px 32px" }}
            >
              Apply Now
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
