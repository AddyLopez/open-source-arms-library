import React from "react";

function AboutButton({ setSelected }) {
  const handleClick = () => {
    const about = document.getElementById("about");
    return setSelected(about);
  };

  return (
    <button className="About-Button" onClick={handleClick}>
      ABOUT
    </button>
  );
}

export default AboutButton;
