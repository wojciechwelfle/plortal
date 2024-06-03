import React from "react";
import "./App.css";
import PageRouter from "./routes/PageRouter";
import { ThemeProvider } from './components/theme-context/ThemeContext';

const App = () => {
    return (
        <>
            <ThemeProvider>
            <PageRouter />
            </ThemeProvider>
        </>
    );
};

export default App;
