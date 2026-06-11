import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.15) {
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

const services = [
  {
    num: "01",
    title: "AI Coaching",
    description:
      "One-on-one and small-group coaching for executives and team leads who want to move from AI curiosity to AI competency. Practical, personalized, and results-oriented.",
    detail: "Engagements from 4 weeks to 6 months",
  },
  {
    num: "02",
    title: "Team Consulting",
    description:
      "Embedded consulting that helps organizations diagnose where AI can create the most leverage, then build the workflows, training, and culture to realize it.",
    detail: "Custom scope · any industry",
  },
  {
    num: "03",
    title: "Keynotes & Workshops",
    description:
      "High-impact sessions that move audiences from passive observers to active participants in the AI transition. From 60-minute keynotes to multi-day workshops.",
    detail: "Available in-person & virtual",
  },
];

export default function Services() {
  const { ref, inView } = useInView();

  return (
    <section
      id="work"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-28"
      style={{ backgroundColor: "var(--color-parchment)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className="max-w-xl mb-16"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <p
            className="text-xs tracking-[0.2em] uppercase mb-4"
            style={{ color: "var(--color-sage)", fontFamily: "var(--font-sans)" }}
          >
            How I Work
          </p>
          <h2
            className="leading-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              color: "var(--color-ink)",
              fontWeight: 500,
            }}
          >
            Three ways to work together.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.num}
              className="group flex flex-col gap-5 p-8 rounded-2xl transition-all duration-300 cursor-default"
              style={{
                backgroundColor: "var(--color-white-warm)",
                border: "1px solid rgba(139,175,149,0.18)",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(28px)",
                transition: `opacity 0.6s ease ${i * 120}ms, transform 0.6s ease ${i * 120}ms`,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(-3px)";
                el.style.boxShadow = "0 12px 40px rgba(26,58,47,0.12)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Number */}
              <p
                className="text-5xl font-medium leading-none select-none"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-sage-light)",
                  transition: "color 0.3s",
                }}
              >
                {s.num}
              </p>

              {/* Divider */}
              <div
                className="h-px w-full"
                style={{ backgroundColor: "var(--color-parchment)" }}
              />

              {/* Title */}
              <h3
                className="text-xl font-medium"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-ink)" }}
              >
                {s.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed flex-1"
                style={{ color: "var(--color-dust)", fontFamily: "var(--font-sans)" }}
              >
                {s.description}
              </p>

              {/* Detail tag */}
              <p
                className="text-xs tracking-wider uppercase"
                style={{ color: "var(--color-sage)", fontFamily: "var(--font-sans)" }}
              >
                {s.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div
          className="mt-12 text-center"
          style={{
            opacity: inView ? 1 : 0,
            transition: "opacity 0.6s ease 500ms",
          }}
        >
          <a
            href="#book"
            className="inline-flex items-center gap-2 text-sm font-medium group"
            style={{ color: "var(--color-forest)", fontFamily: "var(--font-sans)" }}
          >
            <span
              className="pb-0.5"
              style={{ borderBottom: "1px solid var(--color-forest)" }}
            >
              Not sure which fits? Let's figure it out together
            </span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
