import React from "react";
import { weaponsArray } from "../../Data/arms-data.js";
import "./Panel.css";

console.log(weaponsArray);

function Panel() {
  return (
    <main className="Panel">
      <h1>Open Source Arms Library</h1>
      <div>
        <p>paragraph</p>
        <p>paragraph</p>
      </div>
    </main>
  );
}

export default Panel;
