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

        const user = {
            firstName: event.target.firstName.value,
            lastName: event.target.lastName.value,
            email: event.target.email.value,
            password: event.target.password.value,
            role: event.target.role.value,
        };

        addUserToDatabase(user);
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

    const addUserToDatabase = (user) => {
        registerUser(user)
            .then((response) => {
                console.log(response.status);
                showAlertNotification(
                    "success",
                    "Zarejestrowano użytkownika",
                    "Trwa przekierowywanie na stronę główną..."
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
                        "Błąd",
                        "Brak odpowiedzi serwera"
                    );
                } else if (error.response.status === 422) {
                    showAlertNotification(
                        "danger",
                        "Niewłaściwy Email",
                        "Przykładowy email: przykład@domena.com"
                    );
                } else if (error.response.status === 400) {
                    console.log(error);
                    showAlertNotification(
                        "danger",
                        "Niewłaściwe hasło, nazwisko lub imię",
                        "Hasło musi zawierać conajmniej 8 liter, w tym: 1 małą, 1 wielką, liczbę i znak specjalny! "
                    );
                } else if (error.response.status === 409) {
                    showAlertNotification(
                        "danger",
                        "Ten email jest już zajęty",
                        "Wprowadź nowy email"
                    );
                } else {
                    showAlertNotification(
                        "danger",
                        "Nieznany błąd",
                        "Skontaktuj się z administratorem"
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
            <div className="register" style={{margin: "10vh auto"}}>
                <h1 className="register-header">Rejestracja</h1>

                <Form onSubmit={handleRegistration}>
                    <Form.Group
                        className="group"
                        controlId="firstName"
                        size="lg"
                    >
                        <Form.Label> Imię </Form.Label>
                        <Form.Control autoFocus name="firstName" />
                    </Form.Group>

                    <Form.Group
                        className="group"
                        controlId="lastName"
                        size="lg"
                        required 
                    >
                        <Form.Label> Nazwisko </Form.Label>
                        <Form.Control autoFocus name="lastName" />
                    </Form.Group>

                    <Form.Group
                        className="group"
                        controlId="username"
                        size="lg"
                    >
                        <Form.Label> Email </Form.Label>
                        <Form.Control autoFocus name="email" />
                    </Form.Group>

                    <Form.Group className="group" controlId="role" size="lg">
                        <Form.Label>Rola</Form.Label>
                        <Form.Select name="role">
                            <option label="Student">STUDENT</option>
                            <option label="Nauczyciel">TEACHER</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group
                        className="group"
                        controlId="password"
                        size="lg"
                    >
                        <Form.Label> Hasło </Form.Label>
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
                        <Button
                            variant="dark"
                            className="btn"
                            type="submit"
                            style={{ backgroundColor: "var(--main-color)" }}
                        >
                            Zarejestruj się
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
