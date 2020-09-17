import React, { useState, useContext, createContext } from "react";
import { Main, Title, FormWrapper, InputWrapper, Input, Label, Button, Error } from "./styles/newsletter";

const NewsletterContext = createContext();

const Newsletter = ({ children, ...restProps }) => {
	const [inputFocused, setInputFocused] = useState(false);
	const [email, setEmail] = useState("");
	const [error, setError] = useState(null);

	//MAKE FUNCTION TO VALIDATE THE EMAIL
	//THEN IT SETS THE ERROR STATE

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

Newsletter.InputWrapper = function NewsletterInputWrapper({ children, ...restProps }) {
	return <InputWrapper {...restProps}>{children}</InputWrapper>;
};

Newsletter.Input = function NewsletterInput({ children, ...restProps }) {
	const { setInputFocused, email, setEmail } = useContext(NewsletterContext);
	return (
		<Input
			onChange={({ target }) => setEmail(target.value)}
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
	return <Button {...restProps}>{children}</Button>;
};

Newsletter.Error = function NewsletterError({ ...restProps }) {
	const { error } = useContext(NewsletterContext);
	return <Error {...restProps}>{error}</Error>;
};

export default Newsletter;
