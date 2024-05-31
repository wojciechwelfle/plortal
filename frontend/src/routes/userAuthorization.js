export const setLoginUser = (userEmail, password, role,id) => {
    localStorage.setItem("isAuth", true);

    localStorage.setItem("id",id);
    localStorage.setItem("email", userEmail);
    localStorage.setItem("password", password);
    localStorage.setItem("role", role);
};

export const logoutUser = () => {
    localStorage.clear();
    window.location.href = "/login";
};

export const isUserLogin = () => {
    return localStorage.getItem("isAuth") === "true";
};

export const userRole = () => {
    return localStorage.getItem("role");
};

export const getLoginRequest = () => {
    return {
        'email': localStorage.getItem("email"),
        'password': localStorage.getItem("password")
    };
};
