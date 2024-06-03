import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./UserProfile.css";
import ProfileCard from './ProfileCard';
import "react-image-crop/dist/ReactCrop.css";

const UserProfile = () => {
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
        <div className='profile-wrapper'>
            <h3 className='profile-header' style={{ fontSize: `${fontSize + 5}px` }}>Profil Użytkownika</h3>
            <div className="columns-container">
                <div className="picture-column">
                    <ProfileCard />
                </div>
                <div className="textbox-column">
                    <Form className='input-boxes'>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <div className="label-button-container">
                                <Form.Label className='textbox-description' style={{ fontSize: `${fontSize - 1}px` }}>Podstawowe informacje</Form.Label>
                                <div className='button-column'>
                                    <div className="save-button">
                                        <Button
                                            className="Btn"
                                            variant="dark"
                                            style={{ backgroundColor: "var(--main-color)" }}
                                        >
                                            Zapisz
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <Form.Control as="textarea" rows={5} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <div className="label-button-container">
                                <Form.Label className='textbox-description' style={{ fontSize: `${fontSize - 1}px` }}>Dodatkowe informacje</Form.Label>
                                <div className='button-column'>
                                    <div className="save-button">
                                        <Button
                                            className="Btn"
                                            variant="dark"
                                            style={{ backgroundColor: "var(--main-color)" }}
                                        >
                                            Zapisz
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <Form.Control as="textarea" rows={5} />
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
