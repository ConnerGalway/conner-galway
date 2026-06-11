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

const testimonials = [
  {
    quote:
      "The Brief is one of the best out there for a quick digestible read that is rather objective. I share pieces with others in the company all the time.",
    name: "Jason McBurney",
    title: "VP Marketing",
    company: "Spud",
  },
  {
    quote:
      "Thanks for these great emails you send each week. I read them from top to bottom and get a lot out of them — every single week.",
    name: "Richard Dittmar",
    title: "President & CEO",
    company: "Trialto Wine Group",
  },
];

export default function Testimonials() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-28 overflow-hidden noise"
      style={{ backgroundColor: "var(--color-forest)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(45,90,69,0.6) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <p
          className="text-xs tracking-[0.2em] uppercase mb-14 text-center"
          style={{
            color: "var(--color-sage)",
            fontFamily: "var(--font-sans)",
            opacity: inView ? 1 : 0,
            transition: "opacity 0.6s ease",
          }}
        >
          What People Say
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col gap-6 p-8 rounded-2xl"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(139,175,149,0.15)",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.65s ease ${i * 150}ms, transform 0.65s ease ${i * 150}ms`,
              }}
            >
              {/* Gold rule */}
              <div
                className="w-10 h-0.5"
                style={{ backgroundColor: "var(--color-gold)" }}
              />

              {/* Quote */}
              <blockquote
                className="text-xl lg:text-2xl leading-relaxed"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontWeight: 300,
                  color: "var(--color-cream)",
                }}
              >
                "{t.quote}"
              </blockquote>

              {/* Attribution */}
              <div className="mt-auto">
                <p
                  className="text-sm font-medium"
                  style={{ color: "var(--color-cream)", fontFamily: "var(--font-sans)" }}
                >
                  {t.name}
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "var(--color-sage)", fontFamily: "var(--font-sans)" }}
                >
                  {t.title}, {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
