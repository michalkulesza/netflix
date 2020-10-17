import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsExpanded } from "../redux/actions/toggles";
import { Item } from "../components";
import { ItemExpandedContainer } from "../containers/";
import { markItemsPosition } from "../helpers/markItemsPosition";

import placeholder from "../res/images/placeholder_h.jpg";
import { useConvertPxToVw } from "../hooks";

let hoverTimer;
let videoTimer;

const ItemContainer = ({ item, i, isFirstSlide, totalTilesInVievport, grid }) => {
	const dispatch = useDispatch();
	const { scrollbarWidth: scrollbarWidthPx } = useSelector(state => state.misc);
	const scrollbarWidth = useConvertPxToVw(scrollbarWidthPx);
	const [isExpandedLocal, setIsExpandedLocal] = useState(false);
	const [showVideo, setShowVideo] = useState(false);
	const position = markItemsPosition(i, isFirstSlide, totalTilesInVievport);
	const { headerVideo } = useSelector(state => state.misc);

	const handleMouseEnter = () => {
		hoverTimer = setTimeout(() => {
			setIsExpandedLocal(true);
			dispatch(setIsExpanded(true));
			videoTimer = setTimeout(() => setShowVideo(true), 2000);
		}, 500);
	};

	const handleMouseLeave = () => {
		setIsExpandedLocal(false);
		setShowVideo(false);
		clearTimeout(hoverTimer);
		clearTimeout(videoTimer);
	};

	return item ? (
		<Item.Wrapper
			key={item.id}
			className={position}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			grid={grid}
			scrollbarWidth={scrollbarWidth}
		>
			<Item src={item.poster_path_300 ? item.poster_path_300 : placeholder} alt="Poster" />
			<ItemExpandedContainer
				isExpanded={isExpandedLocal}
				showVideo={showVideo}
				position={position}
				item={item}
				videoFile={headerVideo?.src}
			/>
		</Item.Wrapper>
	) : null;
};

export default ItemContainer;
