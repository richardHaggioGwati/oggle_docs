const loginForm = document.getElementById('loginForm')
const emailInput = document.getElementById('email')
const passwordInout = document.getElementById('password')

loginForm.addEventListener('submit', function (event) {
    event.preventDefault()
    clearErrors()

    let isValid = true
    let errorMessages = []

    if (!emailValidator.test(emailInput.value)) {
        errorMessages.push('Please provide a valid email address.');
        isValid = false;
    }

    if (password.value.length < 8) {
		errorMessages.push('Password must be at least 8 characters long');
		isValid = false;
    }
    
    if (!isValid) {
        displayErrors(errorMessages)
    } else {
        login()
    }
})

function login() {
    const formData = {
        email: emailInput.value,
        password: passwordInout.value
    }

    fetch('/api/v1/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then((response) => {
        if (response.ok) {
            if (response.redirected) {
                window.location.href = response.url;
            } else {
                return response.json();
            }
        } else {
            return response.json().then((data) => {
                throw new Error(data.error || 'Failed to login');
            });

        }
    })
    .then((data) => {
        if (data && data.error) {
            displayErrors([data.error]);
        }
    })
    .catch((error) => {
        displayErrors([error.message || 'An error occurred. Please try again.']);
    });
}