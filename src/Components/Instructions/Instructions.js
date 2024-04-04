import React, { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import "./Instructions.css";

function Instructions({ selected, toggle }) {
  const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null);

  const triggerTransition = () => {
    setInProp(!inProp);
  };
  const instructionsHeader = document.getElementById("instructions-header");

  return (
    <section className="Instructions">
      <header
        id="instructions-header"
        onClick={(event) => {
          toggle(event);
          triggerTransition();
        }}
      >
        <h2>How to Use This Application</h2>
        <div className="accordion-icon">
          {selected !== instructionsHeader ? "+" : "-"}
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
            selected !== instructionsHeader
              ? "accordion-content-hide"
              : "accordion-content-show"
          }
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ex orci, rutrum sit amet bibendum eget, volutpat eu turpis. Morbi eu
            dignissim dolor. Donec vulputate neque nec nunc porta maximus. Nam
            nisl diam, efficitur ut ipsum sit amet, eleifend efficitur diam.
            Proin ultricies magna a felis rhoncus, nec facilisis urna dapibus.
            Fusce feugiat mauris quis dignissim mollis.
          </p>
        </article>
      </CSSTransition>
    </section>
  );
}

export default Instructions;
