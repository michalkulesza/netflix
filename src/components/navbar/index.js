import React from "react";
import { Main, Container, Logo } from "./styles/navbar";

const Navbar = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

Navbar.Container = function ({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
};

Navbar.Logo = function ({ largeLogo, children, ...restProps }) {
	return (
		<Logo largeLogo={largeLogo} {...restProps}>
			{children}
		</Logo>
	);
};

export default Navbar;
