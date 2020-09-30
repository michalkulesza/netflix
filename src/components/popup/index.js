import React, { useState, useEffect } from "react";
import { Main, SmallContent, Fade } from "./styles/popup";

const Popup = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

Popup.SmallContent = ({ children, ...restProps }) => {
	return <SmallContent {...restProps}>{children}</SmallContent>;
};

Popup.Fade = function PopupFade({ popup, children, ...restProps }) {
	const [render, setRender] = useState(popup);

	useEffect(() => {
		if (popup) setRender(true);
	}, [popup]);

	const onAnimationEnd = () => {
		if (!popup) setRender(false);
	};

	return (
		render && (
			<Fade
				{...restProps}
				style={{
					animation: `${popup ? "fadeIn" : "fadeOut"} 300ms`,
					top: `${popup && popup.y + window.scrollY + popup.height / 2}px`,
					left: `${popup && popup.x + window.scrollX + popup.width / 2}px`,
					transform: "translate(-50%, calc(-50% - 50px)) scale(1.2)",
					height: `${popup && popup.height}px`,
					width: `${popup && popup.width}px`,
				}}
				onAnimationEnd={onAnimationEnd}
			>
				{children}
			</Fade>
		)
	);
};

export default Popup;
