"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  function close() {
    setOpen(false);
  }

  function smoothScroll(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    close();
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({ top: (target as HTMLElement).offsetTop - 68, behavior: "smooth" });
    }
  }

  return (
    <>
      <header id="hdr" className={scrolled ? "scrolled" : ""}>
        <div className="wrap">
          <nav className="nav">
            <a href="/" className="logo" aria-label="ScoreVera">
              <div className="logo-icon">
                <svg viewBox="0 0 16 16" fill="none">
                  <path d="M8 1.5L14 5v6L8 14.5L2 11V5L8 1.5Z" stroke="#07090D" strokeWidth="1.5" fill="none" />
                  <path d="M8 4.5L12 7v4.5L8 14L4 11.5V7L8 4.5Z" fill="#07090D" />
                </svg>
              </div>
              <span className="logo-name">Score<span>Vera</span></span>
            </a>

            <ul className="nav-links">
              <li><a href="#how" onClick={(e) => smoothScroll(e, "#how")}>How It Works</a></li>
              <li><a href="#pricing" onClick={(e) => smoothScroll(e, "#pricing")}>Pricing</a></li>
              <li><a href="#founder" onClick={(e) => smoothScroll(e, "#founder")}>About</a></li>
            </ul>

            <div className="nav-right">
              <a href="https://app.scorevera.com/login" className="nav-login">Log In</a>
              <a href="https://app.scorevera.com/" className="btn btn-p nav-cta">Get Started</a>
              <button
                className={`hbg${open ? " open" : ""}`}
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
                aria-expanded={open}
              >
                <span /><span /><span />
              </button>
            </div>
          </nav>
        </div>
      </header>

      <nav className={`drawer${open ? " open" : ""}`} aria-label="Mobile navigation">
        <a href="#how" onClick={(e) => smoothScroll(e, "#how")}>How It Works</a>
        <a href="#pricing" onClick={(e) => smoothScroll(e, "#pricing")}>Pricing</a>
        <a href="#founder" onClick={(e) => smoothScroll(e, "#founder")}>About</a>
        <div className="drawer-sep" />
        <a href="https://app.scorevera.com/login">Log In</a>
        <a href="https://app.scorevera.com/" className="btn btn-p" onClick={close}>
          Get Started Free
        </a>
      </nav>
    </>
  );
}
