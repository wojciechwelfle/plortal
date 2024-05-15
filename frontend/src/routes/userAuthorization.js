export const setLoginUser = (userEmail, password, role) => {
    localStorage.setItem("isAuth", true);

    localStorage.setItem("email", userEmail);
    localStorage.setItem("password", password);
    localStorage.setItem("role", role);
}

export const logoutUser = () => {
    localStorage.clear();
    window.location.href = "/login";
}

export const isUserLogin = () => {
    return localStorage.getItem("isAuth") === "true";
}

export const userRole = () => {
    return localStorage.getItem("role");
}