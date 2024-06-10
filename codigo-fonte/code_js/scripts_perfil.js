function logOut() {
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    window.location.href = "html_cadlog.html";
};