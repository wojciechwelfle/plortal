export function loginUser(userEmail) {
    localStorage.setItem("isAuth", true);
    localStorage.setItem("email",userEmail);
}

export function logoutUser() {
    localStorage.clear();
    window.location.href = "/login";
}

export function isUserLogin() {
    return localStorage.getItem("isAuth") === 'true';
}
