const steps = [
  {
    num: "01",
    tag: "Input",
    title: "Upload your credit report",
    desc: "Pull your report from AnnualCreditReport.com — all three bureaus. Upload the PDF to ScoreVera. Nothing is stored long-term.",
    delay: "",
    vis: (
      <div className="sv-in">
        <span className="sv-lbl">system output</span>
        <span style={{ color: "var(--cyan)" }}>✓ Report parsed</span>
        <br />
        <span style={{ color: "var(--t3)" }}>&nbsp; Accounts found: 23</span>
        <br />
        <span style={{ color: "var(--gold)" }}>&nbsp; Flagged: 7 items</span>
      </div>
    ),
  },
  {
    num: "02",
    tag: "Analysis",
    title: "See what needs action",
    desc: "The system identifies negative items — collections, charge-offs, late payments, errors — and categorizes them by type and actionability.",
    delay: "d1",
    vis: (
      <div className="sv-in">
        <span className="sv-lbl">item review</span>
        <span style={{ color: "var(--red)" }}>✗ Collection — $1,240</span>
        <br />
        <span style={{ color: "var(--red)" }}>✗ Charge-Off — CapOne</span>
        <br />
        <span style={{ color: "var(--gold)" }}>! Late Pay ×3 — Chase</span>
        <br />
        <span style={{ color: "var(--green)" }}>✓ Auto Loan — OK</span>
      </div>
    ),
  },
  {
    num: "03",
    tag: "Generation",
    title: "Generate the right letter",
    desc: "ScoreVera generates FCRA § 611-compliant letters for each selected item — matched to the correct bureau, with the right legal language for that dispute type.",
    delay: "d2",
    vis: (
      <div className="sv-in">
        <span className="sv-lbl">letter engine</span>
        <span style={{ color: "var(--blue-lo)" }}>→ FCRA § 611</span>
        <br />
        <span style={{ color: "var(--blue-lo)" }}>→ Bureau: Equifax</span>
        <br />
        <span style={{ color: "var(--blue-lo)" }}>→ Type: Verification</span>
        <br />
        <span style={{ color: "var(--green)" }}>✓ Ready to export</span>
      </div>
    ),
  },
  {
    num: "04",
    tag: "Execution",
    title: "Send it",
    desc: "Print and mail via certified mail with return receipt. You stay in control. ScoreVera gives you everything you need to do it right.",
    delay: "d3",
    vis: (
      <div className="sv-in">
        <span className="sv-lbl">send protocol</span>
        <span style={{ color: "var(--t2)" }}>Method: Certified Mail</span>
        <br />
        <span style={{ color: "var(--cyan)" }}>Track #: USPS logged</span>
        <br />
        <span style={{ color: "var(--green)" }}>Clock starts: Day 1</span>
      </div>
    ),
  },
  {
    num: "05",
    tag: "Tracking",
    title: "Track the 30-day timeline",
    desc: "Under FCRA § 611, bureaus must complete investigations within 30 days. ScoreVera tracks each round, alerts you when to follow up, and guides the next step.",
    delay: "d4",
    vis: (
      <div className="sv-in">
        <span className="sv-lbl">investigation timer</span>
        <span style={{ color: "var(--gold)" }}>Day 23 / 30</span>
        <br />
        <span style={{ color: "var(--t2)" }}>Status: Under review</span>
        <br />
        <span style={{ color: "var(--cyan)" }}>Next: Await response</span>
        <br />
        <span style={{ color: "var(--t3)" }}>Escalation: Day 31</span>
      </div>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="section">
      <div className="wrap">
        <div className="sh rv">
          <span className="eyebrow">Process</span>
          <h2 className="h-xl">How it works.</h2>
          <p className="body-lg">
            You do not need to become an FCRA expert. You need a system that prevents the mistakes
            that make disputes fail.
          </p>
        </div>

        <div className="steps">
          {steps.map((step, i) => (
            <div className={`step rv${step.delay ? ` ${step.delay}` : ""}`} key={step.num}>
              <div className="step-spine">
                <div className="step-circ">{step.num}</div>
                {i < steps.length - 1 && <div className="step-line" />}
              </div>
              <div className="step-content">
                <span className="step-tag">{step.tag}</span>
                <div className="step-title">{step.title}</div>
                <p className="step-desc">{step.desc}</p>
              </div>
              <div className="step-vis">{step.vis}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
