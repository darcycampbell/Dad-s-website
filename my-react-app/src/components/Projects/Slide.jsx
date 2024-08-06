import React from "react";

function Slide(props) {
  return (
    <div
      className="slide fade"
      style={
        props.show === props.id ? { display: "block" } : { display: "none" }
      }
    >
      <img src={props.image} alt={props.alt} />
    </div>
  );
}

export default Slide;
