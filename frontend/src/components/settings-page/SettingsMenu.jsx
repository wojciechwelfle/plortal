import React from "react";
import Card from "react-bootstrap/Card";
import LogoutButton from "../LogoutButton";

const SettingsMenu = () => {
    return (
        <>
            <Card body>
                Ustawienia <LogoutButton />{" "}
            </Card>
        </>
    );
};

export default SettingsMenu;