const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const loginBtn = document.getElementById("login-btn");

// Define the predefined username and password
const predefinedUsername = "seinprince2@gmail.com";
const predefinedPassword = "14781";

// Function to handle login
function handleLogin() {
  const usernameInput = document.getElementById("username").value;
  const passwordInput = document.getElementById("password").value;

  // Check if the entered details match the predefined values
  if (usernameInput === predefinedUsername && passwordInput === predefinedPassword) {
    // Login successful, you can redirect the user to another page or show a success message
    window.location.href = "dashboard.html";
    alert("Login successful!");
  } else {
    // Login failed, display an error message
    alert("Invalid username or password. Please try again.");
  }
}

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// Add a click event listener to the login button
loginBtn.addEventListener("click", handleLogin);
