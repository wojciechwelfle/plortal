import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';

const locations = [
    {
        nazwa: 'Location 1',
        position: [52.2296756, 21.0122287] // Example coordinates for Warsaw, Poland
    },
    {
        nazwa: 'Location 2',
        position: [48.856614, 2.3522219] // Example coordinates for Paris, France
    },
    {
        nazwa: 'Location 3',
        position: [40.712776, -74.005974] // Example coordinates for New York, USA
    },
    {
        nazwa: 'Location 4',
        position: [35.689487, 139.691711] // Example coordinates for Tokyo, Japan
    },
    {
        nazwa: 'Location 5',
        position: [-33.868820, 151.209290] // Example coordinates for Sydney, Australia
    }
];

function FilterButton() {
    const [checkedState, setCheckedState] = useState(
        new Array(locations.length).fill(false)
    );

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) => 
            index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
    };

    return (
        <DropdownButton id="dropdown-basic-button" title="Dropdown button" autoClose="outside">
            <NavDropdown title="Parks" id="nav-dropdown-parks" autoClose="outside">
                <NavDropdown.Item >Nested Action 1</NavDropdown.Item>
                <NavDropdown.Item >Nested Action 2</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Restaurants" id="nav-dropdown-restaurants" autoClose="outside">
                {locations.map((location, index) => (
                    <NavDropdown.Item key={index}>
                        <Form.Check 
                            type="checkbox"
                            label={`Position: [${location.position[0]}, ${location.position[1]}]`} 
                            checked={checkedState[index]}
                            onChange={() => handleOnChange(index)}
                        />
                    </NavDropdown.Item>
                ))}
            </NavDropdown>

            <NavDropdown title="PŁ Buildings" id="nav-dropdown-buildings" autoClose="outside">
                <NavDropdown.Item >Nested Action 1</NavDropdown.Item>
                <NavDropdown.Item >Nested Action 2</NavDropdown.Item>
            </NavDropdown>
        </DropdownButton>
    );
}

export default FilterButton;
