#!/usr/bin/env node

/**
 * ScoreVera Blog → Social Media Distribution
 *
 * Modes:
 *   --slug <slug>    Generate social copy for a single post
 *   --batch          Generate social copy for all posts published today
 *   --auto           Generate social copy for .mdx files added in the last git commit
 *
 * Output: structured text blocks for Facebook + LinkedIn, ready for Claude Code
 * to paste into Zapier MCP tool calls.
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join, basename } from 'path';
import { execSync } from 'child_process';
import matter from 'gray-matter';

const CONTENT_DIR = join(import.meta.dirname, '..', 'content', 'blog');
const SITE_URL = 'https://scorevera.com';

// ---------------------------------------------------------------------------
// CLI parsing
// ---------------------------------------------------------------------------
const args = process.argv.slice(2);
const flagIndex = (flag) => args.indexOf(flag);

const slugFlag = flagIndex('--slug');
const batchFlag = flagIndex('--batch');
const autoFlag = flagIndex('--auto');

if (slugFlag === -1 && batchFlag === -1 && autoFlag === -1) {
  console.error('Usage:');
  console.error('  node social-distribute.mjs --slug <slug>');
  console.error('  node social-distribute.mjs --batch');
  console.error('  node social-distribute.mjs --auto');
  process.exit(1);
}

// ---------------------------------------------------------------------------
// File discovery helpers
// ---------------------------------------------------------------------------

/** Recursively find all .mdx files under a directory */
function findMdxFiles(dir) {
  const results = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findMdxFiles(full));
    } else if (entry.name.endsWith('.mdx')) {
      results.push(full);
    }
  }
  return results;
}

/** Parse frontmatter from an MDX file path */
function parseMdx(filePath) {
  const raw = readFileSync(filePath, 'utf-8');
  const { data } = matter(raw);
  return data;
}

/** Find a single MDX file matching a slug (searches all subdirectories) */
function findBySlug(slug) {
  const allFiles = findMdxFiles(CONTENT_DIR);
  for (const f of allFiles) {
    const fm = parseMdx(f);
    if (fm.slug === slug) return { path: f, frontmatter: fm };
  }
  // Fallback: match by filename
  const byName = allFiles.find((f) => basename(f, '.mdx') === slug);
  if (byName) return { path: byName, frontmatter: parseMdx(byName) };
  return null;
}

/** Find all posts published today */
function findPublishedToday() {
  const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
  const allFiles = findMdxFiles(CONTENT_DIR);
  const matches = [];
  for (const f of allFiles) {
    const fm = parseMdx(f);
    if (fm.publishedAt === today) {
      matches.push({ path: f, frontmatter: fm });
    }
  }
  return matches;
}

/** Find .mdx files added in the last git commit */
function findFromLastCommit() {
  const rootDir = join(import.meta.dirname, '..');
  let diff;
  try {
    diff = execSync('git diff --name-only --diff-filter=A HEAD~1 HEAD', {
      cwd: rootDir,
      encoding: 'utf-8',
    });
  } catch {
    console.error('Error: could not read last git commit. Are you in a git repo?');
    process.exit(1);
  }
  const mdxFiles = diff
    .split('\n')
    .filter((line) => line.trim().endsWith('.mdx'))
    .map((line) => join(rootDir, line.trim()))
    .filter((f) => {
      try { statSync(f); return true; } catch { return false; }
    });

  return mdxFiles.map((f) => ({ path: f, frontmatter: parseMdx(f) }));
}

// ---------------------------------------------------------------------------
// Social copy generation
// ---------------------------------------------------------------------------

/** Map category slug to a readable label */
function categoryLabel(cat) {
  const map = {
    'credit-report-errors': 'Credit Report Errors',
    'credit-score': 'Credit Score',
    'dispute-process': 'Dispute Process',
    'state-guides': 'State Guides',
  };
  return map[cat] || cat.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

/** Generate Facebook post copy */
function facebookCopy(fm) {
  const { title, excerpt, slug, category } = fm;
  const cat = categoryLabel(category);
  const link = `${SITE_URL}/blog/${slug}`;

  // Conversational, informational, 3-4 short paragraphs
  const lines = [];

  lines.push(`${title}\n`);
  lines.push(`${excerpt}\n`);
  lines.push(
    `We break it all down in our latest ${cat.toLowerCase()} guide — no jargon, just the steps you can take today.\n`
  );
  lines.push(`Read the full guide: ${link}`);

  return { message: lines.join('\n'), link };
}

/** Generate LinkedIn post copy */
function linkedInCopy(fm) {
  const { title, excerpt, slug, category } = fm;
  const cat = categoryLabel(category);
  const link = `${SITE_URL}/blog/${slug}`;

  const lines = [];

  lines.push(`${title}\n`);
  lines.push(
    `Credit reports are financial infrastructure — and like any infrastructure, errors compound silently until they cost real money. ` +
    `Denied applications, inflated interest rates, and insurance premiums are all downstream of inaccurate data.\n`
  );
  lines.push(`${excerpt}\n`);
  lines.push(
    `At ScoreVera, we publish free, research-backed guides on ${cat.toLowerCase()} ` +
    `so consumers can make informed decisions — whether they choose to dispute independently or work with a professional.\n`
  );
  lines.push(`Full guide: ${link}`);

  return { comment: lines.join('\n'), link, title, description: excerpt };
}

/** Print the structured output block for one post */
function printSocialBlock(fm) {
  const fb = facebookCopy(fm);
  const li = linkedInCopy(fm);

  console.log(`=== FACEBOOK ===`);
  console.log(`MESSAGE:`);
  console.log(fb.message);
  console.log(`\nLINK: ${fb.link}`);
  console.log('');
  console.log(`=== LINKEDIN ===`);
  console.log(`COMMENT:`);
  console.log(li.comment);
  console.log(`\nURL: ${li.link}`);
  console.log(`TITLE: ${li.title}`);
  console.log(`DESCRIPTION: ${li.description}`);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

let posts = [];

if (slugFlag !== -1) {
  const slug = args[slugFlag + 1];
  if (!slug) {
    console.error('Error: --slug requires a slug argument');
    process.exit(1);
  }
  const match = findBySlug(slug);
  if (!match) {
    console.error(`Error: no post found with slug "${slug}"`);
    process.exit(1);
  }
  posts = [match];
} else if (batchFlag !== -1) {
  posts = findPublishedToday();
  if (posts.length === 0) {
    console.log('No posts published today.');
    process.exit(0);
  }
} else if (autoFlag !== -1) {
  posts = findFromLastCommit();
  if (posts.length === 0) {
    console.log('No new .mdx files in the last commit.');
    process.exit(0);
  }
}

for (let i = 0; i < posts.length; i++) {
  if (i > 0) {
    console.log('\n' + '='.repeat(60) + '\n');
  }
  const { frontmatter } = posts[i];
  console.log(`[Post ${i + 1}/${posts.length}] ${frontmatter.title}`);
  console.log(`File: ${posts[i].path}`);
  console.log('');
  printSocialBlock(frontmatter);
}
