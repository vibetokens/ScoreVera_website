export default function Founder() {
  return (
    <section id="founder" className="section">
      <div className="wrap">
        <div className="inner">
          <div className="f-img rv">
            <div className="f-placeholder">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" opacity="0.15" aria-hidden="true">
                <circle cx="28" cy="20" r="12" stroke="white" strokeWidth="1.5" />
                <path d="M5 52c0-12.703 10.297-23 23-23s23 10.297 23 23" stroke="white" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="f-tag">
              <div className="f-tag-name">Murphy</div>
              <div className="f-tag-role">Founder · ScoreVera</div>
            </div>
          </div>

          <div>
            <span className="eyebrow rv" style={{ marginBottom: "16px", display: "inline-flex" }}>
              The Moment It Clicked
            </span>
            <blockquote className="f-quote rv d1">
              &ldquo;I didn&apos;t even know you could challenge anything. Then I sent one round of dispute letters.&rdquo;
            </blockquote>
            <div className="score-proof rv d2">
              <span className="sp-n sp-before">559</span>
              <span className="sp-arrow sp-n">→</span>
              <span className="sp-n sp-after">716</span>
              <div className="sp-meta">
                <span className="sp-main">+157 points</span>
                <span className="sp-sub">30 days · 1 round · Still there</span>
              </div>
            </div>
            <p className="body-lg rv d3" style={{ marginBottom: "14px" }}>
              Not a bump. Not a trick. It stayed.
            </p>
            <p className="body-lg rv d3">
              Most people fail because they send the wrong letters, at the wrong time, or stop too early.{" "}
              <strong style={{ color: "var(--t1)" }}>
                ScoreVera turns that process into a system you can follow.
              </strong>
            </p>
            <div className="info-band rv d4">
              <svg
                className="info-icon"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" />
                <path d="M8 7v4M8 5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <p className="info-text">
                ScoreVera is software, not a credit repair service. You run your own process — we give you
                the right tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
