import { useState } from "react";
import ListingPreview from "./ListingPreview";
import MissingFieldsForm from "./MissingFieldsForm";
import DealScoreCard from "./DealScoreCard";

export default function UrlSubmitForm() {
  const [url, setUrl] = useState("");
  const [stage, setStage] = useState("url"); // url | manual | done
  const [listing, setListing] = useState(null);
  const [missing, setMissing] = useState([]);

  const submitUrl = async (e) => {
    e.preventDefault();
    const resp = await fetch("http://localhost:5000/api/submit-url", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    });
    const data = await resp.json();
    if (resp.ok) {
      setListing(data.listing);
      setMissing(JSON.parse(data.listing.missing_fields));
      setStage(data.next_step === "manual" ? "manual" : "done");
    } else {
      alert(data.error);
    }
  };

  const handleManualDone = (updatedListing) => {
    setListing(updatedListing);
    setStage("done");
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded">
      {stage === "url" && (
        <form onSubmit={submitUrl} className="space-y-4">
          <label className="block text-sm font-medium">Listing URL</label>
          <input
            className="w-full border p-2 rounded"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Fetch
          </button>
        </form>
      )}

      {listing && <ListingPreview listing={listing} />}

      {stage === "manual" && (
        <MissingFieldsForm
          listing={listing}
          missing={missing}
          onDone={handleManualDone}
        />
      )}

      {stage === "done" && <DealScoreCard listing={listing} />}
    </div>
  );
}
