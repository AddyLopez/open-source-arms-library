import React from "react";
import About from "../About/About";
import Instructions from "../Instructions/Instructions";
import Research from "../Research/Research";
import "./Panel.css";

function Panel({ weaponsIndex, manufacturingIndex }) {
  /*console.log(
    `weaponsIndex: ${weaponsIndex}, manufacturingIndex: ${manufacturingIndex}`
  );*/
  return (
    <div className="Panel">
      <header>
        <h1>Open Source Arms Library</h1>
      </header>
      <main>
        <ul id="accordian">
          <li>
            <About />
          </li>
          <li>
            <Instructions />
          </li>
          <li>
            <Research
              weaponsIndex={weaponsIndex}
              manufacturingIndex={manufacturingIndex}
            />
          </li>
        </ul>
      </main>
    </div>
  );
}

export default Panel;
