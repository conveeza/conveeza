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

        try {
            pass2.type = "text";
        } catch {
            //
        }

    } else {
        password.type = "password";

        try {
            pass2.type = "password";
        } catch {
            //
        }
    }
}

var loadr =  document.getElementById('loadingblock')

function showloader(){
   loadr.style.display = 'block';
}

try{
    document.getElementById('loginFrm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission
    
        const email = document.getElementById('username').value;
        const password = document.getElementById('password').value;
    
        fetch(`https://localhost:7107/api/Auth/login?email=${email}&password=${password}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                if (data.token) {
                    // Save the JWT token to localStorage
                    const jwtToken = data.token;
                    console.log('Login successful: ');
                    document.cookie = `jwt=${jwtToken};path=/;secure;SameSite=Lax`;
                    window.location.href = `http://localhost:4200`; // Example redirection
                } else {
                    showAlert(data.message)
                    loadr.style.display = 'none';
                }
            })
            .catch(error => {
                console.error('Error:', error);
                //Handle network error or other issues
                showAlert('Login Failed!');
                loadr.style.display = 'none';
            });
    });

}catch{
    //
}

try{
    var userType = document.getElementById('accountType').value;
    var urlEding = '';
    var roleID = 5;
    if(userType == 'Employee'){
        urlEding = 'Employee/addEmployee';
        roleID = 5 
    }else if(userType == 'Customer'){
        urlEding = 'Customer/addCustomer';
        roleID = 2;
    }
    else{
        urlEding = 'Customer/addCustomer';
        roleID = 11;
    }

    document.getElementById('registrationForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission
    
        const name = document.getElementById('username').value;
        const surname = document.getElementById('surname').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const password = document.getElementById('password').value;
    
        fetch(`https://localhost:7107/api/${urlEding}?role_id=${roleID}&name=${name}&surname=${surname}&email=${email}&phone=${phone}&password=${password}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    // Save the JWT token to localStorage
                    console.log('Registration successful: ');
                    //window.location.href = `/index.html`; // Example redirection
                } else {
                    showAlert(data.message)
                    loadr.style.display = 'none';
                }
            })
            .catch(error => {
                console.error('Error:', error);
                //Handle network error or other issues
                showAlert('Registration Failed!');
                loadr.style.display = 'none';
            });
    });
}
catch{
    //
}

function showOrganizationFields(){
    var userType = document.getElementById('accountType').value
    if(userType == 'Employee'){
        document.getElementById('surnameBlk').style.display = 'block';
    }else if(userType == 'Customer'){
        document.getElementById('surnameBlk').style.display = 'block';
    }
    else{
        document.getElementById('surnameBlk').style.display = 'none';
    }
}


function showAlert(message, type) {
    const alertContainer = document.getElementById('alertContainer');
    const alert = document.createElement('div');
    alert.className = `alert alert-${type} alert-dismissible fade show`;
    alert.role = 'alert';
    alert.className = `alert alert-primary`;
    alert.innerHTML = `
      ${message}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    `;

    alertContainer.appendChild(alert);

    // Automatically remove the alert after 5 seconds
    setTimeout(() => {
        $(alert).alert('close');
    }, 5000);
}