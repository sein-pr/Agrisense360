

document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById('container');
const registerBtn = document.getElementById('register-panel');
const loginBtn = document.getElementById('login-panel');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function redirectToDashboard() {
    window.location.href = "dashboard.html";
}
function redirectToHome() {
    // Replace "index.html" with the actual URL of your login page
    window.location.href = "index.html";
}

// Predefined login credentials
const predefinedEmail = "seinprince2@gmail.com";
const predefinedPassword = "14781";

// Event listener for the login button
document.getElementById("login-btn").addEventListener("click", function () {
    const enteredEmail = document.getElementById("email").value;
    const enteredPassword = document.getElementById("password").value;

    if (enteredEmail === predefinedEmail && enteredPassword === predefinedPassword) {
        document.getElementById("loginStatus").textContent = "Login successful. Redirecting...";
        // You can redirect the user to another page after successful login.
        // Replace the URL with the actual URL you want to redirect to.
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("loginStatus").textContent = "Login failed. Please check your email and password.";
    }
});

});

