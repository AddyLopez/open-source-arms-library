import React, { useState } from "react";
import About from "../About/About";
import Research from "../Research/Research";
import AboutButton from "../AboutButton/AboutButton";
import "./Panel.css";

function Panel({
  weaponsIndex,
  manufacturingIndex,
  toggle,
  selected,
  profileIsActive,
  setSelected,
}) {
  const [aboutIsOpen, setAboutIsOpen] = useState(true);

  return (
    <div className="Panel">
      <header className="primary-header">
        <h1 className="desktop">
          <a href="/" title="To OSAL home page">
            OPEN SOURCE ARMS LIBRARY
          </a>
        </h1>
        <h1 className="mobile">
          <a href="/" title="To OSAL home page">
            OSAL
          </a>
        </h1>
        <AboutButton
          aboutIsOpen={aboutIsOpen}
          setAboutIsOpen={setAboutIsOpen}
        />
      </header>
      <main className="accordion">
        <About aboutIsOpen={aboutIsOpen} setAboutIsOpen={setAboutIsOpen} />
        {profileIsActive && (
          <Research
            toggle={toggle}
            weaponsIndex={weaponsIndex}
            manufacturingIndex={manufacturingIndex}
            selected={selected}
            setSelected={setSelected}
          />
        )}
      </main>
    </div>
  );
}

export default Panel;
