import { useReveal } from "@/hooks/useReveal";

const testimonials = [
  {
    quote:
      "The Brief is one of the best out there for a quick digestible read that is rather objective. I share pieces with others in the company all the time.",
    name: "Jason McBurney",
    title: "VP Marketing, Spud",
  },
  {
    quote:
      "Thanks for these great emails you send each week. I read them from top to bottom and get a lot out of them, every single week.",
    name: "Richard Dittmar",
    title: "President & CEO, Trialto Wine Group",
  },
];

export default function Testimonials() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="py-28 lg:py-36 overflow-hidden"
      style={{ backgroundColor: "var(--primary-deep)" }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Rule + label */}
        <div className="reveal flex items-center gap-4 mb-14">
          <div className="h-px w-10" style={{ backgroundColor: "var(--accent)" }} aria-hidden />
          <p
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "var(--on-dark-muted)", fontFamily: "var(--font-body)" }}
          >
            What people say
          </p>
        </div>

        {/* Quotes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="reveal flex flex-col gap-6"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <blockquote
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontWeight: 300,
                  fontSize: "clamp(1.35rem, 2.4vw, 1.9rem)",
                  color: "var(--on-dark)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.35,
                  maxWidth: "none",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="flex items-center gap-3 mt-auto">
                <div className="w-7 h-px" style={{ backgroundColor: "var(--accent)" }} aria-hidden />
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "var(--on-dark)", fontFamily: "var(--font-body)" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: "var(--on-dark-muted)", fontFamily: "var(--font-body)" }}
                  >
                    {t.title}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
