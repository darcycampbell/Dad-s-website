import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
import ServicesPage from "./components/ServicesPage";
import ScrollToTop from "./components/ScrollToTop";
import { Route, Routes } from "react-router-dom";
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";

function App() {
  return (
    <div className="main-container">
      <ScrollToHashElement />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Services" element={<ServicesPage />} />
      </Routes>
      <ScrollToTop />
    </div>
  );
}

export default App;
