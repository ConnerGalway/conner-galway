import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function BookingCTA() {
  const { ref, inView } = useInView();

  const fade = (delay: number) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
  });

  return (
    <section
      id="book"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-32 overflow-hidden noise"
      style={{ backgroundColor: "var(--color-forest-deep)" }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(26,58,47,0.8) 0%, transparent 80%)",
        }}
      />

      {/* Decorative large letter */}
      <div
        className="absolute right-8 top-1/2 -translate-y-1/2 select-none pointer-events-none hidden lg:block"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "20rem",
          fontWeight: 700,
          color: "rgba(45,90,69,0.15)",
          lineHeight: 1,
          letterSpacing: "-0.05em",
        }}
      >
        CG
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
        {/* Eyebrow */}
        <div style={fade(0)}>
          <span
            className="inline-block text-xs tracking-[0.25em] uppercase mb-8"
            style={{ color: "var(--color-sage)", fontFamily: "var(--font-sans)" }}
          >
            Discovery Call
          </span>
        </div>

        {/* Headline */}
        <div style={fade(120)}>
          <h2
            className="leading-[1.08] mb-6"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 5.5vw, 5rem)",
              color: "var(--color-cream)",
              fontWeight: 500,
            }}
          >
            Ready to talk{" "}
            <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>
              strategy?
            </em>
          </h2>
        </div>

        {/* Body */}
        <div style={fade(220)}>
          <p
            className="text-lg leading-relaxed max-w-xl mx-auto mb-10"
            style={{
              color: "rgba(245,240,232,0.65)",
              fontFamily: "var(--font-sans)",
              fontWeight: 300,
            }}
          >
            Book a 30-minute discovery call with Conner. No pitch.
            Just an honest conversation about where your team is and
            where it could be.
          </p>
        </div>

        {/* CTA button */}
        <div style={fade(320)}>
          <a
            href="https://calendly.com/connergalway"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-medium tracking-wide transition-all duration-200 hover:scale-105 animate-pulse-ring"
            style={{
              backgroundColor: "var(--color-gold)",
              color: "var(--color-forest-deep)",
              fontFamily: "var(--font-sans)",
              fontSize: "1rem",
            }}
          >
            Book Your Discovery Call
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
        </div>

        {/* Urgency note */}
        <div style={fade(420)}>
          <p
            className="text-xs mt-5"
            style={{ color: "rgba(245,240,232,0.3)", fontFamily: "var(--font-sans)" }}
          >
            Spots are limited. Typical lead time: 2–3 weeks.
          </p>
        </div>

        {/* Decorative rule */}
        <div
          className="flex items-center justify-center gap-4 mt-16"
          style={{ ...fade(500) }}
        >
          <div className="h-px w-16" style={{ backgroundColor: "rgba(139,175,149,0.3)" }} />
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: "rgba(139,175,149,0.4)", fontFamily: "var(--font-sans)" }}
          >
            or scroll up to learn more
          </span>
          <div className="h-px w-16" style={{ backgroundColor: "rgba(139,175,149,0.3)" }} />
        </div>
      </div>
    </section>
  );
}
