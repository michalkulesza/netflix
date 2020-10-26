import React, { forwardRef } from "react";
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
	ControlButtonsContainer,
	ControlLeft,
	ControlMiddle,
	ControlTitle,
	ControlRight,
	ButtonContainer,
} from "./styles/player";

const Player = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

Player.VideoContainer = ({ children, ...restProps }) => {
	return <VideoContainer {...restProps}>{children}</VideoContainer>;
};

Player.Video = forwardRef((props, ref) => {
	return (
		<Video
			type="video/mp4"
			onLoadedMetadata={props.onLoadedMetadata}
			onCanPlay={props.onCanPlay}
			src={props.src}
			ref={ref}
		/>
	);
});

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

Player.ControlButtonsContainer = ({ children, ...restProps }) => {
	return <ControlButtonsContainer {...restProps}>{children}</ControlButtonsContainer>;
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

Player.ButtonContainer = ({ children, ...restProps }) => {
	return <ButtonContainer {...restProps}>{children}</ButtonContainer>;
};

export default Player;
