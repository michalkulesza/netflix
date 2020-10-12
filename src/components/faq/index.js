import React from "react";
import { Main, Container, Title, List, Item, Header, Icon, Body, Text } from "./styles/faq";

const Faq = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

Faq.Container = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Faq.Title = ({ children, ...restProps }) => {
	return <Title {...restProps}>{children}</Title>;
};

Faq.List = ({ children, ...restProps }) => {
	return <List {...restProps}>{children}</List>;
};

Faq.Item = ({ children, ...restProps }) => {
	return <Item {...restProps}>{children}</Item>;
};

Faq.Header = ({ children, ...restProps }) => {
	return <Header {...restProps}>{children}</Header>;
};

Faq.Icon = ({ children, ...restProps }) => {
	return <Icon {...restProps}>{children}</Icon>;
};

Faq.Body = ({ children, ...restProps }) => {
	return <Body {...restProps}>{children}</Body>;
};

Faq.Text = ({ children, ...restProps }) => {
	return <Text {...restProps}>{children}</Text>;
};

export default Faq;
