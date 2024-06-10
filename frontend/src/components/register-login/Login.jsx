import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { setLoginUser } from "../../routes/userAuthorization";

import "./Register.css";
import "./AlertNotification.css";
import AlertNotification from "./AlertNotification";
import { loginUser } from "../../services/userService";

const Login = () => {
    const AlertNotificationRef = useRef();

    const handleLogin = (event) => {
        console.log("User try log");
        event.preventDefault();
        authorizeWithBackend(
            event.target.email.value,
            event.target.password.value,
        );
    };

    const authorizeWithBackend = (email, password) => {
        const user = { email: email, password: password };
        loginUser(user)
            .then((response) => {
                console.log(response.status);
                showAlertNotification(
                    "success",
                    "Logowanie pomyślne",
                    "Trwa przenoszenie na stronę główną..."
                );
                const role = response.data.role;
                const id = response.data.id;
                const firstName = response.data.firstName;
                const lastName = response.data.lastName;
                setLoginUser(email, password, role, id, firstName, lastName);
                setTimeout(() => {
                    window.location.href = "/news";
                }, 3000);
            })
            .catch((error) => {
                console.log("Error: " + error);
                if (!error.response) {
                    showAlertNotification(
                        "danger",
                        "Błąd",
                        "Brak odpowiedzi serwera!"
                    );
                } else if (error.response.status === 409) {
                    showAlertNotification(
                        "danger",
                        "Użytkownik nie istnieje",
                        "Wprowadź poprawny email lub zarejestruj się"
                    );
                } else if (error.response.status === 401) {
                    showAlertNotification(
                        "danger",
                        "Błędy email lub hasło",
                        "Wprowadź poprawne dane"
                    );
                } else {
                    showAlertNotification(
                        "danger",
                        "Nieznany błąd",
                        "Skontaktuj się z administatorem"
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
                <h1 className="register-header">Logowanie</h1>

                <Form onSubmit={handleLogin}>
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
                        <Form.Label> Hasło </Form.Label>
                        <Form.Control type="password" name="password" />
                    </Form.Group>

                    <div className="text-container">
                        Nie masz konta?
                        <a href="/" className="text-link">
                            Zarejestruj się
                        </a>
                    </div>

                    <div className="d-grid gap-2">
                        <Button variant="dark" className="btn" type="submit" style={{backgroundColor: "var(--main-color)"}}>
                            Zaloguj się
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

export default Login;
