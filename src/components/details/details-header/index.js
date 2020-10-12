import React from "react";
import { Header, Video, Cover, Overlay, OverlayHalf, Logo, ButtonsContainer, Loading } from "./styles/details-header";

const DetailsHeader = ({ children, ...restProps }) => {
	return <Header {...restProps}>{children}</Header>;
};

DetailsHeader.Video = React.forwardRef((props, ref) => {
	return <Video type="video/mp4" src={props.src} muted={props.muted} ref={ref} />;
});

DetailsHeader.Cover = ({ children, ...restProps }) => {
	return <Cover {...restProps}>{children}</Cover>;
};

DetailsHeader.Overlay = ({ children, ...restProps }) => {
	return <Overlay {...restProps}>{children}</Overlay>;
};

DetailsHeader.OverlayHalf = ({ children, ...restProps }) => {
	return <OverlayHalf {...restProps}>{children}</OverlayHalf>;
};

DetailsHeader.Logo = ({ children, ...restProps }) => {
	return <Logo {...restProps}>{children}</Logo>;
};

DetailsHeader.ButtonsContainer = ({ children, ...restProps }) => {
	return <ButtonsContainer {...restProps}>{children}</ButtonsContainer>;
};

DetailsHeader.Loading = ({ children, ...restProps }) => {
	return <Loading {...restProps}>{children}</Loading>;
};

export default DetailsHeader;
