import React from "react";

import {
	Main,
	Container,
	Related,
	RelatedHeader,
	RelatedItems,
	RelatedItem,
	RelatedItemImage,
	RelatedItemImageWrapper,
	RelatedItemImageOverlay,
	RelatedItemImageOverlayButton,
	RelatedItemMain,
	RelatedItemTitle,
	RelatedItemInfo,
	RelatedItemDescription,
	About,
	AboutHeader,
	AboutPiece,
} from "./styles/details";

const Details = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

Details.Container = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Details.Related = ({ children, ...restProps }) => {
	return <Related {...restProps}>{children}</Related>;
};

Details.RelatedHeader = ({ children, ...restProps }) => {
	return <RelatedHeader {...restProps}>{children}</RelatedHeader>;
};

Details.RelatedItems = ({ children, ...restProps }) => {
	return <RelatedItems {...restProps}>{children}</RelatedItems>;
};

Details.RelatedItem = ({ children, ...restProps }) => {
	return <RelatedItem {...restProps}>{children}</RelatedItem>;
};

Details.RelatedItemImage = ({ children, ...restProps }) => {
	return <RelatedItemImage {...restProps}>{children}</RelatedItemImage>;
};

Details.RelatedItemImageWrapper = ({ children, ...restProps }) => {
	return <RelatedItemImageWrapper {...restProps}>{children}</RelatedItemImageWrapper>;
};

Details.RelatedItemImageOverlayButton = ({ children, ...restProps }) => {
	return <RelatedItemImageOverlayButton {...restProps}>{children}</RelatedItemImageOverlayButton>;
};

Details.RelatedItemImageOverlay = ({ children, ...restProps }) => {
	return <RelatedItemImageOverlay {...restProps}>{children}</RelatedItemImageOverlay>;
};

Details.RelatedItemMain = ({ children, ...restProps }) => {
	return <RelatedItemMain {...restProps}>{children}</RelatedItemMain>;
};

Details.RelatedItemTitle = ({ children, ...restProps }) => {
	return <RelatedItemTitle {...restProps}>{children}</RelatedItemTitle>;
};

Details.RelatedItemInfo = ({ children, ...restProps }) => {
	return <RelatedItemInfo {...restProps}>{children}</RelatedItemInfo>;
};

Details.RelatedItemDescription = ({ children, ...restProps }) => {
	return <RelatedItemDescription {...restProps}>{children}</RelatedItemDescription>;
};

Details.About = ({ children, ...restProps }) => {
	return <About {...restProps}>{children}</About>;
};

Details.AboutHeader = ({ children, ...restProps }) => {
	return <AboutHeader {...restProps}>{children}</AboutHeader>;
};

Details.AboutPiece = ({ children, ...restProps }) => {
	return <AboutPiece {...restProps}>{children}</AboutPiece>;
};

export default Details;
