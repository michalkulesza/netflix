import React, { useState } from "react";
import { Carousel } from "../components";
import { useTilesInViewport } from "../hooks";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const CarouselContainer = ({ data }) => {
	const { totalTilesInVievport } = useTilesInViewport();
	const tileWidth = 100 / totalTilesInVievport; //tile
	const tilesToScroll = totalTilesInVievport - 1;
	const [scrolling, setScrolling] = useState(false);
	const [scrolled, setScrolled] = useState(0);
	const [startingPosition, setStartingPosition] = useState(0);

	const handleArrowBack = () => {
		setScrolled(scrolled + tileWidth * tilesToScroll);
	};

	const handleArrowForward = () => {
		setScrolled(scrolled - tileWidth * tilesToScroll);
	};

	return (
		<Carousel>
			{data
				? data.map((categories, i) => {
						const categoryName = Object.keys(categories)[0];
						const title = `${categoryName[0].toUpperCase()}${categoryName.slice(1)}`;
						return (
							<Carousel.Container key={i}>
								<Carousel.Category>{title}</Carousel.Category>
								<Carousel.Overlay>
									<Carousel.Button onMouseDown={handleArrowBack}>
										<IoIosArrowBack />
									</Carousel.Button>
									<Carousel.Button onMouseDown={handleArrowForward}>
										<IoIosArrowForward />
									</Carousel.Button>
								</Carousel.Overlay>
								<Carousel.Wrapper>
									<Carousel.ItemsContainer style={{ transform: `translate3d(${scrolled}vw, 0, 0)` }}>
										{categories[categoryName]
											? categories[categoryName].map(item => (
													<Carousel.ItemWrapper key={item.id}>
														<Carousel.Item src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt="logo" />
													</Carousel.ItemWrapper>
											  ))
											: "Error"}
									</Carousel.ItemsContainer>
								</Carousel.Wrapper>
							</Carousel.Container>
						);
				  })
				: "Loading..."}
		</Carousel>
	);
};

export default CarouselContainer;
