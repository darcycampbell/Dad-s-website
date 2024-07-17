import React from "react";
import ProjectSection from "./Projects/ProjectSection";
import projects from "../content/projects";

function ProjectsPage() {
  return (
    <div className="projects-page-container">
      <h2>Projects</h2>
      <div className="project-categories-container">
        <button>Renovations</button>
        <button>New Residential</button>
        <button>Commercial</button>
        <button>Current Projects</button>
      </div>
      <ProjectSection 
        section={projects.renovationProjects}
        sectionName="renovations"
      />
      <ProjectSection 
        section={projects.residentialProjects}
        sectionName="residentials"
      />
    </div>
  );
}

export default ProjectsPage;
