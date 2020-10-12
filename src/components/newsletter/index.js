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

Newsletter.Title = ({ children, ...restProps }) => {
	return <Title {...restProps}>{children}</Title>;
};

Newsletter.FormWrapper = ({ children, ...restProps }) => {
	return <FormWrapper {...restProps}>{children}</FormWrapper>;
};

Newsletter.InputContainer = ({ children, ...restProps }) => {
	return <InputContainer {...restProps}>{children}</InputContainer>;
};

Newsletter.InputWrapper = ({ children, ...restProps }) => {
	return <InputWrapper {...restProps}>{children}</InputWrapper>;
};

Newsletter.Input = ({ children, ...restProps }) => {
	return <Input {...restProps}>{children}</Input>;
};

Newsletter.Label = ({ children, ...restProps }) => {
	return <Label {...restProps}>{children}</Label>;
};

Newsletter.Button = ({ children, ...restProps }) => {
	return <Button {...restProps}>{children}</Button>;
};

Newsletter.Error = ({ children, ...restProps }) => {
	return <Error {...restProps}>{children}</Error>;
};

export default Newsletter;
