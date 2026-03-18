import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { getAllPosts, getPostBySlug } from "@/lib/blog"
import { MDXRemote } from "next-mdx-remote/rsc"

const CAT_COLOR: Record<string, string> = {
  "dispute-process": "var(--blue)",
  "credit-report-errors": "var(--gold)",
  "credit-score": "var(--green)",
}
const CAT_BG: Record<string, string> = {
  "dispute-process": "rgba(59,130,246,0.12)",
  "credit-report-errors": "rgba(201,165,90,0.12)",
  "credit-score": "rgba(16,185,129,0.12)",
}
const CAT_LABEL: Record<string, string> = {
  "dispute-process": "Dispute Process",
  "credit-report-errors": "Credit Report Errors",
  "credit-score": "Credit Score",
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} | ScoreVera`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const categoryColor = CAT_COLOR[post.category] || "var(--gold)"
  const categoryBg = CAT_BG[post.category] || "rgba(201,165,90,0.12)"
  const categoryLabel = CAT_LABEL[post.category] || post.category

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Person", name: "Jason Murphy" },
    publisher: { "@type": "Organization", name: "ScoreVera" },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
  }

  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />

        <div style={{ paddingTop:"80px", paddingBottom:"80px" }}>
          <div className="wrap">
            <div style={{ display:"grid", gridTemplateColumns:"1fr", gap:"48px", maxWidth:"1080px", margin:"0 auto" }}>

              {/* On desktop, 2 cols: content + sidebar */}
              <div style={{ display:"grid", gridTemplateColumns:"minmax(0,1fr) 280px", gap:"48px", alignItems:"start" }}>

                {/* Main content */}
                <article>
                  {/* Back link */}
                  <a href="/blog" style={{ fontFamily:"var(--f-m)", fontSize:".75rem", color:"var(--t3)", display:"inline-flex", alignItems:"center", gap:"6px", marginBottom:"32px", transition:"color .15s" }}>
                    ← All Guides
                  </a>

                  {/* Category pill */}
                  <span style={{
                    display:"inline-flex", padding:"4px 12px", borderRadius:"20px",
                    background: categoryBg, color: categoryColor,
                    fontFamily:"var(--f-m)", fontSize:".625rem", letterSpacing:".1em", textTransform:"uppercase",
                    marginBottom:"16px",
                  }}>
                    {categoryLabel}
                  </span>

                  {/* Title */}
                  <h1 style={{
                    fontFamily:"var(--f-d)", fontSize:"clamp(1.75rem,4vw,2.5rem)",
                    color:"var(--t1)", lineHeight:"1.15", letterSpacing:"-.03em", marginBottom:"16px",
                  }}>
                    {post.title}
                  </h1>

                  {/* Excerpt */}
                  <p style={{ fontSize:"1.0625rem", color:"var(--t2)", lineHeight:"1.7", marginBottom:"24px" }}>
                    {post.excerpt}
                  </p>

                  {/* Meta bar */}
                  <div style={{
                    display:"flex", flexWrap:"wrap", gap:"16px", alignItems:"center",
                    paddingBottom:"24px", borderBottom:"1px solid var(--border)",
                    marginBottom:"36px",
                    fontFamily:"var(--f-m)", fontSize:".6875rem", color:"var(--t4)", letterSpacing:".04em",
                  }}>
                    <span>By Jason Murphy</span>
                    <span>·</span>
                    <span>{new Date(post.publishedAt).toLocaleDateString("en-US", { year:"numeric", month:"long", day:"numeric" })}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>

                  {/* MDX Content */}
                  <div style={{
                    color:"var(--t2)", lineHeight:"1.8", fontSize:".9375rem",
                  }}>
                    <style>{`
                      article h2 { font-family:var(--f-d); font-size:1.25rem; color:var(--t1); margin:32px 0 12px; letter-spacing:-.02em; }
                      article h3 { font-family:var(--f-d); font-size:1.0625rem; color:var(--t1); margin:24px 0 10px; }
                      article p { margin-bottom:16px; }
                      article ul, article ol { padding-left:20px; margin-bottom:16px; }
                      article li { margin-bottom:6px; }
                      article strong { color:var(--t1); font-weight:600; }
                      article a { color:${categoryColor}; text-decoration:underline; text-underline-offset:3px; }
                      article code { font-family:var(--f-m); font-size:.875em; background:var(--elevated); padding:2px 6px; border-radius:4px; color:var(--gold); }
                      article blockquote { border-left:3px solid ${categoryColor}; padding:12px 20px; margin:24px 0; background:var(--elevated); border-radius:0 8px 8px 0; }
                      article blockquote p { margin:0; color:var(--t1); }
                    `}</style>
                    <MDXRemote source={post.content} />
                  </div>

                  {/* Bottom CTA */}
                  <div style={{
                    marginTop:"48px", background:"var(--elevated)", border:"1px solid var(--border-md)",
                    borderRadius:"14px", padding:"32px", textAlign:"center",
                  }}>
                    <p style={{ color:"var(--t2)", marginBottom:"20px", fontSize:".9375rem", lineHeight:"1.65" }}>
                      ScoreVera structures this process for you — from identifying errors to generating the right letter at the right time.
                    </p>
                    <a href="https://app.scorevera.com/" className="btn btn-p">
                      Upload Your Report →
                    </a>
                  </div>
                </article>

                {/* Sidebar — hidden on mobile via CSS */}
                <aside style={{ position:"sticky", top:"80px" }} className="blog-sidebar">
                  <div style={{
                    background:"var(--elevated)", border:"1px solid var(--border)",
                    borderRadius:"12px", padding:"24px", marginBottom:"20px",
                  }}>
                    <div style={{ fontFamily:"var(--f-m)", fontSize:".5625rem", color:"var(--gold)", letterSpacing:".12em", textTransform:"uppercase", marginBottom:"12px" }}>
                      Start Disputing Free
                    </div>
                    <p style={{ fontSize:".875rem", color:"var(--t2)", lineHeight:"1.6", marginBottom:"16px" }}>
                      Upload your credit report and ScoreVera identifies every item that can be disputed.
                    </p>
                    <a href="https://app.scorevera.com/" className="btn btn-p" style={{ width:"100%", justifyContent:"center", fontSize:".875rem" }}>
                      Get Started Free
                    </a>
                  </div>

                  <div style={{
                    background:"var(--elevated)", border:"1px solid var(--border)",
                    borderRadius:"12px", padding:"24px",
                  }}>
                    <div style={{ fontFamily:"var(--f-m)", fontSize:".5625rem", color:"var(--t3)", letterSpacing:".12em", textTransform:"uppercase", marginBottom:"12px" }}>
                      Browse All Guides
                    </div>
                    {[
                      { label:"Dispute Process", href:"/blog/category/dispute-process", color:"var(--blue)" },
                      { label:"Credit Report Errors", href:"/blog/category/credit-report-errors", color:"var(--gold)" },
                      { label:"Credit Score", href:"/blog/category/credit-score", color:"var(--green)" },
                    ].map(c => (
                      <a key={c.href} href={c.href} style={{
                        display:"block", fontSize:".8125rem", color:c.color,
                        padding:"6px 0", borderBottom:"1px solid var(--border)",
                      }}>
                        {c.label} →
                      </a>
                    ))}
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
