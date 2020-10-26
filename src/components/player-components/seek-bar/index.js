import React from "react";
import {
	Container,
	Main,
	Time,
	SeekBarContainer,
	SeekIndicator,
	SeekBarTotal,
	SeekBarCurrent,
} from "./styles/seek-bar";

const SeekBar = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

SeekBar.Main = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

SeekBar.Time = ({ children, ...restProps }) => {
	return <Time {...restProps}>{children}</Time>;
};

SeekBar.SeekBarContainer = ({ children, ...restProps }) => {
	return <SeekBarContainer {...restProps}>{children}</SeekBarContainer>;
};

SeekBar.SeekIndicator = ({ children, ...restProps }) => {
	return <SeekIndicator {...restProps}>{children}</SeekIndicator>;
};

SeekBar.SeekBarTotal = ({ children, ...restProps }) => {
	return <SeekBarTotal {...restProps}>{children}</SeekBarTotal>;
};

SeekBar.SeekBarCurrent = ({ children, ...restProps }) => {
	return <SeekBarCurrent {...restProps}>{children}</SeekBarCurrent>;
};

export default SeekBar;
