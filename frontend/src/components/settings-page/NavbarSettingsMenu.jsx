import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './SettingsMenu.css';

const NavbarSettingsMenu = ({ setActiveTab }) => {
    return (
        <Navbar className="custom-navbar">
            <Nav className="me-auto navbar-menu">
                <Nav.Link onClick={() => setActiveTab('change-password')} className="navbar-button">Zmień hasło</Nav.Link>
                <Nav.Link onClick={() => setActiveTab('delete-note')} className="navbar-button">Usuń notatkę</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default NavbarSettingsMenu;
