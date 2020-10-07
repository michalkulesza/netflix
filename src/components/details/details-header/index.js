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
	ButtonsContainer,
} from "./styles/details-header";

const DetailsHeader = ({ children, ...restProps }) => {
	return <Header {...restProps}>{children}</Header>;
};

DetailsHeader.Video = ({ ...restProps }) => {
	return <Video type="video/mp4" {...restProps} />;
};

DetailsHeader.Cover = ({ children, ...restProps }) => {
	return <Cover {...restProps}>{children}</Cover>;
};

DetailsHeader.Overlay = ({ children, ...restProps }) => {
	return <Overlay {...restProps}>{children}</Overlay>;
};

DetailsHeader.OverlayHalf = ({ children, ...restProps }) => {
	return <OverlayHalf {...restProps}>{children}</OverlayHalf>;
};

DetailsHeader.OverlayButtonClose = ({ children, ...restProps }) => {
	return <OverlayButtonClose {...restProps}>{children}</OverlayButtonClose>;
};

DetailsHeader.Button = ({ children, ...restProps }) => {
	return <Button {...restProps}>{children}</Button>;
};

DetailsHeader.Label = ({ children, ...restProps }) => {
	return <Label {...restProps}>{children}</Label>;
};

DetailsHeader.Logo = ({ children, ...restProps }) => {
	return <Logo {...restProps}>{children}</Logo>;
};

DetailsHeader.ButtonsContainer = ({ children, ...restProps }) => {
	return <ButtonsContainer {...restProps}>{children}</ButtonsContainer>;
};

export default DetailsHeader;
