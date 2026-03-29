import { getAllPosts } from "@/lib/blog"

const BASE = "https://scorevera.com"

export function GET() {
  const posts = getAllPosts()

  const byCategory: Record<string, typeof posts> = {}
  for (const post of posts) {
    if (!byCategory[post.category]) byCategory[post.category] = []
    byCategory[post.category].push(post)
  }

  const catLabels: Record<string, string> = {
    "dispute-process": "Dispute Process",
    "credit-report-errors": "Credit Report Errors",
    "credit-score": "Credit Score",
    "state-guides": "State Guides",
  }

  const lines: string[] = [
    "# ScoreVera — Full Content Index",
    "",
    "> ScoreVera is credit dispute software. Not a credit repair company.",
    "> Users dispute their own credit reports using FCRA rights. ScoreVera provides the letters, structure, and timelines.",
    "",
    "## Site",
    `- App: ${BASE}/`,
    `- Blog: ${BASE}/blog`,
    `- Glossary: ${BASE}/glossary`,
    `- FCRA Rights: ${BASE}/fcra-rights`,
    `- FAQ: ${BASE}/faq`,
    `- Pricing: ${BASE}/pricing`,
    `- Dispute Letters: ${BASE}/dispute-letters`,
    "",
  ]

  for (const [cat, catPosts] of Object.entries(byCategory)) {
    lines.push(`## ${catLabels[cat] || cat} (${catPosts.length} guides)`)
    lines.push("")
    for (const post of catPosts) {
      lines.push(`- [${post.title}](${BASE}/blog/${post.slug})`)
      lines.push(`  ${post.excerpt}`)
    }
    lines.push("")
  }

  lines.push("## Legal")
  lines.push("ScoreVera is not a CROA credit repair organization. Results vary. Not legal advice.")

  const body = lines.join("\n")

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
