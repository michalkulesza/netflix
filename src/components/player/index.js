import React from "react";
import {
	Main,
	VideoContainer,
	Video,
	PlaceholderContainer,
	Placeholder,
	OverlayContainer,
	OverlayTop,
	OverlayMiddle,
	OverlayBottom,
	OverlayTitle,
} from "./styles/player";

const Player = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

Player.VideoContainer = ({ children, ...restProps }) => {
	return <VideoContainer {...restProps}>{children}</VideoContainer>;
};

Player.Video = ({ ...restProps }) => {
	return <Video type="video/mp4" {...restProps} />;
};

Player.PlaceholderContainer = ({ children, ...restProps }) => {
	return <PlaceholderContainer {...restProps}>{children}</PlaceholderContainer>;
};

Player.Placeholder = ({ ...restProps }) => {
	return <Placeholder {...restProps} />;
};

Player.OverlayContainer = ({ children, ...restProps }) => {
	return <OverlayContainer {...restProps}>{children}</OverlayContainer>;
};

Player.OverlayTop = ({ children, ...restProps }) => {
	return <OverlayTop {...restProps}>{children}</OverlayTop>;
};

Player.OverlayMiddle = ({ children, ...restProps }) => {
	return <OverlayMiddle {...restProps}>{children}</OverlayMiddle>;
};

Player.OverlayBottom = ({ children, ...restProps }) => {
	return <OverlayBottom {...restProps}>{children}</OverlayBottom>;
};

Player.OverlayTitle = ({ children, ...restProps }) => {
	return <OverlayTitle {...restProps}>{children}</OverlayTitle>;
};

export default Player;