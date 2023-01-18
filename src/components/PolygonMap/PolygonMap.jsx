import "./style.scss";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const PolygonMap = (props) => {
  return (
    <div className="polygon-map__wrapper">
      <MapContainer center={[-23.219578, -45.899868]} zoom={14}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Polygon color="#009BDE" positions={props.districtLocation} />
      </MapContainer>
    </div>
  );
};

export default PolygonMap;
