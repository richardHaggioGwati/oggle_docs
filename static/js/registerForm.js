const registerForm = document.getElementById('registerForm');
const fullNameInputDom = document.getElementById('fullName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

registerForm.addEventListener('submit', function (event) {
	event.preventDefault();
	clearErrors();

	let isValid = true;
	let errorMessages = [];

	if (!emailValidator.test(email.value)) {
		errorMessages.push('Please provide a valid email address.');
		isValid = false;
	}

	if (password.value.length < 8) {
		errorMessages.push('Password must be at least 8 characters long');
		isValid = false;
	}

	if (password.value !== confirmPassword.value) {
		errorMessages.push('Passwords do not match');
		isValid = false;
	}

	if (!isValid) {
		displayErrors(errorMessages);
	} else {
		submit();
	}
});

function submit() {
	const formData = {
		name: fullNameInputDom.value,
		email: email.value,
		password: password.value,
	};
	fetch('/api/v1/register', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(formData),
	})
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				return response.json().then((data) => {
					throw new Error(data.error);
				});
			}
		})
		.then((data) => {
			localStorage.setItem('token', data.token);
			localStorage.setItem('username', data.user.name);

			//redirect
			window.location.href = '/dashboard.html';
		})
		.catch((error) => {
			console.error('Registration failed:', error);
			displayErrors([error.message || 'An error occurred. Please try again.']);
		});
}
