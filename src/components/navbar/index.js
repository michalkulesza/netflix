import React from "react";
import { Link } from "react-router-dom";
import { Main, Container, Logo } from "./styles/navbar";
import { HOME } from "../../constants/routes";

import LogoSVG from "../../res/logo.svg";

const Navbar = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

Navbar.Container = function ({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
};

Navbar.Logo = function ({ largeLogo = false, children, ...restProps }) {
	return (
		<Link to={HOME}>
			<Logo largeLogo={largeLogo} src={LogoSVG} alt={"Netflix"} {...restProps}>
				{children}
			</Logo>
		</Link>
	);
};

export default Navbar;
