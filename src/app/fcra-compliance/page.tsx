import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FCRA Compliance | ScoreVera",
  description:
    "How ScoreVera operates in compliance with federal law — CROA, FCRA, and data privacy. We are software, not a credit repair service. You dispute. We give you the tools.",
};

const pillars = [
  {
    id: "not-croa",
    eyebrow: "CROA Compliance",
    heading: "ScoreVera is not a Credit Repair Organization.",
    body: [
      "The Credit Repair Organizations Act (CROA) regulates companies that offer to improve a consumer's credit record, history, or rating in exchange for payment. CROA companies face strict requirements: mandatory disclosures, a 3-day right of rescission, prohibition on advance fees, and explicit prohibitions against making false representations.",
      "ScoreVera does not fall under CROA because we do not perform credit repair services on your behalf. We are a software platform. We generate letters, track timelines, and guide your process. You — the consumer — review, sign, and submit every dispute yourself. The dispute is yours. The letter is yours. The right to dispute is yours under federal law.",
      "This distinction is not a technicality — it is fundamental to how we built the product. Every American has the legal right under the FCRA to dispute inaccurate information themselves, at no cost. ScoreVera makes that process structured and actionable. We are the process, not the service.",
    ],
  },
  {
    id: "fcra-alignment",
    eyebrow: "FCRA Alignment",
    heading: "Our letter templates cite the correct legal sections.",
    body: [
      "Every dispute letter ScoreVera generates cites the applicable FCRA or FDCPA provision. Bureau dispute letters reference § 611, which requires a 30-day investigation and deletion of unverifiable items. File disclosure requests reference § 609. Furnisher disputes reference § 623. Debt validation letters reference FDCPA § 809(b).",
      "We cite the statute because it matters. A letter that correctly invokes a consumer's legal rights is treated differently than a generic complaint letter — by the bureau, by the furnisher, and by regulators. Bureaus have legal obligations that are triggered by a proper § 611 dispute that are not triggered by an informal complaint.",
      "Our dispute tracking is also aligned with FCRA timelines. The law gives bureaus 30 days to complete an investigation (45 days in certain circumstances). ScoreVera tracks that window from the date your letter is sent and alerts you when a response is due, when the window is closing, and when the bureau may be in violation.",
    ],
  },
  {
    id: "no-legal-advice",
    eyebrow: "Important Limitation",
    heading: "ScoreVera provides process structure, not legal advice.",
    body: [
      "ScoreVera is not a law firm, and nothing on this platform constitutes legal advice or creates an attorney-client relationship. The information we provide about the FCRA, FDCPA, and CROA is educational and intended to help you understand your rights as a consumer.",
      "Our letter templates are structured around well-established legal frameworks and are designed to invoke your statutory rights clearly and correctly. However, every consumer's situation is different, and complex cases — particularly those involving identity theft, litigation, or potential FCRA violations by bureaus or furnishers — may benefit from consultation with a consumer protection attorney.",
      "If you believe a bureau or furnisher has willfully or negligently violated your FCRA rights, you may have the right to seek damages in federal court. Organizations like the National Consumer Law Center (NCLC) and consumer protection attorneys who work on contingency can advise you on that path. ScoreVera helps you build the record; an attorney can help you use it.",
    ],
  },
  {
    id: "user-data",
    eyebrow: "Data Handling",
    heading: "Your credit report data is used only to generate your letters.",
    body: [
      "When you upload or enter credit report information into ScoreVera, that data is used for one purpose: generating your dispute letters and tracking your dispute progress within the platform. We do not sell your data, share it with third parties for marketing or analytics, or use it for any purpose other than operating your account.",
      "Credit report data you upload is treated as highly sensitive. It is encrypted in transit using TLS and at rest using AES-256. Access is restricted to the systems that generate your letters and to authorized personnel for support purposes only.",
      "You can delete your credit report data from your account settings at any time. Upon account cancellation, all credit report data is permanently deleted from our systems within 30 days. For more detail, see our Privacy Policy.",
    ],
  },
  {
    id: "user-submits",
    eyebrow: "User Control",
    heading: "Dispute submissions are made by you, not by ScoreVera.",
    body: [
      "Every letter ScoreVera generates is submitted by you — directly to the credit bureau, furnisher, debt collector, or regulatory agency. We provide the bureau mailing addresses and recommend certified mail with return receipt for every submission, which creates a legal record that your dispute was received on a specific date.",
      "This is not a limitation — it is a feature. When you submit a dispute yourself, it carries your personal attestation. It is your right, your signature, and your legal record. You are not relying on a third party to act on your behalf, which means you maintain full control, full transparency, and full legal standing.",
      "ScoreVera tracks your submissions and helps you know when to expect a response, when to follow up, and what to do when the bureau responds — whether that's accepting the result, escalating, or filing a CFPB complaint.",
    ],
  },
  {
    id: "bureau-contact",
    eyebrow: "Accuracy",
    heading: "Bureau contact information is provided accurately.",
    body: [
      "ScoreVera provides the correct mailing addresses for dispute submissions to Equifax, Experian, and TransUnion — addresses designated by each bureau for FCRA dispute correspondence. We update these addresses as bureaus update their dispute handling operations.",
      "We also provide the correct mailing addresses for direct furnisher disputes where the furnisher's address is publicly available or is identified from your credit report. For CFPB complaints, we link directly to the CFPB's official complaint portal at consumerfinance.gov.",
      "If you ever receive a returned letter or undeliverable notice, contact us at support@scorevera.com and we will verify the current correct address for you.",
    ],
  },
  {
    id: "expectations",
    eyebrow: "Honest Expectations",
    heading: "We show you the process. Results depend on the investigation.",
    body: [
      "No one can guarantee a specific credit score increase. Anyone who tells you otherwise is either misinformed or not being honest with you. The outcome of a dispute depends on whether the disputed item can be verified by the bureau and furnisher — not on the letter itself, on the software you used to write it, or on who helped you.",
      "What ScoreVera does is give you the best possible process: correctly structured letters, cited statutes, complete documentation, and timely follow-up. That process maximizes the probability that inaccurate items will be investigated properly and removed when they cannot be verified.",
      "Many users see meaningful changes after completing the dispute process. Some items are removed immediately. Others require multiple rounds and escalation. Some items are verified as accurate and remain. ScoreVera gives you the process and the tools. The bureaus and furnishers determine the outcomes.",
    ],
  },
];

export default function FCRACompliancePage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="page-hero" style={{ paddingTop: "100px" }}>
          <div className="wrap">
            <span className="eyebrow">Compliance & Transparency</span>
            <h1 className="h-xl">
              How ScoreVera operates under federal law.
            </h1>
            <p className="body-lg" style={{ maxWidth: "640px" }}>
              We built ScoreVera with compliance as a foundation, not an
              afterthought. Here&apos;s a plain-English explanation of how we
              operate, what we are, what we are not, and what you can expect.
            </p>
          </div>
        </section>

        {/* SUMMARY BAND */}
        <div className="info-band">
          <div className="wrap">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "24px",
              }}
            >
              {[
                { icon: "✓", label: "Software tool, not a credit repair service" },
                { icon: "✓", label: "CROA-exempt — you submit your own disputes" },
                { icon: "✓", label: "FCRA statutes cited in every letter" },
                { icon: "✓", label: "No legal advice — process guidance only" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}
                >
                  <span
                    style={{
                      color: "var(--gold)",
                      fontSize: ".875rem",
                      paddingTop: "2px",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </span>
                  <span style={{ fontSize: ".875rem", color: "var(--t2)", lineHeight: 1.5 }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* COMPLIANCE PILLARS */}
        {pillars.map((pillar, i) => (
          <section
            key={pillar.id}
            id={pillar.id}
            className="page-section"
            style={{ background: i % 2 === 1 ? "var(--surface)" : undefined }}
          >
            <div className="wrap">
              <div style={{ maxWidth: "720px" }}>
                <span
                  className="eyebrow"
                  style={{ marginBottom: "14px", display: "block" }}
                >
                  {pillar.eyebrow}
                </span>
                <h2
                  style={{
                    fontFamily: "var(--f-d)",
                    fontSize: "clamp(1.375rem, 2.5vw, 2rem)",
                    color: "var(--t1)",
                    letterSpacing: "-.025em",
                    lineHeight: 1.2,
                    marginBottom: "24px",
                  }}
                >
                  {pillar.heading}
                </h2>
                {pillar.body.map((para, j) => (
                  <p
                    key={j}
                    className="body-lg"
                    style={{ marginBottom: j < pillar.body.length - 1 ? "16px" : "0" }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* DISCLAIMER NOTE */}
        <section className="page-section" style={{ background: "var(--surface)" }}>
          <div className="wrap">
            <div
              style={{
                maxWidth: "720px",
                background: "var(--elevated)",
                border: "1px solid var(--border)",
                borderRadius: "10px",
                padding: "28px 32px",
              }}
            >
              <span className="eyebrow" style={{ marginBottom: "12px", display: "block" }}>
                Full Disclaimer
              </span>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: 1.8, marginBottom: "16px" }}>
                ScoreVera is a software tool that assists consumers in organizing
                and structuring credit dispute letters based on their own credit
                report data. ScoreVera is not a credit repair organization as
                defined by the Credit Repair Organizations Act (15 U.S.C. § 1679
                et seq.), a law firm, or a provider of legal advice. Use of
                ScoreVera does not create an attorney-client relationship.
              </p>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: 1.8, marginBottom: "16px" }}>
                Credit dispute outcomes depend on the results of investigations
                conducted by credit bureaus and furnishers. ScoreVera makes no
                representation or warranty that use of the platform will result in
                any specific change to your credit report or credit score. Results
                vary based on the nature of the disputed items, the supporting
                documentation provided, and the bureau or furnisher response.
              </p>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: 1.8, margin: 0 }}>
                For questions about this compliance statement, contact us at{" "}
                <a
                  href="mailto:support@scorevera.com"
                  style={{ color: "var(--gold)", textDecoration: "none" }}
                >
                  support@scorevera.com
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="page-cta">
          <div className="wrap">
            <h2>Built on transparency. Designed for your rights.</h2>
            <p>
              ScoreVera gives you FCRA-compliant tools, honest expectations, and
              full control over your own dispute process.
            </p>
            <a
              href="https://app.scorevera.com/"
              className="btn btn-p"
              style={{ fontSize: "1rem", padding: "14px 32px" }}
            >
              Start Disputing Free
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
