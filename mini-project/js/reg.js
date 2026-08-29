document.getElementById("registerForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let username =
        document.getElementById("username").value.trim();

    let email =
        document.getElementById("email").value.trim();

    let phone =
        document.getElementById("phone").value.trim();

    let address =
        document.getElementById("address").value.trim();

    let password =
        document.getElementById("password").value;


    let emailError =
        document.getElementById("emailError");

    let passwordError =
        document.getElementById("passwordError");


    // Clear previous errors
    emailError.textContent = "";
    passwordError.textContent = "";


    // Email validation
    let emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        emailError.textContent =
            "❌ Please enter a valid email address.";

        return;
    }


    // Password validation
    // Capital + small + number + special character + minimum 8 characters
    let passwordPattern =
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+]).{8,}$/;

    if (!passwordPattern.test(password)) {

        passwordError.textContent =
            "❌ Password must contain capital, small, number and special character.";

        return;
    }


    // Save registered user details
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("address", address);
    localStorage.setItem("password", password);


    // Show success message
    document.getElementById("successMessage")
        .style.display = "block";


    // Clear form fields
    document.getElementById("registerForm")
        .reset();

});