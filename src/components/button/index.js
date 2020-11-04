import React from "react";
import { Main, Square, Round, Container, Label, Clear, Form } from "./styles/button";

import { ImSpinner8 } from "react-icons/im";

const Button = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

Button.Square = ({ iconScale, inverted, marginRight, children, ...restProps }) => {
	return (
		<Square iconScale={iconScale} inverted={inverted} marginRight={marginRight} {...restProps}>
			{children}
		</Square>
	);
};

Button.Round = ({ label, inverted, dark, marginRight, children, isLoading, ...restProps }) => {
	return (
		<Container marginRight={marginRight}>
			<Round inverted={inverted} dark={dark} isLoading={isLoading} {...restProps}>
				{children}
			</Round>
			{label && <Label>{label}</Label>}
		</Container>
	);
};

Button.Clear = ({ size, padding, children, margin, ...restProps }) => {
	return (
		<Clear size={size} padding={padding} margin={margin} {...restProps}>
			{children}
		</Clear>
	);
};

Button.Form = ({ loading, children, ...restProps }) => {
	return <Form {...restProps}>{loading ? <ImSpinner8 /> : children}</Form>;
};

export default Button;
