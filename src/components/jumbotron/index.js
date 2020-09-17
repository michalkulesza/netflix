import React from "react";
import { Main, Container, Half, Title, SubTitle, Image } from "./styles/jumbotron";

const Jumbotron = ({ children, direction = "row", ...restProps }) => {
	return <Main direction={direction}>{children}</Main>;
};

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Half = function JumbotronContainer({ children, ...restProps }) {
	return <Half {...restProps}>{children}</Half>;
};
Jumbotron.Title = function JumbotronContainer({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};
Jumbotron.SubTitle = function JumbotronContainer({ children, ...restProps }) {
	return <SubTitle {...restProps}>{children}</SubTitle>;
};
Jumbotron.Image = function JumbotronContainer({ children, ...restProps }) {
	return <Image {...restProps} />;
};

export default Jumbotron;
