import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(245,240,232,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(139,175,149,0.2)" : "none",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <a
          href="#"
          className="font-display text-lg font-medium tracking-tight transition-opacity hover:opacity-70"
          style={{ color: scrolled ? "var(--color-forest)" : "var(--color-cream)" }}
        >
          Conner Galway
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {["About", "Work", "The Brief"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-sm font-medium tracking-wide transition-all duration-200 hover:opacity-60"
              style={{
                color: scrolled ? "var(--color-dust)" : "rgba(245,240,232,0.8)",
                fontFamily: "var(--font-sans)",
              }}
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a
            href="#book"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{
              backgroundColor: "var(--color-gold)",
              color: "var(--color-forest-deep)",
              fontFamily: "var(--font-sans)",
            }}
          >
            Book a Call
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block w-5 h-px transition-all duration-200"
                style={{ backgroundColor: scrolled ? "var(--color-ink)" : "var(--color-cream)" }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t px-6 py-6 flex flex-col gap-5"
          style={{
            backgroundColor: "var(--color-cream)",
            borderColor: "var(--color-sage-light)",
          }}
        >
          {["About", "Work", "The Brief"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-base font-medium"
              style={{ color: "var(--color-ink)", fontFamily: "var(--font-sans)" }}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#book"
            className="inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-medium mt-2"
            style={{
              backgroundColor: "var(--color-gold)",
              color: "var(--color-forest-deep)",
            }}
            onClick={() => setMenuOpen(false)}
          >
            Book a Discovery Call
          </a>
        </div>
      )}
    </header>
  );
}
