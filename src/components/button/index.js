import React from "react";
import { Main } from "./styles/button";

const Button = ({ route, children, ...restProps }) => {
	return (
		<Main to={route} {...restProps}>
			{children}
		</Main>
	);
};

export default Button;
