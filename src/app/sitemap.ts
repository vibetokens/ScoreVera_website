import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const BASE = "https://scorevera.com";

const STATIC_PAGES = [
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: "/blog", priority: 0.9, changefreq: "daily" },
  { path: "/how-it-works", priority: 0.8, changefreq: "monthly" },
  { path: "/features", priority: 0.8, changefreq: "monthly" },
  { path: "/pricing", priority: 0.8, changefreq: "weekly" },
  { path: "/results", priority: 0.7, changefreq: "monthly" },
  { path: "/vs-credit-repair", priority: 0.8, changefreq: "monthly" },
  { path: "/dispute-letters", priority: 0.8, changefreq: "monthly" },
  { path: "/letter-library", priority: 0.7, changefreq: "monthly" },
  { path: "/credit-report-errors", priority: 0.7, changefreq: "monthly" },
  { path: "/apply", priority: 0.7, changefreq: "monthly" },
  { path: "/about", priority: 0.6, changefreq: "monthly" },
  { path: "/faq", priority: 0.7, changefreq: "monthly" },
  { path: "/changelog", priority: 0.5, changefreq: "weekly" },
  { path: "/contact", priority: 0.5, changefreq: "yearly" },
  { path: "/newsletter", priority: 0.6, changefreq: "monthly" },
  { path: "/learn", priority: 0.7, changefreq: "monthly" },
  { path: "/for-consumers", priority: 0.6, changefreq: "monthly" },
  { path: "/for-operators", priority: 0.6, changefreq: "monthly" },
  { path: "/for-professionals", priority: 0.6, changefreq: "monthly" },
  { path: "/for-creators", priority: 0.6, changefreq: "monthly" },
  { path: "/creator-program", priority: 0.6, changefreq: "monthly" },
  { path: "/partners", priority: 0.6, changefreq: "monthly" },
  { path: "/partner-hub", priority: 0.5, changefreq: "monthly" },
  { path: "/fcra-rights", priority: 0.7, changefreq: "monthly" },
  { path: "/fcra-compliance", priority: 0.6, changefreq: "monthly" },
  { path: "/security", priority: 0.5, changefreq: "yearly" },
  { path: "/testimonials", priority: 0.6, changefreq: "monthly" },
  { path: "/press", priority: 0.5, changefreq: "monthly" },
  { path: "/resources", priority: 0.6, changefreq: "monthly" },
  { path: "/privacy-policy", priority: 0.3, changefreq: "yearly" },
  { path: "/terms", priority: 0.3, changefreq: "yearly" },
  { path: "/disclaimer", priority: 0.3, changefreq: "yearly" },
  { path: "/blog/category/dispute-process", priority: 0.7, changefreq: "weekly" },
  { path: "/blog/category/credit-report-errors", priority: 0.7, changefreq: "weekly" },
  { path: "/blog/category/credit-score", priority: 0.7, changefreq: "weekly" },
  { path: "/blog/category/state-guides", priority: 0.7, changefreq: "monthly" },
  { path: "/glossary", priority: 0.7, changefreq: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const now = new Date().toISOString();

  const staticEntries: MetadataRoute.Sitemap = STATIC_PAGES.map((p) => ({
    url: `${BASE}${p.path}`,
    lastModified: now,
    changeFrequency: p.changefreq as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: p.priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: post.updatedAt || post.publishedAt,
    changeFrequency: "monthly" as const,
    priority: post.featured ? 0.8 : 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
