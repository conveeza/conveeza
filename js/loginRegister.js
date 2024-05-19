function checkPasswords() {
    // Get the values of the password inputs
    var password = document.getElementById('password').value;
    var pass2 = document.getElementById('pass2').value;
    
    // Get the message element
    var passMessage = document.getElementById('passMessage');

    // Check if the passwords match
    if (password === pass2) {
        passMessage.textContent = "Passwords Match!";
        passMessage.className = "success";
    } else {
        passMessage.textContent = "Passwords do not match.";
        passMessage.className = "error";
    }
}

function togglePasswordVisibility() {
    // Get the password inputs
    var password = document.getElementById('password');
    var pass2 = document.getElementById('pass2');
    
    // Toggle the type attribute
    if (password.type === "password") {
        password.type = "text";
        pass2.type = "text";
    } else {
        password.type = "password";
        pass2.type = "password";
    }
}