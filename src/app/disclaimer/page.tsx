import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Disclaimer | ScoreVera",
  description:
    "ScoreVera is a self-service software tool, not a credit repair organization or law firm. Read our full disclaimer.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <div className="wrap">
          <div style={{ maxWidth: "720px", margin: "0 auto", padding: "72px 0 100px" }}>
            <span className="eyebrow" style={{ marginBottom: "14px", display: "block" }}>Legal</span>
            <h1
              style={{
                fontFamily: "var(--f-d)",
                fontSize: "clamp(1.875rem,4vw,2.5rem)",
                color: "var(--t1)",
                lineHeight: "1.15",
                letterSpacing: "-.03em",
                marginBottom: "20px",
              }}
            >
              Disclaimer
            </h1>
            <p
              style={{
                fontSize: ".8125rem",
                fontFamily: "var(--f-m)",
                color: "var(--t3)",
                marginBottom: "48px",
              }}
            >
              Last updated: March 2026
            </p>

            <div style={{ marginBottom: "40px" }}>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: "1.8", marginBottom: "0" }}>
                ScoreVera is committed to being transparent about what we are and what we are not.
                Please read this disclaimer carefully before using the Service.
              </p>
            </div>

            <div style={{ marginBottom: "40px" }}>
              <h2
                style={{
                  fontFamily: "var(--f-d)",
                  fontSize: "1.25rem",
                  color: "var(--t1)",
                  marginBottom: "12px",
                  letterSpacing: "-.02em",
                }}
              >
                1. Not a Credit Repair Organization
              </h2>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: "1.8", marginBottom: "14px" }}>
                ScoreVera is <strong style={{ color: "var(--t1)" }}>not a credit repair organization (CRO)</strong> as
                defined by the Credit Repair Organizations Act (CROA), 15 U.S.C. § 1679 et seq. We do not
                represent consumers before credit bureaus or creditors, do not negotiate on your behalf,
                and do not charge fees in advance of services in the manner regulated by CROA.
              </p>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: "1.8", marginBottom: "0" }}>
                Under federal law, you have the right to dispute inaccurate information on your credit
                report directly with the credit bureaus — Equifax, Experian, and TransUnion — at no cost.
                ScoreVera provides software to help you do this yourself, more efficiently. You are never
                required to pay anyone to exercise your FCRA rights.
              </p>
            </div>

            <div style={{ marginBottom: "40px" }}>
              <h2
                style={{
                  fontFamily: "var(--f-d)",
                  fontSize: "1.25rem",
                  color: "var(--t1)",
                  marginBottom: "12px",
                  letterSpacing: "-.02em",
                }}
              >
                2. Not Legal Advice
              </h2>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: "1.8", marginBottom: "14px" }}>
                Nothing on the ScoreVera website, within the platform, or in any dispute letters generated
                by the Service constitutes legal advice. ScoreVera is not a law firm and does not employ
                attorneys to advise users.
              </p>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: "1.8", marginBottom: "0" }}>
                The dispute letter templates and guidance provided are based on publicly available FCRA
                provisions and general best practices. They are provided for informational and productivity
                purposes only. If your situation involves potential legal claims, identity theft, or
                significant financial consequences, you should consult a licensed consumer rights attorney.
              </p>
            </div>

            <div style={{ marginBottom: "40px" }}>
              <h2
                style={{
                  fontFamily: "var(--f-d)",
                  fontSize: "1.25rem",
                  color: "var(--t1)",
                  marginBottom: "12px",
                  letterSpacing: "-.02em",
                }}
              >
                3. No Guaranteed Results
              </h2>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: "1.8", marginBottom: "14px" }}>
                ScoreVera does not guarantee that using our platform will result in the removal of any
                item from your credit report, an increase in your credit score, or any other specific
                outcome.
              </p>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: "1.8", marginBottom: "0" }}>
                The outcome of a dispute depends on factors entirely outside our control, including: the
                response of the credit bureau, the response of the original furnisher of the information,
                whether the disputed item is found to be verifiable, and the specific contents of your
                individual credit report. Any testimonials or examples of results shared on our website
                reflect individual experiences and are not representative of typical outcomes.
              </p>
            </div>

            <div style={{ marginBottom: "40px" }}>
              <h2
                style={{
                  fontFamily: "var(--f-d)",
                  fontSize: "1.25rem",
                  color: "var(--t1)",
                  marginBottom: "12px",
                  letterSpacing: "-.02em",
                }}
              >
                4. Your FCRA Rights Belong to You
              </h2>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: "1.8", marginBottom: "14px" }}>
                The Fair Credit Reporting Act gives every American the right to dispute incomplete or
                inaccurate information in their credit files. These rights exist independent of ScoreVera
                or any other company.
              </p>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: "1.8", marginBottom: "0" }}>
                ScoreVera helps you organize, draft, and track your disputes — but you submit them
                yourself. You are always in control of the process. We structure the workflow so you can
                exercise your existing rights more effectively, but we do not add to or alter those rights
                in any way.
              </p>
            </div>

            <div style={{ marginBottom: "40px" }}>
              <h2
                style={{
                  fontFamily: "var(--f-d)",
                  fontSize: "1.25rem",
                  color: "var(--t1)",
                  marginBottom: "12px",
                  letterSpacing: "-.02em",
                }}
              >
                5. Software Only
              </h2>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: "1.8", marginBottom: "0" }}>
                ScoreVera is a software tool. The value we provide is in organization, automation, and
                productivity — helping you move faster and more methodically through a process you could
                complete manually on your own. We do not access your credit reports on your behalf, we
                do not have relationships with the credit bureaus, and we do not have any ability to
                influence bureau decisions. We are a tool in your hands, not an intermediary acting
                on your behalf.
              </p>
            </div>

            <div style={{ marginBottom: "0" }}>
              <h2
                style={{
                  fontFamily: "var(--f-d)",
                  fontSize: "1.25rem",
                  color: "var(--t1)",
                  marginBottom: "12px",
                  letterSpacing: "-.02em",
                }}
              >
                6. Questions
              </h2>
              <p style={{ fontSize: ".9375rem", color: "var(--t2)", lineHeight: "1.8", marginBottom: "0" }}>
                If you have questions about this disclaimer or anything else about how ScoreVera operates,
                please reach out at{" "}
                <a
                  href="mailto:privacy@scorevera.com"
                  style={{ color: "var(--gold)", textDecoration: "none" }}
                >
                  privacy@scorevera.com
                </a>
                . We are committed to being straightforward about what we are and what we are not.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
