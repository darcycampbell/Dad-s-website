import React from "react";

function SlideButton(props) {
  return (
    <a
      className={props.class}
      onClick={() => {
        props.updateShow(props.update);
      }}
    >
      {props.symbol}
    </a>
  );
}

export default SlideButton;
