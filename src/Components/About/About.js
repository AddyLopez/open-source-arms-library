import React, { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";

import "./About.css";

function About({ selected, toggle }) {
  const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null);

  const triggerTransition = () => {
    setInProp(!inProp);
  };
  const aboutButton = document.getElementById("about-button");

  return (
    <section
      id="about"
      ref={nodeRef}
      className={
        selected === aboutButton
          ? "accordion-content-show"
          : "accordion-content-hide"
      }
    >
      <CSSTransition
        nodeRef={nodeRef}
        in={inProp}
        timeout={200}
        classNames="accordion-paragraph"
      >
        <article id="about-article">
          <p>
            Explore the map and select a marker to view info about where
            Israeli-used arms are manufactured.
          </p>
          <div
            className="about-icon"
            onClick={(event) => {
              toggle(event);
              triggerTransition();
            }}
          >
            {selected !== aboutButton ? "" : "x"}
          </div>
        </article>
      </CSSTransition>
    </section>
  );
}

export default About;
