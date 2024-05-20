import React from "react";
import Card from "react-bootstrap/Card";
import LogoutButton from "../components/LogoutButton";
import MapComponent from "../components/map/MapComponent";


const MapPage = () => {
    return (
        <>
            <Card body>
                Mapa
            </Card>
            <MapComponent />
        </>
    );
};

export default MapPage;