import { useEffect, useState } from "react";

function ReferenceTable({ make, model, year }) {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      setLoading(true);
      setError("");
      try {
        const qs = new URLSearchParams({ limit: 20, make, model, year });
        const res = await fetch(
          `http://localhost:5000/api/reference-listings?${qs}`
        );
        if (!res.ok) throw new Error("Server error");
        setRows(await res.json());
      } catch (e) {
        setError("Could not load listings");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [make, model, year]);

  if (loading) return <p className="mt-6 text-gray-500">Loading listings…</p>;
  if (error) return <p className="mt-6 text-red-600">{error}</p>;
  if (!rows.length)
    return <p className="mt-6 text-gray-500">No listings found.</p>;

  return (
    <table className="mt-6 w-full text-sm border">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 border">Year</th>
          <th className="p-2 border">Make</th>
          <th className="p-2 border">Model</th>
          <th className="p-2 border">Price (CAD)</th>
          <th className="p-2 border">Odometer (km)</th>
          <th className="p-2 border">Date</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.id} className="even:bg-gray-50">
            <td className="p-2 border">{r.year}</td>
            <td className="p-2 border capitalize">{r.manufacturer}</td>
            <td className="p-2 border capitalize">{r.model}</td>
            <td className="p-2 border text-right">
              ${r.price.toLocaleString()}
            </td>
            <td className="p-2 border text-right">
              {r.odometer?.toLocaleString()}
            </td>
            <td className="p-2 border">{r.created_at}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ReferenceTable;
