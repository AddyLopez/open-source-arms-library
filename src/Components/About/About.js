import React from "react";

function About() {
  return (
    <section className="About">
      <label for="first">About This Application</label>
      <input type="radio" name="accordian" id="first" checked />
      <p className="accordian-content">
        This application presents data from an open-source library of research
        pertaining to the manufacture of arms and arms' components known to be
        used in U.S. imperialist wars.
      </p>
    </section>
  );
}

export default About;
