import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const iconData = fs.readFileSync(
    path.join(process.cwd(), "public/images/sv-icon-80.png")
  );
  const iconBase64 = `data:image/png;base64,${iconData.toString("base64")}`;

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
        {/* Subtle grid dot pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(59,130,246,0.12) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Gold glow top-right */}
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

        {/* Top: logo mark + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, position: "relative" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={iconBase64} width={56} height={56} alt="ScoreVera icon" />
          <span
            style={{
              fontFamily: "sans-serif",
              fontWeight: 700,
              fontSize: 30,
              color: "#F1F5F9",
              letterSpacing: "-0.02em",
            }}
          >
            ScoreVera
          </span>
        </div>

        {/* Center: headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20, position: "relative", flex: 1, justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 4,
            }}
          >
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#3B82F6" }} />
            <span
              style={{
                fontFamily: "sans-serif",
                fontSize: 14,
                color: "#60A5FA",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Credit Dispute Software
            </span>
          </div>
          <div
            style={{
              fontFamily: "serif",
              fontSize: 72,
              fontWeight: 700,
              color: "#F1F5F9",
              lineHeight: 1.06,
              letterSpacing: "-0.03em",
              maxWidth: 800,
            }}
          >
            Dispute your credit report. Keep the results.
          </div>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: 24,
              color: "#94A3B8",
              lineHeight: 1.5,
              maxWidth: 640,
              marginTop: 4,
            }}
          >
            FCRA-compliant dispute letters, 30-day tracking, and next-step guidance. Built for everyday Americans.
          </div>
        </div>

        {/* Bottom: score proof + CTA */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: 28,
          }}
        >
          {/* Score proof */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span
              style={{
                fontFamily: "sans-serif",
                fontSize: 28,
                fontWeight: 700,
                color: "#EF4444",
              }}
            >
              559
            </span>
            <span style={{ fontFamily: "sans-serif", fontSize: 22, color: "#475569" }}>→</span>
            <span
              style={{
                fontFamily: "sans-serif",
                fontSize: 28,
                fontWeight: 700,
                color: "#10B981",
              }}
            >
              716
            </span>
            <div
              style={{
                marginLeft: 8,
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <span
                style={{
                  fontFamily: "sans-serif",
                  fontSize: 14,
                  color: "#C9A55A",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                }}
              >
                +157 pts
              </span>
              <span style={{ fontFamily: "sans-serif", fontSize: 12, color: "#64748B" }}>
                30 days · Founder&apos;s result
              </span>
            </div>
          </div>

          {/* CTA pill */}
          <div
            style={{
              background: "#C9A55A",
              borderRadius: 8,
              padding: "12px 28px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: "sans-serif",
                fontSize: 18,
                fontWeight: 700,
                color: "#07090D",
                letterSpacing: "-0.01em",
              }}
            >
              Get Started Free →
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
