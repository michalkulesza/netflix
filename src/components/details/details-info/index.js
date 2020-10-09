import React from "react";
import { Main, Half, Content, Description, Cast, Loading } from "./styles/details-info";

const DetailsInfo = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

DetailsInfo.Half = ({ children, ...restProps }) => {
	return <Half {...restProps}>{children}</Half>;
};

DetailsInfo.Content = ({ children, ...restProps }) => {
	return <Content {...restProps}>{children}</Content>;
};

DetailsInfo.Description = ({ children, ...restProps }) => {
	return <Description {...restProps}>{children}</Description>;
};

DetailsInfo.Cast = ({ children, ...restProps }) => {
	return <Cast {...restProps}>{children}</Cast>;
};

DetailsInfo.Loading = ({ children, ...restProps }) => {
	return <Loading {...restProps}>{children}</Loading>;
};

export default DetailsInfo;
