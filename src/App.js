import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import States from "./pages/States";
import StatePage from "./pages/StatePage";
import PlaceDetail from "./pages/PlaceDetail";
import Search from "./pages/Search";
import "./styles/global.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/states" element={<States />} />
            <Route path="/state/:stateId" element={<StatePage />} />
            <Route path="/place/:placeId" element={<PlaceDetail />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
