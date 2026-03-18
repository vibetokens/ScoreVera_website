import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "For Creators | ScoreVera Creator Program",
  description:
    "Finance creators on YouTube, TikTok, and Instagram: ScoreVera turns your credit content into real action for your audience. Affiliate commissions, discount codes, early access.",
};

const CREATOR_TYPES = [
  "YouTube finance channels covering credit, debt, and FCRA rights",
  "TikTok and Instagram creators in the personal finance space",
  "Podcasters covering money, credit, and financial recovery",
  "Newsletter writers focused on credit, debt, or frugal living",
  "Blog and website owners ranking for credit-related search terms",
  "Community leaders in Facebook groups, Discord servers, or Skool communities",
];

const WHAT_TO_SHOW = [
  {
    title: "The ScoreVera Walkthrough",
    desc: "Show your audience exactly how the dispute workflow works — from uploading a credit report to generating letters. Real tool, real interface.",
  },
  {
    title: "Real Dispute Results",
    desc: "Walk through actual before/after outcomes — collections removed, late payments corrected, scores improved. Make the abstract concrete.",
  },
  {
    title: "How the Letter Engine Works",
    desc: "Break down what a proper FCRA § 611 dispute letter looks like, why generic letters fail, and how ScoreVera builds letters that hold up to bureau scrutiny.",
  },
  {
    title: "The 30-Day Timeline Explained",
    desc: "Explain why timing matters — bureaus have 30 days to investigate, and most people have no idea how to track it. ScoreVera handles this automatically.",
  },
  {
    title: "Who Shouldn&apos;t Pay for Credit Repair",
    desc: "Create the comparison content your audience is already searching for: ScoreVera vs. Lexington Law, Sky Blue, Credit Saint — and why the DIY approach is legal and superior.",
  },
];

const PROGRAM_PERKS = [
  {
    label: "Recurring Commission",
    desc: "Earn a commission on every active subscriber you refer — not just the first month. As long as they stay subscribed, you earn.",
  },
  {
    label: "Audience Discount Codes",
    desc: "Your followers get an exclusive discount through your code. It gives you something real to offer — not just a link.",
  },
  {
    label: "Affiliate Dashboard",
    desc: "Track clicks, conversions, and earnings in real time. See which content is driving the most sign-ups.",
  },
  {
    label: "Early Feature Access",
    desc: "Get access to new ScoreVera features before public release — so you can create content before everyone else.",
  },
  {
    label: "Creator-Only Slack",
    desc: "Connect with other finance creators in the program. Share content ideas, compare results, and get direct access to the ScoreVera team.",
  },
  {
    label: "Content Resources",
    desc: "We provide demo videos, screenshots, copy templates, and talking points — so you can create content fast without starting from scratch.",
  },
];

export default function ForCreatorsPage() {
  return (
    <>
      <Header />
      <main>

        {/* HERO */}
        <section className="page-hero" style={{ paddingTop: "100px" }}>
          <div className="wrap">
            <span className="eyebrow">For Creators</span>
            <h1>
              Turn your audience&apos;s credit questions
              <br />
              into real action.
            </h1>
            <p>
              You explain the FCRA. You break down dispute letters. You tell
              people they don&apos;t need a credit repair company. Now give them
              the actual system to do it — and earn when they do.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap" as const,
                gap: "12px",
                marginTop: "28px",
              }}
            >
              <a href="/creator-program" className="btn btn-p">
                Apply for Creator Program
              </a>
              <a href="https://app.scorevera.com/" className="btn btn-g">
                Try ScoreVera First
              </a>
            </div>
          </div>
        </section>

        {/* WHO THIS IS FOR */}
        <section className="page-section">
          <div className="wrap">
            <div style={{ maxWidth: "720px" }}>
              <span
                className="eyebrow"
                style={{ marginBottom: "16px", display: "block" }}
              >
                Who This Is For
              </span>
              <h2 style={{ marginBottom: "16px" }}>
                Finance creators who talk about credit, debt, and financial
                recovery.
              </h2>
              <p className="body-lg" style={{ marginBottom: "24px" }}>
                If your content helps people understand money, fix their credit,
                deal with debt, or navigate the FCRA — ScoreVera is the tool
                your audience has been looking for.
              </p>
              <ul>
                {CREATOR_TYPES.map((type) => (
                  <li key={type}>{type}</li>
                ))}
              </ul>
              <p style={{ marginTop: "16px" }}>
                You don&apos;t have to be a massive channel. You need an
                engaged audience that trusts your recommendations — and content
                that aligns with what ScoreVera actually does.
              </p>
            </div>
          </div>
        </section>

        {/* THE PROBLEM WITH YOUR NICHE */}
        <section
          className="page-section"
          style={{ background: "var(--surface)" }}
        >
          <div className="wrap">
            <div style={{ maxWidth: "720px" }}>
              <span
                className="eyebrow"
                style={{ marginBottom: "16px", display: "block" }}
              >
                The Problem With Your Niche
              </span>
              <h2 style={{ marginBottom: "16px" }}>
                You explain the process. Your audience still doesn&apos;t know
                what to actually do.
              </h2>
              <p>
                Finance creators in the credit space face a recurring problem:
                the content performs, the comments are full of &quot;thank
                you,&quot; but 90% of viewers never take action. Not because
                they don&apos;t want to — because the gap between understanding
                a concept and executing a 30-day dispute workflow is enormous.
              </p>
              <p>
                Most viewers can&apos;t pull the right report. They don&apos;t
                know how to write an FCRA-compliant letter that won&apos;t get
                auto-rejected. They can&apos;t track three separate bureau
                timelines at once. They start, get confused, and give up —
                or they pay a credit repair company to do what they could have
                done themselves.
              </p>
              <p>
                ScoreVera closes that gap. It takes the process you&apos;re
                already describing and puts it into a system anyone can follow.
                Your audience gets a result. You get the credit for it.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT TO SHOW YOUR AUDIENCE */}
        <section className="page-section">
          <div className="wrap">
            <span
              className="eyebrow"
              style={{ marginBottom: "16px", display: "block" }}
            >
              Content Ideas
            </span>
            <h2 style={{ marginBottom: "12px" }}>
              What to show your audience.
            </h2>
            <p
              className="body-lg"
              style={{ maxWidth: "580px", marginBottom: "36px" }}
            >
              ScoreVera gives you real product to demonstrate — not a
              whiteboard explainer or a generic affiliate link.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "12px",
              }}
            >
              {WHAT_TO_SHOW.map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: "var(--elevated)",
                    border: "1px solid var(--border)",
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
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                  <p
                    style={{
                      fontSize: ".875rem",
                      color: "var(--t2)",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                    dangerouslySetInnerHTML={{ __html: item.desc }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CREATOR PROGRAM PERKS */}
        <section
          className="page-section"
          style={{ background: "var(--surface)" }}
        >
          <div className="wrap">
            <span
              className="eyebrow"
              style={{ marginBottom: "16px", display: "block" }}
            >
              Creator Program
            </span>
            <h2 style={{ marginBottom: "12px" }}>
              What you get when you join.
            </h2>
            <p
              className="body-lg"
              style={{ maxWidth: "560px", marginBottom: "36px" }}
            >
              The ScoreVera Creator Program is built for finance creators who
              want to recommend something that actually helps their audience —
              and earn recurring income for doing it.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "12px",
              }}
            >
              {PROGRAM_PERKS.map((perk) => (
                <div
                  key={perk.label}
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
                    {perk.label}
                  </div>
                  <p
                    style={{
                      fontSize: ".875rem",
                      color: "var(--t2)",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {perk.desc}
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
                How You Earn
              </span>
              <h2 style={{ marginBottom: "16px" }}>
                Recurring commissions on every active subscriber you refer.
              </h2>
              <p>
                You earn a commission for every person who signs up for
                ScoreVera through your affiliate link or discount code — and
                that commission continues as long as they remain an active
                subscriber. One referral can generate months of recurring income.
              </p>
              <p>
                Commission structure, exact rates, and payment details are
                provided when you apply and are accepted into the program.
                Specifics are shared in your creator dashboard.
              </p>
              <a
                href="/creator-program"
                className="btn btn-p"
                style={{ marginTop: "24px", display: "inline-flex" }}
              >
                Apply for Creator Program
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="page-cta">
          <div className="wrap">
            <h2>Your audience wants to fix their credit. Give them the tool.</h2>
            <p>
              Apply to the ScoreVera Creator Program and get your affiliate
              link, discount codes, and content resources ready to go.
            </p>
            <a
              href="/creator-program"
              className="btn btn-p"
              style={{ fontSize: "1rem", padding: "14px 32px" }}
            >
              Apply for Creator Program
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
