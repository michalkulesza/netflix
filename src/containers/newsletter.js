import React, { useState } from "react";
import { Newsletter } from "../components/";
import { emailValidation } from "../helpers/validators";

const NewsletterContainer = () => {
	const [inputFocused, setInputFocused] = useState(false);
	const [email, setEmail] = useState("");
	const [error, setError] = useState("");

	return (
		<Newsletter>
			<Newsletter.Title>Ready to watch? Enter your email to create or restart your membership.</Newsletter.Title>
			<Newsletter.FormWrapper>
				<Newsletter.InputContainer>
					<Newsletter.InputWrapper>
						<Newsletter.Input
							onChange={({ target }) => {
								setEmail(target.value.trim());
							}}
							onKeyUp={() => setError(emailValidation(email))}
							value={email}
							onFocus={() => setInputFocused(true)}
							onBlur={() => setInputFocused(false)}
						/>
						<Newsletter.Label focused={inputFocused || email.length > 0}>Email address</Newsletter.Label>
					</Newsletter.InputWrapper>
					<Newsletter.Error>{error}</Newsletter.Error>
					<Newsletter.Button disabled={error || email === ""}>GET STARTED</Newsletter.Button>
				</Newsletter.InputContainer>
			</Newsletter.FormWrapper>
		</Newsletter>
	);
};

export default NewsletterContainer;
