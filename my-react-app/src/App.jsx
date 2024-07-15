import React, { useState } from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import ProjectsPage from "./components/ProjectsPage";

function App() {
  return (
    <div className="main-container">
      <Homepage />
      <ProjectsPage />
    </div>
  );
}

export default App;
