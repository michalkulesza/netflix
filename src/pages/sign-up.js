import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeaderContainer, NavbarContainer, FooterContainer } from "../containers";
import { Navbar, Form, Header, Button } from "../components";
import { emailValidation, passwordValidation } from "../helpers/validators";
import { SIGN_IN } from "../constants/routes";
import { signupUser } from "../redux/actions/user";
import { useDispatch, useSelector } from "react-redux";

import Background from "../res/home-bg.jpg";

const SignUp = () => {
	const dispatch = useDispatch();
	const [name, setName] = useState("");
	const [nameError, setNameError] = useState(null);
	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState(null);
	const [password, setPassword] = useState("");
	const [passwordError, setPasswordError] = useState(null);
	const [secondPassword, setSecondPassword] = useState("");
	const [secondPasswordError, setSecondPasswordError] = useState(null);
	const [error, setError] = useState(null);
	const authChange = useSelector(state => state.toggles.authChange);

	const handleName = ({ target }) => {
		setName(target.value);
		setNameError(target.value === "" ? "Name cannot be empty" : null);
	};

	const handleEmail = ({ target }) => {
		setEmail(target.value);
		setEmailError(emailValidation(target.value));
	};

	const handlePassword = ({ target }) => {
		setPassword(target.value);
		setPasswordError(passwordValidation(target.value));
	};

	const handleSecondPassword = ({ target }) => {
		setSecondPassword(target.value);
		setSecondPasswordError(target.value !== password ? "Passwords must match" : null);
	};

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(signupUser(email, password, name));
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
								onChange={e => handleName(e)}
								value={name}
								type={"text"}
								error={nameError}
							/>
							<Form.Input
								placeholder={"Email"}
								onMouseDown={() => setError(null)}
								onChange={e => handleEmail(e)}
								value={email}
								error={emailError}
							/>
							<Form.Input
								placeholder={"Password"}
								onMouseDown={() => setError(null)}
								onChange={e => handlePassword(e)}
								value={password}
								type={"password"}
								error={passwordError}
							/>
							<Form.Input
								placeholder={"Re-type Password"}
								onMouseDown={() => setError(null)}
								onChange={e => handleSecondPassword(e)}
								value={secondPassword}
								type={"password"}
								error={secondPasswordError}
							/>
							<Form.Error onMouseDown={() => setError(null)}>{error}</Form.Error>
							<Button.Form
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
								loading={authChange}
							>
								Sign Up
							</Button.Form>
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
