import React, { useState, useRef, memo } from "react";
import ResearchDetails from "../ResearchDetails/ResearchDetails";
import Contribute from "../Contribute/Contribute";
import { CSSTransition } from "react-transition-group";

import "./Research.css";

const Research = memo(function Research({
  weaponsIndex,
  manufacturingIndex,
  profileIsActive,
  setProfileIsActive,
}) {
  const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null);

  const triggerTransition = () => {
    setInProp(!inProp);
  };

  return (
    <section className="Research">
      <header>
        <div
          id="accordion-icon"
          className="accordion-icon"
          onClick={() => {
            if (profileIsActive === true) {
              setProfileIsActive(!profileIsActive);
            }
            triggerTransition();
          }}
        >
          x
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
            profileIsActive
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
              <Contribute profileIsActive={profileIsActive} />
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
