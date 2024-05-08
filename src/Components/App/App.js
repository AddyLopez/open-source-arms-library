import React, { useState } from "react";
import { MapContainer, TileLayer, LayersControl } from "react-leaflet";
import Panel from "../Panel/Panel";
import Markers from "../Markers/Markers";

import "./App.css";

const { BaseLayer } = LayersControl;

function App() {
  const [weaponsIndex, setWeaponsIndex] = useState(null);
  const [manufacturingIndex, setManufacturingIndex] = useState(null);
  const [profileIsActive, setProfileIsActive] = useState(false);

  const updatePanel = (weaponsIndex, manufacturingIndex) => {
    setProfileIsActive(true);
    setWeaponsIndex(weaponsIndex);
    setManufacturingIndex(manufacturingIndex);
    //console.log(weaponsIndex, manufacturingIndex);
  };

  return (
    <div className="App">
      <Panel
        weaponsIndex={weaponsIndex}
        manufacturingIndex={manufacturingIndex}
        setProfileIsActive={setProfileIsActive}
        profileIsActive={profileIsActive}
      />
      <MapContainer
        id="map"
        center={[41, -86]}
        zoom={4.25}
        zoomSnap={0.25} // See https://leafletjs.com/examples/zoom-levels/#fractional-zoom
        scrollWheelZoom={false}
      >
        <LayersControl position="topright">
          <BaseLayer name="Jawg Dark" checked>
            <TileLayer
              url="https://tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=zdOJzkFJRW628L7JcL1zd8kfqUvvqeCoSLfgwUSmIccSXJnV3SRDwfoNc7xH9ycW"
              attribution='<a href="https://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
          </BaseLayer>
          <BaseLayer name="Stadia Alidade Smooth Dark">
            <TileLayer
              url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}"
              attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              minNativeZoom={0}
              maxNativeZoom={20}
              ext="png"
            />
          </BaseLayer>
          <BaseLayer name="Stadia Stamen Toner">
            <TileLayer
              url="https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}{r}.{ext}"
              attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              minNativeZoom={0}
              maxNativeZoom={20}
              ext="png"
            />
          </BaseLayer>
        </LayersControl>
        <Markers updatePanel={updatePanel} />
      </MapContainer>
    </div>
  );
}

export default App;
