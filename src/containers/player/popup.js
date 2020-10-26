import React from "react";
import { Popup } from "../../components";

const PopupContainer = ({ visible, children }) => {
	return (
		<Popup visible={visible}>
			<Popup.Dialog>{children}</Popup.Dialog>
		</Popup>
	);
};

export default PopupContainer;
