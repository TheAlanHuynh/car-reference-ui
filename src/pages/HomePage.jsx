import { Link } from "react-router-dom";

export default function HomePage() {
  const cards = [
    {
      to: "/stats",
      title: "Vehicle Stats",
      desc: "Average price, mileage, listings…",
    },
    {
      to: "/scraper",
      title: "URL Deal Checker",
      desc: "Paste Autotrader / Kijiji ad to rate the deal",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-12 grid gap-6 sm:grid-cols-2">
      {cards.map((c) => (
        <Link
          key={c.to}
          to={c.to}
          className="p-6 rounded-xl shadow hover:shadow-lg bg-white"
        >
          <h2 className="text-xl font-semibold mb-2">{c.title}</h2>
          <p className="text-sm text-gray-600">{c.desc}</p>
        </Link>
      ))}
    </div>
  );
}
