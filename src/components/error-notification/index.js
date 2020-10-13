import React from "react";
import { Main, Wrapper } from "./styles/error-notification";

const ErrorNotification = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

ErrorNotification.Wrapper = ({ children, ...restProps }) => {
	return <Wrapper {...restProps}>{children}</Wrapper>;
};

export default ErrorNotification;
