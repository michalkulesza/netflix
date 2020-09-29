import React from "react";
import { Main } from "./styles/popup";

const PopUp = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

export default PopUp;
