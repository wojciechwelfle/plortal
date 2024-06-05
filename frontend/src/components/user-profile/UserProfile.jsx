import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./UserProfile.css";
import ProfileCard from './ProfileCard';
import "react-image-crop/dist/ReactCrop.css";
import { updateBasicInfo, updateAdditionalInfo, getBasicInfo, getAdditionalInfo } from '../../services/userService';

const UserProfile = () => {
    const savedFontSize = parseInt(localStorage.getItem('fontSize'), 10) || 20;
    const savedTheme = localStorage.getItem('theme') || 'light';
    const [fontSize, setFontSize] = useState(savedFontSize);
    const [theme, setTheme] = useState(savedTheme);

    const [isEditMode1, setIsEditMode1] = useState(false);
    const [isEditMode2, setIsEditMode2] = useState(false);
    const [basicInfo, setBasicInfo] = useState("");
    const [additionalInfo, setAdditionalInfo] = useState("");

    const userId = localStorage.getItem('id');

    useEffect(() => {
        document.documentElement.style.setProperty('--font-size', `${fontSize}px`);
        document.documentElement.classList.remove('light-theme', 'dark-theme', 'blue-theme', 'purple-theme');
        document.documentElement.classList.add(`${theme}-theme`);
    }, [fontSize, theme]);

    useEffect(() => {
        getBasicInfo(userId)
            .then(response => {
                setBasicInfo(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the basic info!', error);
            });

        getAdditionalInfo(userId)
            .then(response => {
                setAdditionalInfo(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the additional info!', error);
            });
    }, [userId]);

    const handleToggleEdit1 = () => {
        if (isEditMode1) {
            updateBasicInfo(userId, basicInfo).then(() => {
                console.log("Basic info updated successfully");
            }).catch(error => {
                console.error("There was an error updating the basic info!", error);
            });
        }
        setIsEditMode1(!isEditMode1);
    };

    const handleToggleEdit2 = () => {
        if (isEditMode2) {
            updateAdditionalInfo(userId, additionalInfo).then(() => {
                console.log("Additional info updated successfully");
            }).catch(error => {
                console.error("There was an error updating the additional info!", error);
            });
        }
        setIsEditMode2(!isEditMode2);
    };

    return (
        <div className='profile-wrapper'>
            <h3 className='profile-header' style={{ fontSize: `${fontSize + 5}px` }}>Profil Użytkownika</h3>
            <div className="columns-container">
                <div className="picture-column">
                    <ProfileCard />
                </div>
                <div className="textbox-column">
                    <Form className='input-boxes'>
                        <Form.Group className="mb-3" controlId="basicInfo">
                            <div className="label-button-container">
                                <Form.Label className='textbox-description' style={{ fontSize: `${fontSize - 1}px` }}>Podstawowe informacje</Form.Label>
                                <div className='button-column'>
                                    <div className="save-button">
                                        <Button
                                            className="Btn"
                                            variant="dark"
                                            style={{ backgroundColor: "var(--main-color)" }}
                                            onClick={handleToggleEdit1}
                                        >
                                            {isEditMode1 ? 'Zapisz' : 'Edytuj'}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <Form.Control 
                                as="textarea" 
                                rows={5} 
                                readOnly={!isEditMode1} 
                                value={basicInfo}
                                onChange={(e) => setBasicInfo(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="additionalInfo">
                            <div className="label-button-container">
                                <Form.Label className='textbox-description' style={{ fontSize: `${fontSize - 1}px` }}>Dodatkowe informacje</Form.Label>
                                <div className='button-column'>
                                    <div className="save-button">
                                        <Button
                                            className="Btn"
                                            variant="dark"
                                            style={{ backgroundColor: "var(--main-color)" }}
                                            onClick={handleToggleEdit2}
                                        >
                                            {isEditMode2 ? 'Zapisz' : 'Edytuj'}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <Form.Control 
                                as="textarea" 
                                rows={5} 
                                readOnly={!isEditMode2}     
                                value={additionalInfo}
                                onChange={(e) => setAdditionalInfo(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
