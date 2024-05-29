import React from "react";
import { useMap } from "react-leaflet";
import "../map/ResetViewButton.css";

const ResetViewButton = ({ position, icon, title }) => {
    const map = useMap();

    const handleResetView = () => {
        map.setView(position, 16);
    };

    return (
        <button className="reset-view-button" onClick={handleResetView} title={title}>
            {icon ? <img src={icon} alt="reset icon" /> : "Reset"}
        </button>
    );
};

export default ResetViewButton;
