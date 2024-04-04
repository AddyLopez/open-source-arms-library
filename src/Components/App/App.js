import React, { useState } from "react";
import { MapContainer, TileLayer, LayersControl } from "react-leaflet";
import Panel from "../Panel/Panel";
import Markers from "../Markers/Markers";

import "./App.css";

const { BaseLayer } = LayersControl;

function App() {
  const [weaponsIndex, setWeaponsIndex] = useState(null);
  const [manufacturingIndex, setManufacturingIndex] = useState(null);
  const updatePanel = (weaponsIndex, manufacturingIndex) => {
    setWeaponsIndex(weaponsIndex);
    setManufacturingIndex(manufacturingIndex);
    //console.log(weaponsIndex, manufacturingIndex);
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
          <BaseLayer name="Esri World Imagery" checked>
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
            />
          </BaseLayer>
          <BaseLayer name="OpenStreetMap">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
          </BaseLayer>
        </LayersControl>
        <Markers updatePanel={updatePanel} />
      </MapContainer>
      <Panel
        weaponsIndex={weaponsIndex}
        manufacturingIndex={manufacturingIndex}
      />
    </div>
  );
}

export default App;
