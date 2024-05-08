import React from "react";
import "./AboutButton.css";

function AboutButton({ aboutIsOpen, setAboutIsOpen }) {
  const handleClick = () => {
    if (aboutIsOpen === false) {
      return setAboutIsOpen(!aboutIsOpen);
    }
  };

  return (
    <button id="about-button" className="About-Button" onClick={handleClick}>
      About
    </button>
  );
}

export default AboutButton;
