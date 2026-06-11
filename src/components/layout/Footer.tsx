export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--ink)", color: "var(--on-dark)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 items-start">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <p
              className="text-base font-semibold"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
            >
              Conner Galway
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--on-dark-muted)", fontFamily: "var(--font-body)", maxWidth: "24ch" }}
            >
              AI Coach, Consultant & Speaker. Building more effective teams.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            {[
              { label: "About", href: "#about" },
              { label: "Services", href: "#services" },
              { label: "The Brief", href: "#the-brief" },
              { label: "Book a Call", href: "#book" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm transition-opacity hover:opacity-60 w-fit"
                style={{ color: "var(--on-dark-muted)", fontFamily: "var(--font-body)" }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Social + copyright */}
          <div className="flex flex-col gap-4 sm:items-end">
            <a
              href="https://linkedin.com/in/connergalway"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
              style={{ color: "var(--on-dark-muted)", fontFamily: "var(--font-body)" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <p
              className="text-xs"
              style={{ color: "oklch(0.38 0.015 275)", fontFamily: "var(--font-body)" }}
            >
              &copy; {new Date().getFullYear()} Conner Galway
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
