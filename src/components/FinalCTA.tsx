export default function FinalCTA() {
  return (
    <section id="cta" className="section">
      <div className="wrap">
        <div className="cta-wrap">
          <span className="eyebrow rv" style={{ justifyContent: "center", width: "100%", display: "inline-flex" }}>
            Start Now
          </span>
          <h2 className="h-xl rv" style={{ margin: "18px 0" }}>
            Every month your score stays low
            <br />
            <em className="proof-i">costs you in higher interest.</em>
          </h2>
          <p className="body-lg rv d1" style={{ maxWidth: "480px", margin: "0 auto" }}>
            Upload your report. See what is dragging your score down. Generate your first dispute letter in under 20 minutes — free, no credit card required.
          </p>
          <div className="cta-acts rv d2">
            <a href="https://app.scorevera.com/" className="btn btn-p">
              Upload Your Report{" "}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M7 1.5L12.5 7L7 12.5M1.5 7h11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#how" className="btn btn-g">
              See How It Works
            </a>
          </div>
          <div className="cta-micro rv d3">
            <span>Free to analyze</span>
            <span>·</span>
            <span>No install</span>
            <span>·</span>
            <span>Results in 30 days</span>
          </div>
        </div>
      </div>
    </section>
  );
}
