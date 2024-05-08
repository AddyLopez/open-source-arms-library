import React from "react";
import "./Contribute.css";

function Contribute({ selected }) {
  const accordionIcon = document.getElementById("accordion-icon");
  const aboutButton = document.getElementById("about-button");

  return (
    <footer
      className={
        selected !== accordionIcon && selected !== aboutButton
          ? "Contribute fixed"
          : "Contribute static"
      }
    >
      <h4>
        Have something to contribute?{" "}
        <a
          href="/"
          title="Contribute to this project"
          target="_blank"
          rel="noreferrer"
        >
          Click here
        </a>
      </h4>
    </footer>
  );
}

export default Contribute;
