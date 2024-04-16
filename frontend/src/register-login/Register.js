import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./Register.css";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

class Register extends Component {
    API_URL = "http://localhost:8080/api/v1/users";

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
                    console.log("User added to Datebase!");
                } else if (response.status === 422) {
                    console.log("User email is taken!");
                } else {
                    console.log("Other error");
                }
            })
            .catch((error) => {
                console.log(error.stringify);
                console.error("Run backend server!!!");
            });
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

                        <Router>
                            <div className="TextContainer">
                                Masz już konto?
                                <Link className='TextLink' to="/login">
                                    Zaloguj się
                                </Link>
                            </div>
                        </Router>

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
            </>
        );
    }
}

export default Register;
