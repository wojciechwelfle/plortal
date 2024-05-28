import React, { useState } from 'react';
import './ChangePassword.css';
import Form from "react-bootstrap/Form";
import PasswordStrength from "../register-login/PasswordStrength";
import { changePasswordByUserId } from "../../services/userService";

const ChangePassword = () => {
    const [newPasswordStrength, setNewPasswordStrength] = useState("");
    const [confirmPasswordStrength, setConfirmPasswordStrength] = useState("");
    const [actualPasswordError, setActualPasswordError] = useState(false);
    const [newPasswordError, setNewPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [changePasswordMessage, setChangePasswordMessage] = useState(false);
    const [changePasswordMessageWeak, setChangePasswordMessageWeak] = useState(false);
    const [actualPassword, setActualPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const ActualPassword = localStorage.getItem("password");

    const handleChangePassword = (event) => {
        event.preventDefault();
        const userId = localStorage.getItem("id");

        if (newPasswordStrength === "Weak") {
            setChangePasswordMessage(false);
            setChangePasswordMessageWeak(true);
            return;
        }

        if( newPassword === ActualPassword) {
            setChangePasswordMessage(false);
            setChangePasswordMessageWeak(false);
            return;
        }

    if (newPassword === confirmPassword && actualPassword === ActualPassword && actualPassword !== newPassword) {
            changePasswordByUserId(userId, newPassword)
                .then((response) => {
                    console.log(response.status);
                    localStorage.setItem("password", newPassword);
                    setChangePasswordMessage(true);
                    setChangePasswordMessageWeak(false);
                    resetFields();
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };

    const resetFields = () => {
        setActualPassword("");
        setNewPassword("");
        setConfirmPassword("");
    };

    const handleActualPassword = (event) => {
        const password = event.target.value;
        setActualPassword(password);

        if (password !== ActualPassword) {
            setActualPasswordError(true);
        } else {
            setActualPasswordError(false);
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

    const handleNewPasswordChange = (event) => {
        const password = event.target.value;
        setNewPassword(password);
        const strength = evaluatePasswordStrength(password);
        setNewPasswordStrength(strength);

        if (password !== confirmPassword) {
            setNewPasswordError(true);
            setConfirmPasswordError(true);
        } else {
            setNewPasswordError(false);
            setConfirmPasswordError(false);
        }
    };

    const handleConfirmPasswordChange = (event) => {
        const password = event.target.value;
        setConfirmPassword(password);
        const strength = evaluatePasswordStrength(password);
        setConfirmPasswordStrength(strength);

        if (password !== newPassword) {
            setConfirmPasswordError(true);
            setNewPasswordError(true);
        } else {
            setConfirmPasswordError(false);
            setNewPasswordError(false);
        }
    };

    return (
        <div className="change-password-container">
            <h3>Zmień hasło</h3>
            <form style={{ marginBottom: "20px" }} onSubmit={handleChangePassword}>
                <div>
                    <label>Aktualne hasło:</label>
                    <Form.Group className="group" controlId="actualPassword" size="lg">
                        <Form.Control type="password" value={actualPassword} onChange={handleActualPassword} />
                        {actualPasswordError && <p style={{ fontSize: "15px", color : 'red' }}>Current password is different</p>}
                    </Form.Group>
                </div>
                <div>
                    <label>Nowe hasło:</label>
                    <Form.Group className="group" controlId="newPassword" size="lg">
                        <Form.Control type="password" value={newPassword} onChange={handleNewPasswordChange} />
                        <PasswordStrength strength={newPasswordStrength} />
                        {newPasswordError && <p style={{ fontSize: "15px", color : 'red' }}>Passwords do not match</p>}
                    </Form.Group>
                </div>
                <div>
                    <label>Potwierdź nowe hasło:</label>
                    <Form.Group className="group" controlId="confirmPassword" size="lg">
                        <Form.Control type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
                        <PasswordStrength strength={confirmPasswordStrength} />
                        {confirmPasswordError && <p style={{ fontSize: "15px", color : 'red' }}>Passwords do not match</p>}
                    </Form.Group>
                </div>
                <button type="submit">Zmień hasło</button>
                {changePasswordMessage && <p style={{ fontSize: "15px", color : 'green' }}>Password changed</p>}
                {changePasswordMessageWeak && <p style={{ fontSize: "25px", color : 'red' }}>Password is too weak</p>}
            </form>
        </div>
    );
};

export default ChangePassword;
