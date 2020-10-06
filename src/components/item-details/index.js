import React from "react";

import {
	Main,
	Container,
	Header,
	Video,
	Cover,
	Overlay,
	OverlayHalf,
	OverlayButtonClose,
	Button,
	Label,
	Logo,
	VideoButton,
	ButtonsContainer,
} from "./styles/item-details";

const ItemDetails = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

ItemDetails.Container = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

ItemDetails.Header = ({ children, ...restProps }) => {
	return <Header {...restProps}>{children}</Header>;
};

ItemDetails.Video = ({ ...restProps }) => {
	return <Video type="video/mp4" {...restProps} />;
};

ItemDetails.Cover = ({ children, ...restProps }) => {
	return <Cover {...restProps}>{children}</Cover>;
};

ItemDetails.Overlay = ({ children, ...restProps }) => {
	return <Overlay {...restProps}>{children}</Overlay>;
};

ItemDetails.OverlayHalf = ({ children, ...restProps }) => {
	return <OverlayHalf {...restProps}>{children}</OverlayHalf>;
};

ItemDetails.OverlayButtonClose = ({ children, ...restProps }) => {
	return <OverlayButtonClose {...restProps}>{children}</OverlayButtonClose>;
};

ItemDetails.Button = ({ children, ...restProps }) => {
	return <Button {...restProps}>{children}</Button>;
};

ItemDetails.Label = ({ children, ...restProps }) => {
	return <Label {...restProps}>{children}</Label>;
};

ItemDetails.Logo = ({ children, ...restProps }) => {
	return <Logo {...restProps}>{children}</Logo>;
};

ItemDetails.VideoButton = ({ children, ...restProps }) => {
	return <VideoButton {...restProps}>{children}</VideoButton>;
};

ItemDetails.ButtonsContainer = ({ children, ...restProps }) => {
	return <ButtonsContainer {...restProps}>{children}</ButtonsContainer>;
};

export default ItemDetails;
