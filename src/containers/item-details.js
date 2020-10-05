import React, { useState, useEffect } from "react";
import { ItemDetails } from "../components";

const ItemDetailsContainer = ({ isDetails }) => {
	const [shouldRender, setRender] = useState(isDetails);

	useEffect(() => {
		if (isDetails) setRender(true);
	}, [isDetails]);

	const onAnimationEnd = () => {
		if (!isDetails) setRender(false);
	};

	return shouldRender ? (
		<div style={{ animation: `${isDetails ? "fadeIn" : "fadeOut"} 1s` }} onAnimationEnd={onAnimationEnd}>
			<ItemDetails>
				<ItemDetails.Something></ItemDetails.Something>
			</ItemDetails>
		</div>
	) : null;
};

export default ItemDetailsContainer;
