import React, {useEffect, useState} from 'react';
import NavbarSettingsMenu from './NavbarSettingsMenu';
import ChangePassword from './ChangePassword';
import DeleteNote from './DeleteNote';
import './SettingsMenu.css';
import NavigationBar from '../navbar/Navbar';
import { useTheme } from '../facility/ThemeContext';

const SettingsMenu = () => {
    const [activeTab, setActiveTab] = useState('');

    const { fontSize, theme } = useTheme();


    return (
        <>
            <NavigationBar />
            <h2 style={{ fontSize: `${fontSize+5}px` }}>Ustawienia</h2>
            <NavbarSettingsMenu setActiveTab={setActiveTab} />
            <div className="menu">
                {activeTab === 'change-password' && <ChangePassword />}
                {activeTab === 'delete-note' && <DeleteNote />}
            </div>
        </>
    );
};

export default SettingsMenu;
