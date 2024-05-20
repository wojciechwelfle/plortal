import React from "react";
import Card from "react-bootstrap/Card";
import LogoutButton from "../LogoutButton";
import NavbarSettingsMenu from "./NavbarSettingsMenu";
import "./SettingsMenu.css";
import NavigationBar from "../navbar/Navbar";

const SettingsMenu = () => {
    return (
        <>
            <NavigationBar />
            <h2>Ustawienia</h2>
            <NavbarSettingsMenu />
            <div className="menu">
                    <p>Przykład strony</p>
            </div>
        </>
    );
};

export default SettingsMenu;
