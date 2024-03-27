import { MapContainer, TileLayer, LayersControl } from "react-leaflet";

/*import { Panel } from "../Panel/Panel";*/
import "./App.css";

const { BaseLayer } = LayersControl;

function App() {
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
      </MapContainer>
    </div>
  );
}

export default App;
