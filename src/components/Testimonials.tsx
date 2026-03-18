const testimonials = [
  {
    q: "I had a medical collection from 2019 I didn't even recognize. Disputed it through ScoreVera and it was gone in 34 days. My score jumped 61 points.",
    name: "Marcus T.",
    role: "Warehouse Supervisor, Atlanta",
    av: "M",
    delay: "",
  },
  {
    q: "I always thought you needed a lawyer or a credit repair company to do this. You don't. I did it myself in a weekend and had letters out to all three bureaus by Monday.",
    name: "Danielle R.",
    role: "School Nurse, Houston",
    av: "D",
    delay: "d1",
  },
  {
    q: "I'd been trying to fix my credit for two years on my own and barely moved the needle. One round with ScoreVera knocked off three accounts. The difference was doing it in the right order.",
    name: "Chris M.",
    role: "Auto Mechanic, Phoenix",
    av: "C",
    delay: "d2",
  },
  {
    q: "The thing I kept getting wrong before was timing. I was following up too early, which reset the 30-day clock. ScoreVera told me exactly when to send each follow-up. That changed everything.",
    name: "Latoya W.",
    role: "Registered Nurse, Chicago",
    av: "L",
    delay: "d1",
  },
  {
    q: "I was embarrassed to talk to anyone about my credit. This let me handle it myself, privately, at 11pm after the kids went to bed. No judgment. Just the process.",
    name: "Eric B.",
    role: "Long-Haul Driver, Memphis",
    av: "E",
    delay: "d2",
  },
  {
    q: "I tried three other apps before this one. They all gave me a score and a generic tip. ScoreVera told me exactly what to write and who to send it to. Night and day.",
    name: "Amanda K.",
    role: "Office Manager, Denver",
    av: "A",
    delay: "d3",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section" style={{ background: "var(--surface)" }}>
      <div className="wrap">
        <div className="sh rv">
          <span className="eyebrow">Real Results</span>
          <h2 className="h-xl">People who ran the process.</h2>
        </div>

        <div className="tgrid">
          {testimonials.map((t, i) => (
            <div className={`tcard rv${t.delay ? ` ${t.delay}` : ""}`} key={i}>
              <div className="tc-stars">★★★★★</div>
              <p className="tc-q">&ldquo;{t.q}&rdquo;</p>
              <div className="tc-foot">
                <div className="tc-av">{t.av}</div>
                <div>
                  <div className="tc-name">{t.name}</div>
                  <div className="tc-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
