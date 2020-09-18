import React from "react";
import { Main } from "./styles/button";

const Button = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

export default Button;
