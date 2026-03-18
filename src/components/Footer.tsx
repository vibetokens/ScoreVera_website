export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <a href="/" className="logo">
            <div className="logo-icon" style={{ width: "26px", height: "26px" }}>
              <svg viewBox="0 0 16 16" fill="none" style={{ width: "14px", height: "14px" }}>
                <path d="M8 1.5L14 5v6L8 14.5L2 11V5L8 1.5Z" stroke="#07090D" strokeWidth="1.5" fill="none" />
                <path d="M8 4.5L12 7v4.5L8 14L4 11.5V7L8 4.5Z" fill="#07090D" />
              </svg>
            </div>
            <span className="logo-name" style={{ fontSize: ".9375rem" }}>
              Score<span>Vera</span>
            </span>
          </a>

          <ul className="foot-nav">
            <li><a href="#how">How It Works</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="https://learn.scorevera.com">Blog</a></li>
            <li><a href="https://app.scorevera.com/login">Log In</a></li>
          </ul>

          <span className="foot-copy">© 2026 ScoreVera</span>
        </div>

        <p className="foot-legal">
          ScoreVera is a software platform and is not a credit repair organization as defined by the
          Credit Repair Organizations Act (CROA). ScoreVera does not provide legal or financial advice,
          does not submit disputes on behalf of users, and makes no guarantees regarding credit score
          outcomes. Results depend on individual credit report contents and bureau response. FCRA § 611
          governs consumer dispute rights with credit reporting agencies.
        </p>
      </div>
    </footer>
  );
}
