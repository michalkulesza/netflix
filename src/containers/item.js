import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Item } from "../components";
import { ItemExpandedContainer } from "../containers/";
import { markItemsPosition } from "../helpers/markItemsPosition";
import { setActiveExpanded } from "../redux/actions/misc";
import { fetchDetailsMovie, fetchDetailsTv } from "../redux/actions/fetch-details";
import { useConvertPxToVw } from "../hooks";

import placeholder from "../res/images/placeholder_h.jpg";

let preloadTimer;
let hoverTimer;
let videoTimer;

const ItemContainer = ({ item, i, parentID, isFirstSlide, totalTilesInVievport, grid, auxPosition }) => {
	const dispatch = useDispatch();
	const itemRef = useRef(null);
	const position = markItemsPosition(i, isFirstSlide, totalTilesInVievport);
	const [isExpandedVisible, setIsExpandedVisible] = useState(false);
	const [showVideo, setShowVideo] = useState(false);
	const [data, setData] = useState(null);
	const [episodes, setEpisodes] = useState(null);
	const { scrollbarWidth: scrollbarWidthPx, headerVideo, activeExpanded } = useSelector(state => state.misc);
	const scrollbarWidth = useConvertPxToVw(scrollbarWidthPx);

	console.log(item);

	useEffect(() => {
		if (activeExpanded?.parent === parentID && activeExpanded?.item === i) {
			setIsExpandedVisible(true);
		} else {
			setIsExpandedVisible(false);
			setShowVideo(false);
		}
	}, [activeExpanded, i, parentID]);

	const handleMouseEnter = () => {
		preloadTimer = setTimeout(
			() =>
				item.media_type === "movie"
					? dispatch(fetchDetailsMovie(item.id, setData))
					: dispatch(fetchDetailsTv(item.id, setData, setEpisodes)),
			200
		);
		hoverTimer = setTimeout(() => {
			dispatch(setActiveExpanded(parentID, i));
			videoTimer = setTimeout(() => setShowVideo(true), 2000);
		}, 500);
	};

	const handleMouseLeave = () => {
		dispatch(setActiveExpanded(null, null));
		clearTimeout(hoverTimer);
		clearTimeout(preloadTimer);
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
				data={data}
				episodes={episodes}
			/>
		</Item.Wrapper>
	) : null;
};

export default ItemContainer;
