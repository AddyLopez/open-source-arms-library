import React from "react";
//import { weaponsArray } from "../../Data/arms-data";
import "./Research.css";

function Research(
  { selected, toggle } /*{ weaponsIndex, manufacturingIndex }*/
) {
  /*console.log(
    `weaponsIndex: ${weaponsIndex}, manufacturingIndex: ${manufacturingIndex}`
  );*/
  const researchHeader = document.getElementById("research-header");

  return (
    <section className="Research">
      <header id="research-header" onClick={toggle}>
        <h2>About This Application</h2>
        <div className="accordion-icon">
          {selected !== researchHeader ? "+" : "-"}
        </div>
      </header>
      <p className="accordion-content">Research info...</p>
    </section>
  );
}

export default Research;
