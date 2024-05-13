export const setLoginUser = (userEmail) => {
    localStorage.setItem("isAuth", true);
    localStorage.setItem("email", userEmail);
}

export const logoutUser = () => {
    localStorage.clear();
    window.location.href = "/login";
}

export const isUserLogin = () => {
    return localStorage.getItem("isAuth") === "true";
}
