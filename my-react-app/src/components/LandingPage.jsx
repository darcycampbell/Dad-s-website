import React from "react";
import Homepage from "./Homepage";
import ProjectsPage from "./ProjectsPage";

function LandingPage() {
  return (
    <div className="landing-page-container">
      <Homepage />
      <ProjectsPage />
    </div>
  );
}

export default LandingPage;
