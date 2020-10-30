import React, { useState } from "react";
import { Main, Container, Title, Input, Error, InputWrapper, Label, Redirect, Text, MainError } from "./styles/form";

const Form = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

Form.Container = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Form.Title = ({ children, ...restProps }) => {
	return <Title {...restProps}>{children}</Title>;
};

Form.Input = function FormInput({ error, placeholder, value, ...restProps }) {
	const [activeInput, setActiveInput] = useState(false);

	return (
		<>
			<InputWrapper>
				<Input
					{...restProps}
					onFocus={() => setActiveInput(true)}
					onBlur={({ target }) => target.value.length === 0 && setActiveInput(false)}
					value={value}
				/>
				<Label activeInput={activeInput}>{placeholder}</Label>
			</InputWrapper>
			<Error>{error}</Error>
		</>
	);
};

Form.Redirect = ({ children, ...restProps }) => {
	return <Redirect {...restProps}>{children}</Redirect>;
};

Form.Text = ({ children, ...restProps }) => {
	return <Text {...restProps}>{children}</Text>;
};

Form.Error = ({ children, ...restProps }) => {
	return <MainError {...restProps}>{children}</MainError>;
};

export default Form;
