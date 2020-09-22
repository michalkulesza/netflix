import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeaderContainer, NavbarContainer, FooterContainer } from "../containers";
import { Navbar, Form, Header } from "../components";
import { emailValidation, passwordValidation } from "../helpers/validators";
import { SIGN_IN } from "../constants/routes";

import Background from "../res/home-bg.jpg";

const SignUp = () => {
	const [name, setName] = useState("");
	const [nameError, setNameError] = useState(null);
	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState(null);
	const [password, setPassword] = useState("");
	const [passwordError, setPasswordError] = useState(null);
	const [secondPassword, setSecondPassword] = useState("");
	const [secondPasswordError, setSecondPasswordError] = useState(null);

	const handleName = value => {
		setName(value);
		setNameError(value === "" ? "Name cannot be empty" : null);
	};

	const handleEmail = value => {
		setEmail(value);
		setEmailError(emailValidation(value));
	};

	const handlePassword = value => {
		setPassword(value);
		setPasswordError(passwordValidation(value));
	};

	const handleSecondPassword = value => {
		setSecondPassword(value);
		setSecondPasswordError(value !== password ? "Passwords must match" : null);
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
							<Form.Title>Sign Up</Form.Title>
							<Form.Input placeholder={"Name"} onChange={handleName} value={name} type={"text"} error={nameError} />
							<Form.Input placeholder={"Email"} onChange={handleEmail} value={email} error={emailError} />
							<Form.Input
								placeholder={"Password"}
								onChange={handlePassword}
								value={password}
								type={"password"}
								error={passwordError}
							/>
							<Form.Input
								placeholder={"Re-type Password"}
								onChange={handleSecondPassword}
								value={secondPassword}
								type={"password"}
								error={secondPasswordError}
							/>
							<Form.Button
								disabled={
									name === "" ||
									email === "" ||
									password === "" ||
									secondPassword === "" ||
									nameError ||
									emailError ||
									passwordError ||
									secondPasswordError
								}
							>
								Sign Up
							</Form.Button>
							<Form.Redirect>
								Already a Netflix user? <Link to={SIGN_IN}>Sign in</Link>.
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

export default SignUp;
