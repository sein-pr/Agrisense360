document.addEventListener("DOMContentLoaded", function () {

  const sign_in_btn = document.querySelector("#sign-in-btn");
  const sign_up_btn = document.querySelector("#sign-up-btn");
  const container = document.querySelector(".container");


  Parse.initialize("Cs3njaNlyqestAvd0G4GhMAbPFf0JYEGiX8wzDIz", "ZuuVvlVviBeHf4fnX0Dgz3LX5Oh0NmFIxSVOZki3");
  Parse.serverURL = "https://parseapi.back4app.com/";
  // Your existing code to handle the signup/sign-in form toggle

  const loginBtn = document.getElementById("login-btn");
  const signupBtn = document.getElementById("signup-btn");

  const loginUsernameInput = document.getElementById("login-username");
  const loginPasswordInput = document.getElementById("login-password");

  const signupUsernameInput = document.getElementById("signup-username");
  const signupEmailInput = document.getElementById("signup-email");
  const signupPasswordInput = document.getElementById("signup-password");

  function handleLogin(event) {
    event.preventDefault();
  
    const username = loginUsernameInput.value;
    const password = loginPasswordInput.value;
  
    const Users = Parse.Object.extend("Users");
    const query = new Parse.Query(Users);
    query.equalTo("Username", username);
    query.equalTo("Password", password);
  
    query.first().then(
      (user) => {
        if (user) {
          // Login was successful
          alert("Login successful!");
          window.location.href = "dashboard.html"; // Redirect to the dashboard
        } else {
          // Login failed, display an error message
          alert("Login failed: Invalid username or password");
        }
      },
      (error) => {
        // An error occurred during the query
        alert("Login failed: " + error.message);
      }
    );
  }
  

  function handleSignup(event) {
    event.preventDefault();
  
    const username = signupUsernameInput.value;
    const email = signupEmailInput.value;
    const password = signupPasswordInput.value;
  
    const Users = Parse.Object.extend("Users");
    const user = new Users();
    user.set("Username", username);
    user.set("Password", password);
    user.set("Email", email);
  
    user.save().then(
      (user) => {
        // Signup was successful
        alert("Signup successful! You can now log in.");
        // Optionally, you can automatically switch to the login form after successful registration.
        // container.classList.remove("sign-up-mode");
      },
      (error) => {
        // Signup failed, display an error message
        alert("Signup failed: " + error.message);
      }
    );
  }
  

  sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
  });

  sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
  });

  // Add a click event listener to the login button
  loginBtn.addEventListener("click", handleLogin);
signupBtn.addEventListener("click", handleSignup);

});
