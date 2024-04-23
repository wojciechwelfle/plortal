import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import LogoutButton from "../components/LogoutButton";
import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
class Maps extends Component {
    render() {
        return (
            <>
               <Card body>Home Page</Card>
               <LogoutButton/>
               <Sidebar/>
               <Map/>
            </>
        );
    }
}

export default Maps;
