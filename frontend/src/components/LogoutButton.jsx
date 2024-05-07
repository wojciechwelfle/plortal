import React from "react";
import { Button } from "react-bootstrap";
import { logoutUser } from "../routes/userAuthorization";
import "./LogoutButton.css";

const LogoutButton = () => {
    return (
        <>
            <div className="logout-button">
                <div className="d-grid gap-2">
                    <Button
                        variant="dark"
                        className="Btn"
                        type="submit"
                        onClick={logoutUser}
                    >
                        Logout
                    </Button>
                </div>
            </div>
        </>
    );
};

export default LogoutButton;
