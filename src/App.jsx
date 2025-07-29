import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

import HomePage from "./pages/HomePage";
import StatsPage from "./pages/StatsPage";
import ScraperPage from "./pages/ScraperPage";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />

      {/* push content below fixed navbar */}
      <div className="pt-20 px-4">
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* car-reference nested under /car-reference/* */}
          <Route path="/stats" element={<StatsPage />} />
          <Route path="/scraper" element={<ScraperPage />} />

          {/* optional: 404 fallback */}
          <Route path="*" element={<p>Page not found</p>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
