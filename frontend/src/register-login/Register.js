import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./Register.css";

class Register extends Component {
    handleRegistration = event => {
        console.log("Handle Submit");

        event.preventDefault();
        this.addUserToDatabase(event.target.username.value, event.target.password.value);
    }

    addUserToDatabase() {
        // todo - connect with REST API
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
                            <Form.Label> Username </Form.Label>
                            <Form.Control autoFocus name="username" />
                        </Form.Group>

                        <Form.Group
                            className="Group"
                            controlId="password"
                            size="lg"
                        >
                            <Form.Label> Password </Form.Label>
                            <Form.Control type="password" name="password" />
                        </Form.Group>
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
