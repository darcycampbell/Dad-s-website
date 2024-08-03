import React, {useState} from "react";
import ModalWindow from "./ModalWindow";

function ProjectCard(props) {
    const [modalStyle, setModalStyle] = useState({ display: "none" });

    return (
        <div className="project-card-container">
            <img src={props.image} alt={props.alt} onClick={() => {
                setModalStyle({ display: "flex" })
            }}/>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <ModalWindow style={modalStyle} updateStyle={setModalStyle} gallery={props.gallery} />
        </div>
    )
}

export default ProjectCard