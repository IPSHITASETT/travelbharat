import React from "react";
import { Link } from "react-router-dom";
import "./StateCard.css";

export default function StateCard({ state }) {
  return (
    <Link to={`/state/${state.id}`} className="state-card">
      <div className="state-card-img-wrap">
        <img
          src={state.coverImage}
          alt={state.name}
          className="state-card-img"
          loading="lazy"
          onError={(e) => {
            e.target.src = `https://placehold.co/400x300/1A1A2E/ffffff?text=${encodeURIComponent(state.name)}`;
          }}
        />
        <div className="state-card-gradient"></div>
        <div className="state-card-content">
          <h3 className="state-card-name">{state.name}</h3>
          <p className="state-card-tagline">{state.tagline}</p>
          <span className="state-card-places">{state.placesCount} destinations</span>
        </div>
      </div>
      <div className="state-card-footer">
        <span>🗓 Best: {state.bestTime}</span>
        <span className="state-card-explore">Explore →</span>
      </div>
    </Link>
  );
}
