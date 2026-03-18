import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#07090D",
          borderRadius: 7,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1.5px solid rgba(201,165,90,0.35)",
        }}
      >
        <span
          style={{
            fontFamily: "serif",
            fontWeight: 700,
            fontSize: 20,
            color: "#C9A55A",
            lineHeight: 1,
            letterSpacing: "-0.02em",
          }}
        >
          S
        </span>
      </div>
    ),
    { ...size }
  );
}
