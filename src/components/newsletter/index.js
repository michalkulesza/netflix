import React from "react";
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

const Newsletter = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
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
	return <Input {...restProps}>{children}</Input>;
};

Newsletter.Label = function NewsletterLabel({ children, ...restProps }) {
	return <Label {...restProps}>{children}</Label>;
};

Newsletter.Button = function NewsletterButton({ children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>;
};

Newsletter.Error = function NewsletterError({ children, ...restProps }) {
	return <Error {...restProps}>{children}</Error>;
};

export default Newsletter;
