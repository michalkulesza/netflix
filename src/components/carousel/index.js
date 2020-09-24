import React from "react";
import { Main, Container, ItemWrapper, Item } from "./styles/carousel";

const Carousel = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

Carousel.Container = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Carousel.ItemWrapper = ({ children, ...restProps }) => {
	return <ItemWrapper {...restProps}>{children}</ItemWrapper>;
};

Carousel.Item = ({ children, ...restProps }) => {
	return <Item {...restProps}>{children}</Item>;
};

export default Carousel;
