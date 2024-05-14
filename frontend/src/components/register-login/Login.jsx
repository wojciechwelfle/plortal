import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { setLoginUser } from "../../routes/userAuthorization";

import "./Login.css";
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
            event.target.password.value
        );
    };

    const authorizeWithBackend = (email, password) => {
        const user = { email: email, password: password };
        loginUser(user)
            .then((response) => {
                console.log(response.status);
                showAlertNotification(
                    "success",
                    "Login success!",
                    "Moving to main page in 3 sec..."
                );
                const role = response.data.role;
                setLoginUser(email, password, role);
                setTimeout(() => {
                    window.location.href = "/news";
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
                } else if (error.response.status === 409) {
                    showAlertNotification(
                        "danger",
                        "User is not in the base!",
                        "Enter new email or click to register"
                    );
                } else if (error.response.status === 401) {
                    showAlertNotification(
                        "danger",
                        "Wrong email or password!",
                        "Enter correct data"
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
                <h1 className="register-header">Login</h1>

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
                        <Form.Label> Password </Form.Label>
                        <Form.Control type="password" name="password" />
                    </Form.Group>

                    <div className="text-container">
                        Nie masz konta?
                        <a href="/" className="text-link">
                            Zarejestruj się
                        </a>
                    </div>

                    <div className="d-grid gap-2">
                        <Button variant="dark" className="btn" type="submit">
                            Login
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
