import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./Register.css";
import './AlertNotification.css';
import AlertNotification from "./AlertNotification";


class Register extends Component {
    API_URL = "http://localhost:8080/api/v1/users";

    constructor(props){
        super(props);
        this.AlertNotification = React.createRef();
    }

    handleRegistration = (event) => {
        console.log("Handle Submit");

        event.preventDefault();
        this.addUserToDatabase(
            event.target.email.value,
            event.target.password.value
        );
    };

    addUserToDatabase(email, password) {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        };
        console.log(
            JSON.stringify({
                email: email,
                password: password,
            })
        );
        console.log(requestOptions);

        fetch(this.API_URL, requestOptions)
            .then((response) => {
                console.log(response.status);

                if (response.status === 200) {
                    this.showAlertNotification("success","User has been registered!","Go to the login page to log in");
                } else if (response.status === 422) {
                    this.showAlertNotification("danger","Wrong email format!","Example of correct email: example@domain.com");
                } else if(response.status === 409) {
                    this.showAlertNotification("danger","Email is already taken!","Please enter new email");
                } else {
                    this.showAlertNotification("danger","Other error occured!","Contact administrator");
                }
            }).catch((error) => {
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
                    <h1 className="RegisterHeader">Register</h1>

                    <Form onSubmit={this.handleRegistration}>
                        <Form.Group
                            className="Group"
                            controlId="username"
                            size="lg"
                        >
                            <Form.Label> Email </Form.Label>
                            <Form.Control autoFocus name="email" />
                        </Form.Group>

                        <Form.Group
                            className="Group"
                            controlId="password"
                            size="lg"
                        >
                            <Form.Label> Password </Form.Label>
                            <Form.Control type="password" name="password" />
                        </Form.Group>

                        <div className="TextContainer">
                            Masz już konto?
                            <a href="/login" className="TextLink">
                                Zaloguj się
                            </a>
                        </div>

                        <div className="d-grid gap-2 myDiv">
                            <Button
                                variant="dark"
                                className="Btn"
                                type="submit"
                            >
                                Register
                            </Button>
                        </div>
                    </Form>
                </div>
                <AlertNotification ref={this.AlertNotification}/>
            </>
        );
    }
}

export default Register;
