import React from "react";
import { Link } from "react-router-dom";
import {
	Main,
	Container,
	Logo,
	Menu,
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

Navbar.Menu = ({ children, ...restProps }) => {
	return <Menu {...restProps}>{children}</Menu>;
};

Navbar.MenuItem = ({ children, ...restProps }) => {
	return <MenuItem {...restProps}>{children}</MenuItem>;
};

Navbar.Divide = ({ children, ...restProps }) => {
	return <Divide {...restProps}>{children}</Divide>;
};

Navbar.Genres = React.forwardRef((props, ref) => {
	return (
		<Genres ref={ref} genres={props.genres} scrolled={props.scrolled}>
			{props.children}
		</Genres>
	);
});

Navbar.GenresButtonWrapper = ({ children, ...restProps }) => {
	return <GenresButtonWrapper {...restProps}>{children}</GenresButtonWrapper>;
};

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
