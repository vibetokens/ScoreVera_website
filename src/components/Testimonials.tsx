const testimonials = [
  { q: "Sent one round the right way. Finally saw movement.", name: "Marcus", role: "Warehouse Supervisor, 42", av: "M", delay: "" },
  { q: "I didn't even know this was something you could do.", name: "Danielle", role: "Single Mom, 38", av: "D", delay: "d1" },
  { q: "Timing was the difference. I was doing it wrong before.", name: "Chris", role: "Mechanic, 45", av: "C", delay: "d2" },
  { q: "Simple. Follow the steps. Do not overthink it.", name: "Latoya", role: "Nurse, 34", av: "L", delay: "d1" },
  { q: "First time this felt structured instead of random.", name: "Eric", role: "Truck Driver, 51", av: "E", delay: "d2" },
  { q: "I stopped guessing. That is what changed everything.", name: "Amanda", role: "Retail Manager, 29", av: "A", delay: "d3" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section" style={{ background: "var(--surface)" }}>
      <div className="wrap">
        <div className="sh rv">
          <span className="eyebrow">Social Proof</span>
          <h2 className="h-xl">People are running the system.</h2>
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
