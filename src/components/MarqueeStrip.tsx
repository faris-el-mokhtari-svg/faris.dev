const items = [
  "Deploy — Web Development",
  "4 Tage bis Launch",
  "Gastronomie & KMU",
  "GetPacked Partner",
  "DACH-Region",
  "Systeme die laufen",
  "Webdesign & Entwicklung",
  "Reservierungssysteme",
  "Admin-Dashboards",
  "E-Commerce",
];

// Double for seamless loop — 10 items × ~200px = 2000px per set > any viewport
const repeated = [...items, ...items];

export default function MarqueeStrip() {
  return (
    <div className="bg-[#FF5500] overflow-hidden border-y border-black/[0.07] py-[13px] select-none">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "marquee 28s linear infinite" }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className="text-white text-[0.6rem] font-semibold tracking-[0.18em] uppercase flex-shrink-0 px-9"
          >
            {item}
            <span className="opacity-25 ml-9">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
