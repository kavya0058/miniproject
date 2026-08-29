document.getElementById("loginForm")
.addEventListener("submit", function(event) {

    event.preventDefault();


    let email =
        document.getElementById("loginEmail")
        .value.trim();

    let password =
        document.getElementById("loginPassword")
        .value;


    let emailError =
        document.getElementById("emailError");

    let loginError =
        document.getElementById("loginError");


    // Clear previous errors
    emailError.textContent = "";
    loginError.textContent = "";


    // Email validation
    let emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        emailError.textContent =
            "❌ Please enter a valid email address.";

        return;
    }


    // Get registered details from localStorage
    let registeredEmail =
        localStorage.getItem("email");

    let registeredPassword =
        localStorage.getItem("password");


    // Check login details
    if (
        email === registeredEmail &&
        password === registeredPassword
    ) {

        // Show success message
        document.getElementById("successMessage")
            .style.display = "block";


        // Clear login fields
        document.getElementById("loginForm")
            .reset();


        // Go to dashboard after 1 second
        setTimeout(function() {

            window.location.href =
                "dashboard.html";

        }, 1000);


    } else {

        loginError.textContent =
            "❌ Invalid email or password.";

    }

});