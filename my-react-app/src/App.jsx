import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
import ScrollToTop from "./components/ScrollToTop";
import { Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <div className="main-container">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/About" element={<AboutPage />} />
      </Routes>
      <ScrollToTop />
    </div>
  );
}

export default App;
