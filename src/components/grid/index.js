import React from "react";
import { Main } from "./styles/grid";

const Grid = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

export default Grid;
