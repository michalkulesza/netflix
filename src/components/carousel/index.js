import React from "react";
import { Main, Category, Overlay, Button, Container, Wrapper, ItemsContainer } from "./styles/carousel";

const Carousel = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

Carousel.Category = ({ children, ...restProps }) => {
	return <Category {...restProps}>{children}</Category>;
};

Carousel.Overlay = ({ children, ...restProps }) => {
	return <Overlay {...restProps}>{children}</Overlay>;
};

Carousel.Button = ({ children, ...restProps }) => {
	return <Button {...restProps}>{children}</Button>;
};

Carousel.Container = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Carousel.Wrapper = ({ children, ...restProps }) => {
	return <Wrapper {...restProps}>{children}</Wrapper>;
};

Carousel.ItemsContainer = ({ children, ...restProps }) => {
	return <ItemsContainer {...restProps}>{children}</ItemsContainer>;
};

export default Carousel;
