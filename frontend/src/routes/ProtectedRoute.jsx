import React from "react";
import { Navigate } from "react-router-dom";
import { isUserLogin } from "./userAuthorization";

const ProtectedRoute = ({ element: Element, ...rest }) => {
    if (isUserLogin()) {
        return <Element {...rest} />;
    } else {
        return <Navigate to="/login" />;
    }
}

export default ProtectedRoute;