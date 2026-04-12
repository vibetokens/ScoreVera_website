#!/usr/bin/env node
/**
 * ScoreVera Customer Onboarding Drip Sequence
 * =============================================
 *
 * Sends one of 7 lifecycle emails to a customer via Zoho SMTP.
 *
 * Usage:
 *   node customer-drip.mjs --email customer@example.com --trigger signup
 *   node customer-drip.mjs --email customer@example.com --trigger day3
 *
 * Triggers:
 *   signup      — Immediate welcome email
 *   day1        — First dispute nudge (24h after signup)
 *   day3        — Educational: what happens after filing
 *   day7        — Social proof / confidence builder
 *   day14       — Engagement check
 *   day30       — First month recap
 *   prerenewal  — Subscription renewal heads-up (day 27)
 *
 * Config:
 *   Reads Zoho SMTP credentials from ~/.zoho-scorevera/config.json
 *   {
 *     "email": "jason@scorevera.com",
 *     "smtp_host": "smtp.zoho.com",
 *     "smtp_port": 465,
 *     "app_password": "YOUR_ZOHO_APP_PASSWORD"
 *   }
 *
 * Automated Triggering:
 * ---------------------
 * Option A — Cron (Linux/Mac) or Task Scheduler (Windows):
 *   Run a daily job that queries your database for users at each lifecycle
 *   stage and calls this script for each. Example cron entry:
 *
 *     0 9 * * * node /path/to/customer-drip.mjs --email "$EMAIL" --trigger day1
 *
 * Option B — Webhook from Stripe/payment processor:
 *   On subscription.created → fire signup + schedule day1 through prerenewal
 *   On subscription.updated → skip prerenewal if cancelled
 *
 * Option C — Next.js API route:
 *   Import the sendDripEmail function and call it from /api/drip/[trigger]
 *   triggered by a Vercel Cron or external scheduler.
 *
 * Option D — Database-driven scheduler:
 *   Store (user_email, next_trigger, send_at) rows. A single cron job runs
 *   every hour, queries for send_at <= now, fires the email, and advances
 *   next_trigger to the next stage.
 */

import { createTransport } from 'nodemailer';
import { readFileSync } from 'fs';
import { join } from 'path';
import { homedir } from 'os';
import { parseArgs } from 'util';

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
const CONFIG_PATH = join(homedir(), '.zoho-scorevera', 'config.json');

function loadConfig() {
  const raw = readFileSync(CONFIG_PATH, 'utf-8');
  return JSON.parse(raw);
}

// ---------------------------------------------------------------------------
// Email templates
// ---------------------------------------------------------------------------
const TEMPLATES = {
  signup: {
    subject: 'Welcome to ScoreVera — here\'s your first step',
    html: () => `
<p>You're in.</p>

<p>ScoreVera gives you the tools to dispute errors on your credit report yourself — no middleman, no credit repair company, no monthly retainer to someone else. Think of it as TurboTax for credit disputes.</p>

<p><strong>Your first step:</strong> Upload your credit report so we can scan it for disputable errors.</p>

<p>If you don't have a recent report, grab a free one from <a href="https://www.annualcreditreport.com">AnnualCreditReport.com</a> (the only federally authorized source — ignore everything else). Then upload it at <a href="https://app.scorevera.com/upload">app.scorevera.com/upload</a>.</p>

<p><strong>What happens next:</strong><br>
Once you upload, ScoreVera identifies potential errors and generates FCRA-compliant dispute letters you can send directly to the credit bureaus. The whole process takes about 5 minutes.</p>

<p>If you have questions at any point, just reply to this email. I read every one.</p>

<p>— Jason, ScoreVera</p>

<p style="color:#999;font-size:12px;margin-top:40px;">
You're receiving this because you signed up for ScoreVera.<br>
<a href="https://app.scorevera.com/unsubscribe" style="color:#999;">Unsubscribe</a>
</p>
`,
  },

  day1: {
    subject: 'Your first dispute letter is 5 minutes away',
    html: () => `
<p>Quick check-in — have you uploaded your credit report yet?</p>

<p><strong>If you have:</strong> Head to your <a href="https://app.scorevera.com/dashboard">dashboard</a> and click <strong>Open Investigation</strong> on any flagged item. ScoreVera will generate an FCRA-compliant dispute letter you can send to the bureau today.</p>

<p><strong>If you haven't:</strong> No worries. Upload your report here: <a href="https://app.scorevera.com/upload">app.scorevera.com/upload</a></p>

<p>The entire upload-to-letter process takes about 5 minutes. Most people are surprised how fast it is once they sit down and do it.</p>

<p>One thing worth knowing: the credit bureaus have 30 days to investigate once they receive your letter. The sooner you send, the sooner the clock starts.</p>

<p>— Jason, ScoreVera</p>

<p style="color:#999;font-size:12px;margin-top:40px;">
You're receiving this because you signed up for ScoreVera.<br>
<a href="https://app.scorevera.com/unsubscribe" style="color:#999;">Unsubscribe</a>
</p>
`,
  },

  day3: {
    subject: 'What happens after you send a dispute letter',
    html: () => `
<p>If you've already sent your first dispute letter — nice work. Here's what to expect.</p>

<p><strong>The 30-day window:</strong> Under the Fair Credit Reporting Act (FCRA), credit bureaus have 30 days to investigate your dispute once they receive it. During that time, they contact the data furnisher (the company that reported the item) and ask them to verify it.</p>

<p><strong>Three possible outcomes:</strong></p>
<ul>
<li><strong>Removed</strong> — the furnisher can't verify the item, so the bureau deletes it</li>
<li><strong>Corrected</strong> — the information is updated (e.g., a balance is fixed, a date is corrected)</li>
<li><strong>Verified</strong> — the furnisher says the info is accurate. This isn't the end — you can escalate with a second-round dispute</li>
</ul>

<p><strong>ScoreVera tracks all of this.</strong> Your dashboard shows the status of every dispute, estimated response dates, and what to do next based on the outcome.</p>

<p>Want to understand the full process? Read: <a href="https://scorevera.com/blog/what-happens-after-credit-dispute-filed">What Happens After You File a Credit Dispute</a></p>

<p>— Jason, ScoreVera</p>

<p style="color:#999;font-size:12px;margin-top:40px;">
You're receiving this because you signed up for ScoreVera.<br>
<a href="https://app.scorevera.com/unsubscribe" style="color:#999;">Unsubscribe</a>
</p>
`,
  },

  day7: {
    subject: 'Most people see results in the first round',
    html: () => `
<p>One week in. Here's something worth knowing.</p>

<p>The majority of credit disputes that involve genuine errors get resolved in the first round. The most common wins:</p>

<ul>
<li><strong>Collections removed</strong> — especially medical debt and old accounts that were already paid</li>
<li><strong>Late payments corrected</strong> — a single 30-day late mark can drop your score 50-100 points</li>
<li><strong>Duplicate accounts merged</strong> — the same debt reported by multiple entities</li>
<li><strong>Outdated information deleted</strong> — items past the 7-year reporting window that are still hanging around</li>
</ul>

<p>These aren't loopholes. This is the law working as designed. The FCRA exists to protect you from inaccurate reporting, and the bureaus are required to investigate.</p>

<p>If you haven't started your first dispute yet, there's no better time: <a href="https://app.scorevera.com/dashboard">Open your dashboard</a></p>

<p>Deeper dive: <a href="https://scorevera.com/blog/credit-dispute-success-rates-what-gets-removed">Credit Dispute Success Rates — What Actually Gets Removed</a></p>

<p>— Jason, ScoreVera</p>

<p style="color:#999;font-size:12px;margin-top:40px;">
You're receiving this because you signed up for ScoreVera.<br>
<a href="https://app.scorevera.com/unsubscribe" style="color:#999;">Unsubscribe</a>
</p>
`,
  },

  day14: {
    subject: 'Have you checked your dispute status?',
    html: () => `
<p>It's been about two weeks since you signed up. If you sent dispute letters in your first few days, responses from the bureaus could start arriving soon.</p>

<p><strong>Here's what to do:</strong></p>

<ol>
<li>Log in to <a href="https://app.scorevera.com/dashboard">your dashboard</a></li>
<li>Check the <strong>Timeline Tracker</strong> for each open dispute</li>
<li>If a response came back, ScoreVera will show you the result and recommend next steps</li>
</ol>

<p>If a dispute was verified (meaning the bureau said the info is accurate), don't worry — that's normal and it's not the end of the road. Second-round disputes with additional documentation often succeed where first rounds don't.</p>

<p>If you haven't sent any disputes yet, you still have the full toolkit available. Your credit report analysis is saved and ready whenever you are.</p>

<p>— Jason, ScoreVera</p>

<p style="color:#999;font-size:12px;margin-top:40px;">
You're receiving this because you signed up for ScoreVera.<br>
<a href="https://app.scorevera.com/unsubscribe" style="color:#999;">Unsubscribe</a>
</p>
`,
  },

  day30: {
    subject: 'Your first month with ScoreVera — what\'s next',
    html: () => `
<p>You've had ScoreVera for a month. Whether you've sent one dispute or ten, here's a quick look at what's available to you going forward.</p>

<p><strong>Round 2 escalation:</strong> If any disputes came back as "verified," ScoreVera can generate a second-round letter. These include a Method of Verification (MOV) request — forcing the bureau to explain how they verified the item. This is where many previously-stuck disputes get resolved.</p>

<p><strong>Goodwill deletion letters:</strong> For items that are technically accurate but have circumstances worth explaining (e.g., a one-time late payment during a hardship), ScoreVera can generate a goodwill letter to the creditor requesting removal. These work more often than most people expect.</p>

<p><strong>New report analysis:</strong> If your score has changed, upload a fresh credit report to see updated items and new opportunities for disputes.</p>

<p>Read more: <a href="https://scorevera.com/blog/second-round-dispute-letter-strategy">Second-Round Dispute Strategy — When the First Letter Isn't Enough</a></p>

<p>— Jason, ScoreVera</p>

<p style="color:#999;font-size:12px;margin-top:40px;">
You're receiving this because you signed up for ScoreVera.<br>
<a href="https://app.scorevera.com/unsubscribe" style="color:#999;">Unsubscribe</a>
</p>
`,
  },

  prerenewal: {
    subject: 'Your ScoreVera subscription renews in 3 days',
    html: () => `
<p>Heads up — your $29/month ScoreVera subscription renews in 3 days.</p>

<p><strong>What you have access to:</strong></p>
<ul>
<li>Unlimited credit report uploads and error analysis</li>
<li>FCRA-compliant dispute letter generation (first round and escalation)</li>
<li>Dispute timeline tracking and status updates</li>
<li>Goodwill deletion letter templates</li>
<li>Method of Verification (MOV) request letters</li>
</ul>

<p>If you've been using ScoreVera actively, no action needed — your subscription continues automatically.</p>

<p><strong>If you haven't had a chance to use it yet:</strong> I get it — life gets busy. If you'd like help getting started or want to talk through your specific situation, just reply to this email. I'm happy to walk you through it.</p>

<p>You can cancel anytime from your <a href="https://app.scorevera.com/account">account settings</a> — no hoops, no retention calls, no guilt trips. If the tool isn't right for you, I'd rather you cancel than pay for something you're not using.</p>

<p>— Jason, ScoreVera</p>

<p style="color:#999;font-size:12px;margin-top:40px;">
You're receiving this because you signed up for ScoreVera.<br>
<a href="https://app.scorevera.com/unsubscribe" style="color:#999;">Unsubscribe</a>
</p>
`,
  },
};

// ---------------------------------------------------------------------------
// Send
// ---------------------------------------------------------------------------
async function sendDripEmail(email, trigger) {
  const template = TEMPLATES[trigger];
  if (!template) {
    const valid = Object.keys(TEMPLATES).join(', ');
    console.error(`ERROR: Unknown trigger "${trigger}". Valid triggers: ${valid}`);
    process.exit(1);
  }

  const config = loadConfig();

  const transporter = createTransport({
    host: config.smtp_host,
    port: config.smtp_port,
    secure: true, // SSL on 465
    auth: {
      user: config.email,
      pass: config.app_password,
    },
  });

  const mailOptions = {
    from: `"Jason at ScoreVera" <${config.email}>`,
    to: email,
    subject: template.subject,
    html: template.html(),
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`SUCCESS: [${trigger}] sent to ${email} — messageId: ${info.messageId}`);
  } catch (err) {
    console.error(`FAILED: [${trigger}] to ${email} — ${err.message}`);
    process.exit(1);
  }
}

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------
const { values } = parseArgs({
  options: {
    email: { type: 'string' },
    trigger: { type: 'string' },
    list: { type: 'boolean', default: false },
  },
});

if (values.list) {
  console.log('Available triggers:');
  for (const [key, tmpl] of Object.entries(TEMPLATES)) {
    console.log(`  ${key.padEnd(14)} — "${tmpl.subject}"`);
  }
  process.exit(0);
}

if (!values.email || !values.trigger) {
  console.error('Usage: node customer-drip.mjs --email <customer-email> --trigger <trigger>');
  console.error('       node customer-drip.mjs --list');
  process.exit(1);
}

await sendDripEmail(values.email, values.trigger);
