import React, { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { getStateById, getPlacesByState, categories } from "../data/data";
import PlaceCard from "../components/PlaceCard";
import "./StatePage.css";

export default function StatePage() {
  const { stateId } = useParams();
  const [activeCategory, setActiveCategory] = useState("All");

  const state = getStateById(stateId);
  if (!state) return <Navigate to="/states" />;

  const allPlaces = getPlacesByState(stateId);
  const filtered =
    activeCategory === "All"
      ? allPlaces
      : allPlaces.filter((p) => p.category === activeCategory);

  const stateCats = ["All", ...new Set(allPlaces.map((p) => p.category))];

  return (
    <div className="state-page">
      {/* Hero */}
      <div className="state-hero">
        <div
          className="state-hero-bg"
          style={{ backgroundImage: `url(${state.coverImage})` }}
        ></div>
        <div className="state-hero-overlay"></div>
        <div className="state-hero-content container">
          <div className="breadcrumb" style={{ color: "rgba(255,255,255,0.6)" }}>
            <Link to="/" style={{ color: "rgba(255,255,255,0.6)" }}>Home</Link>
            <span className="sep">›</span>
            <Link to="/states" style={{ color: "rgba(255,255,255,0.6)" }}>States</Link>
            <span className="sep">›</span>
            <span style={{ color: "white" }}>{state.name}</span>
          </div>
          <h1 className="state-hero-title">{state.name}</h1>
          <p className="state-hero-tagline">✨ {state.tagline}</p>
          <div className="state-hero-meta">
            <span>🏛️ Capital: {state.capital}</span>
            <span>🗣️ {state.language}</span>
            <span>🗓 Best Time: {state.bestTime}</span>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: "48px 20px" }}>
        {/* About */}
        <div className="state-about">
          <div className="state-about-text">
            <h2>About {state.name}</h2>
            <p>{state.description}</p>
          </div>
          <div className="state-quick-info">
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <div className="info-label">Capital</div>
                <div className="info-value">{state.capital}</div>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">🗓</span>
              <div>
                <div className="info-label">Best Time</div>
                <div className="info-value">{state.bestTime}</div>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">🗣️</span>
              <div>
                <div className="info-label">Language</div>
                <div className="info-value">{state.language}</div>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">🗺️</span>
              <div>
                <div className="info-label">Destinations</div>
                <div className="info-value">{allPlaces.length} listed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter */}
        <div className="filter-bar">
          <h2 className="section-title">Tourist Destinations</h2>
          <div className="filter-chips">
            {stateCats.map((cat) => (
              <button
                key={cat}
                className={`filter-chip ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
                <span className="chip-count">
                  {cat === "All" ? allPlaces.length : allPlaces.filter((p) => p.category === cat).length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Places Grid */}
        {filtered.length > 0 ? (
          <div className="grid-3">
            {filtered.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </div>
        ) : (
          <div className="no-results">No destinations in this category yet.</div>
        )}
      </div>
    </div>
  );
}
