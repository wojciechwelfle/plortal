import { useEffect, useState } from 'react';
import "./Facility.css";
import FontSizeBar from "./FontSizeBar";
import ThemeSwitch from "./ThemeSwitch";
import "../././../GlobalColors.css";

const Facility = () => {
    const savedFontSize = parseInt(localStorage.getItem('fontSize'), 10) || 20;
    const savedTheme = localStorage.getItem('theme') || 'light';
    const [fontSize, setFontSize] = useState(savedFontSize);
    const [isDarkTheme, setIsDarkTheme] = useState(savedTheme === 'dark');
    const [tempFontSize, setTempFontSize] = useState(savedFontSize);
    const [tempTheme, setTempTheme] = useState(savedTheme === 'dark');

    const handleFontSizeChange = (event) => {
        const newSize = parseInt(event.target.value, 10);
        setTempFontSize(newSize);
    };

    const handleThemeChange = () => {
        setTempTheme(!tempTheme);
    };

    const handleApplyChanges = () => {
        setFontSize(tempFontSize);
        setIsDarkTheme(tempTheme);
        localStorage.setItem('fontSize', tempFontSize);
        localStorage.setItem('theme', tempTheme ? 'dark' : 'light');
        document.documentElement.style.setProperty('--font-size', `${tempFontSize}px`);
        document.documentElement.classList.add(tempTheme ? 'dark-theme' : 'light-theme');
        document.documentElement.classList.remove(tempTheme ? 'light-theme' : 'dark-theme');
    };

    useEffect(() => {
        document.documentElement.style.setProperty('--font-size', `${fontSize}px`);
        if (isDarkTheme) {
            document.documentElement.classList.add('dark-theme');
            document.documentElement.classList.remove('light-theme');
        } else {
            document.documentElement.classList.add('light-theme');
            document.documentElement.classList.remove('dark-theme');
        }
    }, [fontSize, isDarkTheme]);

    const tempThemeStyles = {
        backgroundColor: tempTheme ? 'var(--dark-background)' : 'var(--light-background)',
        color: tempTheme ? 'var(--dark-text)' : 'var(--light-text)',
    };

    return (
        <>
            <div className="container">
                <div className="top-column">
                    <h2>Udogodnienia</h2>
                </div>
                <div className="column-wrapper">
                    <div className="left-column">
                        <div className="control-group">
                            <label>Czcionka</label>
                            <div className="buttons">
                                <FontSizeBar onChange={handleFontSizeChange} value={tempFontSize} />
                            </div>
                        </div>
                        <div className="control-group">
                            <label>Kontrast</label>
                            <div className="buttons">
                                <ThemeSwitch onChange={handleThemeChange} checked={tempTheme} />
                            </div>
                        </div>
                    </div>
                    <div className="right-column">
                        <input
                            name="input-text-size"
                            style={{ fontSize: `${tempFontSize}px` }}
                            className="input-text-size"
                            defaultValue="Przykładowy tekst"
                        />
                        <input
                            name="input-theme"
                            style={tempThemeStyles}
                            className="input-theme"
                            defaultValue="Obecny motyw"
                        />
                    </div>
                </div>
                <div className="bottom-div">
                    <button className="button-submit" onClick={handleApplyChanges}><b>Zastosuj</b></button>
                </div>
            </div>
        </>
    );
};

export default Facility;
