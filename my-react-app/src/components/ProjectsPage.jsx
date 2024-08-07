import React from "react";
import ProjectSection from "./Projects/ProjectSection";
import projects from "../content/projects";

function ProjectsPage() {
  const renovationProjects = projects.filter((project) => {
    return project.category === "renovation"; 
  });
  const residentialProjects = projects.filter((project) => {
    return project.category === "residential"; 
  });

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
          section={renovationProjects}
          sectionName="renovations"
          modifier={0}
        />
      </div>
      <div id="residentials">
        <ProjectSection
          section={residentialProjects}
          sectionName="residentials"
          modifier={renovationProjects.length}
        />
      </div>
    </div>
  );
}

export default ProjectsPage;
