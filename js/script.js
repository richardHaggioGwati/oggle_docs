document.getElementById('loginForm').addEventListener('submit', function (e) {
	e.preventDefault();
	const email = this.querySelector('input[type="email"]').value;
	const password = this.querySelector('input[type="password"]').value;
	console.log(`Login attempt with email: ${email}`);
	alert('Login successful!');
});

document
	.getElementById('forgotPasswordForm')
	.addEventListener('submit', function (e) {
		e.preventDefault();
		const email = this.querySelector('input[type="email"]').value;
		alert(`Password reset link would be sent to: ${email}`);
	});

document
	.getElementById('registerForm')
	.addEventListener('submit', function (e) {
		e.preventDefault();
		const name = this.querySelector('input[type="text"]').value;
		const email = this.querySelector('input[type="email"]').value;
		const password = this.querySelectorAll('input[type="password"]')[0].value;
		const confirmPassword = this.querySelectorAll('input[type="password"]')[1]
			.value;

		if (password !== confirmPassword) {
			alert('Passwords do not match!');
			return;
		}
		console.log(`Registration attempt for: ${name}, ${email}`);
		alert('Registration successful!');
	});
