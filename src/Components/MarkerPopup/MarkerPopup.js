import React from "react";
import { Popup } from "react-leaflet";
import "./MarkerPopup.css";

function MarkerPopup({ weaponsIndex }) {
  console.log(weaponsIndex);
  return <Popup>Hello, from MarkerPopup!</Popup>;
}

export default MarkerPopup;
