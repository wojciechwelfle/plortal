import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import { logoutUser } from "../routes/userAuthorization";
class Home extends Component {
    render() {
        return (
            <>
               <Card body>Home Page</Card>
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
            </>
        );
    }
}

export default Home;
