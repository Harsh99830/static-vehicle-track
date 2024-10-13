import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Polyline, Marker } from 'react-leaflet';
import L from 'leaflet'; // For custom marker icons
import busLogo from './bus_logo.png'; 

const DriverInterface = () => {
  const [routePoints, setRoutePoints] = useState([]); // Holds route points
  const [driverPosition, setDriverPosition] = useState(null); // Holds driver's live position

  // Custom icon for the driver marker
  const driverIcon = L.icon({
    iconUrl: busLogo,
    iconSize: [20, 20], // Size of the icon
  });

  // Load saved route from local storage
  useEffect(() => {
    const savedRoute = localStorage.getItem('savedRoute');
    if (savedRoute) {
      setRoutePoints(JSON.parse(savedRoute)); // Parse and set route points
    }
  }, []);

  // Function to update driver's live position using the browser's Geolocation API
  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setDriverPosition([latitude, longitude]); // Set the driver's live position
      },
      (error) => {
        console.error('Error getting driver position:', error);
      },
      { enableHighAccuracy: true }
    );

    // Cleanup the geolocation watch on component unmount
    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <h3>Driver Interface</h3>
      {routePoints.length > 0 ? (
        <MapContainer
          className="map-container"
          center={driverPosition || [routePoints[0]?.lat, routePoints[0]?.lon]} // Center on driver or route start
          zoom={13}
          style={{ height: '90vh', width: '100vh' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />

          {/* Route polyline */}
          <Polyline
            positions={routePoints.map((point) => [point.lat, point.lon])} // Display route
            color="blue"
          />

          {/* Driver live position marker */}
          {driverPosition && (
            <Marker position={driverPosition} icon={driverIcon}>
            </Marker>
          )}
        </MapContainer>
      ) : (
        <div>No route points available to display.</div>
      )}
    </div>
  );
};

export default DriverInterface;
