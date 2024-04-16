export function loginUser() {
    localStorage.setItem("isAuth", true);
}

export function logoutUser() {
    localStorage.clear();
    window.location.href = "/login";
}

export function isUserLogin() {
    return localStorage.getItem("isAuth") === 'true';
}
