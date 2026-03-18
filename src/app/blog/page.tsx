import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import BlogPostsGrid from "@/components/BlogPostsGrid"
import { getAllPosts, getFeaturedPosts } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Credit Dispute Guides & Resources | ScoreVera Blog",
  description: "Free guides on disputing credit reports, understanding your FCRA rights, and improving your credit score. Written for everyday Americans.",
}

export default function BlogPage() {
  const posts = getAllPosts()
  const featured = getFeaturedPosts()

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section style={{ paddingTop:"100px", paddingBottom:"48px", borderBottom:"1px solid var(--border)" }}>
          <div className="wrap">
            <span className="eyebrow" style={{ marginBottom:"14px", display:"block" }}>Free Guides</span>
            <h1 style={{ fontFamily:"var(--f-d)", fontSize:"clamp(2rem,5vw,3rem)", color:"var(--t1)", lineHeight:"1.1", letterSpacing:"-.04em", marginBottom:"18px" }}>
              Everything you need to know<br />about disputing your credit.
            </h1>
            <p className="body-lg" style={{ maxWidth:"520px", color:"var(--t2)" }}>
              {posts.length} guides on FCRA rights, dispute letters, credit report errors, and rebuilding your score. Plain English. No fluff.
            </p>
          </div>
        </section>

        {/* Featured posts */}
        {featured.length > 0 && (
          <section style={{ padding:"48px 0", borderBottom:"1px solid var(--border)", background:"var(--surface)" }}>
            <div className="wrap">
              <div style={{ fontFamily:"var(--f-m)", fontSize:".5625rem", color:"var(--t3)", letterSpacing:".14em", textTransform:"uppercase", marginBottom:"20px" }}>
                Featured Guides
              </div>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:"16px" }}>
                {featured.map(post => (
                  <a key={post.slug} href={`/blog/${post.slug}`} style={{
                    display:"flex", flexDirection:"column", gap:"10px",
                    background:"var(--elevated)", border:"1px solid var(--border-md)",
                    borderRadius:"12px", padding:"24px", textDecoration:"none",
                  }}>
                    <div style={{ fontFamily:"var(--f-d)", fontSize:"1.0625rem", color:"var(--t1)", lineHeight:"1.3", letterSpacing:"-.01em" }}>
                      {post.title}
                    </div>
                    <div style={{ fontSize:".8125rem", color:"var(--t3)", lineHeight:"1.55", flex:1 }}>{post.excerpt}</div>
                    <span style={{ fontFamily:"var(--f-m)", fontSize:".6875rem", color:"var(--gold)" }}>Read guide →</span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All posts with filter */}
        <section style={{ padding:"48px 0 80px" }}>
          <div className="wrap">
            <BlogPostsGrid posts={posts} />
          </div>
        </section>

        {/* Bottom CTA */}
        <section style={{ background:"var(--elevated)", borderTop:"1px solid var(--border)", padding:"56px 0" }}>
          <div className="wrap" style={{ textAlign:"center" }}>
            <h2 style={{ fontFamily:"var(--f-d)", fontSize:"clamp(1.5rem,3vw,2rem)", color:"var(--t1)", marginBottom:"14px", letterSpacing:"-.03em" }}>
              Ready to start disputing?
            </h2>
            <p style={{ color:"var(--t2)", fontSize:".9375rem", marginBottom:"24px", maxWidth:"400px", margin:"0 auto 24px" }}>
              Upload your credit report and ScoreVera will identify what can be disputed and generate the right letters.
            </p>
            <a href="https://app.scorevera.com/" className="btn btn-p">
              Upload Your Report →
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
