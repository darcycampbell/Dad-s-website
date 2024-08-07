import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

function ProjectSection(props) {
  const [show, setShow] = useState(2 + props.modifier);
  const [pressed, setPressed] = useState(false);

  return (
    <div>
      {props.section.map((project) => {
        if (project.id <= show) {
          return (
            <ProjectCard
              key={project.id}
              title={project.title}
              image={project.image}
              alt={project.alt}
              text={project.text}
              gallery={project.gallery}
              galleryText={project.galleryText}
            />
          );
        }
      })}
      <div className="button-container">
        <button
          onClick={() => {
            setPressed(!pressed);
            if (!pressed) {
              setShow(100);
            } else {
              setShow(2 + props.modifier);
            }
          }}
        >
          Show {pressed ? "less" : "more"} {props.sectionName}
        </button>
      </div>
    </div>
  );
}

export default ProjectSection;
