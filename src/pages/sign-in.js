import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeaderContainer, NavbarContainer, FooterContainer } from "../containers";
import { Navbar, Form, Header } from "../components";
import { SIGN_UP } from "../constants/routes";
import { emailValidation, passwordValidation } from "../helpers/validators";
import { signinUser } from "../redux/actions/user";
import { useDispatch } from "react-redux";

import Background from "../res/home-bg.jpg";

const SignIn = () => {
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState(null);
	const [password, setPassword] = useState("");
	const [passwordError, setPasswordError] = useState(null);
	const [error, setError] = useState(null);

	const handleEmail = value => {
		setEmail(value);
		setEmailError(emailValidation(value));
	};

	const handlePassword = value => {
		setPassword(value);
		setPasswordError(passwordValidation(value));
	};

	const handleSubmit = e => {
		e.preventDefault();

		dispatch(signinUser(email, password));
	};

	return (
		<>
			<NavbarContainer>
				<Navbar.Logo largeLogo={true} />
			</NavbarContainer>
			<HeaderContainer bg={Background}>
				<Header.Inner>
					<Form>
						<Form.Container onSubmit={event => handleSubmit(event)}>
							<Form.Title>Sign In</Form.Title>
							<Form.Input
								placeholder={"Email"}
								onChange={({ target }) => handleEmail(target.value)}
								onMouseDown={() => setError(null)}
								value={email}
								error={emailError}
							/>
							<Form.Input
								placeholder={"Password"}
								onChange={({ target }) => handlePassword(target.value)}
								onMouseDown={() => setError(null)}
								value={password}
								type={"password"}
								error={passwordError}
							/>
							<Form.Error>{error}</Form.Error>
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
