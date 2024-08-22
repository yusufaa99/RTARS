// components/LeafletMap.js
"use client";
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, useMap, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Default location if geolocation fails
const defaultCenter = [10.0, 8.0]; // Kaduna, Nigeria coordinates

const LocationMarker = ({ onLocationSelect }) => {
  const [position, setPosition] = useState(null);

  useMapEvents({
    click(e) {
      setPosition(e.latlng);
      onLocationSelect(e.latlng);
    },
  });

  return position === null ? null : (
    <Marker position={position}></Marker>
  );
};

const LeafletMap = ({ onLocationSelect }) => {
  const [center, setCenter] = useState(defaultCenter);

  useEffect(() => {
    // Get the user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCenter([latitude, longitude]);
        },
        () => {
          // If geolocation fails, default to Kaduna, Nigeria
          setCenter(defaultCenter);
        }
      );
    } else {
      // If geolocation is not supported, default to Kaduna, Nigeria
      setCenter(defaultCenter);
    }
  }, []);

  const MapComponent = () => {
    const map = useMap();
    useEffect(() => {
      map.setView(center, map.getZoom());
    }, [center]);

    return null;
  };

  return (
    <MapContainer center={center} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <LocationMarker onLocationSelect={onLocationSelect} />
      <MapComponent />
    </MapContainer>
  );
};

export default LeafletMap;


// import React, { useState, useEffect } from 'react';
// import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

// const LocationMarker = ({ onLocationSelect }) => {
//   const [position, setPosition] = useState(null);

//   useMapEvents({
//     click(e) {
//       setPosition(e.latlng);
//       onLocationSelect(e.latlng);
//     },
//   });

//   return position === null ? null : (
//     <Marker position={position}></Marker>
//   );
// };

// const LeafletMap = ({ onLocationSelect }) => {
//   const [center, setCenter] = useState([51.505, -0.09]); // Default to London

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setCenter([position.coords.latitude, position.coords.longitude]);
//         },
//         (error) => {
//           console.error("Error getting the user's location:", error);
//           // Handle error (e.g., fallback to a default location)
//         }
//       );
//     } else {
//       console.error('Geolocation is not supported by this browser.');
//       // Handle the case where geolocation is not available
//     }
//   }, []);

//   return (
//     <MapContainer center={center} zoom={13} style={{ height: '400px', width: '100%' }}>
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       <LocationMarker onLocationSelect={onLocationSelect} />
//     </MapContainer>
//   );
// };

// export default LeafletMap;



// import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import { useEffect, useState } from 'react';
// import L from 'leaflet';

// // Function to handle map events and update position
// function LocationMarker({ onLocationSelect }) {
//   const [position, setPosition] = useState(null);

//   const map = useMapEvents({
//     locationfound(e) {
//       setPosition(e.latlng);
//       map.flyTo(e.latlng, map.getZoom());
//       onLocationSelect(e.latlng); // Pass the selected location back to the parent
//     },
//     click(e) {
//       setPosition(e.latlng);
//       onLocationSelect(e.latlng); // Pass the clicked location back to the parent
//     },
//   });

//   useEffect(() => {
//     map.locate({ setView: true, maxZoom: 16 });
//   }, [map]);

//   return position === null ? null : (
//     <Marker position={position} />
//   );
// }

// export default function LeafletMap({ onLocationSelect }) {
//   const kadunaPosition = [10.5095, 7.4276]; // Default position for Kaduna, Nigeria

//   return (
//     <MapContainer center={kadunaPosition} zoom={13} style={{ height: "400px", width: "100%" }}>
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       <LocationMarker onLocationSelect={onLocationSelect} />
//     </MapContainer>
//   );
// }
