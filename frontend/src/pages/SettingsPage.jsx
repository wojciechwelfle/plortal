import SettingsMenu from "../components/settings-page/SettingsMenu";
import React from "react";
import { ThemeProvider } from '../components/facility/ThemeContext';

const SettingsPage = () => {
    return (
        <>
            <ThemeProvider>
                <div>
            <SettingsMenu />
                </div>
            </ThemeProvider>
        </>
    );
};

export default SettingsPage;