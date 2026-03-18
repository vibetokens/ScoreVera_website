const items = [
  {
    q: "I don't know if this is official enough to actually work.",
    a: "I had the same doubt. What changed my mind was realizing this isn't some loophole — it's federal law. The FCRA gives every American the right to dispute inaccurate information on their credit report. Bureaus are legally required to investigate. ScoreVera just makes sure you do it the right way, so they can't brush you off.",
    delay: "",
  },
  {
    q: "I'm scared I'll do it wrong and make things worse.",
    a: "That's the most common thing people tell me. And honestly, it's the reason I built this. The system tells you exactly what to send, which bureau to send it to, and when to follow up. You're not guessing. You're following a process that's already been figured out.",
    delay: "d1",
  },
  {
    q: "I don't want to pay for software I have to figure out.",
    a: "This isn't like that. You log in, upload your report, and the system walks you through what's on it and what to do next. Most people have their first dispute letter ready in under 20 minutes. No setup. No manual to read.",
    delay: "d2",
  },
  {
    q: "What if the results don't last?",
    a: "Legitimate disputes — items that are wrong, outdated, or unverifiable — don't come back once they're removed. The bureaus can't just put them back. What the system does is make sure your disputes are airtight so you get real removals, not temporary ones.",
    delay: "d3",
  },
];

export default function Objections() {
  return (
    <section id="objections" className="section" style={{ background: "var(--surface)" }}>
      <div className="wrap">
        <div className="sh rv">
          <span className="eyebrow">Common Questions</span>
          <h2 className="h-xl">Things people wonder before they start.</h2>
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
