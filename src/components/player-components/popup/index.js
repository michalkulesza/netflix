import React from "react";
import { Main } from "./styles/popup";

const Popup = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

export default Popup;
