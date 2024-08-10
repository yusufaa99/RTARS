import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function LeafletMap({ latitude, longitude }) {
  return (
    <MapContainer center={[latitude, longitude]} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[latitude, longitude]}>
        <Popup>Accident Location</Popup>
      </Marker>
    </MapContainer>
  );
}
