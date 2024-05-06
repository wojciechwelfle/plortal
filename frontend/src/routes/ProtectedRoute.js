import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { isUserLogin } from "./userAuthorization";

class ProtectedRoute extends Component {
    render() {
        var { element: Element, ...rest } = this.props;
        if (isUserLogin()) {
            return <Element {...rest} />;
        } else {
            return <Navigate to="/login" />;
        }
    }
}

export default ProtectedRoute;
