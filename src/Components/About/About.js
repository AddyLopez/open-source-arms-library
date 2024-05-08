import React, { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";

import "./About.css";

function About({ aboutIsOpen, setAboutIsOpen }) {
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
        aboutIsOpen ? "accordion-content-show" : "accordion-content-hide"
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
            Explore the map and select a marker. Click "View More" for more
            information on the weapon.
          </p>
          <div
            className="about-icon"
            onClick={(event) => {
              setAboutIsOpen(!aboutIsOpen);
              triggerTransition();
            }}
          >
            {aboutIsOpen ? "x" : ""}
          </div>
        </article>
      </CSSTransition>
    </section>
  );
}

export default About;
