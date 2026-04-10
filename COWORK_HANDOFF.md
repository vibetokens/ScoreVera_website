# ScoreVera Cowork Handoff — 2026-04-10

You are a Claude agent operating inside Chrome on Jason Murphy's machine. You have access to his logged-in browser sessions. Jason does not want to click through any of this himself. Execute all three tasks below, then post a single consolidated report back to the terminal Claude Code session (or into this file under `## Cowork Report`).

---

## Context

- **Project:** ScoreVera — scorevera.com (marketing) + app.scorevera.com (Replit app `scorevera-sparkle` repo)
- **Jason's primary identity on scorevera.com:** `jason@scorevera.com` OR `jmurphy@scorevera.com` — he isn't sure which is configured. One of your jobs is to confirm.
- **Fallback / personal:** `jasonmatthewmurphy@gmail.com` — use only if you need to receive a test email and the scorevera.com mailbox isn't working yet.
- **DNS registrar:** Vercel DNS (team: `vibetokens-projects`). Nameservers: ns1.vercel-dns.com, ns2.vercel-dns.com. **Do NOT touch DNS from the Zoho side.** Terminal Claude Code will add DNS records via the Vercel CLI after you return values.
- **Business framing:** ScoreVera is credit dispute software. Not a credit repair company. All outbound copy must stay consistent with that positioning. If you create a mailbox description or profile bio anywhere, follow that framing.

## What terminal Claude Code already did today (don't re-do)

1. Fixed logo parity on Sparkle app: dashboard AppHeader and landing Navbar now both use the marketing site's white wordmark on a dark navy bg. Landing Navbar logo links to `https://scorevera.com`.
2. Shipped 15 new creditor/collector dispute blog posts and backfilled FAQ frontmatter on all 50 state guides. Catalog is now 214 posts.
3. **Already added these DNS records for scorevera.com via Vercel CLI:**
   - `@  MX  mx.zoho.com  priority 10`
   - `@  MX  mx2.zoho.com  priority 20`
   - `@  MX  mx3.zoho.com  priority 50`
   - `@  TXT  "v=spf1 include:zoho.com ~all"`
   - `_dmarc  TXT  "v=DMARC1; p=none; rua=mailto:jason@scorevera.com; ruf=mailto:jason@scorevera.com; fo=1; adkim=r; aspf=r"`
4. Still **missing from DNS:** Zoho verification record (if unverified), DKIM record (CNAME or TXT, selector-dependent). You will retrieve those from Zoho admin and report them back — terminal Claude will add them.

---

# TASK 1 — Zoho Mail for scorevera.com (TOP PRIORITY)

**Symptom:** Jason hasn't received email at `@scorevera.com` in a long time. DNS audit from terminal Claude Code confirms the domain had ZERO MX records until today. That's why mail was never arriving — it wasn't that Zoho was broken, it was that mail was never routed to Zoho in the first place. The MX records are in place now (propagating). Your job is to finish the Zoho side so mail actually lands.

## Goal state
- Domain `scorevera.com` is verified in Zoho Mail
- One primary mailbox exists (`jason@scorevera.com` preferred — if `jmurphy@` is the existing one, keep it and set up an alias `jason@` or redirect)
- **Catch-all routing is ON** — any email sent to `*@scorevera.com` lands in the primary mailbox
- DKIM is enabled and the record values are reported back for terminal Claude to add to Vercel DNS
- SPF and DMARC are confirmed present (they are — terminal Claude added them)
- A test email sent from an external account (e.g. Gmail) arrives in the Zoho inbox within 5 minutes

## Steps

1. **Log into Zoho Mail admin.**
   - Start at `https://mailadmin.zoho.com/` — if not logged in, use Jason's Zoho credentials from his password manager (Bitwarden/1Password/Chrome autofill — try each). If none work, pause and report `BLOCKED: need Zoho login credentials`.
   - Select the ScoreVera organization (may be the only one, or may need to pick it from a dropdown).

2. **Confirm domain state.**
   - Navigate to **Domains** → `scorevera.com`.
   - Record: is the domain **Verified**? If not, copy the exact verification record Zoho is asking for (CNAME like `zb################.scorevera.com → zmverify.zoho.com`, or a TXT like `zoho-verification=zb################`). You will not add it yourself — you will return it in your final report and terminal Claude will add it via Vercel CLI, then you come back and click "Verify".
   - Record: what MX records does Zoho say are required for this domain? (Standard are `mx.zoho.com` / `mx2.zoho.com` / `mx3.zoho.com`, which terminal Claude already added. If Zoho is showing different ones, flag it — there are regional Zoho variants like `mx.zoho.eu`.)

3. **Check / create the primary mailbox.**
   - Go to **User Details** or **Mail Accounts**.
   - Is there already a mailbox for Jason? If yes, note the exact address (`jason@`, `jmurphy@`, `murphy@`, etc.) and report it.
   - If no mailbox exists yet, create one: `jason@scorevera.com`, display name `Jason Murphy`, strong password (store in Jason's password manager via Chrome autosave or 1Password/Bitwarden extension — do NOT paste passwords into the report).
   - If the existing mailbox is `jmurphy@` and Jason wants `jason@` to work too, set up `jason@` as an **alias** pointing to the same mailbox (Mail Account → Email Aliases → Add Alias).

4. **Enable catch-all.**
   - Go to **Domains** → `scorevera.com` → **Catch-All Accounts** (sometimes under "Email Policies" or "Spam Control" depending on Zoho version).
   - Set the catch-all destination to Jason's primary mailbox.
   - Save. Confirm the setting sticks.

5. **Enable DKIM and retrieve the values.**
   - Go to **Domains** → `scorevera.com` → **DKIM** (or Email Configuration → DKIM).
   - Enable DKIM if it's off. Zoho will generate a selector (typically `zmail` or `1522` or similar) and give you a CNAME or TXT value.
   - Record the **exact**:
     - Selector name (e.g. `zmail._domainkey`)
     - Record type (CNAME or TXT)
     - Value (the full string — don't truncate)

6. **Test mail flow.**
   - From Jason's personal Gmail (`jasonmatthewmurphy@gmail.com`) or any external account, send a test email to `jason@scorevera.com` (and a second one to `test-catchall-$(random)@scorevera.com` to prove catch-all works).
   - Wait up to 5 minutes (DNS propagation). Refresh the Zoho inbox.
   - If both arrive: ✅ report success.
   - If they don't arrive: check the Zoho mail log (Mail Admin → Reports → Mail Log) for rejection/bounce reasons and report them.

## What to return for Task 1

```
Zoho status:
- Domain verified: YES / NO (if NO, verification record: ___)
- Primary mailbox address: ___
- Aliases configured: ___
- Catch-all enabled: YES / NO, destination: ___
- DKIM enabled: YES / NO
  - Selector: ___
  - Record type: ___
  - Record value: ___
- Test email to jason@scorevera.com delivered: YES / NO (time: ___)
- Test email to catch-all address delivered: YES / NO
- Errors/bounces from mail log: ___
```

---

# TASK 2 — GA4 investigation: who converted last night?

**Context:** A customer signed up / paid for ScoreVera overnight (US time, between ~2026-04-09 evening and 2026-04-10 morning). Jason wants to know where they came from — organic search + keyword, social referral, direct, paid, email, whatever. This is genuinely the first customer he's aware of in a while and he wants to know if traffic is picking up.

## Accounts
- **GA4 property:** `G-NHXN7WD7VP` (confirmed in `scorevera-web/src/app/layout.tsx:8`). Jason is likely already logged into Google with the account that owns it.
- **Microsoft Clarity:** project ID `w3iwf1um0g` (same file, line 9). Clarity has session replays — those are GOLD for this kind of investigation.
- **Stripe:** The actual payment lives in Stripe. Cross-reference timing: new subscription in Stripe within the last ~18 hours = the customer we're tracking.
- **Vercel Analytics:** `@vercel/analytics/react` is installed. Second data source.

## Steps

1. **Pin down the exact conversion event first (from Stripe).**
   - Go to `https://dashboard.stripe.com/subscriptions`. Filter: Status = Active, Created = Last 24 hours.
   - Record: exact timestamp, customer email, plan, amount.
   - (Ignore any self-test accounts — specifically ignore `jasonmatthewmurphy@gmail.com`, `jason.murphy@toptal.com`, and anything with `test` in it.)

2. **GA4 — Traffic Acquisition.**
   - `https://analytics.google.com/` → select the ScoreVera property.
   - Reports → Acquisition → **Traffic acquisition**. Set date range: yesterday + today.
   - Sort by Conversions or New users. Record the top 5 channels and what drove them.
   - Reports → Acquisition → **User acquisition** (first-touch). Same date range. Record top 5.

3. **GA4 — Realtime + users explorer.**
   - Reports → Realtime → **Users by first user source / medium** (last 30 min panel — widen to 24h if the UI allows).
   - Explore → **User explorer** report. Find the user with the conversion event (look for `purchase` or `subscription_start` or `sign_up` in the event stream around the Stripe timestamp from step 1). Record their full session path: landing page → pages viewed → event → conversion.

4. **Microsoft Clarity — session replay.**
   - `https://clarity.microsoft.com/` → ScoreVera project (`w3iwf1um0g`).
   - Filter: last 24h, has conversion OR landed on `/pricing` OR landed on `app.scorevera.com/register`.
   - Find the session matching the Stripe timestamp. **Watch it** — note: what page did they land on, what did they click, how long did they spend on pricing, did they hit any friction, where did they come from (referrer at top of session details).

5. **Google Search Console (bonus).**
   - `https://search.google.com/search-console/`
   - If Jason has `scorevera.com` verified there, pull: impressions/clicks yesterday, top queries, top pages, any queries with sudden spikes.
   - If GSC is NOT set up for scorevera.com, note it. Terminal Claude Code couldn't find a verification meta tag and it's likely unconfigured.

## What to return for Task 2

```
Stripe conversion:
- Timestamp: ___
- Customer email: ___ (redact to first 3 chars + domain if sensitive)
- Plan: ___
- Amount: ___

Attribution (what drove this customer here):
- Source / medium: ___
- Landing page: ___
- Referrer (if any): ___
- Organic search keyword (if any): ___
- Social platform (if any): ___
- Session path: land → ___ → ___ → ___ → convert
- Time on site before conversion: ___
- Any friction points observed in Clarity replay: ___

GA4 aggregate (last 24h):
- Total users: ___
- Total sessions: ___
- Top 3 acquisition channels: ___
- Any anomaly / spike: ___

Search Console:
- Verified for scorevera.com: YES / NO
- Yesterday's impressions: ___
- Yesterday's clicks: ___
- Top 3 queries driving clicks: ___

Verdict: Where did this customer actually come from? One sentence.
```

---

# TASK 3 — Zapier MCP: add ScoreVera social accounts

**Context:** Jason has a Zapier MCP already auth'd to his **personal** Gmail (`jasonmatthewmurphy@gmail.com`). Current tools include Gmail, Facebook Pages, LinkedIn, Buffer — all scoped to his personal/VT accounts. He wants to add a SECOND layer of accounts for ScoreVera so he can run a content pipeline for ScoreVera the same way he does for Vibe Tokens. Zapier allows multiple connected accounts per service, so this stacks cleanly — it does NOT replace the existing VT/personal connections.

## Config URL
👉 **https://mcp.zapier.com/mcp/servers/978bb7e2-09f8-43ab-9dba-b2bad67175c6/config**

## Accounts to connect (for ScoreVera)
- Facebook Page (ScoreVera)
- Instagram for Business (ScoreVera IG — must be a Business/Creator account connected to a FB Page)
- X / Twitter (ScoreVera)
- LinkedIn Company Page (ScoreVera)
- *(optional)* Buffer profile for ScoreVera if Jason has one

Jason is not certain whether all of these accounts already exist. Discover as you go:
- FB Page: check `https://business.facebook.com/` — is there a ScoreVera page? If yes, proceed. If no, note "FB Page does not exist yet — skipping" and move on.
- IG Business: same check — must be linked to a FB Page. If no IG Business account for ScoreVera exists, note it and skip.
- X: check `https://twitter.com/` — is there a @scorevera handle? If not, note it and skip. (Do NOT create accounts without Jason's approval — just report.)
- LinkedIn Company: check `https://linkedin.com/company/scorevera` — does it exist? If not, note it and skip.

## Steps

1. Open the Zapier config URL in Chrome (Jason is likely already logged into Zapier via the VT setup — if prompted to log in, use his credentials).

2. For each service above:
   - Click "Add action" (or the Zapier equivalent on this MCP config page).
   - Search for the service (e.g. "Facebook Pages").
   - Pick the relevant action: `Create Page Post`, `Create Page Photo`, `Create Page Video` for FB; `Create Media` or `Publish Post` for Instagram for Business; `Create Tweet` for X; `Create Company Update` for LinkedIn.
   - When prompted for the account: click "Connect a new [service] account" (not "use existing").
   - Run through the OAuth flow with the **ScoreVera** account credentials. Use Jason's password manager / existing logged-in sessions if available.
   - After connecting, **rename the account** within Zapier to something unambiguous like `ScoreVera - FB Page`, `ScoreVera - IG`, etc. — this is critical so future Claude sessions can distinguish "which account is this".
   - Save the action.

3. Repeat for each service. Skip any where the account doesn't exist yet and note it.

4. Verify: return to the config page and confirm you can see both the VT/personal and ScoreVera connections listed separately for each service.

## What to return for Task 3

```
Zapier MCP actions added:
- [✅/❌/⏭SKIPPED] Facebook Pages → ScoreVera Page | renamed: ___ | reason if skipped: ___
- [✅/❌/⏭SKIPPED] Instagram for Business → ScoreVera | renamed: ___ | reason: ___
- [✅/❌/⏭SKIPPED] X / Twitter → @scorevera | renamed: ___ | reason: ___
- [✅/❌/⏭SKIPPED] LinkedIn Company → ScoreVera | renamed: ___ | reason: ___
- [✅/❌/⏭SKIPPED] Buffer → ScoreVera profile | renamed: ___ | reason: ___

Accounts that need to be CREATED before Jason can connect them:
- ___

After saving all actions, Jason needs to run `/mcp` in terminal Claude Code to reload the MCP server so the new tools appear.
```

---

# Final consolidated report

Post back a single message in this exact structure so terminal Claude Code can parse it:

```
## Cowork Report — 2026-04-10

### Task 1: Zoho Mail
[paste the Task 1 return block]

### Task 2: GA4 Investigation
[paste the Task 2 return block]

### Task 3: Zapier MCP
[paste the Task 3 return block]

### Anything else Jason should know
[free text — anything you discovered that's worth flagging: unexpected accounts, suspended pages, weird Stripe stuff, etc.]
```

After you post the report, terminal Claude Code will:
- Add the Zoho verification record + DKIM record to Vercel DNS (if you returned them)
- Save the GA4 attribution to the ScoreVera project status file
- Confirm the new Zapier tools are available and record them in memory

Do not touch DNS yourself. Do not modify the scorevera-web or scorevera-sparkle repos. Do not send emails on Jason's behalf. Your scope is strictly the three tasks above.
