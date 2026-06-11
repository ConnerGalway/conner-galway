import { useReveal } from "@/hooks/useReveal";

export default function BookCTA() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="book"
      ref={ref}
      className="py-28 lg:py-36 overflow-hidden"
      style={{ backgroundColor: "var(--primary)" }}
    >
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center flex flex-col items-center gap-8">
        <div className="reveal flex flex-col gap-5 items-center">
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              fontWeight: 600,
              color: "var(--on-dark)",
              letterSpacing: "-0.035em",
              lineHeight: 1.05,
            }}
          >
            Ready to talk{" "}
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
              strategy?
            </em>
          </h2>

          <p
            className="text-lg leading-relaxed"
            style={{
              color: "var(--on-dark-2)",
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              maxWidth: "42ch",
            }}
          >
            Book a 30-minute discovery call. No pitch. Just an honest
            conversation about where your team is and what's possible.
          </p>
        </div>

        <div className="reveal flex flex-col items-center gap-4" style={{ transitionDelay: "100ms" }}>
          <a
            href="https://calendly.com/connergalway"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full text-base font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
            style={{ backgroundColor: "var(--accent)", color: "white", fontFamily: "var(--font-body)" }}
          >
            Book Your Discovery Call
            <svg width="15" height="15" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" />
            </svg>
          </a>

          <p
            className="text-xs"
            style={{ color: "var(--on-dark-muted)", fontFamily: "var(--font-body)" }}
          >
            Typically 2&ndash;3 week lead time. Limited spots each month.
          </p>
        </div>
      </div>
    </section>
  );
}
