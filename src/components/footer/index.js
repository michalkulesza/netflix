import React from "react";
import { Main, Container, Heading, Grid, Ul, Li, Text } from "./styles/footer";

const Footer = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

Footer.Container = function ({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
};

Footer.Heading = function ({ children, ...restProps }) {
	return <Heading {...restProps}>{children}</Heading>;
};

Footer.Grid = function ({ children, ...restProps }) {
	return <Grid {...restProps}>{children}</Grid>;
};

Footer.Ul = function ({ children, ...restProps }) {
	return <Ul {...restProps}>{children}</Ul>;
};

Footer.Li = function ({ children, ...restProps }) {
	return <Li {...restProps}>{children}</Li>;
};

Footer.Text = function ({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

export default Footer;
