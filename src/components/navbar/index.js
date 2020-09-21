import React from "react";
import { Main, Container, Logo } from "./styles/navbar";

import LogoSVG from "../../res/logo.svg";

const Navbar = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

Navbar.Container = function ({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
};

Navbar.Logo = function ({ largeLogo = false, children, ...restProps }) {
	return (
		<Logo largeLogo={largeLogo} src={LogoSVG} alt={"Netflix"} {...restProps}>
			{children}
		</Logo>
	);
};

export default Navbar;
