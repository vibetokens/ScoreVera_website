const LOGO = "/images/scorevera-logo.png";

// ── Column 1: Platform (9) + Company (7) = 16 links, 2 headings ──────────────
const COL1: { heading: string; company?: boolean; links: { label: string; href: string }[] }[] = [
  {
    heading: "Platform",
    links: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Results", href: "/results" },
      { label: "vs Credit Repair", href: "/vs-credit-repair" },
      { label: "Dispute Letters", href: "/dispute-letters" },
      { label: "Letter Library", href: "/letter-library" },
      { label: "FAQ", href: "/faq" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    heading: "Company",
    company: true,
    links: [
      { label: "About ScoreVera", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Partners", href: "/partners" },
      { label: "Press", href: "/press" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Newsletter", href: "/newsletter" },
      { label: "Apply for Access", href: "/apply" },
    ],
  },
];

// ── Column 2: Dispute Guides (7) + FCRA & Rights (4) + Credit Score (4) = 15 links, 3 headings ──
const COL2: { heading: string; links: { label: string; href: string; accent?: boolean }[] }[] = [
  {
    heading: "Dispute Guides",
    links: [
      { label: "How to Dispute a Credit Report", href: "/blog/how-to-dispute-credit-report-error" },
      { label: "FCRA § 611: Dispute Rights", href: "/blog/fcra-section-611-dispute-rights" },
      { label: "FCRA § 609: File Access", href: "/blog/fcra-section-609-letter-guide" },
      { label: "Goodwill Letter Guide", href: "/blog/goodwill-letter-late-payment" },
      { label: "Debt Validation Letter", href: "/blog/debt-validation-letter-guide" },
      { label: "Dispute Medical Collections", href: "/blog/how-to-dispute-medical-collections" },
      { label: "Escalate to CFPB", href: "/blog/escalate-dispute-to-cfpb" },
    ],
  },
  {
    heading: "FCRA & Your Rights",
    links: [
      { label: "Your Rights Under the FCRA", href: "/blog/fcra-rights-dispute-process" },
      { label: "The 30-Day Investigation Rule", href: "/blog/30-day-bureau-investigation-timeline" },
      { label: "Statute of Limitations on Debt", href: "/blog/zombie-debt-credit-report" },
      { label: "How Long Items Stay on Report", href: "/blog/how-long-negative-items-stay-on-credit-report" },
    ],
  },
  {
    heading: "Credit Score",
    links: [
      { label: "How Credit Scores Are Calculated", href: "/blog/how-credit-scores-are-calculated" },
      { label: "Why Your Score Dropped", href: "/blog/why-credit-score-dropped" },
      { label: "Build Credit From Scratch", href: "/blog/build-credit-from-scratch" },
      { label: "Credit Utilization Explained", href: "/blog/credit-utilization-guide" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="foot-fat">
      <div className="wrap">
        <div className="foot-inner">

          {/* Brand column */}
          <div className="foot-brand-col">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <a href="/" aria-label="ScoreVera">
              <img src={LOGO} alt="ScoreVera" className="logo-img" height={32} width={190} />
            </a>
            <p className="foot-tagline">
              Turn your credit report into an action plan. ScoreVera gives you the process — you run it.
            </p>
            <a href="https://app.scorevera.com/" className="foot-start-btn">
              Get Started Free
            </a>
            <span className="foot-brand-copy">© 2026 ScoreVera. All rights reserved.</span>
          </div>

          {/* Two equal link columns */}
          <div className="foot-link-cols">

            {/* Column 1: Platform + Company */}
            <div className="foot-col">
              {COL1.map((section) => (
                <div key={section.heading} className="foot-section">
                  <div className="foot-col-h">{section.heading}</div>
                  <ul className="foot-col-ul">
                    {section.links.map((l) => (
                      <li key={l.label}>
                        <a
                          href={l.href}
                          style={section.company ? { color: "var(--gold)" } : undefined}
                        >
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Column 2: Guides + FCRA + Score */}
            <div className="foot-col">
              {COL2.map((section) => (
                <div key={section.heading} className="foot-section">
                  <div className="foot-col-h">{section.heading}</div>
                  <ul className="foot-col-ul">
                    {section.links.map((l) => (
                      <li key={l.label}>
                        <a href={l.href}>{l.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>
        </div>

        <div className="foot-bar">
          <p>
            ScoreVera is a software platform and is not a credit repair organization as defined by the Credit Repair Organizations Act (CROA). ScoreVera does not provide legal or financial advice, does not submit disputes on behalf of users, and makes no guarantees regarding credit score outcomes. Results depend on individual credit report contents and bureau response. FCRA § 611 governs consumer dispute rights with credit reporting agencies.
          </p>
        </div>
      </div>
    </footer>
  );
}
