import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../map/MapComponent.css";
import { Icon } from "leaflet";
import LocationSearcher from "./LocationSearcher";

const position = [51.748310, 19.450480];

const pinIcon = new Icon({
    iconUrl: "https://cdn-icons-png.freepik.com/256/399/399396.png?semt=ais_hybrid",
    iconSize: [40, 40]
});

const MapWrapper = ({ children, className }) => {
    return <div className={className}>{children}</div>;
};

const MapComponent = () => {
    const savedFontSize = parseInt(localStorage.getItem('fontSize'), 10) || 20;
    const savedTheme = localStorage.getItem('theme') || 'light';
    const [fontSize, setFontSize] = useState(savedFontSize);
    const [theme, setTheme] = useState(savedTheme);

    useEffect(() => {
        document.documentElement.style.setProperty('--font-size', `${fontSize}px`);
        document.documentElement.classList.remove('light-theme', 'dark-theme', 'blue-theme', 'purple-theme');
        document.documentElement.classList.add(`${theme}-theme`);
    }, [fontSize, theme]);


    return (
        <MapWrapper >
            <MapContainer center={position} zoom={16}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={pinIcon}>
                    <Popup>
                        Aleja Politechniki
                    </Popup>
                </Marker>
                <LocationSearcher />
            </MapContainer>
        </MapWrapper>
    );
};

export default MapComponent;
