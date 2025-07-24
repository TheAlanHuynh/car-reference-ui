import { useState } from "react";

export default function MissingFieldsForm({ listing, missing, onDone }) {
  const [form, setForm] = useState(
    Object.fromEntries(missing.map((f) => [f, ""]))
  );

  const submit = async (e) => {
    e.preventDefault();
    const resp = await fetch("http://localhost:5000/api/complete-listing", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: listing.id, ...form }),
    });
    const data = await resp.json();
    if (resp.ok) onDone(data.listing);
    else alert(data.error);
  };

  return (
    <form onSubmit={submit} className="mt-6 space-y-4">
      {missing.map((field) => (
        <div key={field}>
          <label className="block text-sm capitalize">
            {field.replace("_", " ")}
          </label>
          <input
            className="w-full border p-2 rounded"
            value={form[field]}
            onChange={(e) => setForm({ ...form, [field]: e.target.value })}
            required
          />
        </div>
      ))}
      <button className="bg-green-600 text-white px-4 py-2 rounded">
        Save & Score
      </button>
    </form>
  );
}
