import React from "react";
import { Link } from "react-router-dom";
import DownArrow from "./DownArrow";

function Homepage() {
  return (
    <div className="landing-page-container">
      <div className="grid-container">
        <div className="left-column">
          <h1>Steve Campbell</h1>
          <p id="intro-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            iaculis purus at facilisis malesuada. Donec sagittis arcu mi, vitae
            euismod diam placerat quis. Fusce vestibulum eleifend lectus, sed
            cursus nulla cursus in. Ut ac mi feugiat, tincidunt metus at,
            ultricies tellus. Nunc varius justo sed libero faucibus gravida. Ut
            ut imperdiet ipsum. Cras ut aliquet massa. Donec vestibulum, augue
            molestie ullamcorper auctor, massa turpis laoreet augue, id laoreet
            urna diam et ante. Donec vel fringilla massa. Ut ac nibh neque.
            Nullam et fermentum sem, sit amet imperdiet libero. Nulla interdum
            rutrum eros, a tincidunt libero malesuada at. Nullam ac lacus.
          </p>
          <Link to="/About">Read more...</Link>
          <div className="button-container">
            <button>Services</button>
            <button>Contact</button>
          </div>
        </div>
        <div className="right-column">
          <img src="https://picsum.photos/250/350" />
        </div>
      </div>
      <div className="grid-container-2">
        <h2>View my projects</h2>
        <DownArrow />
      </div>
    </div>
  );
}

export default Homepage;
