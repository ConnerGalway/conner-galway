import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useReveal } from "@/hooks/useReveal";

const services = [
  {
    title: "AI Coaching",
    tagline: "One-on-one. Four weeks to six months.",
    description:
      "Personalized coaching for executives and senior leaders who want to move from AI curiosity to genuine competency. Sessions are practical and tailored: no generic frameworks, no vendor pitch. You work through your actual decisions, workflows, and blind spots.",
    format: "4–12 sessions. Individual or small-group formats.",
  },
  {
    title: "Team Consulting",
    tagline: "Embedded. Cross-functional. Any industry.",
    description:
      "An embedded engagement that diagnoses where AI creates real leverage for your specific organization, then builds the workflows, habits, and training programs to realize it. Conner works with your team, not at them.",
    format: "Custom scope. Project-based or retainer. Sector-agnostic.",
  },
  {
    title: "Keynotes & Workshops",
    tagline: "60 minutes to two days. In-person or virtual.",
    description:
      "From a single conference keynote to a multi-day team intensive, these sessions move audiences from spectators to participants in the AI transition. Each is built for the specific organization and audience, not adapted from a generic deck.",
    format: "In-person and virtual. Tailored to your conference or team.",
  },
];

function Row({ s, i, inViewRef }: { s: typeof services[0]; i: number; inViewRef: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border-b reveal`}
      style={{
        borderColor: "var(--rule)",
        transitionDelay: `${i * 80}ms`,
      }}
    >
      <button
        className="w-full text-left py-8 lg:py-10 flex items-center justify-between gap-6 group cursor-pointer"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-10 flex-1 min-w-0">
          <h3
            className="shrink-0 font-semibold"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.4rem, 2.2vw, 1.9rem)",
              color: "var(--ink)",
              letterSpacing: "-0.025em",
            }}
          >
            {s.title}
          </h3>
          <p
            className="text-sm"
            style={{ color: "var(--muted)", fontFamily: "var(--font-body)" }}
          >
            {s.tagline}
          </p>
        </div>

        <div
          className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200"
          style={{
            backgroundColor: open ? "var(--primary)" : "var(--surface-2)",
            color: open ? "white" : "var(--ink-2)",
          }}
          aria-hidden
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            {open
              ? <path d="M2 7h10" />
              : <><path d="M7 2v10" /><path d="M2 7h10" /></>
            }
          </svg>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div className="pb-8 lg:pb-10 flex flex-col lg:flex-row gap-6 lg:gap-16">
              <p
                className="flex-1 text-base leading-relaxed"
                style={{ color: "var(--ink-2)", fontFamily: "var(--font-body)", maxWidth: "58ch" }}
              >
                {s.description}
              </p>
              <div className="shrink-0 lg:w-52 flex flex-col gap-3">
                <p
                  className="text-xs font-semibold tracking-widest uppercase"
                  style={{ color: "var(--muted)", fontFamily: "var(--font-body)" }}
                >
                  Format
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--ink-2)", fontFamily: "var(--font-body)" }}
                >
                  {s.format}
                </p>
                <a
                  href="#book"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold mt-2 group/l"
                  style={{ color: "var(--primary)", fontFamily: "var(--font-body)" }}
                >
                  <span style={{ borderBottom: "1px solid var(--primary-pale)", paddingBottom: "2px" }}>
                    Inquire
                  </span>
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    className="transition-transform duration-200 group-hover/l:translate-x-0.5" aria-hidden>
                    <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Services() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="services" className="py-28 lg:py-36" style={{ backgroundColor: "var(--surface)" }}>
      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="reveal mb-4 flex flex-col gap-3">
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 3vw, 2.8rem)",
              color: "var(--ink)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
            }}
          >
            Three ways to work together.
          </h2>
          <p
            className="text-base"
            style={{ color: "var(--muted)", fontFamily: "var(--font-body)", maxWidth: "44ch" }}
          >
            Pick the one that fits. Not sure? The discovery call will point you in the right direction.
          </p>
        </div>

        <div className="mt-10 border-t" style={{ borderColor: "var(--rule)" }}>
          {services.map((s, i) => (
            <Row key={s.title} s={s} i={i} inViewRef={true} />
          ))}
        </div>
      </div>
    </section>
  );
}
