import React from "react";
import { Link } from "react-router-dom";
import "./PlaceCard.css";

export default function PlaceCard({ place }) {
  return (
    <Link to={`/place/${place.id}`} className="place-card">
      <div className="place-card-img-wrap">
        <img
          src={place.image}
          alt={place.name}
          className="place-card-img"
          loading="lazy"
          onError={(e) => {
            e.target.src = `https://placehold.co/400x250/1A1A2E/ffffff?text=${encodeURIComponent(place.name)}`;
          }}
        />
        <div className="place-card-overlay"></div>
        <span className={`category-badge badge-${place.category} place-card-badge`}>
          {place.category}
        </span>
      </div>
      <div className="place-card-body">
        <h3 className="place-card-title">{place.name}</h3>
        <p className="place-card-location">📍 {place.city}</p>
        <p className="place-card-desc">{place.description.slice(0, 100)}...</p>
        <div className="place-card-footer">
          <span className="rating">⭐ {place.rating}</span>
          <span className="place-card-time">🗓 {place.bestTime.split("–")[0].trim()}</span>
        </div>
      </div>
    </Link>
  );
}
