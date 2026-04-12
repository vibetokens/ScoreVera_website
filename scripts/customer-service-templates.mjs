#!/usr/bin/env node
/**
 * ScoreVera Customer Service Templates & Dispute Status Notifications
 * ====================================================================
 *
 * Two modes:
 *
 * Mode 1 — Print a response template to stdout:
 *   node customer-service-templates.mjs --template welcome-reply
 *   node customer-service-templates.mjs --template how-to-start
 *   node customer-service-templates.mjs --list
 *
 * Mode 2 — Send a dispute status notification email:
 *   node customer-service-templates.mjs --notify-status \
 *     --email customer@example.com \
 *     --status letter-generated \
 *     --items '[{"creditor":"Capital One","account":"****1234"}]'
 *
 * Status types: letter-generated, deadline-approaching, response-received, item-resolved
 *
 * Config:
 *   Reads Zoho SMTP credentials from ~/.zoho-scorevera/config.json
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
// Response Templates (Mode 1)
// ---------------------------------------------------------------------------
const TEMPLATES = {
  'welcome-reply': {
    description: 'Reply to a new customer reaching out on FB/IG/email',
    text: () => `Hey — thanks for reaching out.

ScoreVera is a self-service tool that helps you dispute errors on your credit report. You upload your report, we scan it for potential errors, and then generate the dispute letters for you. No middlemen, no credit repair company — you handle it directly with the bureaus, which is how it should work.

You can get started here: https://app.scorevera.com

If you have specific questions once you're in, just let us know.

— ScoreVera`,
  },

  'how-to-start': {
    description: 'Step-by-step getting started instructions',
    text: () => `Here's how to get started — takes about 10 minutes total.

1. Pull your free credit report from AnnualCreditReport.com
   That's the only federally authorized source. You can get one from each bureau (Equifax, Experian, TransUnion) for free every week. Download it as a PDF.

2. Upload the PDF to ScoreVera
   Go to https://app.scorevera.com/upload and drop in your report. ScoreVera scans it and flags items that may be disputable — things like outdated info, duplicate accounts, incorrect balances, or items that shouldn't be there.

3. Review the flagged items
   You'll see a list of everything ScoreVera found. You decide which ones to dispute — we don't auto-file anything without your say-so.

4. Open an investigation
   Click "Open Investigation" on any item you want to dispute. ScoreVera generates an FCRA-compliant dispute letter addressed to the right bureau. Print it, sign it, and mail it (we include the address). Or use the bureau's online portal — your choice.

That's it. Once the bureau receives your letter, they have 30 days to investigate. ScoreVera tracks the timeline for you.

— ScoreVera`,
  },

  'dispute-timeline': {
    description: 'FCRA 30-day investigation timeline explanation',
    text: () => `Here's how the dispute timeline works under federal law.

Once a credit bureau receives your dispute letter, they have 30 days to investigate under the Fair Credit Reporting Act (FCRA). Here's what happens during that window:

- Days 1-5: The bureau logs your dispute and contacts the data furnisher (the company that reported the item — a lender, collection agency, etc.).
- Days 5-25: The furnisher reviews their records and either verifies the information, corrects it, or fails to respond.
- Days 25-30: The bureau compiles the results and is required to notify you of the outcome in writing.

Three possible outcomes:
  - Removed: The furnisher couldn't verify it. The item gets deleted from your report.
  - Corrected: The information was inaccurate and gets updated (e.g., wrong balance, wrong date).
  - Verified: The furnisher says the info is correct. This isn't the end — you can file a second-round dispute with additional documentation.

ScoreVera tracks all of this automatically. Your dashboard shows estimated response dates for each open dispute and flags when action is needed from you.

What you should do: After 30 days, pull a fresh report and upload it to see what changed. If something was verified and you believe it's still wrong, ScoreVera can generate a Round 2 letter.

— ScoreVera`,
  },

  'billing-question': {
    description: 'Redirect billing questions to self-service',
    text: () => `You can manage everything about your subscription — billing, plan changes, cancellation — right from your account page:

https://app.scorevera.com/account

No contracts, cancel anytime. If you cancel, you keep access through the end of your current billing period.

If something looks wrong with a charge or you're having trouble with the account page, let us know and we'll sort it out.

— ScoreVera`,
  },

  'refund-request': {
    description: 'Handle refund requests — acknowledge, offer help, no pressure',
    text: () => `Understood — we can take care of that for you.

Before we process the cancellation, I want to make sure you're not leaving with unfinished disputes. If you have open investigations, the bureaus are still on the clock to respond, and walking away now means losing that progress.

If you'd like, I can take a quick look at where things stand and make sure you've gotten everything you can out of the tool before you go. No pressure either way — if you're done, you're done, and I'll process the cancellation right now.

Just let me know which you'd prefer.

— ScoreVera`,
  },

  'round-2-help': {
    description: 'Explain Round 2 dispute escalation',
    text: () => `If a bureau verified an item in Round 1, that doesn't mean the dispute is over. Here's what Round 2 looks like.

A second-round dispute includes a Method of Verification (MOV) request. This forces the bureau to tell you exactly how they verified the item — who they contacted, what documentation they reviewed, and what their process was. Many first-round verifications are rubber stamps, and the MOV request exposes that.

When to file Round 2:
- The item was verified but you have additional evidence (payment receipts, correspondence with the creditor, proof of identity theft, etc.)
- You believe the bureau didn't conduct a reasonable investigation
- The item contains details that are factually wrong even if the account itself is legitimate (wrong balance, wrong dates, wrong status)

How to do it in ScoreVera:
Go to the disputed item on your dashboard, click "Escalate," and ScoreVera generates a second-round letter with the MOV request built in. Attach any supporting documentation you have.

Full walkthrough here: https://scorevera.com/blog/second-round-dispute-letter-strategy

— ScoreVera`,
  },

  'general-credit-question': {
    description: 'Redirect general credit questions to the blog',
    text: () => `Good question. We've published over 200 guides on credit disputes, credit scores, and dealing with bureaus and creditors. There's a good chance we've covered your exact situation.

Start here: https://scorevera.com/blog

A few of the most-read guides:
- What Happens After You File a Credit Dispute: https://scorevera.com/blog/what-happens-after-credit-dispute-filed
- How to Dispute Collections on Your Credit Report: https://scorevera.com/blog/how-to-dispute-collections-credit-report
- Second-Round Dispute Strategy: https://scorevera.com/blog/second-round-dispute-letter-strategy
- Understanding Your FCRA Rights: https://scorevera.com/blog/fcra-rights-credit-dispute

If you can't find what you're looking for, just reply with your specific question and we'll point you in the right direction.

— ScoreVera`,
  },
};

// ---------------------------------------------------------------------------
// Dispute Status Notification Emails (Mode 2)
// ---------------------------------------------------------------------------

function formatItems(items) {
  return items.map(i => `  - ${i.creditor}${i.account ? ` (${i.account})` : ''}`).join('\n');
}

const STATUS_EMAILS = {
  'letter-generated': {
    subject: 'Your dispute letter is ready to download',
    body: (items) => `Your dispute letter has been generated and is ready to download.

Items included:
${formatItems(items)}

Log in to your dashboard to download, print, and send it: https://app.scorevera.com/dashboard

Once the bureau receives it, the 30-day investigation clock starts.

— ScoreVera`,
  },

  'deadline-approaching': {
    subject: 'Bureau response deadline is approaching',
    body: (items) => `The 30-day investigation window is almost up for the following disputes:

${formatItems(items)}

If you haven't heard back yet, that's normal — most bureaus respond right at the deadline. ScoreVera will notify you as soon as a response comes in.

Check your current status: https://app.scorevera.com/dashboard

— ScoreVera`,
  },

  'response-received': {
    subject: 'A bureau responded to your dispute',
    body: (items) => `We received a response on the following disputed items:

${formatItems(items)}

Log in to review the results and see your recommended next steps: https://app.scorevera.com/dashboard

If any items were verified, you may be eligible to escalate with a second-round dispute.

— ScoreVera`,
  },

  'item-resolved': {
    subject: 'Good news — a disputed item has been resolved',
    body: (items) => `The following items have been removed or corrected on your credit report:

${formatItems(items)}

This should be reflected on your report within the next billing cycle. Upload a fresh report to ScoreVera to verify the changes and check for any remaining items worth disputing.

Review your updated dashboard: https://app.scorevera.com/dashboard

— ScoreVera`,
  },
};

// ---------------------------------------------------------------------------
// Send notification email
// ---------------------------------------------------------------------------
async function sendStatusNotification(email, status, items) {
  const template = STATUS_EMAILS[status];
  if (!template) {
    const valid = Object.keys(STATUS_EMAILS).join(', ');
    console.error(`ERROR: Unknown status "${status}". Valid statuses: ${valid}`);
    process.exit(1);
  }

  const config = loadConfig();

  const transporter = createTransport({
    host: config.smtp_host,
    port: config.smtp_port,
    secure: true,
    auth: {
      user: config.email,
      pass: config.app_password,
    },
  });

  const bodyText = template.body(items);

  // Minimal HTML — plain text wrapped in basic structure
  const html = `<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 15px; line-height: 1.6; color: #1a1a1a; max-width: 560px;">
${bodyText.split('\n').map(line => {
    if (line.trim() === '') return '<br>';
    if (line.startsWith('  - ')) return `<p style="margin:2px 0 2px 16px;">${line.trim()}</p>`;
    if (line.includes('https://')) {
      return `<p style="margin:8px 0;">${line.replace(/(https:\/\/\S+)/g, '<a href="$1" style="color:#2563eb;">$1</a>')}</p>`;
    }
    return `<p style="margin:8px 0;">${line}</p>`;
  }).join('\n')}
</div>
<p style="color:#999;font-size:12px;margin-top:40px;">
You're receiving this because you have an active ScoreVera account.<br>
<a href="https://app.scorevera.com/unsubscribe" style="color:#999;">Unsubscribe</a>
</p>`;

  const mailOptions = {
    from: `"ScoreVera" <${config.email}>`,
    to: email,
    subject: template.subject,
    text: bodyText,
    html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`SUCCESS: [${status}] notification sent to ${email} — messageId: ${info.messageId}`);
  } catch (err) {
    console.error(`FAILED: [${status}] notification to ${email} — ${err.message}`);
    process.exit(1);
  }
}

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------
const { values } = parseArgs({
  options: {
    template:       { type: 'string' },
    'notify-status': { type: 'boolean', default: false },
    email:          { type: 'string' },
    status:         { type: 'string' },
    items:          { type: 'string' },
    list:           { type: 'boolean', default: false },
  },
});

// List mode
if (values.list) {
  console.log('Response templates:');
  for (const [key, tmpl] of Object.entries(TEMPLATES)) {
    console.log(`  ${key.padEnd(26)} — ${tmpl.description}`);
  }
  console.log('\nNotification statuses:');
  for (const [key, tmpl] of Object.entries(STATUS_EMAILS)) {
    console.log(`  ${key.padEnd(26)} — "${tmpl.subject}"`);
  }
  process.exit(0);
}

// Mode 1: Print template
if (values.template) {
  const tmpl = TEMPLATES[values.template];
  if (!tmpl) {
    const valid = Object.keys(TEMPLATES).join(', ');
    console.error(`ERROR: Unknown template "${values.template}". Valid templates: ${valid}`);
    process.exit(1);
  }
  console.log(tmpl.text());
  process.exit(0);
}

// Mode 2: Send notification
if (values['notify-status']) {
  if (!values.email || !values.status || !values.items) {
    console.error('Usage: node customer-service-templates.mjs --notify-status --email <email> --status <status> --items \'[{"creditor":"..."}]\'');
    console.error('       Statuses: letter-generated, deadline-approaching, response-received, item-resolved');
    process.exit(1);
  }

  let items;
  try {
    items = JSON.parse(values.items);
  } catch {
    console.error('ERROR: --items must be valid JSON. Example: \'[{"creditor":"Capital One","account":"****1234"}]\'');
    process.exit(1);
  }

  if (!Array.isArray(items) || items.length === 0) {
    console.error('ERROR: --items must be a non-empty JSON array.');
    process.exit(1);
  }

  await sendStatusNotification(values.email, values.status, items);
  process.exit(0);
}

// No valid mode specified
console.error('Usage:');
console.error('  node customer-service-templates.mjs --template <name>');
console.error('  node customer-service-templates.mjs --notify-status --email <email> --status <status> --items <json>');
console.error('  node customer-service-templates.mjs --list');
process.exit(1);
