import React from "react";
import { Popup } from "react-leaflet";
import { weaponsArray } from "../../Data/arms-data.js";
import "./MarkerPopup.css";

console.log(weaponsArray);
function MarkerPopup({ weaponsIndex, manufacturingIndex, updatePanel }) {
  //console.log(weaponsIndex, manufacturingIndex);
  let title =
    weaponsArray[weaponsIndex].manufacturing[manufacturingIndex].site_name;
  let address =
    weaponsArray[weaponsIndex].manufacturing[manufacturingIndex].site_address;
  // console.log(title, address);

  const handleClick = (event) => {
    // console.log(event.target);
    updatePanel(weaponsIndex, manufacturingIndex);
  };

  return (
    <Popup className="MarkerPopup">
      <h3>{title !== null ? title : "Location's name unspecified"}</h3>
      <ul>
        <li>{address !== null ? address : "Address unspecified"}</li>
      </ul>
      <a type="button" className="button" onClick={handleClick}>
        See Details
      </a>
    </Popup>
  );
}

export default MarkerPopup;
