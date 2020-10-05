import React from "react";
import { Main, Something } from "./styles/item-details";

const ItemDetails = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

ItemDetails.Something = ({ children, ...restProps }) => {
	return <Something {...restProps}>{children}</Something>;
};
export default ItemDetails;
