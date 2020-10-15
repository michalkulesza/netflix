import React from "react";
import { Main, Wrapper, Loading } from "./styles/grid";

const Grid = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

Grid.Wrapper = ({ children, ...restProps }) => {
	return <Wrapper {...restProps}>{children}</Wrapper>;
};

Grid.Loading = ({ children, ...restProps }) => {
	return <Loading {...restProps}>{children}</Loading>;
};

export default Grid;
