import React from "react";
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "../map/MapComponent.css"
import { Icon } from "leaflet";

const position = [51.748310, 19.450480];

const pinIcon = new Icon({
    iconUrl: "https://cdn-icons-png.freepik.com/256/399/399396.png?semt=ais_hybrid",
    iconSize: [40, 40]
})

const MapComponent = () => {
    return (
        <MapContainer center={position} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={pinIcon}>
                <Popup>
                    Aleja Politechniki
                </Popup>
            </Marker>
        </MapContainer>
    )
}
export default MapComponent;
