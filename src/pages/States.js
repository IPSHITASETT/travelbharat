import React from "react";
import { states } from "../data/data";
import StateCard from "../components/StateCard";
import "./States.css";

export default function States() {
  return (
    <div className="states-page">
      <div className="page-header">
        <h1>Explore India by State</h1>
        <p>Select a state to discover its tourist destinations and hidden gems</p>
      </div>

      <div className="container" style={{ padding: "48px 20px" }}>
        <div className="india-map-hint">
          <span>🗺️</span>
          <p>India has 28 states and 8 union territories — each with a unique culture, cuisine, and landscape</p>
        </div>

        <div className="grid-4">
          {states.map((state) => (
            <StateCard key={state.id} state={state} />
          ))}
        </div>

        <div className="more-states-notice">
          <h3>🚧 More States Coming Soon</h3>
          <p>
            We're adding destinations from Karnataka, Gujarat, Odisha, Assam, Uttarakhand,
            Madhya Pradesh, Punjab, and more. Stay tuned!
          </p>
          <div className="coming-soon-states">
            {["Karnataka", "Gujarat", "Uttarakhand", "Madhya Pradesh", "Odisha", "Assam", "Punjab", "Jharkhand"].map(
              (s) => (
                <span key={s} className="coming-state-tag">{s}</span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
