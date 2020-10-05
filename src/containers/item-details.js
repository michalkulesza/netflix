import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDetails } from "../redux/actions";
import { ItemDetails } from "../components";

const ItemDetailsContainer = () => {
	const dispatch = useDispatch();
	const isDetails = useSelector(state => state.toggles.isDetails);
	const position = useSelector(state => state.toggles.detailsPosition);
	const scrolled = useSelector(state => state.misc.scrolled);
	const [shouldRender, setRender] = useState(isDetails);

	useEffect(() => {
		if (isDetails) setRender(true);
	}, [isDetails]);

	const onAnimationEnd = () => {
		if (!isDetails) setRender(false);
	};

	const handleClose = () => {
		dispatch(setDetails(false));
	};

	return shouldRender ? (
		<ItemDetails.Container isDetails={isDetails} onMouseDown={handleClose}>
			<ItemDetails isDetails={isDetails} position={position} onAnimationEnd={onAnimationEnd}>
				<ItemDetails.Something></ItemDetails.Something>
			</ItemDetails>
		</ItemDetails.Container>
	) : null;
};

export default ItemDetailsContainer;
