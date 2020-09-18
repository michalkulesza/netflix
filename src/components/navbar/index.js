import React from "react";
import { Main } from "./styles/navbar";

const Navbar = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

export default Navbar;
