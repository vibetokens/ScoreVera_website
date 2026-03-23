const stats = [
  {
    n: "79",
    unit: "%",
    gold: true,
    label: "of credit reports contain at least one error",
    source: "FTC Study",
  },
  {
    n: "30",
    unit: null,
    gold: false,
    label: "days — legal window for bureaus to investigate",
    source: "FCRA § 611",
  },
  {
    n: "+157",
    unit: null,
    gold: false,
    label: "points gained in a single 30-day round",
    source: "Founder proof",
  },
  {
    n: "$0",
    unit: null,
    gold: false,
    label: "to upload your report and see what is wrong",
    source: "Free tier",
  },
];

export default function ProofStrip() {
  return (
    <section id="proof">
      <div className="proof-grid">
        {stats.map((s, i) => (
          <div className={`proof-cell rv${i > 0 ? ` d${i}` : ""}`} key={i}>
            <div className="proof-n">
              <span className={s.gold ? "pn-gold" : ""}>{s.n}</span>
              {s.unit && <span className={`proof-unit${s.gold ? " pn-gold" : ""}`}>{s.unit}</span>}
            </div>
            <p className="proof-label">{s.label}</p>
            <span className="proof-src">{s.source}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
