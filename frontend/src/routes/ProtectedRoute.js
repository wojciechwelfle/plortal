import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { isUserLogin } from "./userAuthorization";

class ProtectedRoute extends Component {
    render() {
        var { component: Component, ...rest } = this.props;
        if (isUserLogin()) {
            return <Component {...rest} />;
        } else {
            return <Navigate to="/login" />;
        }
    }
}

export default ProtectedRoute;
