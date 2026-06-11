export default function Hero() {
  return (
    <section
      className="relative min-h-svh flex flex-col overflow-hidden"
      style={{ backgroundColor: "var(--primary-deep)" }}
    >
      {/* Grain texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E\")",
          backgroundSize: "300px 300px",
          mixBlendMode: "overlay",
        }}
      />

      <div className="relative flex-1 max-w-7xl w-full mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px] items-center">
        {/* Content */}
        <div className="py-32 lg:py-0 lg:pr-16 flex flex-col gap-7">
          {/* Label */}
          <div className="flex items-center gap-3">
            <span
              className="inline-block w-7 h-px shrink-0"
              style={{ backgroundColor: "var(--accent)" }}
              aria-hidden
            />
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "var(--on-dark-muted)", fontFamily: "var(--font-body)" }}
            >
              AI Coach · Consultant · Speaker
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.6rem, 5.2vw, 4.8rem)",
              fontWeight: 600,
              color: "var(--on-dark)",
              letterSpacing: "-0.03em",
              lineHeight: 1.06,
            }}
          >
            The teams that{" "}
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
              win with AI
            </em>{" "}
            are built, not bought.
          </h1>

          {/* Sub */}
          <p
            className="text-lg leading-relaxed"
            style={{
              color: "var(--on-dark-2)",
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              maxWidth: "50ch",
            }}
          >
            Conner Galway helps organizations build the people, habits, and
            practical skills that make AI work in practice, not just on paper.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href="#book"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
              style={{
                backgroundColor: "var(--accent)",
                color: "white",
                fontFamily: "var(--font-body)",
              }}
            >
              Book a Discovery Call
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" />
              </svg>
            </a>
            <a
              href="#the-brief"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-200 hover:bg-white/10"
              style={{
                color: "var(--on-dark-2)",
                border: "1px solid oklch(1 0 0 / 0.18)",
                fontFamily: "var(--font-body)",
              }}
            >
              Read The Brief
            </a>
          </div>

          {/* Proof line */}
          <p
            className="text-xs font-medium"
            style={{
              color: "var(--on-dark-muted)",
              fontFamily: "var(--font-body)",
              maxWidth: "44ch",
            }}
          >
            Trusted across North America: Fairmont, Destination BC, Spud, Trialto, and more.
          </p>
        </div>

        {/* Portrait */}
        <div className="hidden lg:block self-end pt-16">
          <div
            className="relative overflow-hidden rounded-t-2xl"
            style={{
              height: "min(72vh, 620px)",
              boxShadow: "0 -20px 60px oklch(0.45 0.18 270 / 0.3)",
            }}
          >
            <img
              src="/conner.jpg"
              alt="Conner Galway"
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
            {/* Bottom fade into section bg */}
            <div
              aria-hidden
              className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
              style={{
                background: "linear-gradient(to top, var(--primary-deep), transparent)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
