import React, { useState, useRef, memo } from "react";
import ResearchDetails from "../ResearchDetails/ResearchDetails";
import Contribute from "../Contribute/Contribute";
import { CSSTransition } from "react-transition-group";

import "./Research.css";

const Research = memo(function Research({
  selected,
  toggle,
  weaponsIndex,
  manufacturingIndex,
}) {
  const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null);

  const triggerTransition = () => {
    setInProp(!inProp);
  };

  const accordionIcon = document.getElementById("accordion-icon");

  return (
    <section className="Research">
      <header>
        <h2>{selected !== accordionIcon ? "EXPAND PROFILE" : "BACK TO MAP"}</h2>
        <div
          id="accordion-icon"
          className="accordion-icon"
          onClick={(event) => {
            toggle(event);
            triggerTransition();
          }}
        >
          {selected === accordionIcon ? "-" : "+"}
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
            selected === accordionIcon
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
              <Contribute selected={selected} />
            </>
          ) : (
            ""
          )}
        </article>
      </CSSTransition>
    </section>
  );
});

export default Research;
