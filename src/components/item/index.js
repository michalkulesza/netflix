import React from "react";
import { Main, Container, Wrapper, Loader } from "./styles/item";

const Item = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

Item.Container = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Item.Wrapper = ({ children, ...restProps }) => {
	return <Wrapper {...restProps}>{children}</Wrapper>;
};

Item.Loader = ({ children, ...restProps }) => {
	return <Loader {...restProps}>{children}</Loader>;
};

export default Item;
