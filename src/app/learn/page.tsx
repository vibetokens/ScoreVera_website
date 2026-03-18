import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Credit Dispute Guides & Resources | ScoreVera",
  description:
    "Free guides on disputing credit reports, understanding your FCRA rights, and improving your credit score. Written for everyday Americans.",
};

const CATEGORIES = [
  "Dispute Guides",
  "FCRA & Your Rights",
  "Credit Score Help",
] as const;

export default function LearnPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section">
          <div className="wrap">
            <div className="sh center rv">
              <span className="eyebrow">Free Resources</span>
              <h1 className="h-xl">Credit Guides &amp; Resources</h1>
              <p className="body-lg">
                Everything you need to understand your rights, dispute errors, and improve your credit
                score — written in plain English.
              </p>
            </div>

            {CATEGORIES.map((cat) => (
              <div key={cat} style={{ marginBottom: "56px" }}>
                <h2
                  style={{
                    fontFamily: "var(--f-m)",
                    fontSize: ".6875rem",
                    color: "var(--t3)",
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                    marginBottom: "20px",
                    paddingBottom: "12px",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  {cat}
                </h2>
                <div className="learn-grid">
                  {articles
                    .filter((a) => a.category === cat)
                    .map((a) => (
                      <a key={a.slug} href={`/learn/${a.slug}`} className="learn-card">
                        <div className="learn-card-title">{a.title}</div>
                        <div className="learn-card-desc">{a.description}</div>
                        <span className="learn-card-cta">Read guide →</span>
                      </a>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
