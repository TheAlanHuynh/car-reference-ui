export default function ListingPreview({ listing }) {
  const { make, model, year, price, mileage_km } = listing;
  return (
    <div className="mt-6 p-4 bg-gray-100 rounded">
      <h2 className="font-semibold">
        {year} {make?.toUpperCase()} {model?.toUpperCase()}
      </h2>
      <p>Price: {price ? `$${(price / 100).toLocaleString()}` : "—"}</p>
      <p>Mileage: {mileage_km ? `${mileage_km.toLocaleString()} km` : "—"}</p>
    </div>
  );
}
