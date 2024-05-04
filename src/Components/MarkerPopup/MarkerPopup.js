import React from "react";
import { Popup } from "react-leaflet";
import "./MarkerPopup.css";

function MarkerPopup({
  weaponsArray,
  weaponsIndex,
  manufacturingIndex,
  updatePanel,
}) {
  let title =
    weaponsArray[weaponsIndex].manufacturing[manufacturingIndex].site_name;
  let address =
    weaponsArray[weaponsIndex].manufacturing[manufacturingIndex].site_address;
  // console.log(title, address);

  const handleClick = (event) => {
    // console.log(event.target);
    //console.log(weaponsIndex, manufacturingIndex);
    const researchHeader = document.getElementById("research-header");
    updatePanel(weaponsIndex, manufacturingIndex, researchHeader);
  };

  return (
    <Popup className="MarkerPopup">
      <h3>{title !== null ? title : "Location's name unspecified"}</h3>
      <ul>
        <li>{address !== null ? address : "Address unspecified"}</li>
      </ul>
      <button type="button" className="button" onClick={handleClick}>
        View Profile
      </button>
    </Popup>
  );
}

export default MarkerPopup;
