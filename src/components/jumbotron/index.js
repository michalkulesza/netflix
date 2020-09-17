import React from "react";
import { Main, Container, Half, Title, SubTitle, Image } from "./styles/jumbotron";

const Jumbotron = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

Jumbotron.Container = function JumbotronContainer({ children, direction = "row", ...restProps }) {
	return (
		<Container direction={direction} {...restProps}>
			{children}
		</Container>
	);
};

Jumbotron.Half = function JumbotronContainer({ children, direction = "row", ...restProps }) {
	return (
		<Half direction={direction} {...restProps}>
			{children}
		</Half>
	);
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
