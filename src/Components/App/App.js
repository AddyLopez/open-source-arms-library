import React from "react";
import {
  MapContainer,
  TileLayer,
  LayersControl,
  Marker,
  Popup,
} from "react-leaflet";
import Panel from "../Panel/Panel";
//import MarkerPopup from "../MarkerPopup/MarkerPopup";
import { weaponsArray } from "../../Data/arms-data.js";

import "./App.css";

const { BaseLayer } = LayersControl;

function App() {
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
        console.log(element);
        console.log(typeof element);
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

  return (
    <div className="App">
      <MapContainer
        className="Map"
        center={[40, -40]}
        zoom={3}
        scrollWheelZoom={false}
      >
        <LayersControl position="topright">
          <BaseLayer name="OpenStreetMap" checked>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
          </BaseLayer>
          <BaseLayer name="Esri World Imagery">
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
            />
          </BaseLayer>
        </LayersControl>
        {plotMarkers()}
      </MapContainer>
      <Panel data={weaponsArray} />
    </div>
  );
}

export default App;
