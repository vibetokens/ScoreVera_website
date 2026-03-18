const LOGO = "/images/scorevera-logo.png";

const PRODUCT_LINKS = [
  { label: "How It Works", href: "#how" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Log In", href: "https://app.scorevera.com/login" },
  { label: "Get Started Free", href: "https://app.scorevera.com/" },
];

const DISPUTE_GUIDES = [
  { label: "How to Dispute a Credit Report", href: "https://learn.scorevera.com/how-to-dispute-credit-report" },
  { label: "What Is FCRA § 611?", href: "https://learn.scorevera.com/fcra-611-explained" },
  { label: "How to Write a Dispute Letter", href: "https://learn.scorevera.com/dispute-letter-guide" },
  { label: "Disputing Medical Collections", href: "https://learn.scorevera.com/dispute-medical-collections" },
  { label: "How to Remove a Charge-Off", href: "https://learn.scorevera.com/remove-charge-off" },
  { label: "Goodwill Letter Guide", href: "https://learn.scorevera.com/goodwill-letter" },
  { label: "Pay for Delete: Does It Work?", href: "https://learn.scorevera.com/pay-for-delete" },
  { label: "Debt Validation Letter Template", href: "https://learn.scorevera.com/debt-validation-letter" },
  { label: "Disputing Hard Inquiries", href: "https://learn.scorevera.com/dispute-hard-inquiries" },
  { label: "How Long Disputes Take", href: "https://learn.scorevera.com/dispute-timeline" },
  { label: "When to Escalate a Dispute", href: "https://learn.scorevera.com/escalate-dispute" },
  { label: "How to Dispute With All 3 Bureaus", href: "https://learn.scorevera.com/dispute-all-three-bureaus" },
  { label: "CFPB Complaint Guide", href: "https://learn.scorevera.com/cfpb-complaint" },
  { label: "What Happens After You Dispute", href: "https://learn.scorevera.com/after-dispute" },
  { label: "Round 2 Dispute Strategy", href: "https://learn.scorevera.com/round-2-disputes" },
];

const FCRA_LINKS = [
  { label: "Your Rights Under the FCRA", href: "https://learn.scorevera.com/fcra-consumer-rights" },
  { label: "FCRA § 609: Access to Your File", href: "https://learn.scorevera.com/fcra-609" },
  { label: "FCRA § 611: Dispute Rights", href: "https://learn.scorevera.com/fcra-611" },
  { label: "FCRA § 623: Furnisher Obligations", href: "https://learn.scorevera.com/fcra-623" },
  { label: "Free Annual Credit Report", href: "https://learn.scorevera.com/free-credit-report" },
  { label: "What Credit Bureaus Can't Do", href: "https://learn.scorevera.com/bureau-limits" },
  { label: "Statute of Limitations on Debt", href: "https://learn.scorevera.com/debt-statute-of-limitations" },
  { label: "FDCPA Debt Collector Rules", href: "https://learn.scorevera.com/fdcpa-explained" },
  { label: "How Long Items Stay on Report", href: "https://learn.scorevera.com/credit-report-timeline" },
  { label: "Inaccurate Information Rights", href: "https://learn.scorevera.com/inaccurate-information" },
  { label: "The 30-Day Investigation Rule", href: "https://learn.scorevera.com/30-day-rule" },
  { label: "Maximum Dispute Window", href: "https://learn.scorevera.com/dispute-window" },
  { label: "Bankruptcy on Your Credit Report", href: "https://learn.scorevera.com/bankruptcy-credit-report" },
  { label: "Bureau Contact Information", href: "https://learn.scorevera.com/bureau-contact-info" },
  { label: "How to File a Regulatory Complaint", href: "https://learn.scorevera.com/regulatory-complaints" },
];

const SCORE_HELP = [
  { label: "How Credit Scores Are Calculated", href: "https://learn.scorevera.com/credit-score-calculation" },
  { label: "What Is a Good Credit Score?", href: "https://learn.scorevera.com/good-credit-score" },
  { label: "Why Your Score Dropped", href: "https://learn.scorevera.com/score-dropped" },
  { label: "How to Build Credit From Zero", href: "https://learn.scorevera.com/build-credit" },
  { label: "Credit Utilization Explained", href: "https://learn.scorevera.com/credit-utilization" },
  { label: "How Payment History Affects Score", href: "https://learn.scorevera.com/payment-history" },
  { label: "Hard vs Soft Inquiries", href: "https://learn.scorevera.com/hard-vs-soft-inquiries" },
  { label: "Secured Cards That Actually Work", href: "https://learn.scorevera.com/secured-cards" },
  { label: "Credit Mix: What It Means", href: "https://learn.scorevera.com/credit-mix" },
  { label: "Score Differences by Bureau", href: "https://learn.scorevera.com/bureau-score-differences" },
  { label: "How Fast Can You Raise Your Score?", href: "https://learn.scorevera.com/raise-credit-score-fast" },
  { label: "What Landlords & Lenders Check", href: "https://learn.scorevera.com/what-lenders-check" },
];

export default function Footer() {
  return (
    <footer className="foot-fat">
      <div className="wrap">
        <div className="foot-inner">
          <div className="foot-brand-col">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <a href="/" aria-label="ScoreVera">
              <img src={LOGO} alt="ScoreVera" className="logo-img" />
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
