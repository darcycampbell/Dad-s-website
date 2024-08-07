import React, { useState } from "react";
import Slide from "../Slide";
import SlideButton from "./SlideButton";

function Slideshow(props) {
  const [showSlide, setSlide] = useState(1);
  const [showText, setText] = useState(false);
  const showHide = [{ display: "block" }, { display: "none" }];

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

  return (
    <div className="slideshow-container">
      <div className="slideshow-display">
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
        <span
          style={showText ? showHide[1] : showHide[0]}
          onMouseEnter={() => {
            setText(true);
          }}
        >
          &#11205;
        </span>
        <p
          style={showText ? showHide[0] : showHide[1]}
          onMouseLeave={() => {
            setText(false);
          }}
        >
          {props.galleryText}
        </p>
      </div>
      <SlideButton
        class="prev"
        updateShow={updateShow}
        update={showSlide - 1}
        symbol="&#10094;"
      />
      <SlideButton
        class="next"
        updateShow={updateShow}
        update={showSlide + 1}
        symbol="&#10095;"
      />
    </div>
  );
}

export default Slideshow;
