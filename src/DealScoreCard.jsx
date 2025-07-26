export default function DealScoreCard({ listing }) {
  const color =
    {
      Great: "bg-green-500",
      Good: "bg-emerald-400",
      Fair: "bg-yellow-400",
      Bad: "bg-red-500",
    }[listing.deal_score] || "bg-gray-400";

  return (
    <div className={`mt-6 p-4 text-white rounded ${color}`}>
      <h2 className="text-xl font-semibold">
        Deal Score: {listing.deal_score ?? "N/A - Not Enough Reference Data"}
      </h2>
      <p>
        Final Price: ${(listing.price / 100).toLocaleString()} &nbsp;|&nbsp;
        Mileage: {listing.mileage_km?.toLocaleString()} km
      </p>
    </div>
  );
}
