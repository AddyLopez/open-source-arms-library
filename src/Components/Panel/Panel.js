import React from "react";
import About from "../About/About";
//import { weaponsArray } from "../../Data/arms-data.js";
import "./Panel.css";

//console.log(weaponsArray);

function Panel() {
  return (
    <main className="Panel">
      <h1>Open Source Arms Library</h1>
      <section>
        <About />
        <p>paragraph</p>
      </section>
    </main>
  );
}

export default Panel;
