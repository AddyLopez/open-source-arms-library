import React from "react";
import About from "../About/About";
/*import Instructions from "../Instructions/Instructions";*/
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
  return (
    <div className="Panel">
      <header className="header">
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
        <AboutButton setSelected={setSelected} />
      </header>
      <main className="accordion">
        <About toggle={toggle} selected={selected} />
        {/*<Instructions toggle={toggle} selected={selected} />*/}
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
