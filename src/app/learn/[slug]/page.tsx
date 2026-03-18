import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { articles, getArticle } from "@/data/articles";

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} | ScoreVera`,
    description: article.description,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <>
      <Header />
      <main>
        <div className="wrap">
          <div className="article-wrap">
            <a href="/learn" className="article-back">
              ← All Guides
            </a>
            <span className="article-category">{article.category}</span>
            <h1 className="article-title">{article.title}</h1>
            <p className="article-intro">{article.intro}</p>

            {article.sections.map((s, i) => (
              <div className="article-section" key={i}>
                <h2>{s.heading}</h2>
                <p>{s.body}</p>
              </div>
            ))}

            <div className="article-cta-box">
              <p>{article.cta}</p>
              <a href="https://app.scorevera.com/" className="btn btn-p">
                Upload Your Report{" "}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path
                    d="M7 1.5L12.5 7L7 12.5M1.5 7h11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
