import React from "react";
import About from "../About/About";
import Instructions from "../Instructions/Instructions";
import Research from "../Research/Research";
import "./Panel.css";

function Panel({ weaponsIndex, manufacturingIndex, toggle, selected }) {
  return (
    <div className="Panel">
      <header>
        <h1>Open Source Arms Library</h1>
      </header>
      <main className="accordion">
        <About toggle={toggle} selected={selected} />
        <Instructions toggle={toggle} selected={selected} />
        <Research
          toggle={toggle}
          weaponsIndex={weaponsIndex}
          manufacturingIndex={manufacturingIndex}
          selected={selected}
        />
      </main>
    </div>
  );
}

export default Panel;
