import React from "react";
import { CarouselItem } from "../components";
import LazyLoad from "react-lazyload";

import Loader from "../res/icons/spinner.gif";

const CarouselItemContainer = ({ item, i, scrolled, isFirstSlide, totalTilesInVievport }) => {
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

	return (
		<CarouselItem.Wrapper key={item.id} scrolled={scrolled} className={markItemsPosition(i)}>
			<LazyLoad placeholder={<CarouselItem.Loader src={Loader} alt="Loading" />}>
				<CarouselItem src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt="logo" />
			</LazyLoad>
		</CarouselItem.Wrapper>
	);
};

export default CarouselItemContainer;
