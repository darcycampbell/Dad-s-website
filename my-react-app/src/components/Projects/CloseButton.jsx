import React from "react";

function CloseButton(props) {
    return (<span
        class="close"
        onClick={() => {
          props.updateStyle({ display: "none" });
        }}
      >
        &times;
      </span>)
}

export default CloseButton