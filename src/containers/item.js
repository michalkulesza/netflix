import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Item } from "../components";
import { ItemExpandedContainer } from "../containers/";
import { markItemsPosition } from "../helpers/markItemsPosition";
import { clearActiveExpanded, setActiveExpanded } from "../redux/actions/misc";
import { useConvertPxToVw, useOnClickOutside } from "../hooks";

import placeholder from "../res/images/placeholder_h.jpg";
import { fetchDetailsMovie, fetchDetailsTv } from "../redux/actions/fetch-details";

let hoverTimer;
let videoTimer;

const ItemContainer = ({ item, i, parentID, isFirstSlide, totalTilesInVievport, grid, auxPosition }) => {
	const dispatch = useDispatch();
	const itemRef = useRef(null);
	const position = markItemsPosition(i, isFirstSlide, totalTilesInVievport);
	const [isExpandedVisible, setIsExpandedVisible] = useState(false);
	const [showVideo, setShowVideo] = useState(false);
	const { scrollbarWidth: scrollbarWidthPx, headerVideo, activeExpanded } = useSelector(state => state.misc);
	const { isDetails } = useSelector(state => state.toggles);
	const scrollbarWidth = useConvertPxToVw(scrollbarWidthPx);

	useEffect(() => {
		if (isDetails) setIsExpandedVisible(false);
	}, [isDetails]);

	useOnClickOutside(itemRef, () => {
		if (activeExpanded?.parent === parentID && activeExpanded?.item === i) {
			setIsExpandedVisible(false);
		}
	});

	const handleMouseEnter = e => {
		item.media_type === "movie" ? dispatch(fetchDetailsMovie(item.id)) : dispatch(fetchDetailsTv(item.id));
		hoverTimer = setTimeout(() => {
			setIsExpandedVisible(true);
			dispatch(setActiveExpanded(parentID, i));
			videoTimer = setTimeout(() => setShowVideo(true), 2000);
		}, 500);
	};

	const handleMouseLeave = e => {
		dispatch(clearActiveExpanded());
		setIsExpandedVisible(false);
		setShowVideo(false);
		clearTimeout(hoverTimer);
		clearTimeout(videoTimer);
	};

	return item ? (
		<Item.Wrapper
			key={item.id}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			grid={grid}
			scrollbarWidth={scrollbarWidth}
			ref={itemRef}
		>
			{item.poster_path_300 && <Item src={item.poster_path_300} alt="Poster" style={{ position: "absolute" }} />}

			<Item src={placeholder} alt="Poster" />
			<ItemExpandedContainer
				isVisible={isExpandedVisible}
				showVideo={showVideo}
				position={auxPosition ? auxPosition : position}
				videoFile={headerVideo?.src}
			/>
		</Item.Wrapper>
	) : null;
};

export default ItemContainer;
