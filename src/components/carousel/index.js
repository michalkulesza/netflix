import React from "react";
import { Main } from "./styles/carousel";

const Carousel = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

export default Carousel;
