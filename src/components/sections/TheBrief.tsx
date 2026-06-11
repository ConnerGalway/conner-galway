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

export default function TheBrief() {
  const { ref, inView } = useInView();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <section
      id="the-brief"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-28"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Masthead */}
        <div
          className="mb-12"
          style={{
            opacity: inView ? 1 : 0,
            transition: "opacity 0.6s ease",
          }}
        >
          <div
            className="flex items-center gap-4 mb-3"
            style={{ borderTop: "2px solid var(--color-ink)", paddingTop: "1rem" }}
          >
            <div className="flex-1">
              <div
                className="h-px"
                style={{ backgroundColor: "var(--color-ink)", opacity: 0.15 }}
              />
            </div>
            <span
              className="text-xs tracking-[0.25em] uppercase"
              style={{ color: "var(--color-dust-light)", fontFamily: "var(--font-sans)" }}
            >
              Est. Weekly · Free
            </span>
            <div className="flex-1">
              <div
                className="h-px"
                style={{ backgroundColor: "var(--color-ink)", opacity: 0.15 }}
              />
            </div>
          </div>

          <h2
            className="text-center leading-none tracking-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3.5rem, 8vw, 7rem)",
              color: "var(--color-ink)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            The Brief
          </h2>

          <div
            className="flex items-center justify-center gap-6 mt-3"
            style={{ borderBottom: "2px solid var(--color-ink)", paddingBottom: "1rem" }}
          >
            {[
              { label: "CSuite Awards", sublabel: "Winner" },
              { label: "·", sublabel: "" },
              { label: "Marketing News Canada", sublabel: "Winner" },
            ].map((item, i) =>
              item.label === "·" ? (
                <span key={i} style={{ color: "var(--color-gold)", fontSize: "1.2rem" }}>✦</span>
              ) : (
                <div key={i} className="text-center">
                  <p
                    className="text-xs font-medium tracking-wider uppercase"
                    style={{ color: "var(--color-forest)", fontFamily: "var(--font-sans)" }}
                  >
                    {item.sublabel}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "var(--color-dust)", fontFamily: "var(--font-sans)" }}
                  >
                    {item.label}
                  </p>
                </div>
              )
            )}
          </div>
        </div>

        {/* Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: description */}
          <div
            className="lg:col-span-6 flex flex-col gap-6"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.65s ease 150ms, transform 0.65s ease 150ms",
            }}
          >
            <p
              className="text-2xl lg:text-3xl leading-snug"
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontWeight: 400,
                color: "var(--color-ink)",
              }}
            >
              Start your week smarter.
              <br />In 10 minutes.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--color-dust)", fontFamily: "var(--font-sans)" }}
            >
              Every week, The Brief delivers the AI and digital marketing news,
              trends, and tactics that actually matter — curated, contextualized,
              and made actionable by Conner. No hype. No noise.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--color-dust)", fontFamily: "var(--font-sans)" }}
            >
              Trusted by executives, marketers, and team leads across North America
              who want to stay ahead without spending hours doing it.
            </p>

            {/* Award pills */}
            <div className="flex flex-wrap gap-3 mt-2">
              {["🏆 CSuite Awards Winner", "🏆 Marketing News Canada Winner"].map((award) => (
                <span
                  key={award}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium tracking-wide"
                  style={{
                    backgroundColor: "rgba(201,168,76,0.12)",
                    color: "var(--color-forest)",
                    border: "1px solid rgba(201,168,76,0.3)",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  {award}
                </span>
              ))}
            </div>
          </div>

          {/* Right: sign-up */}
          <div
            className="lg:col-span-5 lg:col-start-8"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.65s ease 280ms, transform 0.65s ease 280ms",
            }}
          >
            <div
              className="rounded-2xl p-8"
              style={{
                backgroundColor: "var(--color-parchment)",
                border: "1px solid rgba(139,175,149,0.2)",
              }}
            >
              {submitted ? (
                <div className="flex flex-col items-center gap-4 py-6 text-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(201,168,76,0.15)" }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p
                    className="text-lg font-medium"
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-ink)" }}
                  >
                    You're in.
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "var(--color-dust)", fontFamily: "var(--font-sans)" }}
                  >
                    Check your inbox — your first Brief arrives next Monday.
                  </p>
                </div>
              ) : (
                <>
                  <p
                    className="text-lg font-medium mb-1"
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-ink)" }}
                  >
                    Join the Brief
                  </p>
                  <p
                    className="text-sm mb-6"
                    style={{ color: "var(--color-dust)", fontFamily: "var(--font-sans)" }}
                  >
                    Free. Weekly. Unsubscribe any time.
                  </p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1.5">
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); setError(""); }}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                        style={{
                          backgroundColor: "var(--color-white-warm)",
                          border: error ? "1.5px solid #e05c5c" : "1.5px solid rgba(139,175,149,0.3)",
                          color: "var(--color-ink)",
                          fontFamily: "var(--font-sans)",
                        }}
                        onFocus={(e) => {
                          if (!error) e.target.style.border = "1.5px solid var(--color-forest)";
                        }}
                        onBlur={(e) => {
                          if (!error) e.target.style.border = "1.5px solid rgba(139,175,149,0.3)";
                        }}
                      />
                      {error && (
                        <p className="text-xs" style={{ color: "#e05c5c", fontFamily: "var(--font-sans)" }}>
                          {error}
                        </p>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl text-sm font-medium tracking-wide transition-all duration-200 hover:scale-[1.02]"
                      style={{
                        backgroundColor: "var(--color-forest)",
                        color: "var(--color-cream)",
                        fontFamily: "var(--font-sans)",
                      }}
                    >
                      Subscribe to The Brief
                    </button>
                  </form>

                  <p
                    className="text-xs mt-3 text-center"
                    style={{ color: "var(--color-dust-light)", fontFamily: "var(--font-sans)" }}
                  >
                    No spam, ever. Just smart insights, every Monday.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
