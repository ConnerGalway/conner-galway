import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "The Brief", href: "#the-brief" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 72);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // close menu on resize past mobile
  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0"
        style={{ zIndex: "var(--z-sticky)" }}
      >
        <motion.div
          animate={{
            backgroundColor: scrolled ? "rgba(255,255,255,0.96)" : "transparent",
            backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
            borderBottomColor: scrolled ? "oklch(0.88 0.008 275 / 0.7)" : "transparent",
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          style={{ borderBottomWidth: "1px", borderBottomStyle: "solid" }}
        >
          <nav className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-16 flex items-center justify-between gap-8">
            {/* Wordmark */}
            <a
              href="#"
              className="shrink-0 text-base font-semibold tracking-tight transition-opacity hover:opacity-70"
              style={{
                fontFamily: "var(--font-display)",
                color: scrolled ? "var(--ink)" : "var(--on-dark)",
              }}
            >
              Conner Galway
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-7">
              {links.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-sm font-medium transition-all duration-200 hover:opacity-60"
                  style={{
                    color: scrolled ? "var(--ink-2)" : "var(--on-dark-2)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {label}
                </a>
              ))}
            </div>

            {/* Right: CTA + hamburger */}
            <div className="flex items-center gap-3">
              <a
                href="#book"
                className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
                style={{
                  backgroundColor: scrolled ? "var(--primary)" : "var(--accent)",
                  color: "white",
                  fontFamily: "var(--font-body)",
                }}
              >
                Book a Call
              </a>

              {/* Hamburger */}
              <button
                className="md:hidden p-2 -mr-2 rounded-lg"
                onClick={() => setOpen(!open)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
              >
                <span
                  className="block w-5 h-0.5 mb-1.5 transition-all duration-200"
                  style={{
                    backgroundColor: scrolled ? "var(--ink)" : "var(--on-dark)",
                    transformOrigin: "center",
                    transform: open ? "translateY(6px) rotate(45deg)" : "none",
                  }}
                />
                <span
                  className="block w-5 h-0.5 transition-all duration-200"
                  style={{
                    backgroundColor: scrolled ? "var(--ink)" : "var(--on-dark)",
                    opacity: open ? 0 : 1,
                  }}
                />
                <span
                  className="block w-5 h-0.5 mt-1.5 transition-all duration-200"
                  style={{
                    backgroundColor: scrolled ? "var(--ink)" : "var(--on-dark)",
                    transformOrigin: "center",
                    transform: open ? "translateY(-6px) rotate(-45deg)" : "none",
                  }}
                />
              </button>
            </div>
          </nav>
        </motion.div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="md:hidden border-t"
              style={{
                backgroundColor: "rgba(255,255,255,0.98)",
                backdropFilter: "blur(16px)",
                borderColor: "var(--rule)",
              }}
            >
              <div className="max-w-7xl mx-auto px-5 py-6 flex flex-col gap-5">
                {links.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="text-base font-medium"
                    style={{ color: "var(--ink)", fontFamily: "var(--font-body)" }}
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </a>
                ))}
                <a
                  href="#book"
                  className="inline-flex items-center justify-center text-sm font-semibold px-5 py-3 rounded-full mt-1"
                  style={{
                    backgroundColor: "var(--primary)",
                    color: "white",
                    fontFamily: "var(--font-body)",
                  }}
                  onClick={() => setOpen(false)}
                >
                  Book a Discovery Call
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
