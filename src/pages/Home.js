import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { states, places, categories } from "../data/data";
import StateCard from "../components/StateCard";
import PlaceCard from "../components/PlaceCard";
import "./Home.css";

export default function Home() {
  const [searchVal, setSearchVal] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchVal.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchVal.trim())}`);
    }
  };

  const featuredPlaces = places.filter((p) =>
    ["taj-mahal", "alleppey-backwaters", "amber-fort", "spiti-valley", "meenakshi-temple", "dudhsagar-falls"].includes(p.id)
  );

  const stats = [
    { number: "28+", label: "States & UTs" },
    { number: "100+", label: "Destinations" },
    { number: "6", label: "Categories" },
    { number: "∞", label: "Memories" },
  ];

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-eyebrow">🇮🇳 Incredible India</p>
          <h1 className="hero-title">
            Discover Every Corner of <span>Bharat</span>
          </h1>
          <p className="hero-subtitle">
            From the golden sands of Rajasthan to the backwaters of Kerala —
            explore India's extraordinary diversity, culture, and heritage.
          </p>
          <form className="hero-search" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search for Taj Mahal, Goa beaches, Spiti Valley..."
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              🔍 Search
            </button>
          </form>
          <div className="hero-links">
            {categories.map((cat) => (
              <Link key={cat} to={`/search?q=${cat}`} className="hero-cat-link">
                {cat}
              </Link>
            ))}
          </div>
        </div>
        <div className="hero-scroll-hint">↓</div>
      </section>

      {/* Stats */}
      <section className="stats-bar">
        {stats.map((s) => (
          <div key={s.label} className="stat-item">
            <div className="stat-number">{s.number}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </section>

      {/* Featured Places */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">Must-Visit Destinations</h2>
              <p className="section-subtitle">India's most iconic and breathtaking places</p>
            </div>
            <Link to="/states" className="btn btn-outline">View All →</Link>
          </div>
          <div className="grid-3">
            {featuredPlaces.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories-section">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: "center" }}>Explore by Category</h2>
          <p className="section-subtitle" style={{ textAlign: "center" }}>Find destinations that match your travel style</p>
          <div className="categories-grid">
            {[
              { name: "Heritage", icon: "🏛️", desc: "Ancient forts, temples & monuments", color: "#FFF3CD" },
              { name: "Nature", icon: "🌿", desc: "Hills, valleys, forests & lakes", color: "#D1F2EB" },
              { name: "Religious", icon: "🕌", desc: "Sacred temples, mosques & shrines", color: "#E8D5F5" },
              { name: "Adventure", icon: "🏔️", desc: "Trekking, skiing & extreme sports", color: "#FDECEC" },
              { name: "Beach", icon: "🏖️", desc: "Golden coasts & tropical shores", color: "#D6EAF8" },
              { name: "Wildlife", icon: "🐯", desc: "Tigers, elephants & national parks", color: "#D5F5E3" },
            ].map((cat) => (
              <Link
                key={cat.name}
                to={`/search?q=${cat.name}`}
                className="cat-card"
                style={{ background: cat.color }}
              >
                <span className="cat-icon">{cat.icon}</span>
                <h3 className="cat-name">{cat.name}</h3>
                <p className="cat-desc">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* States */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">Explore by State</h2>
              <p className="section-subtitle">Journey through India's diverse states and union territories</p>
            </div>
            <Link to="/states" className="btn btn-outline">All States →</Link>
          </div>
          <div className="grid-4">
            {states.map((state) => (
              <StateCard key={state.id} state={state} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Plan Your Journey?</h2>
            <p>Discover hidden gems and iconic landmarks across India's 28 states</p>
            <div className="cta-btns">
              <Link to="/states" className="btn btn-white">Browse All States</Link>
              <Link to="/search?q=Nature" className="btn btn-outline" style={{borderColor: 'white', color: 'white'}}>Nature Escapes</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
