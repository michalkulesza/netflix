import React from "react";
import { Main, Wrapper } from "./styles/grid";

const Grid = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

Grid.Wrapper = ({ children, ...restProps }) => {
	return <Wrapper {...restProps}>{children}</Wrapper>;
};

export default Grid;
