import React, { useState } from "react";
import { CarouselItem } from "../components";
import LazyLoad from "react-lazyload";
import { PopupContext } from "../contexts/popup";

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
		<PopupContext.Consumer>
			{setPopup => (
				<CarouselItem.Wrapper
					key={item.id}
					scrolled={scrolled}
					className={markItemsPosition(i)}
					onMouseEnter={({ target }) => setPopup(target.getBoundingClientRect())}
					onMouseLeave={({ target }) => setPopup(null)}
				>
					<LazyLoad placeholder={<CarouselItem.Loader src={Loader} alt="Loading" />}>
						<CarouselItem src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt="logo" />
					</LazyLoad>
				</CarouselItem.Wrapper>
			)}
		</PopupContext.Consumer>
	);
};

export default CarouselItemContainer;
