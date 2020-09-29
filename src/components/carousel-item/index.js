import React from "react";
import { Item, Container, Wrapper, Loader } from "./styles/carousel-item";

const CarouselItem = ({ children, ...restProps }) => {
	return <Item {...restProps}>{children}</Item>;
};

CarouselItem.Container = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

CarouselItem.Wrapper = ({ children, ...restProps }) => {
	return <Wrapper {...restProps}>{children}</Wrapper>;
};

CarouselItem.Loader = ({ children, ...restProps }) => {
	return <Loader {...restProps}>{children}</Loader>;
};

export default CarouselItem;
