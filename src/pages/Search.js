import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { places, states, categories } from "../data/data";
import PlaceCard from "../components/PlaceCard";
import "./Search.css";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [input, setInput] = useState(query);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    setInput(query);
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setSearchParams({ q: input.trim() });
      setActiveCategory("All");
    }
  };

  const results = places.filter((p) => {
    const q = query.toLowerCase();
    const matchesQuery =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.city.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.stateId.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q);

    const matchesCategory =
      activeCategory === "All" || p.category === activeCategory;

    return matchesQuery && matchesCategory;
  });

  const resultCats = ["All", ...new Set(results.map((p) => p.category))];

  return (
    <div className="search-page">
      <div className="search-header">
        <div className="container">
          <h1>Search Destinations</h1>
          <form className="search-form" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search by place, state, or category..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">🔍 Search</button>
          </form>
          <div className="quick-searches">
            <span>Quick:</span>
            {["Heritage", "Nature", "Adventure", "Beach", "Wildlife", "Religious"].map((cat) => (
              <button
                key={cat}
                className="quick-btn"
                onClick={() => setSearchParams({ q: cat })}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container search-body">
        {/* Results info */}
        <div className="results-info">
          <h2>
            {query ? (
              <>
                {results.length} result{results.length !== 1 ? "s" : ""} for{" "}
                <span>"{query}"</span>
              </>
            ) : (
              "All Destinations"
            )}
          </h2>
        </div>

        {/* Category filter */}
        {results.length > 0 && (
          <div className="filter-chips" style={{ marginBottom: 32 }}>
            {resultCats.map((cat) => (
              <button
                key={cat}
                className={`filter-chip ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
                <span className="chip-count">
                  {cat === "All"
                    ? results.length
                    : results.filter((p) => p.category === cat).length}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* Results grid */}
        {results.length > 0 ? (
          <div className="grid-3">
            {results
              .filter((p) => activeCategory === "All" || p.category === activeCategory)
              .map((place) => (
                <PlaceCard key={place.id} place={place} />
              ))}
          </div>
        ) : (
          <div className="no-results-block">
            <div className="no-results-icon">🔍</div>
            <h3>No destinations found</h3>
            <p>Try searching for a state name, city, or category like "Heritage" or "Beach"</p>
            <Link to="/states" className="btn btn-primary" style={{ marginTop: 16 }}>
              Browse All States
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
