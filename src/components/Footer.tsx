const LOGO = "/images/scorevera-logo.png";

const PRODUCT_LINKS = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Results", href: "/results" },
  { label: "FAQ", href: "/faq" },
  { label: "Changelog", href: "/changelog" },
  { label: "Free Guides", href: "/learn" },
  { label: "Log In", href: "https://app.scorevera.com/login" },
  { label: "Get Started Free", href: "https://app.scorevera.com/" },
];

const DISPUTE_GUIDES = [
  { label: "How to Dispute a Credit Report", href: "/learn/how-to-dispute-credit-report" },
  { label: "What Is FCRA § 611?", href: "/learn/fcra-611-explained" },
  { label: "How to Write a Dispute Letter", href: "/learn/dispute-letter-guide" },
  { label: "Disputing Medical Collections", href: "/learn/dispute-medical-collections" },
  { label: "How to Remove a Charge-Off", href: "/learn/remove-charge-off" },
  { label: "Goodwill Letter Guide", href: "/learn/goodwill-letter" },
  { label: "Pay for Delete: Does It Work?", href: "/learn/pay-for-delete" },
  { label: "Debt Validation Letter Template", href: "/learn/debt-validation-letter" },
  { label: "Disputing Hard Inquiries", href: "/learn/dispute-hard-inquiries" },
  { label: "How Long Disputes Take", href: "/learn/dispute-timeline" },
  { label: "When to Escalate a Dispute", href: "/learn/escalate-dispute" },
  { label: "How to Dispute With All 3 Bureaus", href: "/learn/dispute-all-three-bureaus" },
  { label: "CFPB Complaint Guide", href: "/learn/cfpb-complaint" },
  { label: "What Happens After You Dispute", href: "/learn/after-dispute" },
  { label: "Round 2 Dispute Strategy", href: "/learn/round-2-disputes" },
];

const FCRA_LINKS = [
  { label: "Your Rights Under the FCRA", href: "/learn/fcra-consumer-rights" },
  { label: "FCRA § 609: Access to Your File", href: "/learn/fcra-609" },
  { label: "FCRA § 611: Dispute Rights", href: "/learn/fcra-611" },
  { label: "FCRA § 623: Furnisher Obligations", href: "/learn/fcra-623" },
  { label: "Free Annual Credit Report", href: "/learn/free-credit-report" },
  { label: "What Credit Bureaus Can't Do", href: "/learn/bureau-limits" },
  { label: "Statute of Limitations on Debt", href: "/learn/debt-statute-of-limitations" },
  { label: "FDCPA Debt Collector Rules", href: "/learn/fdcpa-explained" },
  { label: "How Long Items Stay on Report", href: "/learn/credit-report-timeline" },
  { label: "Inaccurate Information Rights", href: "/learn/inaccurate-information" },
  { label: "The 30-Day Investigation Rule", href: "/learn/30-day-rule" },
  { label: "Maximum Dispute Window", href: "/learn/dispute-window" },
  { label: "Bankruptcy on Your Credit Report", href: "/learn/bankruptcy-credit-report" },
  { label: "Bureau Contact Information", href: "/learn/bureau-contact-info" },
  { label: "How to File a Regulatory Complaint", href: "/learn/regulatory-complaints" },
];

const SCORE_HELP = [
  { label: "How Credit Scores Are Calculated", href: "/learn/credit-score-calculation" },
  { label: "What Is a Good Credit Score?", href: "/learn/good-credit-score" },
  { label: "Why Your Score Dropped", href: "/learn/score-dropped" },
  { label: "How to Build Credit From Zero", href: "/learn/build-credit" },
  { label: "Credit Utilization Explained", href: "/learn/credit-utilization" },
  { label: "How Payment History Affects Score", href: "/learn/payment-history" },
  { label: "Hard vs Soft Inquiries", href: "/learn/hard-vs-soft-inquiries" },
  { label: "Secured Cards That Actually Work", href: "/learn/secured-cards" },
  { label: "Credit Mix: What It Means", href: "/learn/credit-mix" },
  { label: "Score Differences by Bureau", href: "/learn/bureau-score-differences" },
  { label: "How Fast Can You Raise Your Score?", href: "/learn/raise-credit-score-fast" },
  { label: "What Landlords & Lenders Check", href: "/learn/what-lenders-check" },
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
