import React from "react";
import projects from "../content/projects";
import ProjectCard from "./Projects/ProjectCard";

function create(project) {
  return (
    <ProjectCard
      key={project.id}
      title={project.title}
      image={project.image}
      alt={project.alt}
      text={project.text}
    />
  );
}

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
      {projects.map(create)}
    </div>
  );
}

export default ProjectsPage;
