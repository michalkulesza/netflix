import React from "react";
import { Link } from "react-router-dom";
import { Main, Container, Logo, Menu, MenuItem, Divide } from "./styles/navbar";
import { HOME } from "../../constants/routes";

import LogoSVG from "../../res/logo.svg";

const Navbar = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

Navbar.Container = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Navbar.Logo = ({ children, ...restProps }) => {
	return (
		<Link to={HOME}>
			<Logo src={LogoSVG} alt={"Netflix"} {...restProps}>
				{children}
			</Logo>
		</Link>
	);
};

Navbar.Menu = ({ children, ...restProps }) => {
	return <Menu {...restProps}>{children}</Menu>;
};

Navbar.MenuItem = ({ children, ...restProps }) => {
	return <MenuItem {...restProps}>{children}</MenuItem>;
};

Navbar.Divide = ({ children, ...restProps }) => {
	return <Divide {...restProps}>{children}</Divide>;
};

export default Navbar;
