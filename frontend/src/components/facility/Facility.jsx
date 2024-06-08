import { useEffect, useState } from 'react';
import "./Facility.css";
import FontSizeBar from "./FontSizeBar";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import "../././../GlobalColors.css";
import { useTheme } from '../theme-context/ThemeContext';

const Facility = () => {
    const { fontSize, theme, updateFontSize, updateTheme } = useTheme();
    const [tempTheme, setTempTheme] = useState(theme);
    const [tempFontSize, setTempFontSize] = useState(fontSize);

    const handleFontSizeChange = (event) => {
        const newSize = parseInt(event.target.value, 10);
        setTempFontSize(newSize);
    };

    const handleThemeChange = (event) => {
        setTempTheme(event.target.value);
    };

    const handleApplyChanges = () => {
        updateFontSize(tempFontSize);
        updateTheme(tempTheme);
    };

    const tempThemeStyles = {
        backgroundColor: `var(--${tempTheme}-background)`,
        color: `var(--${tempTheme}-text)`,
    };

    return (
        <>
            <div className="container">
                <div className="top-column">
                    <h2 style = {{ fontSize : `${fontSize+10}px` }}>Udogodnienia</h2>
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
                                        <MenuItem value="purple">Fioletowy</MenuItem>
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
                            defaultValue="Rozmiar tekstu"
                        />
                        <input
                            name="input-theme"
                            style={tempThemeStyles}
                            className="input-theme"
                            defaultValue="Przykładowy motyw"
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
