import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Letter Library | ScoreVera",
  description:
    "Browse ScoreVera's full library of FCRA-compliant credit dispute letter templates — bureau disputes, debt validation, goodwill requests, escalations, and more.",
};

type Plan = "Free" | "Core" | "Guided" | "Operator";

interface LetterCard {
  index: string;
  statute: string;
  title: string;
  description: string;
  whenToUse: string;
  plans: Plan[];
  category: string;
}

const letters: LetterCard[] = [
  {
    index: "01",
    statute: "FCRA § 611",
    title: "Bureau Dispute Letter",
    category: "Bureau",
    description:
      "Formally challenges an inaccurate, incomplete, or unverifiable item reported by Equifax, Experian, or TransUnion. Cites § 611 and demands investigation within 30 days.",
    whenToUse:
      "Your first move when an error appears on your credit report. One letter per bureau reporting the item.",
    plans: ["Core", "Guided", "Operator"],
  },
  {
    index: "02",
    statute: "FCRA § 609",
    title: "File Disclosure Request",
    category: "Bureau",
    description:
      "Requests your complete credit file from a bureau — every account, inquiry, personal information record, and the source of each item.",
    whenToUse:
      "Before disputing, when you suspect a mixed file, or when you need to identify the furnisher behind a specific item.",
    plans: ["Free", "Core", "Guided", "Operator"],
  },
  {
    index: "03",
    statute: "FCRA § 623",
    title: "Furnisher Direct Dispute",
    category: "Furnisher",
    description:
      "Sent directly to the creditor or lender that reported the item — not the bureau. Triggers a separate investigation obligation on the furnisher's end.",
    whenToUse:
      "When a bureau dispute comes back verified, or to dispute through both channels simultaneously for maximum pressure.",
    plans: ["Core", "Guided", "Operator"],
  },
  {
    index: "04",
    statute: "FDCPA § 809(b)",
    title: "Debt Validation Letter",
    category: "Collections",
    description:
      "Demands written proof from a debt collector that the debt is valid, the amount is correct, and they have the legal right to collect it.",
    whenToUse:
      "Within 30 days of first contact from a collector, or any time a collection account appears on your report that you can't verify.",
    plans: ["Core", "Guided", "Operator"],
  },
  {
    index: "05",
    statute: "Goodwill",
    title: "Goodwill Letter",
    category: "Removal",
    description:
      "A professional courtesy request asking a creditor to voluntarily remove or adjust a negative mark on an otherwise positive account — typically a one-time late payment.",
    whenToUse:
      "After paying an account in full, with a long positive history with that creditor. Best for isolated late payments.",
    plans: ["Guided", "Operator"],
  },
  {
    index: "06",
    statute: "Escalation",
    title: "Escalation Letter",
    category: "Follow-Up",
    description:
      "A firm follow-up dispute that challenges an unsatisfactory investigation result, presents new evidence, and escalates the record of non-compliance.",
    whenToUse:
      "When your initial dispute was returned 'verified' but you have documentation or a legal argument the bureau did not consider.",
    plans: ["Guided", "Operator"],
  },
  {
    index: "07",
    statute: "CFPB",
    title: "CFPB Complaint Letter",
    category: "Regulatory",
    description:
      "A formal complaint to the Consumer Financial Protection Bureau when a bureau or furnisher has failed to comply with the FCRA after disputes have been exhausted.",
    whenToUse:
      "When internal disputes haven't resolved the issue and you need to create a regulatory record — or are considering legal action.",
    plans: ["Guided", "Operator"],
  },
];

const planConfig: Record<Plan, { label: string; color: string; bg: string }> = {
  Free: { label: "Free", color: "var(--t2)", bg: "rgba(148,163,184,.12)" },
  Core: { label: "Core", color: "#818CF8", bg: "rgba(99,102,241,.12)" },
  Guided: { label: "Guided", color: "var(--gold)", bg: "rgba(201,165,90,.12)" },
  Operator: { label: "Operator", color: "#34D399", bg: "rgba(16,185,129,.12)" },
};

const categoryColors: Record<string, string> = {
  Bureau: "rgba(99,102,241,.15)",
  Furnisher: "rgba(201,165,90,.15)",
  Collections: "rgba(239,68,68,.12)",
  Removal: "rgba(16,185,129,.12)",
  "Follow-Up": "rgba(245,158,11,.12)",
  Regulatory: "rgba(148,163,184,.12)",
};

const categoryText: Record<string, string> = {
  Bureau: "#818CF8",
  Furnisher: "var(--gold)",
  Collections: "#F87171",
  Removal: "#34D399",
  "Follow-Up": "#FCD34D",
  Regulatory: "var(--t2)",
};

export default function LetterLibraryPage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="page-hero" style={{ paddingTop: "100px" }}>
          <div className="wrap">
            <span className="eyebrow">Letter Library</span>
            <h1 className="h-xl">
              Every dispute letter, built into your account.
            </h1>
            <p className="body-lg" style={{ maxWidth: "600px" }}>
              ScoreVera includes a full library of FCRA-compliant dispute
              letters — from initial bureau disputes to CFPB complaints. Each
              one is generated for your specific situation, with your information
              pre-filled and the correct statute cited.
            </p>
            <p
              style={{
                fontSize: ".8125rem",
                color: "var(--t3)",
                marginTop: "8px",
                fontFamily: "var(--f-m)",
              }}
            >
              Letter generation requires an account.{" "}
              <a
                href="https://app.scorevera.com/"
                style={{ color: "var(--gold)", textDecoration: "none" }}
              >
                Log in or get started free.
              </a>
            </p>
          </div>
        </section>

        {/* PLAN LEGEND */}
        <div className="info-band">
          <div className="wrap">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "24px",
                flexWrap: "wrap",
              }}
            >
              <span style={{ fontSize: ".8125rem", color: "var(--t3)", fontFamily: "var(--f-m)" }}>
                Available on:
              </span>
              {(Object.keys(planConfig) as Plan[]).map((plan) => (
                <div key={plan} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span
                    style={{
                      display: "inline-block",
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: planConfig[plan].color,
                    }}
                  />
                  <span
                    style={{
                      fontSize: ".8125rem",
                      color: planConfig[plan].color,
                      fontFamily: "var(--f-m)",
                    }}
                  >
                    {plan}
                  </span>
                </div>
              ))}
              <a
                href="/pricing"
                style={{
                  marginLeft: "auto",
                  fontSize: ".8125rem",
                  color: "var(--gold)",
                  textDecoration: "none",
                }}
              >
                Compare plans →
              </a>
            </div>
          </div>
        </div>

        {/* LETTER GRID */}
        <section className="page-section">
          <div className="wrap">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: "16px",
              }}
            >
              {letters.map((letter) => (
                <div
                  key={letter.index}
                  style={{
                    background: "var(--elevated)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    padding: "28px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    transition: "border-color .15s",
                  }}
                >
                  {/* Top row */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        fontSize: ".6875rem",
                        fontFamily: "var(--f-m)",
                        color: categoryText[letter.category],
                        background: categoryColors[letter.category],
                        borderRadius: "4px",
                        padding: "3px 9px",
                        letterSpacing: ".04em",
                        textTransform: "uppercase",
                      }}
                    >
                      {letter.category}
                    </span>
                    <span
                      style={{
                        fontSize: ".6875rem",
                        fontFamily: "var(--f-m)",
                        color: "var(--gold)",
                        background: "rgba(201,165,90,.08)",
                        border: "1px solid rgba(201,165,90,.18)",
                        borderRadius: "4px",
                        padding: "3px 8px",
                        letterSpacing: ".03em",
                      }}
                    >
                      {letter.statute}
                    </span>
                  </div>

                  {/* Title */}
                  <div>
                    <div
                      style={{
                        fontSize: ".6875rem",
                        fontFamily: "var(--f-m)",
                        color: "var(--t3)",
                        marginBottom: "4px",
                      }}
                    >
                      Letter {letter.index}
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--f-d)",
                        fontSize: "1.0625rem",
                        color: "var(--t1)",
                        letterSpacing: "-.02em",
                        margin: 0,
                      }}
                    >
                      {letter.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: ".875rem",
                      color: "var(--t2)",
                      lineHeight: 1.65,
                      margin: 0,
                      flex: 1,
                    }}
                  >
                    {letter.description}
                  </p>

                  {/* When to use */}
                  <div
                    style={{
                      background: "rgba(255,255,255,.03)",
                      borderRadius: "7px",
                      padding: "12px 14px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: ".6875rem",
                        fontFamily: "var(--f-m)",
                        color: "var(--t3)",
                        letterSpacing: ".06em",
                        textTransform: "uppercase",
                        marginBottom: "5px",
                      }}
                    >
                      When to use
                    </div>
                    <p style={{ fontSize: ".8125rem", color: "var(--t2)", lineHeight: 1.55, margin: 0 }}>
                      {letter.whenToUse}
                    </p>
                  </div>

                  {/* Plan badges */}
                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                      flexWrap: "wrap",
                      borderTop: "1px solid var(--border)",
                      paddingTop: "14px",
                    }}
                  >
                    {(["Free", "Core", "Guided", "Operator"] as Plan[]).map((plan) => {
                      const active = letter.plans.includes(plan);
                      return (
                        <span
                          key={plan}
                          style={{
                            fontSize: ".6875rem",
                            fontFamily: "var(--f-m)",
                            color: active ? planConfig[plan].color : "var(--t3)",
                            background: active ? planConfig[plan].bg : "transparent",
                            borderRadius: "4px",
                            padding: "2px 8px",
                            opacity: active ? 1 : 0.45,
                          }}
                        >
                          {plan}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW GENERATION WORKS */}
        <section className="page-section" style={{ background: "var(--surface)" }}>
          <div className="wrap">
            <div style={{ maxWidth: "680px" }}>
              <span className="eyebrow" style={{ marginBottom: "14px", display: "block" }}>
                How It Works
              </span>
              <h2
                style={{
                  fontFamily: "var(--f-d)",
                  fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
                  color: "var(--t1)",
                  letterSpacing: "-.025em",
                  marginBottom: "24px",
                }}
              >
                Your letters are generated for your report, not from a blank template.
              </h2>
              <p className="body-lg" style={{ marginBottom: "16px" }}>
                When you upload your credit report, ScoreVera identifies the
                specific items that can be disputed — wrong account statuses,
                outdated negatives, unrecognized accounts, inaccurate balances —
                and generates letters that reference the exact item, the exact
                reporting bureau, and the exact legal basis for the dispute.
              </p>
              <p className="body-lg" style={{ marginBottom: "16px" }}>
                Each letter includes your personal information, the disputed
                item&apos;s details as they appear on your report, the applicable
                FCRA or FDCPA statute, and a clear demand. You review it, print
                it or export it as a PDF, and send it certified mail with return
                receipt — which creates a legal record that your dispute was
                received.
              </p>
              <p className="body-lg">
                ScoreVera then tracks the 30-day response window and alerts you
                when it&apos;s time to follow up or escalate.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="page-cta">
          <div className="wrap">
            <h2>Access your full letter library.</h2>
            <p>
              Log in to your ScoreVera account to generate letters, or create a
              free account and start with your first dispute today.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
              <a
                href="https://app.scorevera.com/"
                className="btn btn-p"
                style={{ fontSize: "1rem", padding: "14px 32px" }}
              >
                Log In to ScoreVera
              </a>
              <a
                href="https://app.scorevera.com/register"
                className="btn btn-g"
                style={{ fontSize: "1rem", padding: "14px 32px" }}
              >
                Get Started Free
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
