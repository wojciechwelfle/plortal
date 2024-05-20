import React, { useState } from "react";
import MapComponent from "../components/map/MapComponent";
import NavigationBar from "../components/navbar/Navbar";

const MapPage = () => {
  return (
    <>
      <NavigationBar />
      <MapComponent />
    </>
  );
};
export default MapPage;
