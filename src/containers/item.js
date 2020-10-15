import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Item } from "../components";
import { ItemExpandedContainer } from "../containers/";
import { markItemsPosition } from "../helpers/markItemsPosition";
import { setIsExpanded } from "../redux/actions/toggles";

import placeholder from "../res/images/placeholder_h.jpg";

let hoverTimer;
let videoTimer;

const ItemContainer = ({ item, i, isFirstSlide, totalTilesInVievport, grid }) => {
	const dispatch = useDispatch();
	const [isExpandedLocal, setIsExpandedLocal] = useState(false);
	const [showVideo, setShowVideo] = useState(false);
	const position = markItemsPosition(i, isFirstSlide, totalTilesInVievport);
	const { headerVideo } = useSelector(state => state.misc);

	return item ? (
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
			className={position}
			grid={grid}
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
