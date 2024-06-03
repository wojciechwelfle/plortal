import React from 'react';
import NavigationBar from "../components/navbar/Navbar";
import Schedule from "../components/schedule/Schedule";
import { ThemeProvider } from '../components/facility/ThemeContext'; 

const SchedulePage = () => {
    return (
        <ThemeProvider>
            <div>
                <NavigationBar />
                <Schedule />
            </div>
        </ThemeProvider>
    );
};

export default SchedulePage;
