import React from "react";
import Card from "react-bootstrap/Card";
import LogoutButton from "../components/LogoutButton";
import MapComponent from "../components/map/MapComponent";
import NavigationBar from "../components/navbar/Navbar";


const MapPage = () => {
    return (
        <>
            <NavigationBar/>
            <MapComponent />
        </>
    );
};

export default MapPage;