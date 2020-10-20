import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsExpanded } from "../redux/actions/toggles";
import { Item } from "../components";
import { ItemExpandedContainer } from "../containers/";
import { markItemsPosition } from "../helpers/markItemsPosition";

import placeholder from "../res/images/placeholder_h.jpg";
import { useConvertPxToVw } from "../hooks";

let hoverTimer;
let videoTimer;

const ItemContainer = ({ item, i, isFirstSlide, totalTilesInVievport, grid, isScrolling, auxPosition }) => {
	const dispatch = useDispatch();
	const { scrollbarWidth: scrollbarWidthPx } = useSelector(state => state.misc);
	const scrollbarWidth = useConvertPxToVw(scrollbarWidthPx);
	const [isExpandedVisible, setIsExpandedVisible] = useState(false);
	const [showVideo, setShowVideo] = useState(false);
	const position = markItemsPosition(i, isFirstSlide, totalTilesInVievport);
	const { headerVideo } = useSelector(state => state.misc);

	useEffect(() => {
		if (isScrolling && isExpandedVisible) setInitialState();
	}, [isScrolling, isExpandedVisible]);

	const setInitialState = () => {
		setIsExpandedVisible(false);
		setShowVideo(false);
		clearTimeout(hoverTimer);
		clearTimeout(videoTimer);
	};

	const handleMouseEnter = () => {
		hoverTimer = setTimeout(() => {
			setIsExpandedVisible(true);
			dispatch(setIsExpanded(true));
			videoTimer = setTimeout(() => setShowVideo(true), 2000);
		}, 500);
	};

	const handleMouseLeave = () => setInitialState();

	return item ? (
		<Item.Wrapper
			key={item.id}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onTouchStart={e => {
				e.preventDefault();
				handleMouseEnter();
			}}
			grid={grid}
			scrollbarWidth={scrollbarWidth}
		>
			{item.poster_path_300 && <Item src={item.poster_path_300} alt="Poster" style={{ position: "absolute" }} />}

			<Item src={placeholder} alt="Poster" />
			<ItemExpandedContainer
				isVisible={isExpandedVisible}
				showVideo={showVideo}
				position={auxPosition ? auxPosition : position}
				item={item}
				videoFile={headerVideo?.src}
			/>
		</Item.Wrapper>
	) : null;
};

export default ItemContainer;
