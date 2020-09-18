const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const emailValidation = email => {
	if (email.length === 0) {
		return "Email is required!";
	}

	if (!regex.test(String(email).toLowerCase())) {
		return "Please enter a valid email address";
	}

	return null;
};
