import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StatsPage from "./pages/StatsPage";
import ScraperPage from "./pages/ScraperPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/scraper" element={<ScraperPage />} />
      </Routes>
    </BrowserRouter>
  );
}
