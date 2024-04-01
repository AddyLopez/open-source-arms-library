import React from "react";
import About from "../About/About";
import Research from "../Research/Research";
//import { weaponsArray } from "../../Data/arms-data.js";
import "./Panel.css";

function Panel() {
  //console.log(data);
  return (
    <main className="Panel">
      <h1>Open Source Arms Library</h1>
      <section>
        <About />
        <Research />
      </section>
    </main>
  );
}

export default Panel;
