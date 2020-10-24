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
	ControlsContainer,
	ControlSeekContainer,
	ControlButtonsContainer,
	ControlSeek,
	Time,
	ControlSeekBar,
	ControlSeekBarContainer,
	ControlSeekBarCurrent,
	ControlSeekIndicator,
	ControlLeft,
	ControlMiddle,
	ControlTitle,
	ControlRight,
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

Player.ControlsContainer = ({ children, ...restProps }) => {
	return <ControlsContainer {...restProps}>{children}</ControlsContainer>;
};

Player.ControlSeekContainer = ({ children, ...restProps }) => {
	return <ControlSeekContainer {...restProps}>{children}</ControlSeekContainer>;
};

Player.ControlButtonsContainer = ({ children, ...restProps }) => {
	return <ControlButtonsContainer {...restProps}>{children}</ControlButtonsContainer>;
};

Player.ControlSeek = ({ children, ...restProps }) => {
	return <ControlSeek {...restProps}>{children}</ControlSeek>;
};

Player.Time = ({ children, ...restProps }) => {
	return <Time {...restProps}>{children}</Time>;
};

Player.ControlLeft = ({ children, ...restProps }) => {
	return <ControlLeft {...restProps}>{children}</ControlLeft>;
};

Player.ControlMiddle = ({ children, ...restProps }) => {
	return <ControlMiddle {...restProps}>{children}</ControlMiddle>;
};

Player.ControlTitle = ({ children, ...restProps }) => {
	return <ControlTitle {...restProps}>{children}</ControlTitle>;
};

Player.ControlRight = ({ children, ...restProps }) => {
	return <ControlRight {...restProps}>{children}</ControlRight>;
};

Player.ControlSeekBar = ({ children, ...restProps }) => {
	return <ControlSeekBar {...restProps}>{children}</ControlSeekBar>;
};

Player.ControlSeekBarContainer = ({ children, ...restProps }) => {
	return <ControlSeekBarContainer {...restProps}>{children}</ControlSeekBarContainer>;
};

Player.ControlSeekBarCurrent = ({ children, ...restProps }) => {
	return <ControlSeekBarCurrent {...restProps}>{children}</ControlSeekBarCurrent>;
};

Player.ControlSeekIndicator = ({ children, ...restProps }) => {
	return <ControlSeekIndicator {...restProps}>{children}</ControlSeekIndicator>;
};

export default Player;
