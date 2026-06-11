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

export default function About() {
  const { ref, inView } = useInView();

  const fade = (delay: number) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
  });

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-28"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left: visual block */}
          <div className="lg:col-span-5" style={fade(0)}>
            <div className="relative">
              {/* Main card */}
              <div
                className="rounded-2xl p-8 lg:p-10"
                style={{ backgroundColor: "var(--color-forest)", color: "var(--color-cream)" }}
              >
                {/* Large italic quote */}
                <p
                  className="text-2xl lg:text-3xl leading-tight mb-8"
                  style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400 }}
                >
                  "The question isn't whether your organization will use AI. It's whether your team will use it{" "}
                  <span style={{ color: "var(--color-gold)" }}>well.</span>"
                </p>
                {/* Attribution */}
                <div
                  className="flex items-center gap-3 pt-6"
                  style={{ borderTop: "1px solid rgba(139,175,149,0.25)" }}
                >
                  <div
                    className="w-8 h-px"
                    style={{ backgroundColor: "var(--color-gold)" }}
                  />
                  <p
                    className="text-sm tracking-wide"
                    style={{ color: "var(--color-sage-light)", fontFamily: "var(--font-sans)" }}
                  >
                    Conner Galway
                  </p>
                </div>
              </div>

              {/* Credential pills */}
              <div
                className="absolute -bottom-5 -right-5 rounded-xl px-5 py-4 shadow-xl"
                style={{ backgroundColor: "var(--color-parchment)", border: "1px solid rgba(139,175,149,0.2)" }}
              >
                <div className="flex flex-col gap-1.5">
                  {["15+ Years", "50+ Organizations", "3 Disciplines"].map((stat) => (
                    <p
                      key={stat}
                      className="text-xs font-medium tracking-widest uppercase"
                      style={{ color: "var(--color-forest)", fontFamily: "var(--font-sans)" }}
                    >
                      {stat}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: copy */}
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-7">
            <div style={fade(100)}>
              <p
                className="text-xs tracking-[0.2em] uppercase mb-4"
                style={{ color: "var(--color-sage)", fontFamily: "var(--font-sans)" }}
              >
                About
              </p>
              <h2
                className="leading-tight mb-0"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                  color: "var(--color-ink)",
                  fontWeight: 500,
                }}
              >
                Strategy that builds{" "}
                <em style={{ fontStyle: "italic", color: "var(--color-forest)" }}>
                  from the inside out.
                </em>
              </h2>
            </div>

            <div style={fade(200)}>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--color-dust)", fontFamily: "var(--font-sans)" }}
              >
                Conner Galway is an AI coach, consultant, and speaker who works with
                leadership teams across industries — from hospitality and tourism to
                technology, financial services, and beyond.
              </p>
            </div>
            <div style={fade(280)}>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--color-dust)", fontFamily: "var(--font-sans)" }}
              >
                His approach is simple: AI doesn't transform organizations —
                <strong style={{ color: "var(--color-ink)" }}> people do</strong>. Conner
                helps leaders and their teams build the mindsets, habits, and practical
                skills to work with AI in ways that create lasting competitive advantage.
              </p>
            </div>
            <div style={fade(350)}>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--color-dust)", fontFamily: "var(--font-sans)" }}
              >
                Whether he's coaching an executive one-on-one, facilitating a workshop
                for a 200-person team, or keynoting a conference, the outcome is the
                same: teams that are measurably more effective, more confident, and
                more capable — regardless of industry.
              </p>
            </div>

            <div style={fade(430)}>
              <a
                href="#book"
                className="inline-flex items-center gap-2 text-sm font-medium group"
                style={{ color: "var(--color-forest)", fontFamily: "var(--font-sans)" }}
              >
                <span className="border-b pb-0.5 transition-all group-hover:border-forest" style={{ borderColor: "var(--color-forest)" }}>
                  Let's talk
                </span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
