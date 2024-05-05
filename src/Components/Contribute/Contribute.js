import React from "react";
import "./Contribute.css";

function Contribute({ selected }) {
  const researchHeader = document.getElementById("research-header");
  return (
    <footer
      className={
        selected === researchHeader ? "Contribute fixed" : "Contribute static"
      }
    >
      <h4>To contribute to OSAL: </h4>
      <a
        href="/"
        title="Contribute to this project"
        target="_blank"
        rel="noreferrer"
      >
        CLICK HERE
      </a>
    </footer>
  );
}

export default Contribute;
