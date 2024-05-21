import React, { useState } from 'react';
import NavbarSettingsMenu from './NavbarSettingsMenu';
import ChangePassword from './ChangePassword';
import DeleteNote from './DeleteNote';
import './SettingsMenu.css';
import NavigationBar from '../navbar/Navbar';

const SettingsMenu = () => {
    const [activeTab, setActiveTab] = useState('');

    return (
        <>
            <NavigationBar />
            <h2>Ustawienia</h2>
            <NavbarSettingsMenu setActiveTab={setActiveTab} />
            <div className="menu">
                {activeTab === 'change-password' && <ChangePassword />}
                {activeTab === 'delete-note' && <DeleteNote />}
            </div>
        </>
    );
};

export default SettingsMenu;
