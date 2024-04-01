import React from "react";
import { Popup } from "react-leaflet";
import { weaponsArray } from "../../Data/arms-data.js";
import "./MarkerPopup.css";

console.log(weaponsArray);
function MarkerPopup({ weaponsIndex, manufacturingIndex }) {
  console.log(weaponsIndex, manufacturingIndex);
  let title =
    weaponsArray[weaponsIndex].manufacturing[manufacturingIndex].site_name;
  let address =
    weaponsArray[weaponsIndex].manufacturing[manufacturingIndex].site_address;
  let coordinates = `${weaponsArray[weaponsIndex].manufacturing[manufacturingIndex].coordinates.latitude}, ${weaponsArray[weaponsIndex].manufacturing[manufacturingIndex].coordinates.longitude}`;
  // console.log(title, address, coordinates);
  return (
    <Popup className="MarkerPopup">
      <h3>{title !== null ? title : "Location's name unspecified"}</h3>
      <ul>
        <li>{address !== null ? address : "Address unspecified"}</li>
      </ul>
    </Popup>
  );
}

export default MarkerPopup;
