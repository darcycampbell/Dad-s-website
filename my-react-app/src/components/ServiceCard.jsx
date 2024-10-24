import React from "react";

function ServiceCard(props) {
    return (
        <div id={props.id}>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default ServiceCard;