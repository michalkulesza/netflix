import React from "react";
import { Link } from "react-router-dom";
import { Main, Container, Logo, Menu, MenuItem, Divide } from "./styles/navbar";
import { HOME } from "../../constants/routes";

import LogoSVG from "../../res/logo.svg";

const Navbar = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

Navbar.Container = function Navbar({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
};

Navbar.Logo = function ({ children, ...restProps }) {
	return (
		<Link to={HOME}>
			<Logo src={LogoSVG} alt={"Netflix"} {...restProps}>
				{children}
			</Logo>
		</Link>
	);
};

Navbar.Menu = function ({ children, ...restProps }) {
	return <Menu {...restProps}>{children}</Menu>;
};

Navbar.MenuItem = function ({ children, ...restProps }) {
	return <MenuItem {...restProps}>{children}</MenuItem>;
};

Navbar.Divide = function ({ children, ...restProps }) {
	return <Divide {...restProps}>{children}</Divide>;
};

export default Navbar;
