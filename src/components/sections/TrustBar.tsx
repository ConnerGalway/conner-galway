const clients = [
  "Destination BC",
  "Fairmont Hotels",
  "Yukon Tourism",
  "Revelstoke",
  "Ontario Tourism",
  "Spud",
  "Trialto Wine Group",
  "Junction",
];

export default function TrustBar() {
  const doubled = [...clients, ...clients];

  return (
    <div
      className="overflow-hidden py-4"
      style={{ backgroundColor: "var(--color-forest-deep)", borderBottom: "1px solid rgba(139,175,149,0.12)" }}
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((client, i) => (
          <span key={i} className="inline-flex items-center gap-5 mx-5">
            <span
              className="text-xs font-medium tracking-[0.18em] uppercase"
              style={{ color: "rgba(245,240,232,0.45)", fontFamily: "var(--font-sans)" }}
            >
              {client}
            </span>
            <span
              className="text-xs"
              style={{ color: "rgba(201,168,76,0.4)" }}
            >
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
