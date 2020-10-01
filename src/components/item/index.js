import React from "react";
import {
	Main,
	Container,
	Wrapper,
	Loader,
	ExpandedSmall,
	ExpandedSmallHeader,
	ExpandedSmallVideo,
	ExpandedSmallPlaceholder,
	ExpandedSmallMain,
	ExpandedSmallButtons,
	ExpandedSmallButtonsHalf,
	ExpandedSmallButton,
	ExpandedSmallInfo,
	ExpandedSmallGenre,
} from "./styles/item";

const Item = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

Item.Container = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Item.Wrapper = ({ children, ...restProps }) => {
	return <Wrapper {...restProps}>{children}</Wrapper>;
};

Item.Loader = ({ children, ...restProps }) => {
	return <Loader {...restProps}>{children}</Loader>;
};

Item.ExpandedSmall = ({ children, ...restProps }) => {
	return <ExpandedSmall {...restProps}>{children}</ExpandedSmall>;
};

Item.ExpandedSmallHeader = ({ children, ...restProps }) => {
	return <ExpandedSmallHeader {...restProps}>{children}</ExpandedSmallHeader>;
};

Item.ExpandedSmallPlaceholder = ({ ...restProps }) => {
	return <ExpandedSmallPlaceholder {...restProps} />;
};

Item.ExpandedSmallVideo = ({ ...restProps }) => {
	return <ExpandedSmallVideo type="video/mp4" {...restProps} />;
};

Item.ExpandedSmallMain = ({ children, ...restProps }) => {
	return <ExpandedSmallMain {...restProps}>{children}</ExpandedSmallMain>;
};

Item.ExpandedSmallButtons = ({ children, ...restProps }) => {
	return <ExpandedSmallButtons {...restProps}>{children}</ExpandedSmallButtons>;
};

Item.ExpandedSmallButtonsHalf = ({ children, ...restProps }) => {
	return <ExpandedSmallButtonsHalf {...restProps}>{children}</ExpandedSmallButtonsHalf>;
};

Item.ExpandedSmallButton = ({ children, ...restProps }) => {
	return <ExpandedSmallButton {...restProps}>{children}</ExpandedSmallButton>;
};

Item.ExpandedSmallInfo = ({ children, ...restProps }) => {
	return <ExpandedSmallInfo {...restProps}>{children}</ExpandedSmallInfo>;
};

Item.ExpandedSmallGenre = ({ children, ...restProps }) => {
	return <ExpandedSmallGenre {...restProps}>{children}</ExpandedSmallGenre>;
};

export default Item;
