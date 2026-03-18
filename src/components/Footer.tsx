const LOGO = "/images/scorevera-logo.png";

const PRODUCT_LINKS = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Results", href: "/results" },
  { label: "FAQ", href: "/faq" },
  { label: "Changelog", href: "/changelog" },
  { label: "Free Guides", href: "/blog" },
  { label: "Log In", href: "https://app.scorevera.com/login" },
  { label: "Get Started Free", href: "https://app.scorevera.com/" },
];

const DISPUTE_GUIDES = [
  { label: "How to Dispute a Credit Report", href: "/blog/how-to-dispute-credit-report-error" },
  { label: "What Is FCRA § 611?", href: "/blog/fcra-section-611-dispute-rights" },
  { label: "How to Write a Dispute Letter", href: "/blog/debt-validation-letter-guide" },
  { label: "Disputing Medical Collections", href: "/blog/how-to-dispute-medical-collections" },
  { label: "How to Remove a Charge-Off", href: "/blog/how-to-dispute-charge-off-credit-report" },
  { label: "Goodwill Letter Guide", href: "/blog/goodwill-letter-late-payment" },
  { label: "Debt Validation Letter Template", href: "/blog/debt-validation-letter-guide" },
  { label: "Disputing Hard Inquiries", href: "/blog/how-to-dispute-hard-inquiries-credit-report" },
  { label: "How Long Disputes Take", href: "/blog/30-day-bureau-investigation-timeline" },
  { label: "When to Escalate a Dispute", href: "/blog/escalate-dispute-to-cfpb" },
  { label: "CFPB Complaint Guide", href: "/blog/escalate-dispute-to-cfpb" },
  { label: "What Happens After You Dispute", href: "/blog/what-happens-after-credit-dispute-filed" },
  { label: "Method of Verification Letter", href: "/blog/method-of-verification-letter" },
  { label: "Dispute Directly to Furnisher", href: "/blog/dispute-letter-to-furnisher-directly" },
  { label: "Why Disputes Fail", href: "/blog/why-credit-disputes-fail" },
];

const FCRA_LINKS = [
  { label: "Your Rights Under the FCRA", href: "/blog/fcra-rights-dispute-process" },
  { label: "FCRA § 609: Access to Your File", href: "/blog/fcra-section-609-letter-guide" },
  { label: "FCRA § 611: Dispute Rights", href: "/blog/fcra-section-611-dispute-rights" },
  { label: "FCRA § 623: Furnisher Obligations", href: "/blog/dispute-letter-to-furnisher-directly" },
  { label: "Free Annual Credit Report", href: "/blog/how-to-get-free-credit-report" },
  { label: "Statute of Limitations on Debt", href: "/blog/zombie-debt-credit-report" },
  { label: "FDCPA Debt Collector Rules", href: "/blog/debt-validation-letter-guide" },
  { label: "How Long Items Stay on Report", href: "/blog/how-long-negative-items-stay-on-credit-report" },
  { label: "The 30-Day Investigation Rule", href: "/blog/30-day-bureau-investigation-timeline" },
  { label: "Bureau Response Deadline", href: "/blog/how-long-do-bureaus-have-to-respond-to-disputes" },
  { label: "Bankruptcy on Your Credit Report", href: "/blog/how-to-dispute-bankruptcy-credit-report" },
  { label: "Equifax vs Experian vs TransUnion", href: "/blog/equifax-experian-transunion-differences" },
  { label: "How to Read Your Credit Report", href: "/blog/how-to-read-your-credit-report" },
  { label: "Negative Items That Can't Be Disputed", href: "/blog/negative-items-that-cannot-be-disputed" },
  { label: "Escalate to CFPB", href: "/blog/escalate-dispute-to-cfpb" },
];

const SCORE_HELP = [
  { label: "How Credit Scores Are Calculated", href: "/blog/how-credit-scores-are-calculated" },
  { label: "Why Your Score Dropped", href: "/blog/why-credit-score-dropped" },
  { label: "How to Build Credit From Zero", href: "/blog/build-credit-from-scratch" },
  { label: "Credit Utilization Explained", href: "/blog/credit-utilization-guide" },
  { label: "Hard vs Soft Inquiries", href: "/blog/hard-vs-soft-inquiries" },
  { label: "How to Raise Your Score Fast", href: "/blog/how-to-raise-credit-score-fast" },
  { label: "Score Differences by Bureau", href: "/blog/equifax-experian-transunion-differences" },
  { label: "Rebuild Credit After Disputes", href: "/blog/rebuild-credit-after-disputes" },
  { label: "Credit Report vs Credit Score", href: "/blog/credit-report-vs-credit-score" },
  { label: "Credit Report Error Statistics", href: "/blog/credit-report-error-statistics" },
  { label: "How to Get Your Free Credit Report", href: "/blog/how-to-get-free-credit-report" },
  { label: "Mixed File on Credit Report", href: "/blog/what-is-a-mixed-file-credit-report" },
];

export default function Footer() {
  return (
    <footer className="foot-fat">
      <div className="wrap">
        <div className="foot-inner">
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

          <div className="foot-link-cols">
            <div>
              <div className="foot-col-h">Product</div>
              <ul className="foot-col-ul">
                {PRODUCT_LINKS.map((l) => (
                  <li key={l.label}><a href={l.href}>{l.label}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <div className="foot-col-h">Dispute Guides</div>
              <ul className="foot-col-ul">
                {DISPUTE_GUIDES.map((l) => (
                  <li key={l.label}><a href={l.href}>{l.label}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <div className="foot-col-h">FCRA &amp; Your Rights</div>
              <ul className="foot-col-ul">
                {FCRA_LINKS.map((l) => (
                  <li key={l.label}><a href={l.href}>{l.label}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <div className="foot-col-h">Credit Score Help</div>
              <ul className="foot-col-ul">
                {SCORE_HELP.map((l) => (
                  <li key={l.label}><a href={l.href}>{l.label}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <div className="foot-col-h">Blog</div>
              <ul className="foot-col-ul">
                <li><a href="/blog">All Guides</a></li>
                <li><a href="/blog/category/dispute-process">Dispute Process</a></li>
                <li><a href="/blog/category/credit-report-errors">Credit Report Errors</a></li>
                <li><a href="/blog/category/credit-score">Credit Score</a></li>
                <li><a href="/blog/how-to-dispute-credit-report-error">How to Dispute a Credit Report</a></li>
                <li><a href="/blog/fcra-section-611-dispute-rights">FCRA § 611 Explained</a></li>
                <li><a href="/blog/goodwill-letter-late-payment">Goodwill Letter Guide</a></li>
                <li><a href="/blog/escalate-dispute-to-cfpb">Escalate to CFPB</a></li>
                <li><a href="/blog/how-credit-scores-are-calculated">How Scores Are Calculated</a></li>
                <li><a href="/blog/why-credit-score-dropped">Why Your Score Dropped</a></li>
                <li><a href="/blog/how-to-read-your-credit-report">How to Read Your Report</a></li>
                <li><a href="/blog/how-to-get-free-credit-report">Get Your Free Report</a></li>
              </ul>
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
