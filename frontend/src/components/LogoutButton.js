import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import { logoutUser } from "../routes/userAuthorization";
import "./LogoutButton.css";
class LogoutButton extends Component {
    render() {
        return (
            <>
                <div className="LogoutButton">
                    <div className="d-grid gap-2 myDiv">
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
    }
}

export default LogoutButton;
