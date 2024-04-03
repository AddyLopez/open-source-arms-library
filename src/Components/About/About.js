import React, { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";

function About({ selected, toggle }) {
  const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null);

  const triggerTransition = () => {
    setInProp(!inProp);
  };
  const aboutHeader = document.getElementById("about-header");

  return (
    <section className="About">
      <header
        id="about-header"
        onClick={(event) => {
          toggle(event);
          triggerTransition();
        }}
      >
        <h2>About This Application</h2>
        <div className="accordion-icon">
          {selected !== aboutHeader ? "+" : "-"}
        </div>
      </header>
      <CSSTransition
        nodeRef={nodeRef}
        in={inProp}
        timeout={375}
        classNames="accordion-paragraph"
      >
        <p
          ref={nodeRef}
          className={
            selected !== aboutHeader
              ? "accordion-content-hide"
              : "accordion-content-show"
          }
        >
          This application presents data from an open-source library of research
          pertaining to the manufacture of arms and arms' components known to be
          used in U.S. imperialist wars.
        </p>
      </CSSTransition>
    </section>
  );
}

export default About;
