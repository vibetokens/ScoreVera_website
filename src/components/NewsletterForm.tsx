"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "You're subscribed!");
        setEmail("");
        trackEvent("form_submit", { type: "newsletter" });
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        disabled={status === "loading" || status === "success"}
        style={{
          flex: "1 1 240px",
          background: "var(--elevated)",
          border: `1px solid ${status === "error" ? "var(--red)" : "var(--border-md)"}`,
          borderRadius: "7px",
          padding: "13px 16px",
          color: "var(--t1)",
          fontSize: ".9375rem",
          fontFamily: "var(--f-u)",
          outline: "none",
          minWidth: "0",
          opacity: status === "success" ? 0.6 : 1,
        }}
      />
      {status !== "success" && (
        <button
          type="submit"
          className="btn btn-p"
          disabled={status === "loading"}
          style={{ fontSize: ".9375rem", padding: "13px 28px", flexShrink: 0 }}
        >
          {status === "loading" ? "Subscribing…" : "Subscribe"}
        </button>
      )}
      {message && (
        <p
          style={{
            width: "100%",
            margin: 0,
            fontSize: ".875rem",
            color: status === "success" ? "var(--green)" : "var(--red)",
            fontFamily: "var(--f-u)",
          }}
        >
          {status === "success" ? "✓ " : ""}
          {message}
        </p>
      )}
    </form>
  );
}
