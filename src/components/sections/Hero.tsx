import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const fadeStyle = (delay: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
  });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden noise"
      style={{ backgroundColor: "var(--color-forest)" }}
    >
      {/* Subtle radial gradient for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 50%, rgba(45,90,69,0.5) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left: Typography */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Eyebrow */}
            <div style={fadeStyle(0)}>
              <span
                className="inline-block text-xs font-medium tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border"
                style={{
                  color: "var(--color-sage-light)",
                  borderColor: "rgba(139,175,149,0.35)",
                  fontFamily: "var(--font-sans)",
                }}
              >
                AI Coach · Consultant · Speaker
              </span>
            </div>

            {/* Main headline */}
            <div style={fadeStyle(150)}>
              <h1
                className="leading-[1.05] font-medium"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(3rem, 6vw, 5.5rem)",
                  color: "var(--color-cream)",
                }}
              >
                The teams that{" "}
                <em
                  className="not-italic"
                  style={{ color: "var(--color-gold)" }}
                >
                  win with AI
                </em>{" "}
                <br className="hidden lg:block" />
                are built, not bought.
              </h1>
            </div>

            {/* Sub-headline */}
            <div style={fadeStyle(300)}>
              <p
                className="text-lg leading-relaxed max-w-xl"
                style={{
                  color: "rgba(245,240,232,0.72)",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 300,
                }}
              >
                Conner Galway helps organizations of every kind build the
                teams, habits, and mindsets that make AI actually work —
                not just in theory, but in practice.
              </p>
            </div>

            {/* CTAs */}
            <div
              className="flex flex-wrap items-center gap-4"
              style={fadeStyle(450)}
            >
              <a
                href="#book"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm tracking-wide transition-all duration-200 hover:scale-105 animate-pulse-ring"
                style={{
                  backgroundColor: "var(--color-gold)",
                  color: "var(--color-forest-deep)",
                  fontFamily: "var(--font-sans)",
                }}
              >
                Book a Discovery Call
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
              <a
                href="#the-brief"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm tracking-wide border transition-all duration-200 hover:bg-white/10"
                style={{
                  color: "rgba(245,240,232,0.85)",
                  borderColor: "rgba(245,240,232,0.25)",
                  fontFamily: "var(--font-sans)",
                }}
              >
                Read The Brief
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 3v10M4 9l4 4 4-4" />
                </svg>
              </a>
            </div>

            {/* Credibility micro-line */}
            <div
              className="flex items-center gap-6 pt-2"
              style={fadeStyle(550)}
            >
              <div
                className="h-px flex-1 max-w-[60px]"
                style={{ backgroundColor: "rgba(139,175,149,0.4)" }}
              />
              <p
                className="text-xs tracking-widest uppercase"
                style={{ color: "rgba(245,240,232,0.4)", fontFamily: "var(--font-sans)" }}
              >
                Trusted by leading organizations across North America
              </p>
            </div>
          </div>

          {/* Right: Portrait placeholder */}
          <div
            className="lg:col-span-5 flex justify-center lg:justify-end"
            style={fadeStyle(200)}
          >
            <div className="relative">
              {/* Portrait image */}
              <div
                className="w-72 h-96 lg:w-80 lg:h-[480px] rounded-2xl overflow-hidden"
                style={{
                  border: "1px solid rgba(139,175,149,0.2)",
                  boxShadow: "0 32px 64px rgba(0,0,0,0.3)",
                }}
              >
                <img
                  src="/conner.jpg"
                  alt="Conner Galway"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Award badge — rotating SVG ring */}
              <div
                className="absolute -bottom-4 -right-4 w-24 h-24"
                style={{ animation: "spin 20s linear infinite" }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <path id="circle-text" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                  </defs>
                  <circle cx="50" cy="50" r="42" fill="var(--color-gold)" />
                  <circle cx="50" cy="50" r="34" fill="var(--color-forest)" />
                  <text
                    fontSize="9"
                    fontFamily="var(--font-sans)"
                    fontWeight="500"
                    letterSpacing="2"
                    fill="var(--color-gold)"
                  >
                    <textPath href="#circle-text">THE BRIEF · AWARD WINNING ·</textPath>
                  </text>
                  <text
                    x="50" y="55"
                    textAnchor="middle"
                    fontSize="8"
                    fontFamily="var(--font-sans)"
                    fill="var(--color-gold)"
                    fontWeight="600"
                    letterSpacing="1"
                  >
                    ✦
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ ...fadeStyle(700), color: "rgba(245,240,232,0.35)" }}
      >
        <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-sans)" }}>
          Scroll
        </span>
        <div
          className="w-px h-8"
          style={{
            background: "linear-gradient(to bottom, rgba(245,240,232,0.35), transparent)",
            animation: "pulse 2s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes pulse { 0%, 100% { opacity: 0.35; } 50% { opacity: 0.8; } }
      `}</style>
    </section>
  );
}
