import React from "react";
import { Main } from "./styles/carousels";

const Carousels = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

export default Carousels;
