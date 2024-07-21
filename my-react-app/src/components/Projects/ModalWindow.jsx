import React, { useEffect } from "react";

function ModalWindow(props) {
  useEffect(() => {
    window.addEventListener("click", (event) => {
      if (event.target.className === "modal") {
        props.updateStyle({ display: "none" });
      }
    });
  });

  return (
    <div className="modal" style={props.style}>
      <div class="modal-content">
        <span
          class="close"
          onClick={() => {
            props.updateStyle({ display: "none" });
          }}
        >
          &times;
        </span>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  );
}

export default ModalWindow;
