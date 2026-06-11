import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

export default function TheBrief() {
  const ref = useReveal<HTMLElement>();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setDone(true);
  };

  return (
    <section
      id="the-brief"
      className="py-28 lg:py-36 overflow-hidden"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Masthead */}
        <div
          className="reveal mb-14 pb-8 border-b flex items-end justify-between gap-8 flex-wrap"
          style={{ borderColor: "var(--rule)" }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3.5rem, 8vw, 7.5rem)",
              fontWeight: 700,
              color: "var(--ink)",
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
            }}
          >
            The Brief
          </h2>

          <div className="flex flex-col items-start sm:items-end gap-2 pb-1 shrink-0">
            <p
              className="text-xs font-medium tracking-widest uppercase"
              style={{ color: "var(--muted)", fontFamily: "var(--font-body)" }}
            >
              Weekly · Free
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {["CSuite Awards Winner", "Marketing News Canada Winner"].map((a) => (
                <span
                  key={a}
                  className="text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap"
                  style={{
                    backgroundColor: "var(--primary-pale)",
                    color: "var(--primary)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            <p
              className="reveal"
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "clamp(1.3rem, 2.2vw, 1.75rem)",
                color: "var(--ink)",
                letterSpacing: "-0.02em",
                lineHeight: 1.35,
                maxWidth: "none",
              }}
            >
              Start your week with the AI and marketing news that actually matters.
              In about ten minutes.
            </p>

            <p
              className="reveal text-base leading-relaxed"
              style={{ color: "var(--ink-2)", fontFamily: "var(--font-body)", maxWidth: "55ch", transitionDelay: "80ms" }}
            >
              Every week, The Brief delivers the AI and digital marketing developments
              worth knowing, curated and contextualized by Conner. No hype. No noise.
              Just the signal, with enough context to act on it.
            </p>

            <p
              className="reveal text-base leading-relaxed"
              style={{ color: "var(--ink-2)", fontFamily: "var(--font-body)", maxWidth: "55ch", transitionDelay: "140ms" }}
            >
              Trusted by executives, marketers, and team leads across North America who
              want to stay ahead without spending hours on it.
            </p>
          </div>

          {/* Right: form */}
          <div
            className="reveal lg:col-span-5 lg:col-start-8"
            style={{ transitionDelay: "100ms" }}
          >
            <div
              className="p-8 rounded-2xl"
              style={{ backgroundColor: "var(--surface)", border: "1px solid var(--rule)" }}
            >
              {done ? (
                <div className="flex flex-col items-center gap-4 py-6 text-center">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "var(--primary-pale)" }}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                      stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <polyline points="4 10 8 14 16 6" />
                    </svg>
                  </div>
                  <p
                    className="text-lg font-semibold"
                    style={{ fontFamily: "var(--font-display)", color: "var(--ink)", letterSpacing: "-0.02em" }}
                  >
                    You're in.
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "var(--muted)", fontFamily: "var(--font-body)" }}
                  >
                    First issue arrives Monday morning.
                  </p>
                </div>
              ) : (
                <>
                  <p
                    className="text-lg font-semibold mb-1"
                    style={{ fontFamily: "var(--font-display)", color: "var(--ink)", letterSpacing: "-0.02em" }}
                  >
                    Subscribe to The Brief
                  </p>
                  <p
                    className="text-sm mb-6"
                    style={{ color: "var(--muted)", fontFamily: "var(--font-body)" }}
                  >
                    Free. Weekly. Unsubscribe any time.
                  </p>

                  <form onSubmit={submit} className="flex flex-col gap-3" noValidate>
                    <div className="flex flex-col gap-1.5">
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); setError(""); }}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                        style={{
                          backgroundColor: "var(--bg)",
                          border: `1.5px solid ${error ? "oklch(0.55 0.2 25)" : "var(--rule)"}`,
                          color: "var(--ink)",
                          fontFamily: "var(--font-body)",
                          transition: "border-color 0.15s",
                        }}
                        onFocus={(e) => { if (!error) e.currentTarget.style.borderColor = "var(--primary)"; }}
                        onBlur={(e) => { if (!error) e.currentTarget.style.borderColor = "var(--rule)"; }}
                        aria-describedby={error ? "brief-email-error" : undefined}
                      />
                      {error && (
                        <p id="brief-email-error" className="text-xs" style={{ color: "oklch(0.55 0.2 25)", fontFamily: "var(--font-body)" }}>
                          {error}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl text-sm font-semibold transition-opacity duration-200 hover:opacity-90"
                      style={{ backgroundColor: "var(--primary)", color: "white", fontFamily: "var(--font-body)" }}
                    >
                      Subscribe
                    </button>

                    <p className="text-xs text-center" style={{ color: "var(--muted)", fontFamily: "var(--font-body)" }}>
                      No spam. Unsubscribe any time.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
