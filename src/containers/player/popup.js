import React from "react";
import { Popup } from "../../components";

const PopupContainer = ({ type, visible, children }) => {
	return type === "dialog" ? (
		<Popup visible={visible}>
			<Popup.Dialog>{children}</Popup.Dialog>
		</Popup>
	) : null;
};

export default PopupContainer;
