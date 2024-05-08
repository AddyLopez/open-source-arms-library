import React from "react";

function AboutButton({ setSelected }) {
  const handleClick = () => {
    const aboutButton = document.getElementById("about-button");
    return setSelected(aboutButton);
  };

  return (
    <button id="about-button" className="About-Button" onClick={handleClick}>
      About
    </button>
  );
}

export default AboutButton;
