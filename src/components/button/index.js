import React from "react";
import { Main, Square, Round, Container, Label } from "./styles/button";

const Button = ({ route, children, ...restProps }) => {
	return (
		<Main to={route} {...restProps}>
			{children}
		</Main>
	);
};

Button.Square = ({ iconScale, inverted, children, ...restProps }) => {
	return (
		<Square iconScale={iconScale} inverted={inverted} {...restProps}>
			{children}
		</Square>
	);
};

Button.Round = ({ label, inverted, children, ...restProps }) => {
	return (
		<Container>
			<Round inverted={inverted} {...restProps}>
				{children}
			</Round>
			{label && <Label>{label}</Label>}
		</Container>
	);
};

export default Button;
