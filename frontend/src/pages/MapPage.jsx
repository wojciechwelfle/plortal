import React from "react";
import MapComponent from "../components/map/MapComponent";
import FilterButton from "../components/map/FilterButton"
import NavigationBar from "../components/navbar/Navbar";


const MapPage = () => {
  return (
    <>
      <NavigationBar />
      <MapComponent />
      <FilterButton />
    </>
  );
};
export default MapPage;
