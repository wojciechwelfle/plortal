import { Checkbox, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import { getRestaurants, getBuildings, getParks } from '../../services/locationService';
import "./FilterButton.css";

const FilterButton = ({ setSelectedRestaurants, setSelectedParks, setSelectedBuildings }) => {
    const [restaurants, setRestaurants] = useState([]);
    const [parks, setParks] = useState([]);
    const [buildings, setBuildings] = useState([]);
    const [checkedStateRestaurants, setCheckedStateRestaurants] = useState([]);
    const [checkedStateParks, setCheckedStateParks] = useState([]);
    const [checkedStateBuildings, setCheckedStateBuildings] = useState([]);

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const responseRestaurants = await getRestaurants();
                const responseParks = await getParks();
                const responseBuildings = await getBuildings();
                const dataRestaurants = responseRestaurants.data.map(location => ({
                    ...location,
                    position: [location.latitude, location.longitude]
                }));
                const dataParks = responseParks.data.map(location => ({
                    ...location,
                    position: [location.latitude, location.longitude]
                }));
                const dataBuildings = responseBuildings.data.map(location => ({
                    ...location,
                    position: [location.latitude, location.longitude]
                }));

                setRestaurants(dataRestaurants);
                setParks(dataParks);
                setBuildings(dataBuildings);

                setCheckedStateRestaurants(new Array(dataRestaurants.length).fill(false));
                setCheckedStateParks(new Array(dataParks.length).fill(false));
                setCheckedStateBuildings(new Array(dataBuildings.length).fill(false));

            } catch (error) {
                console.error('Error fetching locations:', error);
            }
        };

        fetchLocations();
    }, []);

    const handleOnChangeRestaurants = (index) => {
        setCheckedStateRestaurants(prevState => {
            const updatedCheckedState = [...prevState];
            updatedCheckedState[index] = !updatedCheckedState[index];

            const selected = updatedCheckedState
                .map((checked, i) => checked ? restaurants[i] : null)
                .filter(location => location !== null);

            setSelectedRestaurants(selected);
            return updatedCheckedState;
        });
    };

    const handleOnChangeParks = (index) => {
        setCheckedStateParks(prevState => {
            const updatedCheckedState = [...prevState];
            updatedCheckedState[index] = !updatedCheckedState[index];

            const selected = updatedCheckedState
                .map((checked, i) => checked ? parks[i] : null)
                .filter(location => location !== null);

            setSelectedParks(selected);
            return updatedCheckedState;
        });
    };

    const handleOnChangeBuildings = (index) => {
        setCheckedStateBuildings(prevState => {
            const updatedCheckedState = [...prevState];
            updatedCheckedState[index] = !updatedCheckedState[index];

            const selected = updatedCheckedState
                .map((checked, i) => checked ? buildings[i] : null)
                .filter(location => location !== null);

            setSelectedBuildings(selected);
            return updatedCheckedState;
        });
    };

    const handleResetRestaurants = () => {
        setCheckedStateRestaurants(new Array(restaurants.length).fill(false));
        setSelectedRestaurants([]);
    };

    const handleSelectAllRestaurants = () => {
        setCheckedStateRestaurants(new Array(restaurants.length).fill(true));
        setSelectedRestaurants(restaurants);
    };

    const handleResetParks = () => {
        setCheckedStateParks(new Array(parks.length).fill(false));
        setSelectedParks([]);
    };

    const handleSelectAllParks = () => {
        setCheckedStateParks(new Array(parks.length).fill(true));
        setSelectedParks(parks);
    };

    const handleResetBuildings = () => {
        setCheckedStateBuildings(new Array(buildings.length).fill(false));
        setSelectedBuildings([]);
    };

    const handleSelectAllBuildings = () => {
        setCheckedStateBuildings(new Array(buildings.length).fill(true));
        setSelectedBuildings(buildings);
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
                        Filtruj
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <NavDropdown
                            title="Parki"
                            id="nav-dropdown-parks"
                            autoClose="outside"
                        >
                            <Dropdown.ItemText>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Button onClick={handleResetParks} variant="dark" size="sm" className="custom-button">Schowaj wszystkie</Button>
                                    <Button onClick={handleSelectAllParks} variant="dark" size="sm" className="custom-button">Pokaż wszytskie</Button>
                                </div>
                            </Dropdown.ItemText>
                            {parks.map((location, index) => (
                                <Dropdown.ItemText key={index}>
                                    <Checkbox checked={checkedStateParks[index]} onChange={() => handleOnChangeParks(index)}>
                                        {location.name}
                                    </Checkbox>
                                </Dropdown.ItemText>
                            ))}
                        </NavDropdown>

                        <NavDropdown
                            title="Restauracje"
                            id="nav-dropdown-restaurants"
                            autoClose="outside"
                        >
                            <Dropdown.ItemText>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Button onClick={handleResetRestaurants} variant="dark" size="sm" className="custom-button">Schowaj wszystkie</Button>
                                    <Button onClick={handleSelectAllRestaurants} variant="dark" size="sm" className="custom-button">Pokaż wszystkie</Button>
                                </div>
                            </Dropdown.ItemText>
                            {restaurants.map((location, index) => (
                                <Dropdown.ItemText key={index}>
                                    <Checkbox checked={checkedStateRestaurants[index]} onChange={() => handleOnChangeRestaurants(index)}>
                                        {location.name}
                                    </Checkbox>
                                </Dropdown.ItemText>
                            ))}
                        </NavDropdown>

                        <NavDropdown
                            title="Budynki PŁ"
                            id="nav-dropdown-buildings"
                            autoClose="outside"
                        >
                            <Dropdown.ItemText>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Button onClick={handleResetBuildings} variant="dark" size="sm" className="custom-button">Schowaj wszystkie</Button>
                                    <Button onClick={handleSelectAllBuildings} variant="dark" size="sm" className="custom-button">Wybierz wszystkie</Button>
                                </div>
                            </Dropdown.ItemText>
                            {buildings.map((location, index) => (
                                <Dropdown.ItemText key={index}>
                                    <Checkbox checked={checkedStateBuildings[index]} onChange={() => handleOnChangeBuildings(index)}>
                                        {location.name}
                                    </Checkbox>
                                </Dropdown.ItemText>
                            ))}
                        </NavDropdown>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
}

export default FilterButton;
