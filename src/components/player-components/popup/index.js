import React from "react";
import { Main, Dialog } from "./styles/popup";

const Popup = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

Popup.Dialog = ({ children, ...restProps }) => {
	return <Dialog {...restProps}>{children}</Dialog>;
};

export default Popup;
