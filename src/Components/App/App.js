import React, { useState } from "react";
import { MapContainer, TileLayer, LayersControl } from "react-leaflet";
import Panel from "../Panel/Panel";
import Markers from "../Markers/Markers";

import "./App.css";

const { BaseLayer } = LayersControl;

function App() {
  const [weaponsIndex, setWeaponsIndex] = useState(null);
  const [manufacturingIndex, setManufacturingIndex] = useState(null);
  const [selected, setSelected] = useState(null);
  const [profileIsActive, setProfileIsActive] = useState(false);

  const toggleSelected = (event) => {
    if (selected === event.target) {
      return setSelected(null);
    }
    return setSelected(event.target);
  };

  const updatePanel = (weaponsIndex, manufacturingIndex, markerPopupButton) => {
    setProfileIsActive(true);
    setWeaponsIndex(weaponsIndex);
    setManufacturingIndex(manufacturingIndex);
    setSelected(markerPopupButton);
    //console.log(weaponsIndex, manufacturingIndex);
  };
  console.log(selected);

  return (
    <div className="App">
      <Panel
        weaponsIndex={weaponsIndex}
        manufacturingIndex={manufacturingIndex}
        toggle={toggleSelected}
        selected={selected}
        setSelected={setSelected}
        profileIsActive={profileIsActive}
      />
      <MapContainer
        id="map"
        center={[41, -86]}
        zoom={3}
        scrollWheelZoom={false}
      >
        <LayersControl position="topright">
          <BaseLayer name="Esri World Imagery" checked>
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              attribution="Tiles Powered by Esri: &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
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
    </div>
  );
}

export default App;
