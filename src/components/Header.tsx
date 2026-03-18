"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const LOGO = "/images/scorevera-logo.png";

type NavLink = { label: string; href: string; accent?: boolean };
type NavCol = { heading: string; links: NavLink[] };
type NavGroup = { key: string; label: string; cols: NavCol[] };

const NAV: NavGroup[] = [
  {
    key: "product",
    label: "Product",
    cols: [
      {
        heading: "Platform",
        links: [
          { label: "How It Works", href: "/how-it-works" },
          { label: "Features", href: "/features" },
          { label: "Pricing", href: "/pricing" },
          { label: "Results", href: "/results" },
          { label: "vs Credit Repair", href: "/vs-credit-repair" },
          { label: "Changelog", href: "/changelog" },
        ],
      },
      {
        heading: "Tools",
        links: [
          { label: "Dispute Letters", href: "/dispute-letters" },
          { label: "Letter Library", href: "/letter-library" },
          { label: "Credit Report Errors", href: "/credit-report-errors" },
          { label: "Apply for Access", href: "/apply" },
        ],
      },
    ],
  },
  {
    key: "learn",
    label: "Learn",
    cols: [
      {
        heading: "Dispute Guides",
        links: [
          { label: "How to Dispute a Credit Report", href: "/blog/how-to-dispute-credit-report-error" },
          { label: "How to Write a Dispute Letter", href: "/blog/debt-validation-letter-guide" },
          { label: "FCRA § 611 Explained", href: "/blog/fcra-section-611-dispute-rights" },
          { label: "Medical Collections", href: "/blog/how-to-dispute-medical-collections" },
          { label: "Remove a Charge-Off", href: "/blog/how-to-dispute-charge-off-credit-report" },
          { label: "Round 2 Dispute Strategy", href: "/blog/method-of-verification-letter" },
          { label: "→ All Dispute Guides", href: "/blog/category/dispute-process", accent: true },
        ],
      },
      {
        heading: "FCRA & Your Rights",
        links: [
          { label: "Your Rights Under the FCRA", href: "/blog/fcra-rights-dispute-process" },
          { label: "FCRA § 609 — File Access", href: "/blog/fcra-section-609-letter-guide" },
          { label: "FCRA § 611 — Dispute Rights", href: "/blog/fcra-section-611-dispute-rights" },
          { label: "The 30-Day Investigation Rule", href: "/blog/30-day-bureau-investigation-timeline" },
          { label: "Statute of Limitations on Debt", href: "/blog/zombie-debt-credit-report" },
          { label: "FDCPA Debt Collector Rules", href: "/blog/debt-validation-letter-guide" },
          { label: "→ All Rights Guides", href: "/blog/category/credit-report-errors", accent: true },
        ],
      },
      {
        heading: "Credit Score Help",
        links: [
          { label: "How Credit Scores Are Calculated", href: "/blog/how-credit-scores-are-calculated" },
          { label: "Why Your Score Dropped", href: "/blog/why-credit-score-dropped" },
          { label: "Build Credit From Zero", href: "/blog/build-credit-from-scratch" },
          { label: "Credit Utilization Explained", href: "/blog/credit-utilization-guide" },
          { label: "How to Raise Your Score Fast", href: "/blog/how-to-raise-credit-score-fast" },
          { label: "Hard vs Soft Inquiries", href: "/blog/hard-vs-soft-inquiries" },
          { label: "→ All Score Guides", href: "/blog/category/credit-score", accent: true },
        ],
      },
      {
        heading: "Blog",
        links: [
          { label: "All Guides", href: "/blog" },
          { label: "Dispute Process", href: "/blog/category/dispute-process" },
          { label: "Credit Report Errors", href: "/blog/category/credit-report-errors" },
          { label: "Credit Score", href: "/blog/category/credit-score" },
          { label: "How to Read Your Credit Report", href: "/blog/how-to-read-your-credit-report" },
          { label: "Get Your Free Credit Report", href: "/blog/how-to-get-free-credit-report" },
        ],
      },
    ],
  },
  {
    key: "foryou",
    label: "For You",
    cols: [
      {
        heading: "Who It's For",
        links: [
          { label: "For Consumers", href: "/for-consumers" },
          { label: "For Operators", href: "/for-operators" },
          { label: "For Professionals", href: "/for-professionals" },
          { label: "For Creators", href: "/for-creators" },
        ],
      },
      {
        heading: "Programs",
        links: [
          { label: "Creator Program", href: "/creator-program" },
          { label: "Partner Program", href: "/partners" },
          { label: "Apply for Access", href: "/apply" },
        ],
      },
    ],
  },
  {
    key: "resources",
    label: "Resources",
    cols: [
      {
        heading: "Your Rights",
        links: [
          { label: "FCRA Rights", href: "/fcra-rights" },
          { label: "FCRA Compliance", href: "/fcra-compliance" },
          { label: "Security", href: "/security" },
          { label: "LLMs.txt", href: "/llms-txt" },
        ],
      },
      {
        heading: "Dispute Tools",
        links: [
          { label: "Dispute Letters", href: "/dispute-letters" },
          { label: "Letter Library", href: "/letter-library" },
          { label: "Credit Report Errors", href: "/credit-report-errors" },
        ],
      },
      {
        heading: "Blog & Guides",
        links: [
          { label: "All Guides", href: "/blog" },
          { label: "Dispute Process", href: "/blog/category/dispute-process" },
          { label: "Credit Report Errors", href: "/blog/category/credit-report-errors" },
          { label: "Credit Score", href: "/blog/category/credit-score" },
          { label: "FAQ", href: "/faq" },
          { label: "Newsletter", href: "/newsletter" },
        ],
      },
    ],
  },
  {
    key: "company",
    label: "Company",
    cols: [
      {
        heading: "About",
        links: [
          { label: "About ScoreVera", href: "/about" },
          { label: "Press", href: "/press" },
          { label: "Testimonials", href: "/testimonials" },
          { label: "Results", href: "/results" },
          { label: "Changelog", href: "/changelog" },
        ],
      },
      {
        heading: "Connect",
        links: [
          { label: "Contact", href: "/contact" },
          { label: "Newsletter", href: "/newsletter" },
          { label: "Partners", href: "/partners" },
          { label: "Partner Hub", href: "/partner-hub" },
        ],
      },
      {
        heading: "Legal",
        links: [
          { label: "Privacy Policy", href: "/privacy-policy" },
          { label: "Terms of Service", href: "/terms" },
          { label: "Disclaimer", href: "/disclaimer" },
        ],
      },
    ],
  },
];

const GRID_COLS: Record<number, string> = {
  1: "repeat(1,1fr)",
  2: "repeat(2,1fr)",
  3: "repeat(3,1fr)",
  4: "repeat(4,1fr)",
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // Scroll detection
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveMenu(null);
        setDrawerOpen(false);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  // Body scroll lock for drawer
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  // Close menu on scroll
  useEffect(() => {
    const handler = () => setActiveMenu(null);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const openMenu = useCallback((key: string) => {
    clearTimeout(closeTimer.current);
    setActiveMenu(key);
  }, []);

  const scheduleClose = useCallback(() => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveMenu(null), 140);
  }, []);

  const closeAll = () => {
    setActiveMenu(null);
    setDrawerOpen(false);
  };

  return (
    <>
      <header id="hdr" className={scrolled || activeMenu ? "scrolled" : ""}>
        <div className="wrap">
          <nav className="nav">
            {/* Logo */}
            <a href="/" className="logo-img-wrap" aria-label="ScoreVera" onClick={closeAll}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={LOGO} alt="ScoreVera" className="logo-img" height={32} width={190} />
            </a>

            {/* Desktop mega-nav buttons */}
            <ul className="nav-links" style={{ gap: "2px" }}>
              {NAV.map((group) => (
                <li key={group.key}>
                  <button
                    className="mega-btn"
                    aria-expanded={activeMenu === group.key}
                    onMouseEnter={() => openMenu(group.key)}
                    onMouseLeave={scheduleClose}
                    onClick={() =>
                      setActiveMenu(activeMenu === group.key ? null : group.key)
                    }
                  >
                    {group.label}
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>

            {/* Right side */}
            <div className="nav-right">
              <a href="https://app.scorevera.com/login" className="nav-login">Log In</a>
              <a href="https://app.scorevera.com/" className="btn btn-p nav-cta">Get Started</a>
              <button
                className={`hbg${drawerOpen ? " open" : ""}`}
                onClick={() => setDrawerOpen(!drawerOpen)}
                aria-label="Toggle menu"
                aria-expanded={drawerOpen}
              >
                <span /><span /><span />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mega-menu panels */}
      {NAV.map((group) => (
        <div
          key={group.key}
          className={`mega-panel${activeMenu === group.key ? " open" : ""}`}
          onMouseEnter={() => openMenu(group.key)}
          onMouseLeave={scheduleClose}
          role="region"
          aria-label={`${group.label} menu`}
        >
          <div className="wrap">
            <div
              className="mega-inner"
              style={{ gridTemplateColumns: GRID_COLS[group.cols.length] || "repeat(3,1fr)" }}
            >
              {group.cols.map((col) => (
                <div key={col.heading} className="mega-col">
                  <div className="mega-col-h">{col.heading}</div>
                  {col.links.map((link) => (
                    <a
                      key={link.href + link.label}
                      href={link.href}
                      className={`mega-link${link.accent ? " accent" : ""}`}
                      onClick={closeAll}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Backdrop */}
      {activeMenu && (
        <div
          className="mega-backdrop"
          onClick={() => setActiveMenu(null)}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer */}
      <nav
        className={`drawer${drawerOpen ? " open" : ""}`}
        aria-label="Mobile navigation"
        style={{ padding: "0 0 40px", gap: 0 }}
      >
        {NAV.map((group, gi) => (
          <div key={group.key}>
            {gi > 0 && <div className="drawer-sec-sep" />}
            <span className="drawer-sec-h">{group.label}</span>
            <div className="drawer-sec-links">
              {group.cols.flatMap((col) =>
                col.links
                  .filter((l) => !l.accent)
                  .map((link) => (
                    <a key={link.href + link.label} href={link.href} onClick={closeAll}>
                      {link.label}
                    </a>
                  ))
              )}
            </div>
          </div>
        ))}

        <div className="drawer-ctas">
          <a href="https://app.scorevera.com/login" className="btn btn-g" onClick={closeAll}>
            Log In
          </a>
          <a href="https://app.scorevera.com/" className="btn btn-p" onClick={closeAll}>
            Get Started Free
          </a>
        </div>
      </nav>
    </>
  );
}
