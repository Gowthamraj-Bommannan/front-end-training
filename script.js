const loginButton = document.querySelector(".login-button");
const usernameInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

loginButton.addEventListener("click", function() {
    const email = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    clearErrorMessages();
    let isValid = true;

    if (email === "") {
        showError("email-error", "Please enter your email.");
        isValid = false;
    }

    if (password === "") {
        showError("password-error", "Please enter your password.");
        isValid = false;
    }

    if (!isValid) {
        return;
    }

    const payload = {
      email: email,
      password: password
    };

    fetch("http://127.0.0.1:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    console.log("user logged in successfully!");
    console.log("Payload:", payload);
});


function clearErrorMessages() {
    usernameInput.classList.remove("input-error");
    passwordInput.classList.remove("input-error");

    emailError.style.display = "none";
    passwordError.style.display = "none";
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = "block";
}
