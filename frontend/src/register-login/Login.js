import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { loginUser } from "../routes/userAuthorization.js";
import './AlertNotification.css';
import AlertNotification from "./AlertNotification";
import './Register.css';

class Login extends Component {
    API_URL = "http://localhost:8080/api/v1/users/login";

    constructor(props){
        super(props);
        this.AlertNotification = React.createRef();
    }

    handleLogin = (event) => {
        console.log("User try log");
        event.preventDefault();
        this.authorizeWithBackend(
            event.target.email.value,
            event.target.password.value
        );
    };

    authorizeWithBackend(email, password) {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        };

        fetch(this.API_URL, requestOptions)
            .then((response) => {
                console.log(response.status);
                if (response.status === 200) {
                    this.showAlertNotification("success","Login success!","Moving to main page in 3 sec...");
                    loginUser(email);
                    setTimeout(() => {
                        window.location.href = "/home";
                    }, 3000);
                } else if (response.status === 409) {
                    this.showAlertNotification("danger","User is not in the base!","Enter new email or click to register");
                } else if (response.status === 401) {
                    this.showAlertNotification("danger","Wrong email or password!","Enter correct data");
                } else {
                    this.showAlertNotification("danger","Other error occured!","Contact administrator");
                }
            })
            .catch((error) => {
                console.log(error.stringify);
                this.showAlertNotification("danger","Error","Run backend server!");
            });
    }

    showAlertNotification(variant, heading, alert){
        this.AlertNotification.current.setAlert(alert);
        this.AlertNotification.current.setHeading(heading);
        this.AlertNotification.current.setVariant(variant);
        this.AlertNotification.current.setVisible(true);
    }

    render() {
        return (
            <>
                <div className="Register">
                    <h1 className="RegisterHeader">Login</h1>

                    <Form onSubmit={this.handleLogin}>
                        <Form.Group
                            className="Group"
                            controlId="username"
                            size="lg"
                        >
                            <Form.Label> Email </Form.Label>
                            <Form.Control autoFocus name="email"/>
                        </Form.Group>
                        <Form.Group
                            className="Group"
                            controlId="password"
                            size="lg"
                        >
                            <Form.Label> Password </Form.Label>
                            <Form.Control type="password" name="password"/>
                        </Form.Group>

                        <div className="TextContainer">
                            Nie masz konta?
                            <a href="/" className="TextLink">
                                Zarejestruj się
                            </a>
                        </div>

                        <div className="d-grid gap-2 myDiv">
                            <Button
                                variant="dark"
                                className="Btn"
                                type="submit"
                            >
                                Login
                            </Button>
                        </div>
                    </Form>
                    <div className="alertContainer">
                        <AlertNotification ref={this.AlertNotification}/>
                    </div>
                </div>

            </>
        );
    }
}

export default Login;
