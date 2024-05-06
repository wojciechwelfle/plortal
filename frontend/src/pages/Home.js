import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import { logoutUser } from "../routes/userAuthorization";
import LogoutButton from "../components/LogoutButton";
class Home extends Component {
    render() {
        return (
            <>
               <Card body>Home Page</Card>
               <LogoutButton/>
            </>
        );
    }
}

export default Home;
