import React, { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";

import "./About.css";

function About({ aboutIsOpen, setAboutIsOpen }) {
  const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null);

  const triggerTransition = () => {
    setInProp(!inProp);
  };

  return (
    <section
      id="about"
      ref={nodeRef}
      className={aboutIsOpen ? "content-show" : "content-hide"}
    >
      <CSSTransition
        nodeRef={nodeRef}
        in={inProp}
        timeout={200}
        classNames="accordion-paragraph"
      >
        <article id="about-article">
          <p>
            Explore the world map and select a marker. Click "View More" for
            more information on the weapon.
          </p>
          <div
            className="about-icon"
            onClick={() => {
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
