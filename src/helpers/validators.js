const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;

export const emailValidation = email => {
	if (email.length === 0) {
		return "Email is required!";
	}

	if (!emailRegex.test(String(email).toLowerCase())) {
		return "Please enter a valid email address";
	}

	return null;
};

export const passwordValidation = password => {
	if (password.length === 0) {
		return "Password is required!";
	}

	if (!passwordRegex.test(String(password))) {
		return "Password must contain at least 6 characters, one letter, one number and one special character.";
	}

	return null;
};

export default { emailValidation, passwordValidation };
