import React, {useState} from "react";
import { Link } from "react-router-dom";
import DownArrow from "./DownArrow";

function Homepage() {
  const [showServices, setServices] = useState(false);
  const [showContact, setContact] = useState(false);
  const displaySetting = [{display: "none"}, {display: "block"}];

  function clickedServices() {
    setContact(false);
    setServices(!showServices);
  }

  function clickedContact() {
    setServices(false);
    setContact(!showContact)
  }

  return (
    <div className="home-page-container">
      <div className="grid-container textbox">
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
          <button
            onClick={clickedServices}
          >
            Services
          </button>
          <button onClick={clickedContact}>Contact</button>
        </div>
      </div>
      <div
        className="services sub-container textbox"
        style={showServices ? displaySetting[1] : displaySetting[0]}
      >
        <ul>
          <li>Service 1</li>
          <li>Another service</li>
          <li><Link to="/Services#Farming">Farming</Link></li>
        </ul>
      </div>
      <div className="contact sub-container textbox" style={showContact ? displaySetting[1] : displaySetting[0]}>
      <ul>
          <li>This is how</li>
          <li>you can contact</li>
          <li>me via email</li>
        </ul>
      </div>
      <div className="grid-container-2">
        <h2>Scroll to my projects</h2>
        <DownArrow />
      </div>
    </div>
  );
}

export default Homepage;
