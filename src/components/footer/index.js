import React from "react";
import { Main, Container, Heading, Grid, Ul, Li, Text } from "./styles/footer";

const Footer = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

Footer.Container = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Footer.Heading = ({ children, ...restProps }) => {
	return <Heading {...restProps}>{children}</Heading>;
};

Footer.Grid = ({ children, ...restProps }) => {
	return <Grid {...restProps}>{children}</Grid>;
};

Footer.Ul = ({ children, ...restProps }) => {
	return <Ul {...restProps}>{children}</Ul>;
};

Footer.Li = ({ children, ...restProps }) => {
	return <Li {...restProps}>{children}</Li>;
};

Footer.Text = ({ children, ...restProps }) => {
	return <Text {...restProps}>{children}</Text>;
};

export default Footer;
