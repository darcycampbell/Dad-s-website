import React from "react";
import ProjectSection from "./Projects/ProjectSection";
import projects from "../content/projects";

function ProjectsPage() {
  return (
    <div className="projects-page-container">
      <h2>Projects</h2>
      <div className="project-categories-container">
        <a href="#renovations">Renovations</a>
        <a href="#residentials">New Residential</a>
        <a href="#commercial">Commercial</a>
        <a href="#currentprojects">Current Projects</a>
      </div>
      <div id="renovations">
        <ProjectSection
          section={projects.renovationProjects}
          sectionName="renovations"
        />
      </div>
      <div id="residentials">
        <ProjectSection
          section={projects.residentialProjects}
          sectionName="residentials"
        />
      </div>
    </div>
  );
}

export default ProjectsPage;
