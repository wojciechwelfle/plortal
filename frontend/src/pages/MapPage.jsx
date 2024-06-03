import React, { useState } from "react";
import MapComponent from "../components/map/MapComponent";
import NavigationBar from "../components/navbar/Navbar";
import { ThemeProvider } from '../components/facility/ThemeContext';

const MapPage = () => {
  const [selectedRestaurants, setSelectedRestaurants] = useState([]);
  const [selectedParks, setSelectedParks] = useState([]);
  const [selectedBuildings, setSelectedBuildings] = useState([]);
  return (
    <>
        <ThemeProvider>
            <div>
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
        </div>
    </ThemeProvider>
    </>
  );
};
export default MapPage;
