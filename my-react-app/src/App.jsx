import React, { useEffect, useState } from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import ProjectsPage from "./components/ProjectsPage";

function App() {
  const [buttonStyle, setButtonStyle] = useState({ display: "none" });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        setButtonStyle({ display: "block" });
      } else {
        setButtonStyle({ display: "none" });
      }
    });
  });

  return (
    <div className="main-container">
      <Homepage />
      <ProjectsPage />
      <button
        onClick={() => {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }}
        id="goToTopButton"
        style={buttonStyle}
      >
        Top
      </button>
    </div>
  );
}

export default App;
