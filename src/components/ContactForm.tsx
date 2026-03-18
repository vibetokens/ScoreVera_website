"use client";

import { useState } from "react";

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
  const [fields, setFields] = useState({ name: "", email: "", subject: "General", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMsg, setStatusMsg] = useState("");

  function set(key: string, value: string) {
    setFields((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setStatusMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setStatusMsg(data.message || "Message sent!");
        setFields({ name: "", email: "", subject: "General", message: "" });
      } else {
        setStatus("error");
        setStatusMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setStatusMsg("Network error. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div style={{
        padding: "32px",
        background: "rgba(16,185,129,.07)",
        border: "1px solid rgba(16,185,129,.2)",
        borderRadius: "10px",
        color: "var(--green)",
        fontSize: ".9375rem",
        lineHeight: 1.6,
      }}>
        ✓ {statusMsg}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <label htmlFor="cf-name" style={labelStyle}>Name</label>
          <input
            id="cf-name" type="text" placeholder="Your name"
            value={fields.name} onChange={(e) => set("name", e.target.value)}
            style={inputStyle}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <label htmlFor="cf-email" style={labelStyle}>Email *</label>
          <input
            id="cf-email" type="email" placeholder="you@example.com" required
            value={fields.email} onChange={(e) => set("email", e.target.value)}
            style={inputStyle}
          />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <label htmlFor="cf-subject" style={labelStyle}>Subject</label>
        <select
          id="cf-subject"
          value={fields.subject} onChange={(e) => set("subject", e.target.value)}
          style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
        >
          {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <label htmlFor="cf-message" style={labelStyle}>Message *</label>
        <textarea
          id="cf-message" rows={6} placeholder="How can we help?" required
          value={fields.message} onChange={(e) => set("message", e.target.value)}
          style={{ ...inputStyle, resize: "vertical", lineHeight: "1.6" }}
        />
      </div>

      {status === "error" && (
        <p style={{ fontSize: ".875rem", color: "var(--red)", margin: 0 }}>{statusMsg}</p>
      )}

      <div>
        <button
          type="submit"
          className="btn btn-p"
          disabled={status === "loading"}
          style={{ fontSize: "1rem", padding: "14px 32px" }}
        >
          {status === "loading" ? "Sending…" : "Send Message"}
        </button>
        <p style={{ marginTop: "12px", fontSize: ".8125rem", color: "var(--t3)" }}>
          We respond to all messages within 1–2 business days. For urgent issues, email directly.
        </p>
      </div>
    </form>
  );
}
