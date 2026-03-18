import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#07090D",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          position: "relative",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(59,130,246,0.12) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 600,
            height: 500,
            background:
              "radial-gradient(ellipse at center, rgba(201,165,90,0.1) 0%, transparent 65%)",
          }}
        />

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, position: "relative" }}>
          <div
            style={{
              width: 56,
              height: 56,
              background: "#111722",
              border: "1.5px solid rgba(201,165,90,0.4)",
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ fontFamily: "serif", fontSize: 34, fontWeight: 700, color: "#C9A55A", lineHeight: 1 }}>
              S
            </span>
          </div>
          <span style={{ fontFamily: "sans-serif", fontWeight: 700, fontSize: 30, color: "#F1F5F9", letterSpacing: "-0.02em" }}>
            ScoreVera
          </span>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20, position: "relative", flex: 1, justifyContent: "center" }}>
          <div style={{ fontFamily: "serif", fontSize: 68, fontWeight: 700, color: "#F1F5F9", lineHeight: 1.06, letterSpacing: "-0.03em", maxWidth: 820 }}>
            Dispute your credit report. Keep the results.
          </div>
          <div style={{ fontFamily: "sans-serif", fontSize: 24, color: "#94A3B8", lineHeight: 1.5, maxWidth: 640 }}>
            FCRA-compliant letters, 30-day tracking, and next-step guidance — no credit repair company needed.
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 28 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ fontFamily: "sans-serif", fontSize: 28, fontWeight: 700, color: "#EF4444" }}>559</span>
            <span style={{ fontFamily: "sans-serif", fontSize: 22, color: "#475569" }}>→</span>
            <span style={{ fontFamily: "sans-serif", fontSize: 28, fontWeight: 700, color: "#10B981" }}>716</span>
            <div style={{ marginLeft: 8, display: "flex", flexDirection: "column", gap: 2 }}>
              <span style={{ fontFamily: "sans-serif", fontSize: 14, color: "#C9A55A", fontWeight: 700, letterSpacing: "0.04em" }}>+157 pts in 30 days</span>
              <span style={{ fontFamily: "sans-serif", fontSize: 12, color: "#64748B" }}>scorevera.com</span>
            </div>
          </div>
          <div style={{ background: "#C9A55A", borderRadius: 8, padding: "12px 28px", display: "flex" }}>
            <span style={{ fontFamily: "sans-serif", fontSize: 18, fontWeight: 700, color: "#07090D" }}>Get Started Free →</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
