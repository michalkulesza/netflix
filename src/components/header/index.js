import React from "react";
import { Main, Container, Inner, Heading, SubHeading } from "./styles/header";

const Header = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

Header.Container = function ({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
};

Header.Inner = function ({ children, ...restProps }) {
	return <Inner {...restProps}>{children}</Inner>;
};

Header.Heading = function ({ children, ...restProps }) {
	return <Heading {...restProps}>{children}</Heading>;
};

Header.SubHeading = function ({ children, ...restProps }) {
	return <SubHeading {...restProps}>{children}</SubHeading>;
};

export default Header;
