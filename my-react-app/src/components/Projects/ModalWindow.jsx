import React, { useEffect } from "react";
import CloseButton from "./CloseButton";
import Slideshow from "./Slideshow/Slideshow";

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
        <CloseButton updateStyle={props.updateStyle} />
        <Slideshow gallery={props.gallery} galleryText={props.galleryText} />
      </div>
    </div>
  );
}

export default ModalWindow;
