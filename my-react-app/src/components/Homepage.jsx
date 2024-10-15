import React from "react";
import { Link } from "react-router-dom";
import DownArrow from "./DownArrow";

function Homepage() {
  return (
    <div className="home-page-container">
      <div className="grid-container">
        <h1 id="intro-heading">Steve Campbell</h1>
        <p id="intro-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          iaculis purus at facilisis malesuada. Donec sagittis arcu mi, vitae
          euismod diam placerat quis. Fusce vestibulum eleifend lectus, sed
          cursus nulla cursus in. Ut ac mi feugiat, tincidunt metus at,
          ultricies tellus. Nunc varius justo sed libero faucibus gravida.
          <span>
            <Link to="/About"> Read more...</Link>
          </span>
        </p>
        <div className="button-container">
          <button>Services</button>
          <button>Contact</button>
        </div>
        {/* <div className="right-column">
          <img src="https://picsum.photos/250/350" />
        </div> */}
      </div>
      <div className="grid-container-2">
        <h2>Scroll to my projects</h2>
        <DownArrow />
      </div>
    </div>
  );
}

export default Homepage;
