import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Login extends Component {
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
                </div>
            </>
        );
    }
}

export default Login;
