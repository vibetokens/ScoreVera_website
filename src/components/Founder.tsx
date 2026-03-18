const PHOTO = "http://scorevera.com/wp-content/uploads/2026/03/sv-founder-murphy.jpg";

export default function Founder() {
  return (
    <section id="founder" className="section">
      <div className="wrap">
        <div className="inner">
          <div className="f-img rv">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={PHOTO}
              alt="Jason Murphy, Founder of ScoreVera"
              className="f-photo"
            />
            <div className="f-tag">
              <div className="f-tag-name">Jason Murphy</div>
              <div className="f-tag-role">Founder · ScoreVera</div>
            </div>
          </div>

          <div>
            <span className="eyebrow rv" style={{ marginBottom: "16px", display: "inline-flex" }}>
              Built by someone who&apos;s been there
            </span>
            <h2 className="h-xl rv" style={{ margin: "0 0 20px" }}>
              I went from 559 to 716 in 30 days.{" "}
              <em className="proof-i">Here&apos;s what I learned.</em>
            </h2>
            <blockquote className="f-quote rv d1">
              &ldquo;Nobody told me you could actually challenge this stuff. I figured it out the hard way — then I built the system I wish I&apos;d had.&rdquo;
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
              I&apos;m Jason. I built ScoreVera after disputing my own credit report and realizing the whole process was completely backwards for regular people. The information exists — it&apos;s buried in federal law — but nobody explains it in plain English or tells you what to actually do next.
            </p>
            <p className="body-lg rv d3">
              I spent months learning it the hard way. Then I turned it into a system.{" "}
              <strong style={{ color: "var(--t1)" }}>
                ScoreVera is what I built so you don&apos;t have to go through what I did.
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
                ScoreVera is software, not a credit repair service. You run your own process — we give you the right tools and the right order to use them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
