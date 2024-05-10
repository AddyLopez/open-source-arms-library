import React from "react";
import "./Contribute.css";

function Contribute({ profileIsActive }) {
  return (
    <footer
      className={profileIsActive ? "Contribute fixed" : "Contribute static"}
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
