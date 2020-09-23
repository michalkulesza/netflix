import React from "react";
import { Main, Container, Title, List, Item, Header, Icon, Body, Text } from "./styles/faq";

const Faq = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

Faq.Container = function ({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
};

Faq.Title = function ({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Faq.List = function ({ children, ...restProps }) {
	return <List {...restProps}>{children}</List>;
};

Faq.Item = function ({ children, ...restProps }) {
	return <Item {...restProps}>{children}</Item>;
};

Faq.Header = function ({ children, ...restProps }) {
	return <Header {...restProps}>{children}</Header>;
};

Faq.Icon = function ({ children, ...restProps }) {
	return <Icon {...restProps}>{children}</Icon>;
};

Faq.Body = function ({ children, ...restProps }) {
	return <Body {...restProps}>{children}</Body>;
};

Faq.Text = function ({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

export default Faq;
