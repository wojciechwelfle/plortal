import React, { useState } from 'react';
import './ChangePassword.css';
import Form from "react-bootstrap/Form";
import PasswordStrength from "../register-login/PasswordStrength";
import { changePasswordByUserId } from "../../services/userService";

const ChangePassword = () => {
    const [passwordStrength, setPasswordStrength] = useState({
        newPassword: "",
        confirmPassword: ""
    });
    const [errors, setErrors] = useState({
        actualPassword: false,
        newPassword: false,
        confirmPassword: false
    });
    const [changePasswordMessage, setChangePasswordMessage] = useState("");
    const [passwords, setPasswords] = useState({
        actualPassword: "",
        newPassword: "",
        confirmPassword: ""
    });
    const ActualPassword = localStorage.getItem("password");

    const handleChangePassword = (event) => {
        event.preventDefault();
        const userId = localStorage.getItem("id");

        if (passwordStrength.newPassword === "Weak") {
            setChangePasswordMessage("New password is weak");
            return;
        }

        if (passwords.newPassword === ActualPassword) {
            setChangePasswordMessage("New password cannot be the same as the old password");
            return;
        }

        if (passwords.newPassword === passwords.confirmPassword && passwords.actualPassword === ActualPassword && passwords.actualPassword !== passwords.newPassword) {
            changePasswordByUserId(userId, passwords.actualPassword, passwords.newPassword)
                .then((response) => {
                    console.log(response.status);
                    localStorage.setItem("password", passwords.newPassword);
                    setChangePasswordMessage(response.data);
                    resetFields();
                })
                .catch((error) => {
                    console.error(error);
                    setChangePasswordMessage(error.response.data);
                });
        } else {
            if (passwords.newPassword !== passwords.confirmPassword) {
                setChangePasswordMessage("New password and confirmation password do not match");
            } else if (passwords.actualPassword !== ActualPassword) {
                setChangePasswordMessage("Current password is incorrect");
            }
        }
    };

    const resetFields = () => {
        setPasswords({
            actualPassword: "",
            newPassword: "",
            confirmPassword: ""
        });
    };

    const handlePasswordChange = (event) => {
        const { name, value } = event.target;
        setPasswords((prevState) => ({
            ...prevState,
            [name]: value
        }));

        if (name === "actualPassword") {
            setErrors((prevState) => ({
                ...prevState,
                actualPassword: value !== ActualPassword
            }));
        }

        if (name === "newPassword" || name === "confirmPassword") {
            const strength = evaluatePasswordStrength(value);
            setPasswordStrength((prevState) => ({
                ...prevState,
                [name]: strength
            }));

            if (name === "newPassword" && value !== passwords.confirmPassword) {
                setErrors((prevState) => ({
                    ...prevState,
                    newPassword: true,
                    confirmPassword: true
                }));
            } else if (name === "confirmPassword" && value !== passwords.newPassword) {
                setErrors((prevState) => ({
                    ...prevState,
                    newPassword: true,
                    confirmPassword: true
                }));
            } else {
                setErrors((prevState) => ({
                    ...prevState,
                    newPassword: false,
                    confirmPassword: false
                }));
            }
        }
    };

    const evaluatePasswordStrength = (password) => {
        let strengthPoints = 0;

        if (password.length >= 8) {
            strengthPoints += 1;
        }
        if (password.length >= 12) {
            strengthPoints += 1;
        }
        if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
            strengthPoints += 1;
        }
        if (/\d/.test(password)) {
            strengthPoints += 1;
        }
        if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            strengthPoints += 1;
        }

        if (strengthPoints < 3) {
            return "Weak";
        } else if (strengthPoints < 5) {
            return "Medium";
        } else {
            return "Strong";
        }
    };

    return (
        <div className="change-password-container">
            <h3>Zmień hasło</h3>
            <form style={{ marginBottom: "20px" }} onSubmit={handleChangePassword}>
                <div>
                    <label>Aktualne hasło:</label>
                    <Form.Group className="group" controlId="actualPassword" size="lg">
                        <Form.Control
                            type="password"
                            name="actualPassword"
                            value={passwords.actualPassword}
                            onChange={handlePasswordChange}
                        />
                        {errors.actualPassword && <p style={{ fontSize: "15px", color : 'red' }}>Current password is different</p>}
                    </Form.Group>
                </div>
                <div>
                    <label>Nowe hasło:</label>
                    <Form.Group className="group" controlId="newPassword" size="lg">
                        <Form.Control
                            type="password"
                            name="newPassword"
                            value={passwords.newPassword}
                            onChange={handlePasswordChange}
                        />
                        <PasswordStrength strength={passwordStrength.newPassword} />
                        {errors.newPassword && <p style={{ fontSize: "15px", color : 'red' }}>Passwords do not match</p>}
                    </Form.Group>
                </div>
                <div>
                    <label>Potwierdź nowe hasło:</label>
                    <Form.Group className="group" controlId="confirmPassword" size="lg">
                        <Form.Control
                            type="password"
                            name="confirmPassword"
                            value={passwords.confirmPassword}
                            onChange={handlePasswordChange}
                        />
                        <PasswordStrength strength={passwordStrength.confirmPassword} />
                        {errors.confirmPassword && <p style={{ fontSize: "15px", color : 'red' }}>Passwords do not match</p>}
                    </Form.Group>
                </div>
                <button type="submit">Zmień hasło</button>
                {changePasswordMessage && <p style={{ fontSize: "15px", color : 'red' }}>{changePasswordMessage}</p>}
            </form>
        </div>
    );
};

export default ChangePassword;
