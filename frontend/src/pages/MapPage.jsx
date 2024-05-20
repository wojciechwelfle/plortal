import React, { useState } from "react";
import MapComponent from "../components/map/MapComponent";
import NavigationBar from "../components/navbar/Navbar";

const MapPage = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(true);
  return (
    <>
      <NavigationBar
        showOffcanvas={showOffcanvas}
        setShowOffcanvas={setShowOffcanvas}
      />
      <MapComponent movedToTheLeft={showOffcanvas} />
    </>
  );
};
export default MapPage;
