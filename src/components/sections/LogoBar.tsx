const clients = [
  "Destination BC",
  "Fairmont Hotels & Resorts",
  "Yukon Tourism",
  "Revelstoke Mountain Resort",
  "Ontario Tourism",
  "Spud",
  "Trialto Wine Group",
  "Junction",
];

export default function LogoBar() {
  const doubled = [...clients, ...clients];

  return (
    <div
      className="overflow-hidden py-5 border-b"
      style={{
        backgroundColor: "var(--surface)",
        borderColor: "var(--rule)",
      }}
    >
      <div className="flex marquee-track whitespace-nowrap select-none">
        {doubled.map((name, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-5 px-6"
          >
            <span
              className="text-xs font-medium tracking-[0.16em] uppercase"
              style={{ color: "var(--muted)", fontFamily: "var(--font-body)" }}
            >
              {name}
            </span>
            <span
              className="text-[8px]"
              style={{ color: "var(--rule)" }}
              aria-hidden
            >
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
