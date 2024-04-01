import React from "react";
import { Marker } from "react-leaflet";
import MarkerPopup from "../MarkerPopup/MarkerPopup";
import { weaponsArray } from "../../Data/arms-data.js";

//console.log(weaponsArray);
const locationsList = [];
for (let i = 0; i < weaponsArray.length; i++) {
  weaponsArray[i].manufacturing.forEach(
    (manufacturingSubset, manufacturingIndex) => {
      if (
        manufacturingSubset.coordinates.latitude === null ||
        manufacturingSubset.coordinates.latitude === undefined
      ) {
        //console.log(manufacturingSubset.coordinates.latitude);
        return;
      } else {
        let lat = parseFloat(manufacturingSubset.coordinates.latitude);
        let long = parseFloat(manufacturingSubset.coordinates.longitude);
        locationsList.push({
          coords: [lat, long],
          weaponsIndex: i,
          manufacturingIndex: manufacturingIndex,
        });
      }
    }
  );
}
//console.log(locationsList);

function Markers() {
  const plotMarkers = () => {
    const markers = locationsList.map((locationItem) => {
      return (
        <Marker key={locationItem.coords} position={locationItem.coords}>
          <MarkerPopup
            weaponsIndex={locationItem.weaponsIndex}
            manufacturingIndex={locationItem.manufacturingIndex}
          />
        </Marker>
      );
    });
    return markers;
  };
  return <>{plotMarkers()}</>;
}

export default Markers;
