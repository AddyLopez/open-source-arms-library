import React from "react";
import { Marker, Popup } from "react-leaflet";
//import MarkerPopup from "../MarkerPopup/MarkerPopup";

function Markers({ weaponsArray }) {
  const plotMarkers = () => {
    const coordinatesList = weaponsArray.map((weaponElement) => {
      return weaponElement.manufacturing.map((site) => {
        if (site.coordinates.latitude !== null) {
          const latitudeFloat = parseFloat(site.coordinates.latitude);
          const longitudeFloat = parseFloat(site.coordinates.longitude);
          return [latitudeFloat, longitudeFloat];
        } else {
          return `${site.coordinates.latitude}, ${site.coordinates.longitude}`;
        }
      });
    });
    //console.log(coordinatesList);
    const filteredCoordinatesList = coordinatesList.filter(
      (item) => item.includes("null, null") === false
    );
    const markers = filteredCoordinatesList.map((item) => {
      return item.map((element) => {
        //console.log(element);
        //console.log(typeof element);
        return (
          <Marker key={element} position={element}>
            <Popup>{element}</Popup>
          </Marker>
        );
      });
    });
    return markers;
    // console.log(filteredCoordinates);
  };

  return <>{plotMarkers()}</>;
}

export default Markers;
