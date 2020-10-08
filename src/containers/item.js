import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Item } from "../components";
import { ItemExpandedContainer } from "../containers/";
import { markItemsPosition } from "../helpers/markItemsPosition";
import { setIsExpanded } from "../redux/actions";

let hoverTimer;
let videoTimer;

const ItemContainer = ({ item, i, scrolled, isFirstSlide, totalTilesInVievport }) => {
	const dispatch = useDispatch();
	const [isExpandedLocal, setIsExpandedLocal] = useState(false);
	const [showVideo, setShowVideo] = useState(false);
	const position = markItemsPosition(i, isFirstSlide, totalTilesInVievport);
	const headerData = useSelector(state => state.misc.headerVideo);

	return (
		<Item.Wrapper
			onMouseEnter={() => {
				hoverTimer = setTimeout(() => {
					setIsExpandedLocal(true);
					dispatch(setIsExpanded(true));
					videoTimer = setTimeout(() => {
						setShowVideo(true);
					}, 2000);
				}, 500);
			}}
			onMouseLeave={() => {
				setIsExpandedLocal(false);
				setShowVideo(false);
				clearTimeout(hoverTimer);
				clearTimeout(videoTimer);
			}}
			key={item.id}
			scrolled={scrolled}
			className={position}
		>
			<Item src={item.poster_path_300} alt="Poster" />
			<ItemExpandedContainer
				isExpanded={isExpandedLocal}
				showVideo={showVideo}
				position={position}
				item={item}
				videoFile={headerData.src}
			/>
		</Item.Wrapper>
	);
};

export default ItemContainer;
