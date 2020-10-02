import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Item } from "../components";
import { ItemExpandedContainer } from "../containers/";
import { markItemsPosition } from "../helpers/markItemsPosition";

import VideoFile from "../res/videos/mindhunter_trailer.mp4";

let hoverTimer;
let videoTimer;

const ItemContainer = ({ item, i, scrolled, isFirstSlide, totalTilesInVievport }) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const [showVideo, setShowVideo] = useState(false);
	const position = markItemsPosition(i, isFirstSlide, totalTilesInVievport);
	const baseUrl = useSelector(state => state.configuration.images.base_url);

	return (
		<Item.Wrapper
			onMouseEnter={() => {
				hoverTimer = setTimeout(() => {
					setIsExpanded(true);
					videoTimer = setTimeout(() => {
						setShowVideo(true);
					}, 2000);
				}, 500);
			}}
			onMouseLeave={() => {
				setIsExpanded(false);
				setShowVideo(false);
				clearTimeout(hoverTimer);
				clearTimeout(videoTimer);
			}}
			key={item.id}
			scrolled={scrolled}
			className={position}
		>
			<Item src={`${baseUrl}w300${item.poster_path}`} alt="Poster" />
			<ItemExpandedContainer
				isExpanded={isExpanded}
				showVideo={showVideo}
				position={position}
				item={item}
				videoFile={VideoFile}
			/>
		</Item.Wrapper>
	);
};

export default ItemContainer;
