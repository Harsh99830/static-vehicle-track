import React from "react";
import { MapContainer, Marker, Popup, TileLayer, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
// import SaveRoute from "../Institute/SaveRoute";
import PlaceHolder from './placeholder.png'

const icon = L.icon({
  iconUrl: PlaceHolder,
  iconSize: [38, 38],
});

export default function Maps({ routePoints }) {
  const defaultPosition = [26.9124, 75.7873];

  return (
    <>
    <MapContainer center={defaultPosition} zoom={8} style={{ width: "80%", height: "80%", marginLeft:'100px' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=fb34vZZ8pHivJG8b6xja"
      />
      {/* Markers for Route Points */}
      {routePoints.map((point, index) => (
        <Marker key={index} position={[point.lat, point.lon]} icon={icon}>
          <Popup>{point.display_name}</Popup>
        </Marker>
      ))}

      {/* Polyline for Route */}
      {routePoints.length > 1 && (
        <Polyline
          positions={routePoints.map((point) => [point.lat, point.lon])}
          color="black"
        />
      )}
    </MapContainer>
    
    {/* <SaveRoute/> */}
</>
  );
}
