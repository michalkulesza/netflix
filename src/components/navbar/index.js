import React from "react";
import { Link } from "react-router-dom";
import {
	Main,
	Container,
	Logo,
	MenuWrapper,
	Menu,
	MenuMobile,
	MenuListMobile,
	MenuItemMobile,
	MenuItem,
	Divide,
	Genres,
	GenresButtonWrapper,
	GenresButton,
	GenresListWrapper,
	GenresList,
	GenresItem,
} from "./styles/navbar";
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

Navbar.MenuWrapper = ({ children, ...restProps }) => {
	return <MenuWrapper {...restProps}>{children}</MenuWrapper>;
};

Navbar.Menu = ({ children, ...restProps }) => {
	return <Menu {...restProps}>{children}</Menu>;
};

Navbar.MenuItem = ({ children, ...restProps }) => {
	return <MenuItem {...restProps}>{children}</MenuItem>;
};

Navbar.MenuMobile = ({ children, ...restProps }) => {
	return <MenuMobile {...restProps}>{children}</MenuMobile>;
};

Navbar.MenuListMobile = ({ children, ...restProps }) => {
	return <MenuListMobile {...restProps}>{children}</MenuListMobile>;
};

Navbar.MenuItemMobile = ({ children, ...restProps }) => {
	return <MenuItemMobile {...restProps}>{children}</MenuItemMobile>;
};

Navbar.Divide = ({ children, ...restProps }) => {
	return <Divide {...restProps}>{children}</Divide>;
};

Navbar.Genres = ({ children, ...restProps }) => {
	return <Genres {...restProps}>{children}</Genres>;
};

Navbar.GenresButtonWrapper = React.forwardRef((props, ref) => {
	return <GenresButtonWrapper ref={ref}>{props.children}</GenresButtonWrapper>;
});

Navbar.GenresButton = ({ children, ...restProps }) => {
	return <GenresButton {...restProps}>{children}</GenresButton>;
};

Navbar.GenresListWrapper = ({ children, ...restProps }) => {
	return <GenresListWrapper {...restProps}>{children}</GenresListWrapper>;
};

Navbar.GenresList = ({ children, ...restProps }) => {
	return <GenresList {...restProps}>{children}</GenresList>;
};

Navbar.GenresItem = ({ children, ...restProps }) => {
	return <GenresItem {...restProps}>{children}</GenresItem>;
};

export default Navbar;
