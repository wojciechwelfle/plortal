import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./Register.css";
import "./AlertNotification.css";
import AlertNotification from "./AlertNotification";
import PasswordStrength from "./PasswordStrength";
import { registerUser } from "../../services/userService";

const Register = () => {
    const [passwordStrength, setPasswordStrength] = useState("");
    const AlertNotificationRef = useRef();

    const handleRegistration = (event) => {
        console.log("Handle Submit");

        event.preventDefault();
        addUserToDatabase(
            event.target.email.value,
            event.target.password.value
        );
    };

    const handlePasswordChange = (event) => {
        const password = event.target.value;
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

        let strength;
        if (strengthPoints < 3) {
            strength = "Weak";
        } else if (strengthPoints < 5) {
            strength = "Medium";
        } else {
            strength = "Strong";
        }

        setPasswordStrength(strength);
    };

    const addUserToDatabase = (email, password) => {
        const user = { email: email, password: password };
        registerUser(user)
            .then((response) => {
                console.log(response.status);
                showAlertNotification(
                    "success",
                    "User has been registered!",
                    "Moving to the login page in 3 sec..."
                );
                setTimeout(() => {
                    window.location.href = "/login";
                }, 3000);
            })
            .catch((error) => {
                console.log("Error: " + error);
                if (!error.response) {
                    showAlertNotification(
                        "danger",
                        "Error",
                        "Run backend server!"
                    );
                } else if (error.response.status === 422) {
                    showAlertNotification(
                        "danger",
                        "Wrong email format!",
                        "Example of correct email: example@domain.com"
                    );
                } else if (error.response.status === 400) {
                    showAlertNotification(
                        "danger",
                        "Wrong password format!",
                        "Password must contains min 8 letters, 1 lowercase letter and 1 uppercase letter and a number"
                    );
                } else if (error.response.status === 409) {
                    showAlertNotification(
                        "danger",
                        "Email is already taken!",
                        "Please enter new email"
                    );
                } else {
                    showAlertNotification(
                        "danger",
                        "Other error occured!",
                        "Contact administrator"
                    );
                }
            });
    };

    const showAlertNotification = (variant, heading, alert) => {
        AlertNotificationRef.current.setAlert(alert);
        AlertNotificationRef.current.setHeading(heading);
        AlertNotificationRef.current.setVariant(variant);
        AlertNotificationRef.current.setVisible(true);
    };

    return (
        <>
            <div className="register">
                <h1 className="register-header">Register</h1>

                <Form onSubmit={handleRegistration}>
                    <Form.Group
                        className="group"
                        controlId="username"
                        size="lg"
                    >
                        <Form.Label> Email </Form.Label>
                        <Form.Control autoFocus name="email" />
                    </Form.Group>

                    <Form.Group
                        className="group"
                        controlId="password"
                        size="lg"
                    >
                        <Form.Label> Password </Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            onChange={handlePasswordChange}
                        />
                        <PasswordStrength strength={passwordStrength} />
                    </Form.Group>

                    <div className="text-container">
                        Masz już konto?
                        <a href="/login" className="text-link">
                            Zaloguj się
                        </a>
                    </div>

                    <div className="d-grid gap-2">
                        <Button variant="dark" className="btn" type="submit">
                            Register
                        </Button>
                    </div>
                </Form>
                <div className="alert-container">
                    <AlertNotification ref={AlertNotificationRef} />
                </div>
            </div>
        </>
    );
};

export default Register;
