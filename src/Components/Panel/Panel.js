import React from "react";
import About from "../About/About";
import Research from "../Research/Research";
import "./Panel.css";

function Panel({ weaponsIndex, manufacturingIndex }) {
  /*console.log(
    `weaponsIndex: ${weaponsIndex}, manufacturingIndex: ${manufacturingIndex}`
  );*/
  return (
    <main className="Panel">
      <h1>Open Source Arms Library</h1>
      <section>
        <About />
      </section>
      <section>
        <Research
          weaponsIndex={weaponsIndex}
          manufacturingIndex={manufacturingIndex}
        />
      </section>
    </main>
  );
}

export default Panel;
