// show a message with a type of the input
function showMessage(input, message, type) {
	// get the small element and set the message
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	// update the class for the input
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
	// check if the value is not empty
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	// validate email format
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const email = input.value.trim();
	if (!emailRegex.test(email)) {
		return showError(input, invalidMsg);
	}
	return true;
}
function validatphone(input, requiredMsg, invalidMsg) {
	// check if the value is not empty
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	// validate email format

	if (isNaN(tel)) {
		return showError(input, invalidMsg);
	}
	if(length(tel) > 10)
	return showError(input, invalidMsg);
	return true;
}

const form = document.querySelector("#signup");

const NAME_REQUIRED = "Please enter your name";
const TITLE_REQUIRED = "Please enter your book title";
const EMAIL_REQUIRED = "Please enter your email";
const PHONE_REQUIRED = "Please enter your phone number";
const EMAIL_INVALID = "Please enter a correct email address format";
const PHONE_INVALID = "Please enter a correct phone number"

form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

	// validate the form
	let nameValid = hasValue(form.elements["name"], NAME_REQUIRED);
	let titleValid = hasValue(form.elements["title"],TITLE_REQUIRED );
	let dateValid = hasValue(form.elements["date"],TITLE_REQUIRED );
	let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);
	let phonevalid = validatphone(form.elements["tel"],PHONE_REQUIRED,PHONE_INVALID);
	// if valid, submit the form.
	if (nameValid && emailValid && phonevalid) {
		alert("Demo only. No form was posted.");
	}
});

