import React, { useState } from "react";
import { Link } from "react-router-dom";
import { firebase } from "../firebase";
import { HeaderContainer, NavbarContainer, FooterContainer } from "../containers";
import { Navbar, Form, Header } from "../components";
import { emailValidation, passwordValidation } from "../helpers/validators";
import { SIGN_IN, BROWSE } from "../constants/routes";

import Background from "../res/home-bg.jpg";

const SignUp = ({ history }) => {
	const [name, setName] = useState("");
	const [nameError, setNameError] = useState(null);
	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState(null);
	const [password, setPassword] = useState("");
	const [passwordError, setPasswordError] = useState(null);
	const [secondPassword, setSecondPassword] = useState("");
	const [secondPasswordError, setSecondPasswordError] = useState(null);
	const [error, setError] = useState(null);

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

	const handleSubmit = e => {
		e.preventDefault();

		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(({ user }) => {
				user.updateProfile({
					displayName: name,
				});
				history.push(BROWSE);
			})
			.catch(err => {
				setError(err.message);
				setName("");
				setEmail("");
				setPassword("");
				setSecondPassword("");
			});
	};

	return (
		<>
			<NavbarContainer>
				<Navbar.Logo largeLogo={true} />
			</NavbarContainer>
			<HeaderContainer bg={Background}>
				<Header.Inner>
					<Form>
						<Form.Container onSubmit={e => handleSubmit(e)}>
							<Form.Title>Sign Up</Form.Title>
							<Form.Input
								placeholder={"Name"}
								onMouseDown={() => setError(null)}
								onChange={handleName}
								value={name}
								type={"text"}
								error={nameError}
							/>
							<Form.Input
								placeholder={"Email"}
								onMouseDown={() => setError(null)}
								onChange={handleEmail}
								value={email}
								error={emailError}
							/>
							<Form.Input
								placeholder={"Password"}
								onMouseDown={() => setError(null)}
								onChange={handlePassword}
								value={password}
								type={"password"}
								error={passwordError}
							/>
							<Form.Input
								placeholder={"Re-type Password"}
								onMouseDown={() => setError(null)}
								onChange={handleSecondPassword}
								value={secondPassword}
								type={"password"}
								error={secondPasswordError}
							/>
							<Form.Error onMouseDown={() => setError(null)}>{error}</Form.Error>
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
