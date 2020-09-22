import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeaderContainer, NavbarContainer, FooterContainer } from "../containers";
import { Navbar, Form, Header } from "../components";
import { SIGN_UP } from "../constants/routes";
import { emailValidation, passwordValidation } from "../helpers/validators";

import Background from "../res/home-bg.jpg";

const SignIn = () => {
	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState(null);
	const [password, setPassword] = useState("");
	const [passwordError, setPasswordError] = useState(null);

	const handleEmail = value => {
		setEmail(value);
		setEmailError(emailValidation(value));
	};

	const handlePassword = value => {
		setPassword(value);
		setPasswordError(passwordValidation(value));
	};

	return (
		<>
			<NavbarContainer>
				<Navbar.Logo largeLogo={true} />
			</NavbarContainer>
			<HeaderContainer bg={Background}>
				<Header.Inner>
					<Form>
						<Form.Container>
							<Form.Title>Sign In</Form.Title>
							<Form.Input placeholder={"Email"} onChange={handleEmail} value={email} error={emailError} />
							<Form.Input
								placeholder={"Password"}
								onChange={handlePassword}
								value={password}
								type={"password"}
								error={passwordError}
							/>
							<Form.Button disabled={password === "" || passwordError || email === "" || emailError}>
								Sign In
							</Form.Button>
							<Form.Redirect>
								New to Netflix? <Link to={SIGN_UP}>Sign up now</Link>.
							</Form.Redirect>
							<Form.Text>This page is protected by Google reCAPTCHA to ensure you're not a bot.</Form.Text>
						</Form.Container>
					</Form>
				</Header.Inner>
			</HeaderContainer>
			<FooterContainer></FooterContainer>
		</>
	);
};

export default SignIn;
