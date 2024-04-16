import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class ProtectedRoute extends Component {
    render() {
        const { isAuth, component: Component, ...rest } = this.props;
        if (isAuth) {
            return <Component {...rest} />;
        } else {
            return <Navigate to="/login" />;
        }
    }
}

export default ProtectedRoute;
