import React, { useEffect, useState } from "react";

function ScrollToTop() {
    const [buttonStyle, setButtonStyle] = useState({ display: "none" });

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
          setButtonStyle({ display: "block" });
        } else {
          setButtonStyle({ display: "none" });
        }
      });
    });
  

  return (
    <button
      onClick={() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }}
      id="goToTopButton"
      style={buttonStyle}
    >
      Top
    </button>
  );
}

export default ScrollToTop;
