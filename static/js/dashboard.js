const userIcon = document.getElementById('userIcon');
const modal = document.getElementById('modal');
const closeButton = document.getElementsByClassName('close-button')[0];
const logoutButton = document.getElementById('logoutButton')

document.addEventListener('DOMContentLoaded', (event) => {
	const username = localStorage.getItem('username');
	if (username)
		document.getElementById('username').textContent = `Welcome, ${username}!`;
});

userIcon.addEventListener('click', () => {
	modal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
	modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
	if (event.target == modal) {
		modal.style.display = 'none';
	}
});

logoutButton.addEventListener('click', () => {
    localStorage.removeItem('token')
    localStorage.removeItem('username')

    //redirect
    window.location.href = '/';

    console.log('logout successfully')
})

