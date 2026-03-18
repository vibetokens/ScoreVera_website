"use client"
import { useState } from "react"
import type { Post } from "@/lib/blog"

const CATS = [
  { key: "all", label: "All Posts" },
  { key: "dispute-process", label: "Dispute Process" },
  { key: "credit-report-errors", label: "Credit Report Errors" },
  { key: "credit-score", label: "Credit Score" },
]

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

export default function BlogPostsGrid({ posts }: { posts: Post[] }) {
  const [active, setActive] = useState("all")
  const filtered = active === "all" ? posts : posts.filter(p => p.category === active)

  return (
    <div>
      {/* Filter tabs */}
      <div style={{ display:"flex", flexWrap:"wrap", gap:"8px", marginBottom:"40px" }}>
        {CATS.map(c => (
          <button
            key={c.key}
            onClick={() => setActive(c.key)}
            style={{
              padding:"8px 16px",
              borderRadius:"20px",
              border: active === c.key ? "1px solid var(--border-md)" : "1px solid var(--border)",
              background: active === c.key ? "var(--elevated)" : "transparent",
              color: active === c.key ? "var(--t1)" : "var(--t3)",
              fontFamily:"var(--f-m)",
              fontSize:".75rem",
              letterSpacing:".06em",
              cursor:"pointer",
              transition:"all .15s",
            }}
          >
            {c.label}
          </button>
        ))}
        <span style={{ fontFamily:"var(--f-m)", fontSize:".6875rem", color:"var(--t4)", display:"flex", alignItems:"center", marginLeft:"8px" }}>
          {filtered.length} posts
        </span>
      </div>

      {/* Grid */}
      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",
        gap:"16px",
      }}>
        {filtered.map(post => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            style={{
              display:"flex",
              flexDirection:"column",
              background:"var(--elevated)",
              border:"1px solid var(--border)",
              borderRadius:"12px",
              padding:"24px",
              gap:"12px",
              textDecoration:"none",
              transition:"border-color .15s, background .15s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-md)"; (e.currentTarget as HTMLElement).style.background = "var(--raised)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.background = "var(--elevated)"; }}
          >
            {/* Category pill */}
            <span style={{
              display:"inline-flex", alignItems:"center",
              padding:"3px 10px", borderRadius:"20px",
              background: CAT_BG[post.category] || "var(--elevated)",
              color: CAT_COLOR[post.category] || "var(--t3)",
              fontFamily:"var(--f-m)", fontSize:".625rem", letterSpacing:".1em", textTransform:"uppercase",
              width:"fit-content",
            }}>
              {CAT_LABEL[post.category] || post.category}
            </span>

            {/* Title */}
            <div style={{ fontFamily:"var(--f-d)", fontSize:"1rem", color:"var(--t1)", lineHeight:"1.35", letterSpacing:"-.01em", flex:1 }}>
              {post.title}
            </div>

            {/* Excerpt */}
            <div style={{ fontSize:".8125rem", color:"var(--t3)", lineHeight:"1.55" }}>
              {post.excerpt}
            </div>

            {/* Footer */}
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginTop:"4px" }}>
              <span style={{ fontFamily:"var(--f-m)", fontSize:".625rem", color:"var(--t4)", letterSpacing:".04em" }}>
                {post.readTime}
              </span>
              <span style={{ fontFamily:"var(--f-m)", fontSize:".6875rem", color: CAT_COLOR[post.category] || "var(--gold)", letterSpacing:".04em" }}>
                Read →
              </span>
            </div>
          </a>
        ))}
      </div>

      {filtered.length === 0 && (
        <p style={{ color:"var(--t3)", textAlign:"center", padding:"48px 0" }}>No posts found.</p>
      )}
    </div>
  )
}
