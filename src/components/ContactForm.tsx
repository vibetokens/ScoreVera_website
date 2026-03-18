"use client";

const subjects = ["General", "Support", "Press", "Partnership", "Other"];

const inputStyle: React.CSSProperties = {
  background: "var(--elevated)",
  border: "1px solid var(--border-md)",
  borderRadius: "7px",
  padding: "12px 14px",
  color: "var(--t1)",
  fontSize: ".9375rem",
  fontFamily: "var(--f-u)",
  outline: "none",
  width: "100%",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--f-m)",
  fontSize: ".75rem",
  letterSpacing: ".08em",
  textTransform: "uppercase" as const,
  color: "var(--t3)",
};

export default function ContactForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <label htmlFor="name" style={labelStyle}>Name</label>
          <input id="name" type="text" placeholder="Your name" style={inputStyle} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <label htmlFor="email" style={labelStyle}>Email</label>
          <input id="email" type="email" placeholder="you@example.com" style={inputStyle} />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <label htmlFor="subject" style={labelStyle}>Subject</label>
        <select
          id="subject"
          style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
        >
          {subjects.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <label htmlFor="message" style={labelStyle}>Message</label>
        <textarea
          id="message"
          rows={6}
          placeholder="How can we help?"
          style={{ ...inputStyle, resize: "vertical", lineHeight: "1.6" }}
        />
      </div>

      <div>
        <button type="submit" className="btn btn-p" style={{ fontSize: "1rem", padding: "14px 32px" }}>
          Send Message
        </button>
        <p style={{ marginTop: "12px", fontSize: ".8125rem", color: "var(--t3)" }}>
          We respond to all messages within 1–2 business days. For urgent issues, email directly.
        </p>
      </div>
    </form>
  );
}
