import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from 'react-bootstrap';
import { getAllCourses } from '../../services/courseService';
import "./Courses.css"

const Courses = () => {
    const [courses, setCourses] = useState([]);
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

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await getAllCourses();
                setCourses(response.data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchCourses();
    }, []);

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
                    {courses
                        .filter((course) => {
                            return search.toLowerCase() === ''
                                ? course
                                : course.name.toLowerCase().includes(search.toLowerCase());
                        })
                        .map((course, index) => (
                            <tr key={index}>
                                <td >
                                    <div className='table-element' style={{ fontSize: `${fontSize}px` }}>
                                        {course.name}
                                        <div className='search-button'>
                                            <Button
                                                className="Btn"
                                                variant="dark"
                                                style={{ backgroundColor: "var(--main-color)" }}
                                                onClick={() => window.open(course.address, '_blank')}
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