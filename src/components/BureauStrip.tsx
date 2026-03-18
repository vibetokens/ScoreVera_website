const items = [
  { label: "Equifax", sub: "§ 611", color: "var(--blue)" },
  { label: "Experian", sub: "§ 611", color: "var(--blue)" },
  { label: "TransUnion", sub: "§ 611", color: "var(--blue)" },
  { label: "FCRA § 623", sub: "", color: "var(--gold)" },
  { label: "FDCPA Compliant", sub: "", color: "var(--gold)" },
  { label: "30-Day Tracking", sub: "", color: "var(--green)" },
  { label: "Dispute Automation", sub: "", color: "var(--green)" },
  { label: "Browser-Based", sub: "", color: "var(--cyan)" },
];

export default function BureauStrip() {
  const doubled = [...items, ...items];

  return (
    <div id="bureau" aria-hidden="true">
      <div className="b-track">
        {doubled.map((item, i) => (
          <div className="bi" key={i}>
            <span className="bi-d" style={{ background: item.color }} />
            <span className="bi-n" style={{ color: item.color !== "var(--blue)" ? item.color : undefined }}>
              {item.label}
            </span>
            {item.sub && <span className="bi-s">{item.sub}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
