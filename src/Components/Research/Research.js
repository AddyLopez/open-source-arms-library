import React, { useState, useRef } from "react";
import ResearchDetails from "../ResearchDetails/ResearchDetails";
import Contribute from "../Contribute/Contribute";
import { CSSTransition } from "react-transition-group";

import "./Research.css";

function Research({ selected, toggle, weaponsIndex, manufacturingIndex }) {
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
        <h2>
          {selected !== researchHeader ? "EXPAND PROFILE" : "BACK TO MAP"}
        </h2>
        <div className="accordion-icon">
          {selected === null || selected !== researchHeader ? "+" : "-"}
        </div>
      </header>
      <CSSTransition
        nodeRef={nodeRef}
        in={inProp}
        timeout={200}
        classNames="accordion-paragraph"
      >
        <article
          ref={nodeRef}
          className={
            selected === researchHeader
              ? "accordion-content-show full-screen"
              : "accordion-content-hide"
          }
        >
          {manufacturingIndex !== null ? (
            <>
              <ResearchDetails
                weaponsIndex={weaponsIndex}
                manufacturingIndex={manufacturingIndex}
              />
              <Contribute />
            </>
          ) : (
            ""
          )}
        </article>
      </CSSTransition>
    </section>
  );
}

export default Research;
