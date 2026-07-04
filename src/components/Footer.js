import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">🗺️ Travel<span>Bharat</span></div>
            <p>Your digital encyclopedia for exploring India's incredible diversity — state by state, city by city.</p>
            <div className="footer-flag">
              <span className="flag-saffron"></span>
              <span className="flag-white">☸</span>
              <span className="flag-green"></span>
            </div>
          </div>

          <div className="footer-section">
            <h4>Explore</h4>
            <Link to="/states">All States</Link>
            <Link to="/search?q=Heritage">Heritage Sites</Link>
            <Link to="/search?q=Nature">Nature</Link>
            <Link to="/search?q=Adventure">Adventure</Link>
            <Link to="/search?q=Religious">Religious</Link>
            <Link to="/search?q=Beach">Beaches</Link>
          </div>

          <div className="footer-section">
            <h4>Popular States</h4>
            <Link to="/state/rajasthan">Rajasthan</Link>
            <Link to="/state/kerala">Kerala</Link>
            <Link to="/state/goa">Goa</Link>
            <Link to="/state/uttarpradesh">Uttar Pradesh</Link>
            <Link to="/state/himachalpradesh">Himachal Pradesh</Link>
            <Link to="/state/tamilnadu">Tamil Nadu</Link>
          </div>

          <div className="footer-section">
            <h4>About</h4>
            <p style={{fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', lineHeight: '1.8'}}>
              TravelBharat is a free tourism information platform helping travelers discover the beauty and heritage of Incredible India.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 TravelBharat · Made with ❤️ for Incredible India</p>
          <p style={{fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)'}}>
            Informational platform · Not affiliated with Government of India Tourism
          </p>
        </div>
      </div>
    </footer>
  );
}
