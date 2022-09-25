let userName = '';
let email = '';
let password = '';
let userExists = false;
let registered = false;
const formContainer = document.getElementById ('form-container');
const profileContainer = document.getElementById('profile-container');
const userDatabase = ['John', 'Jane', 'Bob', 'Ashley'];

function checkExistingUser(array) {
	for (let i = 0; i < array.length; i++) {
		if (userName === array[i]) {
			console.log("taken");
			return true;
		}
	}
	formValidate(userName, email, password);
}

function formInput (e) {
  e.preventDefault();
  userName = e.target.username.value;
  email = e.target.email.value;
	password = e.target.password.value;
	checkExistingUser(userDatabase);
}

function formValidate (usernameVar, emailVar, passwordVar) {
  if (usernameVar && emailVar && passwordVar) {
    console.log ('Congratulations on signing up!');
		registered = true;
		renderProfile(registered);
	} else {
		console.log ('All form fields must be filled out');
	}
}

function renderProfile(registeredBoolean) {
  if (registeredBoolean) {
    formContainer.setAttribute ('id', 'none');
    profileContainer.style.visibility = 'visible';
  }
}

// change to arrow function
