export default function Pillars() {
  return (
    <section id="what" className="section">
      <div className="wrap">
        <div className="sh rv">
          <span className="eyebrow">The System</span>
          <h2 className="h-xl">This is not credit repair.</h2>
          <p className="body-lg">
            No service. No random templates. ScoreVera takes a confusing report and turns it into a
            structured workflow — what to challenge, what to leave, what to send next, and when.
          </p>
        </div>

        <div className="pillars">
          <div className="pillar rv">
            <div className="p-n">01 /</div>
            <div className="p-icon">
              <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4">
                <circle cx="9" cy="9" r="7.5" />
                <path d="M9 5.5v4l2.5 2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="p-title">Clarity</div>
            <p className="p-desc">
              See exactly what is on your report and what actually matters. Not everything negative is
              actionable — we show you the difference.
            </p>
          </div>

          <div className="pillar rv d1">
            <div className="p-n">02 /</div>
            <div className="p-icon">
              <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M3.5 9h11M12 5.5l3.5 3.5-3.5 3.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="p-title">Control</div>
            <p className="p-desc">
              Know what to send and when. The system controls sequencing so you don&apos;t jump ahead,
              fall behind, or miss a deadline.
            </p>
          </div>

          <div className="pillar rv d2">
            <div className="p-n">03 /</div>
            <div className="p-icon">
              <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M4 9l4 4 6-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="p-title">Inevitability</div>
            <p className="p-desc">
              If it is wrong, challenge it correctly. If it is right, handle it properly. Either way,
              the system keeps you moving with a process that holds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
