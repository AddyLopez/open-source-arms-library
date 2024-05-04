import React from "react";
/*import About from "../About/About";*/
/*import Instructions from "../Instructions/Instructions";*/
import Research from "../Research/Research";
import "./Panel.css";

function Panel({
  weaponsIndex,
  manufacturingIndex,
  toggle,
  selected,
  profileIsActive,
}) {
  return (
    <div className="Panel">
      <header className="header">
        <h1 className="desktop">OPEN SOURCE ARMS LIBRARY</h1>
        <h1 className="mobile">OSAL</h1>
        <button>ABOUT</button>
      </header>
      <main className="accordion">
        {/*<About toggle={toggle} selected={selected} />*/}
        {/*<Instructions toggle={toggle} selected={selected} />*/}
        {profileIsActive && (
          <Research
            toggle={toggle}
            weaponsIndex={weaponsIndex}
            manufacturingIndex={manufacturingIndex}
            selected={selected}
          />
        )}
      </main>
    </div>
  );
}

export default Panel;
