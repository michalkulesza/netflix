import React from "react";
import { Main, ButtonsContainer, Left, ButtonContainer, Middle, Title, Right } from "./styles/controls";

const Controls = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

Controls.ButtonsContainer = ({ children, ...restProps }) => {
	return <ButtonsContainer {...restProps}>{children}</ButtonsContainer>;
};

Controls.Left = ({ children, ...restProps }) => {
	return <Left {...restProps}>{children}</Left>;
};

Controls.ButtonContainer = ({ children, ...restProps }) => {
	return <ButtonContainer {...restProps}>{children}</ButtonContainer>;
};

Controls.Middle = ({ children, ...restProps }) => {
	return <Middle {...restProps}>{children}</Middle>;
};

Controls.Title = ({ children, ...restProps }) => {
	return <Title {...restProps}>{children}</Title>;
};

Controls.Right = ({ children, ...restProps }) => {
	return <Right {...restProps}>{children}</Right>;
};

export default Controls;
