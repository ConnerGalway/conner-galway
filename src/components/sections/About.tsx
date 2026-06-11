import { useReveal } from "@/hooks/useReveal";

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p
        className="text-4xl font-semibold"
        style={{ fontFamily: "var(--font-display)", color: "var(--primary)", letterSpacing: "-0.035em" }}
      >
        {value}
      </p>
      <p
        className="text-sm mt-1"
        style={{ color: "var(--muted)", fontFamily: "var(--font-body)" }}
      >
        {label}
      </p>
    </div>
  );
}

export default function About() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="about" className="py-28 lg:py-36" style={{ backgroundColor: "var(--bg)" }}>
      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left: heading + stats */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div className="reveal flex flex-col gap-6">
              <div
                className="h-px w-10"
                style={{ backgroundColor: "var(--accent)" }}
                aria-hidden
              />
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.2rem, 3.5vw, 3.2rem)",
                  color: "var(--ink)",
                  fontWeight: 600,
                  letterSpacing: "-0.03em",
                }}
              >
                Strategy that works{" "}
                <em style={{ fontStyle: "italic", color: "var(--primary)" }}>
                  from the inside out.
                </em>
              </h2>
            </div>

            <div
              className="reveal grid grid-cols-3 gap-6 pt-6"
              style={{ borderTop: "1px solid var(--rule)", transitionDelay: "80ms" }}
            >
              <Stat value="15+" label="Years experience" />
              <Stat value="50+" label="Organizations" />
              <Stat value="3" label="Practice areas" />
            </div>
          </div>

          {/* Right: copy */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <p
              className="reveal text-base leading-relaxed"
              style={{ color: "var(--ink-2)", fontFamily: "var(--font-body)", maxWidth: "62ch", transitionDelay: "100ms" }}
            >
              Conner Galway is an AI coach, consultant, and speaker who works with leadership teams
              across industries: hospitality and tourism, technology, financial services.
              He's worked with Fairmont Hotels, Destination BC, Yukon Tourism, Spud, and dozens of
              organizations building their AI capability from scratch.
            </p>
            <p
              className="reveal text-base leading-relaxed"
              style={{ color: "var(--ink-2)", fontFamily: "var(--font-body)", maxWidth: "62ch", transitionDelay: "160ms" }}
            >
              His premise is simple: AI doesn't transform organizations. People do. Conner helps
              leaders build the mindsets, habits, and practical skills to work with AI in ways that
              create real, lasting advantage.
            </p>
            <p
              className="reveal text-base leading-relaxed"
              style={{ color: "var(--ink-2)", fontFamily: "var(--font-body)", maxWidth: "62ch", transitionDelay: "220ms" }}
            >
              Whether coaching an executive one-on-one, running a team workshop, or keynoting a
              conference, the goal is always the same: leave people more capable and more confident
              than when he arrived.
            </p>

            <div className="reveal pt-2" style={{ transitionDelay: "280ms" }}>
              <a
                href="#book"
                className="inline-flex items-center gap-2 text-sm font-semibold group"
                style={{ color: "var(--primary)", fontFamily: "var(--font-body)" }}
              >
                <span style={{ borderBottom: "1px solid var(--primary-pale)", paddingBottom: "2px" }}>
                  Start a conversation
                </span>
                <svg
                  width="14" height="14" viewBox="0 0 14 14" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden
                >
                  <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
