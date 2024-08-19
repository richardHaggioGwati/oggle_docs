const emailValidator = /^\S+@\S+\.\S+$/;

// Create error popup element
const errorPopup = document.createElement('div');
errorPopup.id = 'errorPopup';
errorPopup.setAttribute('role', 'alert');  // Accessibility improvement
document.body.appendChild(errorPopup);

/**
 * @param {string[]} messages
 * @return {void}
 */
function displayErrors(messages) {
	errorPopup.innerHTML = messages.join('<br>');
	errorPopup.classList.add('show');
	setTimeout(() => {
		errorPopup.classList.remove('show');
	}, 5000);
}

function clearErrors() {
	errorPopup.innerHTML = '';
	errorPopup.classList.remove('show');
}
