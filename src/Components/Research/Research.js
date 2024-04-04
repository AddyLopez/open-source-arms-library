import React, { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
//import { weaponsArray } from "../../Data/arms-data";
import "./Research.css";

function Research(
  { selected, toggle } /*{ weaponsIndex, manufacturingIndex }*/
) {
  /*console.log(
    `weaponsIndex: ${weaponsIndex}, manufacturingIndex: ${manufacturingIndex}`
  );*/
  const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null);

  const triggerTransition = () => {
    setInProp(!inProp);
  };
  const researchHeader = document.getElementById("research-header");

  return (
    <section className="Research">
      <header
        id="research-header"
        onClick={(event) => {
          toggle(event);
          triggerTransition();
        }}
      >
        <h2>Details of Research</h2>
        <div className="accordion-icon">
          {selected !== researchHeader ? "+" : "-"}
        </div>
      </header>
      <CSSTransition
        nodeRef={nodeRef}
        in={inProp}
        timeout={200}
        classNames="accordion-paragraph"
      >
        <p
          ref={nodeRef}
          className={
            selected !== researchHeader
              ? "accordion-content-hide"
              : "accordion-content-show"
          }
        >
          Research info...
        </p>
      </CSSTransition>
    </section>
  );
}

export default Research;
