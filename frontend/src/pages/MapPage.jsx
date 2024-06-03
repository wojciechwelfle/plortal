import React, { useState } from "react";
import MapComponent from "../components/map/MapComponent";
import NavigationBar from "../components/navbar/Navbar";

const MapPage = () => {
  const [selectedRestaurants, setSelectedRestaurants] = useState([]);
  const [selectedParks, setSelectedParks] = useState([]);
  const [selectedBuildings, setSelectedBuildings] = useState([]);
  return (
    <>
      <NavigationBar
        selectedRestaurants={selectedRestaurants} setSelectedRestaurants={setSelectedRestaurants}
        selectedParks={selectedParks} setSelectedParks={setSelectedParks}
        selectedBuildings={selectedBuildings} setSelectedBuildings={setSelectedBuildings}
      />
      <MapComponent
        selectedRestaurants={selectedRestaurants}
        selectedParks={selectedParks}
        selectedBuildings={selectedBuildings}
      />
    </>
  );
};
export default MapPage;
