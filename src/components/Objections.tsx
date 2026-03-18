const items = [
  {
    q: "I don't know if this is official enough to work.",
    a: "The process works because it follows federal law — FCRA § 611. ScoreVera structures the execution. Random online advice doesn't. That is the difference.",
    delay: "",
  },
  {
    q: "I don't want to do this wrong.",
    a: "Good. That is exactly why ScoreVera exists. The system shows what to send, when, and what happens next. You don't have to figure it out alone.",
    delay: "d1",
  },
  {
    q: "I don't want to buy software I have to learn.",
    a: "This is not that. You log in, upload your report, and follow the steps. There is no learning curve — there is a system.",
    delay: "d2",
  },
  {
    q: "I don't know if results will stick.",
    a: "Results come from doing the process correctly, not chasing shortcuts. When disputes are valid and executed right, they stick. That is what the system ensures.",
    delay: "d3",
  },
];

export default function Objections() {
  return (
    <section id="objections" className="section" style={{ background: "var(--surface)" }}>
      <div className="wrap">
        <div className="sh rv">
          <span className="eyebrow">Objections</span>
          <h2 className="h-xl">What people usually worry about.</h2>
        </div>

        <div className="obj-grid">
          {items.map((item, i) => (
            <div className={`obj-card rv${item.delay ? ` ${item.delay}` : ""}`} key={i}>
              <p className="obj-q">{item.q}</p>
              <p className="obj-a">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
