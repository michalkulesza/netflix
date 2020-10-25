import React from "react";
import {
	Main,
	Volume,
	VolumeBarContainer,
	VolumeBar,
	VolumeBarCurrent,
	VolumeBarIndicator,
} from "./styles/volume-slider";

const VolumeSlider = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

VolumeSlider.Volume = ({ children, ...restProps }) => {
	return <Volume {...restProps}>{children}</Volume>;
};

VolumeSlider.VolumeBarContainer = ({ children, ...restProps }) => {
	return <VolumeBarContainer {...restProps}>{children}</VolumeBarContainer>;
};

VolumeSlider.VolumeBar = ({ children, ...restProps }) => {
	return <VolumeBar {...restProps}>{children}</VolumeBar>;
};

VolumeSlider.VolumeBarCurrent = ({ children, ...restProps }) => {
	return <VolumeBarCurrent {...restProps}>{children}</VolumeBarCurrent>;
};

VolumeSlider.VolumeBarIndicator = ({ children, ...restProps }) => {
	return <VolumeBarIndicator {...restProps}>{children}</VolumeBarIndicator>;
};

export default VolumeSlider;
