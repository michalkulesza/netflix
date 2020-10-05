import React from "react";

import { Main, Container, Something } from "./styles/item-details";

const ItemDetails = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

ItemDetails.Container = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

ItemDetails.Something = ({ children, ...restProps }) => {
	return <Something {...restProps}>{children}</Something>;
};
export default ItemDetails;
