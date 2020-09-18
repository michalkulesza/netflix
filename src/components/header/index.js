import React from "react";
import {
	Main,
	Background,
	BackgroundImg,
	BackgroundGradient,
	BackgroundWrapper,
	Container,
	Inner,
	Heading,
	SubHeading,
} from "./styles/header";

const Header = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

Header.BackgroundWrapper = function ({ children, ...restProps }) {
	return <BackgroundWrapper {...restProps}>{children}</BackgroundWrapper>;
};

Header.Background = function ({ children, ...restProps }) {
	return <Background {...restProps}>{children}</Background>;
};

Header.BackgroundImg = function ({ children, ...restProps }) {
	return <BackgroundImg {...restProps}>{children}</BackgroundImg>;
};

Header.BackgroundGradient = function ({ children, ...restProps }) {
	return <BackgroundGradient {...restProps}>{children}</BackgroundGradient>;
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
