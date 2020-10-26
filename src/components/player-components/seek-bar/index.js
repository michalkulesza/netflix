import React from "react";
import { forwardRef } from "react";
import { Container, Main, Time, SeekBarContainer, SeekIndicator, SeekBarTotal } from "./styles/seek-bar";

const SeekBar = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

SeekBar.Main = forwardRef((props, ref) => {
	return (
		<Main
			onMouseDown={props.onMouseDown}
			onMouseLeave={props.onMouseLeave}
			onMouseUp={props.onMouseUp}
			onMouseMove={props.onMouseMove}
			ref={ref}
		>
			{props.children}
		</Main>
	);
});

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

export default SeekBar;
