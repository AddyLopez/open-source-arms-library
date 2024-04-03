import React from "react";
import "./Instructions.css";

function Instructions({ selected, toggle }) {
  const instructionsHeader = document.getElementById("instructions-header");
  return (
    <section className="Instructions">
      <header id="instructions-header" onClick={toggle}>
        <h2>How to Use This Application</h2>
        <div className="accordion-icon">
          {selected !== instructionsHeader ? "+" : "-"}
        </div>
      </header>
      <p className="accordion-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ex
        orci, rutrum sit amet bibendum eget, volutpat eu turpis. Morbi eu
        dignissim dolor. Donec vulputate neque nec nunc porta maximus. Nam nisl
        diam, efficitur ut ipsum sit amet, eleifend efficitur diam. Proin
        ultricies magna a felis rhoncus, nec facilisis urna dapibus. Fusce
        feugiat mauris quis dignissim mollis. Pellentesque ante urna, vulputate
        in enim vitae, egestas egestas metus. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas.
        Aliquam mattis venenatis urna facilisis dapibus. Aliquam erat volutpat.
        Duis sit amet felis a eros interdum sagittis nec vitae ante. Ut porta
        tempus facilisis. Vestibulum urna augue, maximus vel dui varius, pretium
        volutpat libero. Duis in rutrum elit. Cras eu porttitor purus, sit amet
        fringilla nibh.
      </p>
    </section>
  );
}

export default Instructions;
