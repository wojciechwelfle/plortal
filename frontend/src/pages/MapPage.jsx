import React, { useState } from "react";
import MapComponent from "../components/map/MapComponent";
import NavigationBar from "../components/navbar/Navbar";


const MapPage = () => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    return (
        <>
            <NavigationBar showOffcanvas={showOffcanvas} setShowOffcanvas={setShowOffcanvas} />
            
            {/*<MapComponent style={{ marginLeft: showOffcanvas ? '5em' : '0' }}/> */}
            <MapComponent movedToTheLeft="setShowOffcanvas(showOffcanvas)"/>
        </>
    );
};

export default MapPage;
