import React from "react";
import { Main, Square } from "./styles/button";

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

export default Button;
