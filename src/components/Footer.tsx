export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    Product: ["How It Works", "Pricing", "Vera Score™", "Dispute Automation", "Score Simulator"],
    Company: ["About", "Blog", "Careers", "Press"],
    Legal: ["Privacy Policy", "Terms of Service", "Security", "Cookie Policy"],
    Support: ["Help Center", "Contact Us", "Status Page", "Accessibility"],
  };

  return (
    <footer
      className="px-6 pt-16 pb-8 md:px-8"
      style={{
        backgroundColor: "#07090d",
        borderTop: "1px solid #1e2738",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5 mb-14">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
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
                className="text-base font-semibold text-white"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                ScoreVera
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "#6b7280" }}>
              Credit intelligence for modern borrowers. Know your score. Own your future.
            </p>
            <div className="flex gap-3">
              {["twitter", "linkedin", "instagram"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-md transition-colors hover:bg-white/5"
                  style={{ border: "1px solid #1e2738" }}
                  aria-label={platform}
                >
                  <span className="text-xs" style={{ color: "#6b7280" }}>
                    {platform[0].toUpperCase()}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4
                className="mb-4 text-xs font-semibold uppercase tracking-widest"
                style={{ color: "#9ca3af" }}
              >
                {category}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: "#6b7280" }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px mb-6" style={{ backgroundColor: "#1e2738" }} />

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs" style={{ color: "#374151" }}>
            © {currentYear} ScoreVera, Inc. All rights reserved.
          </p>
          <p className="text-xs leading-relaxed" style={{ color: "#374151", maxWidth: "480px" }}>
            ScoreVera is not a credit repair organization as defined under federal or state law. We do not
            provide legal advice. FICO® is a registered trademark of Fair Isaac Corporation.
          </p>
        </div>
      </div>
    </footer>
  );
}
