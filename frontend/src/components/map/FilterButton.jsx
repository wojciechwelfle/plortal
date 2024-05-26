import { Checkbox, Button } from 'antd';
import React, { useState } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./FilterButton.css";
import Dropdown from 'react-bootstrap/Dropdown';

const locations = [
    {
        name: 'Budynek A1',
        position: [51.751065, 19.454060]
    },
    {
        name: 'Budynek A4',
        position: [51.750617, 19.455540]
    },
    {
        name: 'Budynek C6',
        position: [51.749694, 19.453488]
    },
    {
        name: 'Budynek C11',
        position: [51.750360, 19.454620]
    },
    {
        name: 'Budynek D6',
        position: [51.749100, 19.454180]
    }
];

const FilterButton = ({ selectedLocations, setSelectedLocations }) => {
    const [checkedState, setCheckedState] = useState(new Array(locations.length).fill(false));

    const handleOnChange = (index) => {
        setCheckedState(prevState => {
            const updatedCheckedState = [...prevState];
            updatedCheckedState[index] = !updatedCheckedState[index];

            const selected = updatedCheckedState
                .map((checked, i) => checked ? locations[i] : null)
                .filter(location => location !== null);

            setSelectedLocations(selected);
            return updatedCheckedState;
        });
    };

    const handleReset = () => {
        setCheckedState(new Array(locations.length).fill(false));
        setSelectedLocations([]);
    };

    const handleSelectAll = () => {
        setCheckedState(new Array(locations.length).fill(true));
        setSelectedLocations(locations);
    };

    return (
        <div className="filter-button">
            <div className="d-grid gap-2">
                <Dropdown autoClose="outside" variant="dark">
                    <Dropdown.Toggle
                        className="Btn"
                        variant="dark"
                        style={{ backgroundColor: "var(--main-color)" }}
                    >
                        Filter
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <NavDropdown title="Parks" id="nav-dropdown-parks" autoClose="outside">
                            <Dropdown.ItemText>Park 1</Dropdown.ItemText>
                            <Dropdown.ItemText>Park 2</Dropdown.ItemText>
                        </NavDropdown>

                        <NavDropdown title="Restaurants" id="nav-dropdown-restaurants" autoClose="outside">
                            <Dropdown.ItemText>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Button onClick={handleReset} variant="dark" size="sm" className="custom-button">Reset all</Button>
                                    <Button onClick={handleSelectAll} variant="dark" size="sm" className="custom-button">Select all</Button>
                                </div>
                            </Dropdown.ItemText>
                            {locations.map((location, index) => (
                                <Dropdown.ItemText key={index}>
                                    <Checkbox checked={checkedState[index]} onChange={() => handleOnChange(index)}>
                                        {location.name}
                                    </Checkbox>
                                </Dropdown.ItemText>
                            ))}
                        </NavDropdown>

                        <NavDropdown
                            title="PŁ Buildings"
                            id="nav-dropdown-buildings"
                            autoClose="outside"
                        >
                            <Dropdown.ItemText>Budynek 1</Dropdown.ItemText>
                            <Dropdown.ItemText>Budynek 2</Dropdown.ItemText>
                        </NavDropdown>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
}

export default FilterButton;
