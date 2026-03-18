import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: "#07090D",
          borderRadius: 38,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "3px solid rgba(201,165,90,0.3)",
        }}
      >
        {/* Gold accent line at top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 48,
            height: 3,
            background: "#C9A55A",
            borderRadius: "0 0 3px 3px",
          }}
        />
        <span
          style={{
            fontFamily: "serif",
            fontWeight: 700,
            fontSize: 108,
            color: "#C9A55A",
            lineHeight: 1,
            letterSpacing: "-0.03em",
            marginTop: 8,
          }}
        >
          S
        </span>
      </div>
    ),
    { ...size }
  );
}
