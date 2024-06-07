import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from 'react-bootstrap';
import "./Courses.css"

const data = [
    {
        "id": 1,
        "country_name": "Programowanie Obiektowe 2",
        "address": "http://google.com"
    },
    {
        "id": 2,
        "country_name": "Podstawy programowania 1",
        "address": "http://facebook.com"
    },
    {
        "id": 3,
        "country_name": "Podstawy programowania 2",
        "address": "http://wikipedia.org"
    },
    {
        "id": 4,
        "country_name": "Architektura Komputerów",
        "address": "http://x.com"
    }]

const Courses = () => {
    const [search, setSearch] = useState('');

    const savedFontSize = parseInt(localStorage.getItem('fontSize'), 10) || 20;
    const savedTheme = localStorage.getItem('theme') || 'light';
    const [fontSize, setFontSize] = useState(savedFontSize);
    const [theme, setTheme] = useState(savedTheme);

    useEffect(() => {
        document.documentElement.style.setProperty('--font-size', `${fontSize}px`);
        document.documentElement.classList.remove('light-theme', 'dark-theme', 'blue-theme', 'purple-theme');
        document.documentElement.classList.add(`${theme}-theme`);
    }, [fontSize, theme]);

    return (
        <div className='courses-wrapper'>
            <h3 className='profile-header' style={{ fontSize: `${fontSize + 5}px` }}>Przedmioty</h3>
            <div className='form-wrapper'>
                <InputGroup className='search-bar-wrapper'>
                    <Form.Control
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='Wyszukaj przedmiot'
                    />
                </InputGroup>
            </div>
            <Table
                striped bordered hover
                variant={theme === 'light' ? undefined : 'dark'}
            >
                <thead>
                    <tr>
                        <th style={{ fontSize: `${fontSize + 1}px` }} >Nazwa przedmiotu</th>
                    </tr>
                </thead>
                <tbody>
                    {data
                        .filter((item) => {
                            return search.toLowerCase() === ''
                                ? item
                                : item.country_name.toLowerCase().includes(search.toLowerCase());
                        })
                        .map((item, index) => (
                            <tr key={index}>
                                <td >
                                    <div className='table-element' style={{ fontSize: `${fontSize}px` }}>
                                        {item.country_name}
                                        <div className='search-button'>
                                            <Button
                                                className="Btn"
                                                variant="dark"
                                                style={{ backgroundColor: "var(--main-color)" }}
                                                onClick={() => window.open(item.address, '_blank')}
                                            >
                                                Przejdź
                                            </Button>
                                        </div>
                                    </div>
                                </td>

                            </tr>
                        ))}
                </tbody>
            </Table>
        </div>
    );
}

export default Courses;