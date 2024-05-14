import React from "react";
import { Navigate } from "react-router-dom";
import { isUserLogin, userRole } from "./userAuthorization";

const ProtectedRoute = ({ element: Element, requiredRoles, ...rest }) => {
    const role = userRole();
    console.log(role);

    if (isUserLogin() && requiredRoles.includes(role)) {
        return <Element {...rest} />;
    } else {
        return <Navigate to="/login" />;
    }
}

export default ProtectedRoute;