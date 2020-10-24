import React from "react";
import { Main, Square, Round, Container, Label, Clear } from "./styles/button";

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

export default Button;
