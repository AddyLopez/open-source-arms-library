import React from "react";
//import { weaponsArray } from "../../Data/arms-data";
import "./Research.css";

function Research(/*{ weaponsIndex, manufacturingIndex }*/) {
  /*console.log(
    `weaponsIndex: ${weaponsIndex}, manufacturingIndex: ${manufacturingIndex}`
  );*/
  return (
    <section className="Research">
      <label for="third">About This Application</label>
      <input type="radio" name="accordian" id="third" />
      <p className="accordian-content">Research info...</p>
    </section>
  );
}

export default Research;
