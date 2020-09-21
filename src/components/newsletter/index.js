import React, { useState, useContext, createContext } from "react";
import {
	Main,
	Title,
	FormWrapper,
	InputContainer,
	InputWrapper,
	Input,
	Label,
	Button,
	Error,
} from "./styles/newsletter";
import { emailValidation } from "../../helpers/validators";

const NewsletterContext = createContext();

const Newsletter = ({ children, ...restProps }) => {
	const [inputFocused, setInputFocused] = useState(false);
	const [email, setEmail] = useState("");
	const [error, setError] = useState(" ");

	return (
		<NewsletterContext.Provider value={{ inputFocused, setInputFocused, email, setEmail, error, setError }}>
			<Main {...restProps}>{children}</Main>
		</NewsletterContext.Provider>
	);
};

Newsletter.Title = function NewsletterTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Newsletter.FormWrapper = function NewsletterFormWrapper({ children, ...restProps }) {
	return <FormWrapper {...restProps}>{children}</FormWrapper>;
};

Newsletter.InputContainer = function NewsletterInputContainer({ children, ...restProps }) {
	return <InputContainer {...restProps}>{children}</InputContainer>;
};

Newsletter.InputWrapper = function NewsletterInputWrapper({ children, ...restProps }) {
	return <InputWrapper {...restProps}>{children}</InputWrapper>;
};

Newsletter.Input = function NewsletterInput({ children, ...restProps }) {
	const { setInputFocused, email, setEmail, setError } = useContext(NewsletterContext);
	return (
		<Input
			onChange={({ target }) => {
				setEmail(target.value.trim());
			}}
			onKeyUp={() => setError(emailValidation(email))}
			value={email}
			onFocus={() => setInputFocused(true)}
			onBlur={() => setInputFocused(false)}
			{...restProps}
		>
			{children}
		</Input>
	);
};

Newsletter.Label = function NewsletterLabel({ children, ...restProps }) {
	const { inputFocused, email } = useContext(NewsletterContext);
	return (
		<Label focused={inputFocused || email.length > 0} {...restProps}>
			{children}
		</Label>
	);
};

Newsletter.Button = function NewsletterButton({ children, ...restProps }) {
	const { error } = useContext(NewsletterContext);
	return (
		<Button disabled={error} {...restProps}>
			{children}
		</Button>
	);
};

Newsletter.Error = function NewsletterError({ ...restProps }) {
	const { error } = useContext(NewsletterContext);
	return <Error {...restProps}>{error}</Error>;
};

export default Newsletter;
