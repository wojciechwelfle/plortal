import React, { useState } from "react";
import MapComponent from "../components/map/MapComponent";
import NavigationBar from "../components/navbar/Navbar";

const MapPage = () => {
  const [selectedLocations, setSelectedLocations] = useState([]);

  return (
    <>
      <NavigationBar selectedLocations={selectedLocations} setSelectedLocations={setSelectedLocations} />
      <MapComponent selectedLocations={selectedLocations} />
    </>
  );
};
export default MapPage;
