import { useEffect, useState } from 'react';
import "./Facility.css";
import FontSizeBar from "./FontSizeBar";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import "../././../GlobalColors.css";

const Facility = () => {
    const savedFontSize = parseInt(localStorage.getItem('fontSize'), 10) || 20;
    const savedTheme = localStorage.getItem('theme') || 'light';
    const [fontSize, setFontSize] = useState(savedFontSize);
    const [theme, setTheme] = useState(savedTheme);
    const [tempTheme, setTempTheme] = useState(savedTheme);
    const [tempFontSize, setTempFontSize] = useState(savedFontSize);

    const handleFontSizeChange = (event) => {
        const newSize = parseInt(event.target.value, 10);
        setTempFontSize(newSize);
    };

    const handleThemeChange = (event) => {
        setTempTheme(event.target.value);
    };

    const handleApplyChanges = () => {
        setFontSize(tempFontSize);
        setTheme(tempTheme);
        localStorage.setItem('fontSize', tempFontSize);
        localStorage.setItem('theme', tempTheme);
        document.documentElement.style.setProperty('--font-size', `${tempFontSize}px`);
        document.documentElement.classList.remove('light-theme', 'dark-theme', 'blue-theme');
        document.documentElement.classList.add(`${tempTheme}-theme`);
    };

    useEffect(() => {
        document.documentElement.style.setProperty('--font-size', `${fontSize}px`);
        document.documentElement.classList.remove('light-theme', 'dark-theme', 'blue-theme');
        document.documentElement.classList.add(`${theme}-theme`);
    }, [fontSize, theme]);

    const tempThemeStyles = {
        backgroundColor: `var(--${tempTheme}-background)`,
        color: `var(--${tempTheme}-text)`,
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
                            <label>Motyw</label>
                            <div className="buttons">
                                <FormControl variant="outlined">
                                    <InputLabel id="theme-select-label" className="theme-select">Kontrast</InputLabel>
                                    <Select
                                        labelId="theme-select-label"
                                        value={tempTheme}
                                        onChange={handleThemeChange}
                                        label="Motyw"
                                    >
                                        <MenuItem value="light">Jasny</MenuItem>
                                        <MenuItem value="dark">Ciemny</MenuItem>
                                        <MenuItem value="blue">Niebieski</MenuItem>
                                    </Select>
                                </FormControl>
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
