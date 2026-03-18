"use client";

import { useState, useEffect } from "react";

export default function MobileBar() {
  const [visible, setVisible] = useState(false);

  // Show after scrolling 300px
  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 290,
        background: "var(--bg)",
        borderTop: "1px solid var(--border-md)",
        padding: "12px 16px",
        display: "flex",
        gap: "10px",
        alignItems: "center",
        transform: visible ? "translateY(0)" : "translateY(100%)",
        transition: "transform .25s ease",
        // Only show on mobile
      }}
      className="mobile-bar"
    >
      <a
        href="https://app.scorevera.com/login"
        className="btn btn-g"
        style={{ flex: 1, justifyContent: "center", fontSize: ".9rem", padding: "12px 0" }}
      >
        Log In
      </a>
      <a
        href="https://app.scorevera.com/"
        className="btn btn-p"
        style={{ flex: 2, justifyContent: "center", fontSize: ".9rem", padding: "12px 0" }}
      >
        Get Started Free
      </a>
    </div>
  );
}
