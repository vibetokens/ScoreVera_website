import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const CONTENT_DIR = path.join(process.cwd(), 'content/blog')

export interface Post {
  title: string
  slug: string
  category: string
  excerpt: string
  publishedAt: string
  updatedAt: string
  readTime: string
  featured: boolean
  status: string
  notionId: string
  content: string
}

function estimateReadTime(content: string): string {
  const words = content.trim().split(/\s+/).length
  const minutes = Math.max(1, Math.round(words / 200))
  return `${minutes} min read`
}

export function getAllPosts(): Post[] {
  const categories = ['dispute-process', 'credit-report-errors', 'credit-score']
  const posts: Post[] = []

  for (const cat of categories) {
    const dir = path.join(CONTENT_DIR, cat)
    if (!fs.existsSync(dir)) continue
    const files = fs.readdirSync(dir).filter((f: string) => f.endsWith('.mdx'))
    for (const file of files) {
      const raw = fs.readFileSync(path.join(dir, file), 'utf-8')
      const { data, content } = matter(raw)
      if (data.status !== 'published') continue
      posts.push({
        ...data,
        content,
        readTime: estimateReadTime(content),
      } as Post)
    }
  }

  return posts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export function getPostBySlug(slug: string): Post | null {
  return getAllPosts().find((p) => p.slug === slug) || null
}

export function getPostsByCategory(category: string): Post[] {
  return getAllPosts().filter((p) => p.category === category)
}

export function getFeaturedPosts(): Post[] {
  return getAllPosts().filter((p) => p.featured).slice(0, 3)
}
