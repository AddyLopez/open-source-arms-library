import React from "react";

function About({ selected, toggle }) {
  const aboutHeader = document.getElementById("about-header");
  return (
    <section className="About">
      <header id="about-header" onClick={toggle}>
        <h2>About This Application</h2>
        <div className="accordion-icon">
          {selected !== aboutHeader ? "+" : "-"}
        </div>
      </header>
      <p className="accordion-content">
        This application presents data from an open-source library of research
        pertaining to the manufacture of arms and arms' components known to be
        used in U.S. imperialist wars.
      </p>
    </section>
  );
}

export default About;
