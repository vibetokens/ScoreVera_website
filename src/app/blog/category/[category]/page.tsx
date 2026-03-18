import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import BlogPostsGrid from "@/components/BlogPostsGrid"
import { getPostsByCategory } from "@/lib/blog"

const META: Record<string, { title: string; description: string }> = {
  "dispute-process": {
    title: "Credit Dispute Process Guides | ScoreVera",
    description: "Step-by-step guides on how to dispute credit report errors, send letters, and follow up with bureaus using your FCRA rights.",
  },
  "credit-report-errors": {
    title: "Credit Report Error Guides | ScoreVera",
    description: "How to identify and fix every type of credit report error — from mixed files to duplicate accounts to incorrect balances.",
  },
  "credit-score": {
    title: "Credit Score Guides | ScoreVera",
    description: "How long negative items stay on your report, how to rebuild credit after disputes, and everything about your credit score.",
  },
}

export async function generateStaticParams() {
  return ["dispute-process", "credit-report-errors", "credit-score"].map(c => ({ category: c }))
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params
  const m = META[category]
  if (!m) return {}
  return { title: m.title, description: m.description }
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const posts = getPostsByCategory(category)
  if (!posts.length) notFound()

  const meta = META[category] || { title: category, description: "" }
  const label = category.split("-").map((w: string) => w[0].toUpperCase() + w.slice(1)).join(" ")

  return (
    <>
      <Header />
      <main>
        <section style={{ paddingTop:"100px", paddingBottom:"40px", borderBottom:"1px solid var(--border)" }}>
          <div className="wrap">
            <a href="/blog" style={{ fontFamily:"var(--f-m)", fontSize:".75rem", color:"var(--t3)", display:"inline-flex", gap:"6px", marginBottom:"24px" }}>← All Guides</a>
            <span className="eyebrow" style={{ display:"block", marginBottom:"12px" }}>{label}</span>
            <h1 style={{ fontFamily:"var(--f-d)", fontSize:"clamp(1.875rem,4vw,2.75rem)", color:"var(--t1)", lineHeight:"1.15", letterSpacing:"-.03em", marginBottom:"14px" }}>
              {meta.title.split("|")[0].trim()}
            </h1>
            <p className="body-lg" style={{ color:"var(--t2)", maxWidth:"500px" }}>{meta.description}</p>
          </div>
        </section>
        <section style={{ padding:"48px 0 80px" }}>
          <div className="wrap">
            <BlogPostsGrid posts={posts} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
