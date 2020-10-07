import React from "react";
import { Main, Square, Round, Container, Label } from "./styles/button";

const Button = ({ route, children, ...restProps }) => {
	return (
		<Main to={route} {...restProps}>
			{children}
		</Main>
	);
};

Button.Square = ({ iconScale, inverted, marginRight, children, ...restProps }) => {
	return (
		<Square iconScale={iconScale} inverted={inverted} marginRight={marginRight} {...restProps}>
			{children}
		</Square>
	);
};

Button.Round = ({ label, inverted, dark, marginRight, children, ...restProps }) => {
	return (
		<Container>
			<Round inverted={inverted} marginRight={marginRight} dark={dark} {...restProps}>
				{children}
			</Round>
			{label && <Label>{label}</Label>}
		</Container>
	);
};

export default Button;
