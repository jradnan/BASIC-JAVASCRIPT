document.getElementById("login-submit").addEventListener('click', function () {
    const emailField = document.getElementById("user-email");
    const userEmail = emailField.value;
    //    user password

    const passwordField = document.getElementById("user-password");
    const userPassward = passwordField.value;
    if (userEmail == "adnan@gmail.com" && userPassward == "adnan@12") {
        window.location.href = 'banking.html'
    }
})