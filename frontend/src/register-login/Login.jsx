import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { loginUser } from "../routes/userAuthorization";
import "./AlertNotification.css";
import AlertNotification from "./AlertNotification";

const Login = () => {
    const API_URL = "http://localhost:8080/api/v1/users/login";
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
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        };

        fetch(API_URL, requestOptions)
            .then((response) => {
                console.log(response.status);
                if (response.status === 200) {
                    showAlertNotification(
                        "success",
                        "Login success!",
                        "Moving to main page in 3 sec..."
                    );
                    loginUser(email);
                    setTimeout(() => {
                        window.location.href = "/home";
                    }, 3000);
                } else if (response.status === 409) {
                    showAlertNotification(
                        "danger",
                        "User is not in the base!",
                        "Enter new email or click to register"
                    );
                } else if (response.status === 401) {
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
            })
            .catch((error) => {
                console.log(error.stringify);
                showAlertNotification("danger", "Error", "Run backend server!");
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
            </div>
            <AlertNotification ref={AlertNotificationRef} />
        </>
    );
};

export default Login;
