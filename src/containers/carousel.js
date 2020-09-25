import React, { useState, useEffect } from "react";
import { Carousel } from "../components";
import { useTilesInViewport } from "../hooks";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const CarouselContainer = ({ data, title, i }) => {
	const [buffer, setBuffer] = useState([]);
	const { totalTilesInVievport } = useTilesInViewport();
	const tileWidth = 100 / totalTilesInVievport; //tile
	const tilesToScroll = totalTilesInVievport - 1;
	const [firstSlide, setFirstSlide] = useState(true);
	const [scrolled, setScrolled] = useState(0);
	const [scrolling, setScrolling] = useState(false);
	// const [currentlyDisplayedTiles, setCurrentlyDisplayedTiles] = useState(0);
	const [margin, setMargin] = useState(0);

	useEffect(() => {
		setBuffer(data);
	}, [data]);

	// useEffect(() => {
	// 	setCurrentlyDisplayedTiles(totalTilesInVievport);
	// }, [totalTilesInVievport]);

	const handleArrowBack = () => {
		if (!scrolling) {
			setScrolling(true);

			let bufferCopy = [...buffer];
			const post = bufferCopy.slice((totalTilesInVievport - 1) * -1);
			bufferCopy.splice((totalTilesInVievport - 1) * -1);
			setBuffer([...post, ...bufferCopy]);
			setMargin((scrolled + tileWidth * tilesToScroll) * -1 - tileWidth);
			setScrolled(scrolled + tileWidth * tilesToScroll);

			setTimeout(() => {
				setScrolling(false);
			}, 540); //540ms is the duration of carousel animation
		}
	};

	const handleArrowForward = () => {
		if (!scrolling) {
			setScrolling(true);

			setTimeout(() => {
				let bufferCopy = [...buffer];
				let pre;
				if (firstSlide) {
					pre = bufferCopy.slice(0, totalTilesInVievport - 2);
					bufferCopy.splice(0, totalTilesInVievport - 2);
					setFirstSlide(false);
				} else {
					pre = buffer.slice(0, totalTilesInVievport - 1);
					bufferCopy.splice(0, totalTilesInVievport - 1);
				}
				setBuffer([...bufferCopy, ...pre]);
				setMargin((scrolled - tileWidth * tilesToScroll) * -1 - tileWidth);

				setScrolling(false);
			}, 540); //540ms is the duration of carousel animation

			setScrolled(scrolled - tileWidth * tilesToScroll);
		}
	};

	return (
		<Carousel.Container key={i}>
			<Carousel.Category>{title}</Carousel.Category>
			<Carousel.Overlay>
				<Carousel.Button onMouseDown={handleArrowBack} tileWidth={tileWidth} firstSlide={firstSlide}>
					<IoIosArrowBack />
				</Carousel.Button>
				<Carousel.Button onMouseDown={handleArrowForward} tileWidth={tileWidth}>
					<IoIosArrowForward />
				</Carousel.Button>
			</Carousel.Overlay>
			<Carousel.Wrapper onScroll={e => console.log("scroll", e.nativeEvent)}>
				<Carousel.ItemsContainer style={{ transform: `translate3d(${scrolled}vw, 0, 0)`, marginLeft: `${margin}vw` }}>
					{buffer
						? buffer.map(item => (
								<Carousel.ItemWrapper key={item.id} scrolled={scrolled}>
									<Carousel.Item src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt="logo" />
								</Carousel.ItemWrapper>
						  ))
						: "Error"}
				</Carousel.ItemsContainer>
			</Carousel.Wrapper>
		</Carousel.Container>
	);
};

export default CarouselContainer;
