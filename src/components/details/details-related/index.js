import React from "react";
import {
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
} from "./styles/details-related";

const DetailsRelated = ({ children, ...restProps }) => {
	return <Related {...restProps}>{children}</Related>;
};

DetailsRelated.Header = ({ children, ...restProps }) => {
	return <RelatedHeader {...restProps}>{children}</RelatedHeader>;
};

DetailsRelated.Items = ({ children, ...restProps }) => {
	return <RelatedItems {...restProps}>{children}</RelatedItems>;
};

DetailsRelated.Item = ({ children, ...restProps }) => {
	return <RelatedItem {...restProps}>{children}</RelatedItem>;
};

DetailsRelated.ItemImage = ({ children, ...restProps }) => {
	return <RelatedItemImage {...restProps}>{children}</RelatedItemImage>;
};

DetailsRelated.ItemImageWrapper = ({ children, ...restProps }) => {
	return <RelatedItemImageWrapper {...restProps}>{children}</RelatedItemImageWrapper>;
};

DetailsRelated.ItemImageOverlayButton = ({ children, ...restProps }) => {
	return <RelatedItemImageOverlayButton {...restProps}>{children}</RelatedItemImageOverlayButton>;
};

DetailsRelated.ItemImageOverlay = ({ children, ...restProps }) => {
	return <RelatedItemImageOverlay {...restProps}>{children}</RelatedItemImageOverlay>;
};

DetailsRelated.ItemMain = ({ children, ...restProps }) => {
	return <RelatedItemMain {...restProps}>{children}</RelatedItemMain>;
};

DetailsRelated.ItemTitle = ({ children, ...restProps }) => {
	return <RelatedItemTitle {...restProps}>{children}</RelatedItemTitle>;
};

DetailsRelated.ItemInfo = ({ children, ...restProps }) => {
	return <RelatedItemInfo {...restProps}>{children}</RelatedItemInfo>;
};

DetailsRelated.ItemDescription = ({ children, ...restProps }) => {
	return <RelatedItemDescription {...restProps}>{children}</RelatedItemDescription>;
};

export default DetailsRelated;
