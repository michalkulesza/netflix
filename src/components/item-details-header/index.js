import React from "react";
import {
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
} from "./styles/item-details-header";

const ItemDetailsHeader = ({ children, ...restProps }) => {
	return <Header {...restProps}>{children}</Header>;
};

ItemDetailsHeader.Video = ({ ...restProps }) => {
	return <Video type="video/mp4" {...restProps} />;
};

ItemDetailsHeader.Cover = ({ children, ...restProps }) => {
	return <Cover {...restProps}>{children}</Cover>;
};

ItemDetailsHeader.Overlay = ({ children, ...restProps }) => {
	return <Overlay {...restProps}>{children}</Overlay>;
};

ItemDetailsHeader.OverlayHalf = ({ children, ...restProps }) => {
	return <OverlayHalf {...restProps}>{children}</OverlayHalf>;
};

ItemDetailsHeader.OverlayButtonClose = ({ children, ...restProps }) => {
	return <OverlayButtonClose {...restProps}>{children}</OverlayButtonClose>;
};

ItemDetailsHeader.Button = ({ children, ...restProps }) => {
	return <Button {...restProps}>{children}</Button>;
};

ItemDetailsHeader.Label = ({ children, ...restProps }) => {
	return <Label {...restProps}>{children}</Label>;
};

ItemDetailsHeader.Logo = ({ children, ...restProps }) => {
	return <Logo {...restProps}>{children}</Logo>;
};

ItemDetailsHeader.VideoButton = ({ children, ...restProps }) => {
	return <VideoButton {...restProps}>{children}</VideoButton>;
};

ItemDetailsHeader.ButtonsContainer = ({ children, ...restProps }) => {
	return <ButtonsContainer {...restProps}>{children}</ButtonsContainer>;
};

export default ItemDetailsHeader;
