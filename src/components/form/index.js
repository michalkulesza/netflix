import React, { useState } from "react";
import { Main, Container, Title, Input, Error, InputWrapper, Label } from "./styles/form";

const Form = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

Form.Container = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Form.Title = ({ children, ...restProps }) => {
	return <Title {...restProps}>{children}</Title>;
};

Form.Input = function FormInput({ error, placeholder, onChange, value, ...restProps }) {
	const [activeInput, setActiveInput] = useState(false);

	return (
		<>
			<InputWrapper>
				<Input
					{...restProps}
					onChange={({ target }) => onChange(target.value)}
					onFocus={() => setActiveInput(true)}
					onBlur={({ target }) => target.value.length === 0 && setActiveInput(false)}
				/>
				<Label activeInput={activeInput}>{placeholder}</Label>
			</InputWrapper>
			<Error>{error}</Error>
		</>
	);
};

export default Form;
