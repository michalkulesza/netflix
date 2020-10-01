import React, { useState } from "react";
import { CarouselItem } from "../components";
import LazyLoad from "react-lazyload";

// import Loader from "../res/icons/spinner.gif";
let hoverTimer;

const CarouselItemContainer = ({ item, i, scrolled, isFirstSlide, totalTilesInVievport }) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const markItemsPosition = i => {
		const offset = isFirstSlide ? 0 : 1;
		const items = totalTilesInVievport - 2;

		if (i === 0 + offset) {
			return "first";
		}

		if (i > 0 + offset && i < items + offset) {
			return "middle";
		}

		if (i === items + offset) {
			return "last";
		}

		return "outside";
	};

	const position = markItemsPosition(i);

	return (
		<CarouselItem.Wrapper
			onMouseEnter={() => {
				hoverTimer = setTimeout(() => {
					setIsExpanded(true);
				}, 500);
			}}
			onMouseLeave={() => {
				setIsExpanded(false);
				clearTimeout(hoverTimer);
			}}
			key={item.id}
			scrolled={scrolled}
			className={position}
		>
			<LazyLoad>
				<CarouselItem src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt="logo" />
				<CarouselItem.ExpandedSmall isExpanded={isExpanded} position={position}></CarouselItem.ExpandedSmall>
			</LazyLoad>
		</CarouselItem.Wrapper>
	);
};

export default CarouselItemContainer;
