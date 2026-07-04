import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { getPlaceById, getStateById, getPlacesByState } from "../data/data";
import PlaceCard from "../components/PlaceCard";
import "./PlaceDetail.css";

export default function PlaceDetail() {
  const { placeId } = useParams();
  const place = getPlaceById(placeId);
  if (!place) return <Navigate to="/states" />;

  const state = getStateById(place.stateId);
  const related = getPlacesByState(place.stateId)
    .filter((p) => p.id !== place.id)
    .slice(0, 3);

  return (
    <div className="place-detail">
      {/* Hero Image */}
      <div className="detail-hero">
        <img
          src={place.image}
          alt={place.name}
          className="detail-hero-img"
          onError={(e) => {
            e.target.src = `https://placehold.co/1200x500/1A1A2E/ffffff?text=${encodeURIComponent(place.name)}`;
          }}
        />
        <div className="detail-hero-overlay"></div>
        <div className="detail-hero-content container">
          <div className="breadcrumb" style={{ color: "rgba(255,255,255,0.6)" }}>
            <Link to="/" style={{ color: "rgba(255,255,255,0.6)" }}>Home</Link>
            <span className="sep">›</span>
            <Link to="/states" style={{ color: "rgba(255,255,255,0.6)" }}>States</Link>
            <span className="sep">›</span>
            <Link to={`/state/${place.stateId}`} style={{ color: "rgba(255,255,255,0.6)" }}>{state?.name}</Link>
            <span className="sep">›</span>
            <span style={{ color: "white" }}>{place.name}</span>
          </div>
          <div className="detail-hero-meta">
            <span className={`category-badge badge-${place.category}`}>{place.category}</span>
            <span className="rating" style={{ fontSize: "1rem" }}>⭐ {place.rating} / 5</span>
          </div>
          <h1 className="detail-hero-title">{place.name}</h1>
          <p className="detail-hero-location">📍 {place.city}, {state?.name}</p>
        </div>
      </div>

      <div className="container detail-body">
        <div className="detail-grid">
          {/* Main content */}
          <div className="detail-main">
            <section className="detail-section">
              <h2>About this Destination</h2>
              <p className="detail-description">{place.description}</p>
            </section>

            {place.highlights && (
              <section className="detail-section">
                <h2>Highlights</h2>
                <div className="highlights-grid">
                  {place.highlights.map((h, i) => (
                    <div key={i} className="highlight-item">
                      <span className="highlight-icon">✨</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {place.nearbyAttractions && place.nearbyAttractions.length > 0 && (
              <section className="detail-section">
                <h2>Nearby Attractions</h2>
                <div className="nearby-list">
                  {place.nearbyAttractions.map((attr, i) => (
                    <div key={i} className="nearby-item">
                      <span>🔷</span> {attr}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="detail-sidebar">
            <div className="info-card">
              <h3>Travel Information</h3>

              <div className="info-row">
                <span className="info-icon-label">🗓</span>
                <div>
                  <div className="info-label">Best Time to Visit</div>
                  <div className="info-value">{place.bestTime}</div>
                </div>
              </div>

              {place.entryFee && (
                <div className="info-row">
                  <span className="info-icon-label">🎫</span>
                  <div>
                    <div className="info-label">Entry Fee</div>
                    <div className="info-value">{place.entryFee}</div>
                  </div>
                </div>
              )}

              {place.timings && (
                <div className="info-row">
                  <span className="info-icon-label">🕐</span>
                  <div>
                    <div className="info-label">Timings</div>
                    <div className="info-value">{place.timings}</div>
                  </div>
                </div>
              )}

              <div className="info-row">
                <span className="info-icon-label">📍</span>
                <div>
                  <div className="info-label">Location</div>
                  <div className="info-value">{place.city}, {state?.name}</div>
                </div>
              </div>

              <a
                href={place.location}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary map-btn"
              >
                🗺️ Open in Maps
              </a>
            </div>

            <div className="state-link-card">
              <div
                className="state-link-img"
                style={{ backgroundImage: `url(${state?.coverImage})` }}
              ></div>
              <div className="state-link-body">
                <p className="state-link-label">Part of</p>
                <h4>{state?.name}</h4>
                <p className="state-link-tagline">{state?.tagline}</p>
                <Link to={`/state/${place.stateId}`} className="btn btn-outline" style={{ marginTop: 12 }}>
                  Explore {state?.name} →
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="related-section">
            <h2 className="section-title">More in {state?.name}</h2>
            <p className="section-subtitle">Other destinations you might enjoy</p>
            <div className="grid-3">
              {related.map((p) => (
                <PlaceCard key={p.id} place={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
