import { useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import React from 'react';

const LeafletMap = () => {
    const [lat, setLat] = useState('');
    const [lng, setLng] = useState('');
    const [position, setPosition] = useState([51.505, -0.09]); // Default position

    const handleSearch = () => {
        const latitude = parseFloat(lat);
        const longitude = parseFloat(lng);
        if (!isNaN(latitude) && !isNaN(longitude)) {
            setPosition([latitude, longitude]);
        } else {
            alert('Please enter valid latitude and longitude values.');
        }
    };

    // Fix default marker icon
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    });

    return (
        <div>
            {/* <div style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    placeholder="Latitude"
                    value={lat}
                    onChange={(e) => setLat(e.target.value)}
                    style={{ marginRight: '10px' }}
                />
                <input
                    type="text"
                    placeholder="Longitude"
                    value={lng}
                    onChange={(e) => setLng(e.target.value)}
                    style={{ marginRight: '10px' }}
                />
                <button onClick={handleSearch}>Search</button>
            </div> */}
            <h3>Enter Coordinates</h3>
            <div style={{ marginBottom: '10px' }}>
                <label>
                    Latitude:
                    <input
                        type="number"
                        value={lat}
                        onChange={(e) => setLat(e.target.value)}
                        placeholder="Latitude"
                        style={{ marginLeft: '10px', marginRight: '20px' }}
                    />
                </label>
                <label>
                    Longitude:
                    <input
                        type="number"
                        value={lng}
                        onChange={(e) => setLng(e.target.value)}
                        placeholder="Longitude"
                        style={{ marginLeft: '10px' }}
                    />
                </label>
                <button onClick={handleSearch} style={{ marginLeft: '20px' }}>
                    Search
                </button>
            </div>

            <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                />
                <Marker position={position} />
            </MapContainer>
        </div>
    );
};

export default LeafletMap;
