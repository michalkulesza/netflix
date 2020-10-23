import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Item } from "../components";
import { ItemExpandedContainer } from "../containers/";
import { markItemsPosition } from "../helpers/markItemsPosition";
import { setIsExpanded } from "../redux/actions/toggles";
import { useConvertPxToVw, useOnClickOutside } from "../hooks";

import placeholder from "../res/images/placeholder_h.jpg";
import { clearActiveExpanded, setActiveExpanded } from "../redux/actions/misc";

let hoverTimer;
let videoTimer;

const ItemContainer = ({ item, i, parentID, isFirstSlide, totalTilesInVievport, grid, auxPosition }) => {
	const dispatch = useDispatch();
	const itemRef = useRef(null);
	const position = markItemsPosition(i, isFirstSlide, totalTilesInVievport);
	const [isExpandedVisible, setIsExpandedVisible] = useState(false);
	const [showVideo, setShowVideo] = useState(false);
	const { scrollbarWidth: scrollbarWidthPx } = useSelector(state => state.misc);
	const { headerVideo, activeExpanded } = useSelector(state => state.misc);
	const scrollbarWidth = useConvertPxToVw(scrollbarWidthPx);

	useOnClickOutside(itemRef, () => {
		if (activeExpanded?.parent === parentID && activeExpanded?.item === i) {
			setIsExpandedVisible(false);
			dispatch(setIsExpanded(false));
		}
	});

	const handleMouseEnter = e => {
		hoverTimer = setTimeout(() => {
			setIsExpandedVisible(true);
			dispatch(setIsExpanded(true));
			dispatch(setActiveExpanded(parentID, i));
			videoTimer = setTimeout(() => setShowVideo(true), 2000);
		}, 500);
	};

	const handleMouseLeave = e => {
		dispatch(clearActiveExpanded());
		dispatch(setIsExpanded(false));
		setIsExpandedVisible(false);
		setShowVideo(false);
		clearTimeout(hoverTimer);
		clearTimeout(videoTimer);
	};

	return item ? (
		<Item.Wrapper
			key={item.id}
			onMouseEnter={e => handleMouseEnter(e)}
			onMouseLeave={e => handleMouseLeave(e)}
			grid={grid}
			scrollbarWidth={scrollbarWidth}
			ref={itemRef}
		>
			{item.poster_path_300 && <Item src={item.poster_path_300} alt="Poster" style={{ position: "absolute" }} />}

			<Item src={placeholder} alt="Poster" />
			{isExpandedVisible ? (
				<ItemExpandedContainer
					isVisible={isExpandedVisible}
					showVideo={showVideo}
					position={auxPosition ? auxPosition : position}
					item={item}
					videoFile={headerVideo?.src}
				/>
			) : null}
		</Item.Wrapper>
	) : null;
};

export default ItemContainer;
