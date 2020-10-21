/* eslint-disable */
import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearExpandedPosition, setExpandedPosition, setExpandedTranformOrigin } from "../redux/actions/misc";
import { useClickOutside, useConvertPxToVw } from "../hooks";
import { markItemsPosition } from "../helpers/markItemsPosition";
import { Item } from "../components";

import placeholder from "../res/images/placeholder_h.jpg";
import { clearDetails, fetchDetailsMovie, fetchDetailsTv } from "../redux/actions/fetch-details";

const ItemContainer = ({ item, i, isFirstSlide, totalTilesInVievport, grid, isScrolling }) => {
	const itemRef = useRef(null);
	const dispatch = useDispatch();
	const { scrollbarWidth: scrollbarWidthPx } = useSelector(state => state.misc);
	const [isExpandedActive, setIsExpandedActive] = useState(false);
	const position = markItemsPosition(i, isFirstSlide, totalTilesInVievport);
	const scrollbarWidth = useConvertPxToVw(scrollbarWidthPx);

	const handleMouseDown = ({ currentTarget }) => {
		dispatch(clearDetails());
		dispatch(clearExpandedPosition());
		item.media_type === "movie" ? dispatch(fetchDetailsMovie(item.id)) : dispatch(fetchDetailsTv(item.id));
		dispatch(setExpandedTranformOrigin(position));
		dispatch(setExpandedPosition(currentTarget.getBoundingClientRect()));
	};

	// useEffect(() => {
	// 	if (isScrolling && isExpandedActive) setInitialState();
	// }, [isScrolling, isExpandedActive]);

	return item ? (
		<Item.Wrapper
			key={item.id}
			ref={itemRef}
			grid={grid}
			scrollbarWidth={scrollbarWidth}
			onMouseDown={e => handleMouseDown(e)}
			// onMouseEnter={handleMouseEnter}
			// onMouseLeave={handleMouseLeave}
			// onTouchStart={e => {
			// 	e.preventDefault();
			// 	handleMouseEnter();
			// }}
		>
			{item.poster_path_300 && <Item src={item.poster_path_300} alt="Poster" style={{ position: "absolute" }} />}

			<Item src={placeholder} alt="Poster" />
		</Item.Wrapper>
	) : null;
};

export default ItemContainer;
