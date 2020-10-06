import React from "react";
import { Main, Half, Content, Description, Cast } from "./styles/item-details-info";

const ItemDetailsInfo = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

ItemDetailsInfo.Half = ({ children, ...restProps }) => {
	return <Half {...restProps}>{children}</Half>;
};

ItemDetailsInfo.Content = ({ children, ...restProps }) => {
	return <Content {...restProps}>{children}</Content>;
};

ItemDetailsInfo.Description = ({ children, ...restProps }) => {
	return <Description {...restProps}>{children}</Description>;
};

ItemDetailsInfo.Cast = ({ children, ...restProps }) => {
	return <Cast {...restProps}>{children}</Cast>;
};

export default ItemDetailsInfo;
