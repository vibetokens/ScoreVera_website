"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Reviews", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(7,9,13,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid #1e2738" : "1px solid transparent",
      }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div
            className="flex h-8 w-8 items-center justify-center rounded-md"
            style={{
              background: "linear-gradient(135deg, #c9a55a 0%, #a8843c 100%)",
            }}
          >
            <span
              className="text-[11px] font-bold tracking-tight"
              style={{
                fontFamily: "var(--font-fraunces), Georgia, serif",
                color: "#07090d",
              }}
            >
              SV
            </span>
          </div>
          <span
            className="text-lg font-semibold tracking-tight text-white group-hover:text-[#c9a55a] transition-colors"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            ScoreVera
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-[#9ca3af] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#pricing"
            className="rounded-full px-5 py-2 text-sm font-semibold transition-all"
            style={{
              background: "linear-gradient(135deg, #c9a55a 0%, #a8843c 100%)",
              color: "#07090d",
              boxShadow: "0 0 20px rgba(201,165,90,0.3)",
            }}
          >
            Get Started Free
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className="block h-px w-6 bg-white transition-all"
            style={{ transform: menuOpen ? "rotate(45deg) translate(3px, 3px)" : "none" }}
          />
          <span
            className="block h-px w-6 bg-white transition-all"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block h-px w-6 bg-white transition-all"
            style={{ transform: menuOpen ? "rotate(-45deg) translate(3px, -3px)" : "none" }}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6"
          style={{ backgroundColor: "rgba(7,9,13,0.98)" }}
        >
          <ul className="flex flex-col gap-4 pt-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block text-base font-medium text-[#d1d5db] py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#pricing"
                className="block w-full rounded-full py-3 text-center text-sm font-semibold"
                style={{
                  background: "linear-gradient(135deg, #c9a55a 0%, #a8843c 100%)",
                  color: "#07090d",
                }}
                onClick={() => setMenuOpen(false)}
              >
                Get Started Free
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
