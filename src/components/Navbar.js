import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchVal.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchVal.trim())}`);
      setSearchVal("");
    }
  };

  const isHome = location.pathname === "/";

  return (
    <nav className={`navbar ${scrolled || !isHome ? "navbar-solid" : "navbar-transparent"}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-icon">🗺️</span>
          <span className="logo-text">
            Travel<span className="logo-accent">Bharat</span>
          </span>
        </Link>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
          <Link to="/states" className={location.pathname === "/states" ? "active" : ""}>States</Link>
          <Link to="/search?q=Heritage" className="">Heritage</Link>
          <Link to="/search?q=Nature" className="">Nature</Link>
          <Link to="/search?q=Adventure" className="">Adventure</Link>
        </div>

        <form className="nav-search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search destinations..."
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
          />
          <button type="submit">🔍</button>
        </form>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
