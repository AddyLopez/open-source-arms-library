import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import Panel from "../Panel/Panel";
import Markers from "../Markers/Markers";

import "./App.css";

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

  /*
  const randomizeMapContinent = () => {
    const centers = [
      [41, -86],
      [48, 13],
    ];
    const randomIndex = Math.floor(Math.random() * 2);
    return centers[randomIndex];
  };
  */

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
        /*center={randomizeMapContinent()}*/
        center={[41, -86]}
        zoom={4.25}
        zoomSnap={0.25} // See https://leafletjs.com/examples/zoom-levels/#fractional-zoom
        scrollWheelZoom={false}
      >
        <TileLayer
          name="Jawg Dark"
          url="https://tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=zdOJzkFJRW628L7JcL1zd8kfqUvvqeCoSLfgwUSmIccSXJnV3SRDwfoNc7xH9ycW"
          attribution='<a href="https://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Markers updatePanel={updatePanel} />
      </MapContainer>
    </div>
  );
}

export default App;
