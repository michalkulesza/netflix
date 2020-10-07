import React from "react";

import { Main, Container, About, AboutHeader, AboutPiece } from "./styles/details";

const Details = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

Details.Container = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Details.About = ({ children, ...restProps }) => {
	return <About {...restProps}>{children}</About>;
};

Details.AboutHeader = ({ children, ...restProps }) => {
	return <AboutHeader {...restProps}>{children}</AboutHeader>;
};

Details.AboutPiece = ({ children, ...restProps }) => {
	return <AboutPiece {...restProps}>{children}</AboutPiece>;
};

export default Details;
