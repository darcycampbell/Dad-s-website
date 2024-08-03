import React, { useEffect, useState } from "react";
import CloseButton from "./CloseButton";
import Slide from "./Slide";

function ModalWindow(props) {
  const [showSlide, setSlide] = useState(1);

  function updateShow(n) {
    const limit = props.gallery.length;
    if (n < 1) {
      setSlide(limit);
    } else if (n > limit) {
      setSlide(1);
    } else {
      setSlide(n);
    }
  }

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
        <div className="slideshow-container">
          {props.gallery.map((slide) => {
            return (
              <Slide
                key={slide.id}
                id={slide.id}
                image={slide.image}
                alt={slide.alt}
                show={showSlide}
              />
            );
          })}
          <a className="prev" onClick={() => {updateShow(showSlide - 1)}}>
            &#10094;
          </a>
          <a className="next" onClick={() => {updateShow(showSlide + 1)}}>
            &#10095;
          </a>
        </div>
      </div>
    </div>
  );
}

export default ModalWindow;
