import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../map/MapComponent.css";
import { Icon } from "leaflet";
import LocationSearcher from "./LocationSearcher";
import ResetViewButton from "./ResetViewButton";
import {useTheme} from "../facility/ThemeContext";


const position = [51.74831, 19.45048];

const pinIcon = new Icon({
    iconUrl: "https://cdn-icons-png.freepik.com/256/399/399396.png?semt=ais_hybrid",
    iconSize: [40, 40]
});

const MapWrapper = ({ children }) => {
    return <div className="map-wrapper">{children}</div>;
};

const MapComponent = ({ selectedRestaurants, selectedParks, selectedBuildings }) => {

    const { fontSize, theme } = useTheme();

    return (
        <MapWrapper>
            <MapContainer center={position} zoom={16}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <ResetViewButton
                    position={position}
                    icon="https://cdn-icons-png.flaticon.com/512/2618/2618245.png"
                    title="Reset view"
                />
                <Marker
                    position={position}
                    icon={pinIcon}
                >
                    <Popup>
                        Aleja Politechniki
                    </Popup>
                </Marker>
                {selectedRestaurants.map((location, index) => (
                    <Marker
                        key={index}
                        position={location.position}
                        icon={pinIcon}
                    >
                        <Popup >
                            {location.name}
                        </Popup>
                    </Marker>
                ))}
                {selectedParks.map((location, index) => (
                    <Marker
                        key={index}
                        position={location.position}
                        icon={pinIcon}
                    >
                        <Popup >
                            {location.name}
                        </Popup>
                    </Marker>
                ))}
                {selectedBuildings.map((location, index) => (
                    <Marker
                        key={index}
                        position={location.position}
                        icon={pinIcon}
                    >
                        <Popup >
                            {location.name}
                        </Popup>
                    </Marker>
                ))}
                <LocationSearcher />
            </MapContainer>
        </MapWrapper>
    );
};

export default MapComponent;
