import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `${value}px`;
}


const FontSizeBar = ({ onChange, value }) => {
    return (
        <Box sx={{ width: 298 }}>
            <Slider
                aria-label="Temperature"
                defaultValue={30}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                shiftStep={30}
                step={5}
                marks
                min={15}
                max={30}
                value={value}
                onChange={onChange}
            />
        </Box>
    )};

export default FontSizeBar;