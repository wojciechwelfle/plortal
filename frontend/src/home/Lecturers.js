import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import { logoutUser } from "../routes/userAuthorization";
import LogoutButton from "../components/LogoutButton";
import Sidebar from "../components/Sidebar";
class Lecturers extends Component {
    render() {
        return (
            <>
               <Card body>Home Page</Card>
               <LogoutButton/>
               <Sidebar/>
            </>
        );
    }
}

export default Lecturers;
