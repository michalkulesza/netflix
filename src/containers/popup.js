import React from "react";
import { Popup } from "../components";
import { PopupContext } from "../contexts/popup";

const PopupContainer = () => {
	return (
		<PopupContext.Consumer>
			{({ popup, setPopup, popupTimer }) => (
				<Popup.Fade popup={popup}>
					<Popup
						onMouseOut={() => {
							setPopup(null);
							clearTimeout(popupTimer);
						}}
					>
						<Popup.SmallContent></Popup.SmallContent>
					</Popup>
				</Popup.Fade>
			)}
		</PopupContext.Consumer>
	);
};

export default PopupContainer;
