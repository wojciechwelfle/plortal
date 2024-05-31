import React, { useEffect, useState } from "react";
import PanelHeader from "../PanelHeader";
import AddLocationForm from "./AddLocationForm";
import AdminNav from "../AdminNav";
import LocationPanel from "./LocationPanel";
import { getAllLocations } from "../../../services/locationService";
import { logoutUser } from "../../../routes/userAuthorization";

const MapPanel = () => {
    const [locations, setLocations] = useState([]);

    const getLocations = () => {
        getAllLocations()
            .then((response) => {
                setLocations(response.data);
            })
            .catch((error) => {
                console.log(error);
                logoutUser();
            });
    };

    useEffect(() => {
        getLocations();
    }, []);

    const navItems = [
        {
            eventKey: "first",
            text: "Dodaj Lokacje",
            component: <AddLocationForm getLocations={getLocations} />,
        },
        {
            eventKey: "second",
            text: "Usuń Lokacje",
            component: <LocationPanel locations={locations} setLocations={setLocations} />,
        },
    ];

    return (
        <>
            <PanelHeader>Panel zarządzania budynkami mapy</PanelHeader>
            <div style={{ padding: "20px" }}>
                <AdminNav navItems={navItems} />
            </div>
        </>
    );
};

export default MapPanel;
