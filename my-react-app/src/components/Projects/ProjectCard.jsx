import React from "react"

function ProjectCard(props) {
    return (
        <div className="project-card-container">
            <img src={props.image} alt={props.alt} />
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
}

export default ProjectCard