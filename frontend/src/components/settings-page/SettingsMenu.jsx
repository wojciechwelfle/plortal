import React, {useEffect, useState} from 'react';
import NavbarSettingsMenu from './NavbarSettingsMenu';
import ChangePassword from './ChangePassword';
import DeleteNote from './DeleteNote';
import './SettingsMenu.css';
import NavigationBar from '../navbar/Navbar';

const SettingsMenu = () => {
    const [activeTab, setActiveTab] = useState('');

    const savedFontSize = parseInt(localStorage.getItem('fontSize'), 10) || 20;
    const savedTheme = localStorage.getItem('theme') || 'light';
    const [fontSize] = useState(savedFontSize);
    const [theme] = useState(savedTheme);


    useEffect(() => {
        document.documentElement.style.setProperty('--font-size', `${fontSize}px`);
        document.documentElement.classList.remove('light-theme', 'dark-theme', 'blue-theme', 'purple-theme');
        document.documentElement.classList.add(`${theme}-theme`);
    }, [fontSize, theme]);


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
