export default function FinalCTA() {
  return (
    <section id="cta" className="section">
      <div className="wrap">
        <div className="cta-wrap">
          <span className="eyebrow rv" style={{ justifyContent: "center", width: "100%", display: "inline-flex" }}>
            Start Now
          </span>
          <h2 className="h-xl rv" style={{ margin: "18px 0" }}>
            You already have the report.
            <br />
            <em className="proof-i">Now run it like a system.</em>
          </h2>
          <p className="body-lg rv d1" style={{ maxWidth: "460px", margin: "0 auto" }}>
            No downloads. No guesswork. Log in, upload your report, and follow the process correctly.
          </p>
          <div className="cta-acts rv d2">
            <a href="https://app.scorevera.com/register" className="btn btn-p">
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
            <span>No install</span>
            <span>·</span>
            <span>Cancel anytime</span>
            <span>·</span>
            <span>Browser-based</span>
          </div>
        </div>
      </div>
    </section>
  );
}
