import React, { useState } from "react";
import About from "../About/About";
import Instructions from "../Instructions/Instructions";
import Research from "../Research/Research";
import "./Panel.css";

function Panel({ weaponsIndex, manufacturingIndex }) {
  /*console.log(
    `weaponsIndex: ${weaponsIndex}, manufacturingIndex: ${manufacturingIndex}`
  );*/
  const [selected, setSelected] = useState("");
  console.log(selected);
  const toggleSelected = (event) => {
    if (event.target === selected) {
      return setSelected(null);
    }
    setSelected(event.target);
  };

  return (
    <div className="Panel">
      <header>
        <h1>Open Source Arms Library</h1>
      </header>
      <main className="accordion">
        <About toggle={toggleSelected} selected={selected} />
        <Instructions toggle={toggleSelected} selected={selected} />
        <Research
          toggle={toggleSelected}
          weaponsIndex={weaponsIndex}
          manufacturingIndex={manufacturingIndex}
          selected={selected}
        />
      </main>
    </div>
  );
}

export default Panel;
