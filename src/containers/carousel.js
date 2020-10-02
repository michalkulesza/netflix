import React, { useState, useEffect } from "react";
import { Carousel } from "../components";
import { ItemContainer } from "../containers";
import { useTilesInViewport } from "../hooks";
import LazyLoad from "react-lazyload";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const CarouselContainer = ({ data, title, i }) => {
	const [buffer, setBuffer] = useState([]);
	const { totalTilesInVievport } = useTilesInViewport();
	const tileWidth = 100 / totalTilesInVievport;
	const tilesToScroll = totalTilesInVievport - 1;
	const [isFirstSlide, setisFirstSlide] = useState(true);
	const [scrolled, setScrolled] = useState(0);
	const [scrolling, setScrolling] = useState(false);
	const [margin, setMargin] = useState(0);

	useEffect(() => {
		setBuffer(data);
	}, [data]);

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
				if (isFirstSlide) {
					pre = bufferCopy.slice(0, totalTilesInVievport - 2);
					bufferCopy.splice(0, totalTilesInVievport - 2);
					setisFirstSlide(false);
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
		<LazyLoad>
			<Carousel.Container key={i}>
				<Carousel.Category>{title}</Carousel.Category>
				<Carousel.Overlay>
					<Carousel.Button onMouseDown={handleArrowBack} tileWidth={tileWidth} isFirstSlide={isFirstSlide}>
						<IoIosArrowBack />
					</Carousel.Button>
					<Carousel.Button onMouseDown={handleArrowForward} tileWidth={tileWidth}>
						<IoIosArrowForward />
					</Carousel.Button>
				</Carousel.Overlay>
				<Carousel.Wrapper>
					<Carousel.ItemsContainer style={{ transform: `translate3d(${scrolled}vw, 0, 0)`, marginLeft: `${margin}vw` }}>
						{buffer
							? buffer.map((item, i) => (
									<ItemContainer
										key={item.id}
										item={item}
										i={i}
										scrolled={scrolled}
										isFirstSlide={isFirstSlide}
										totalTilesInVievport={totalTilesInVievport}
									/>
							  ))
							: "Error"}
					</Carousel.ItemsContainer>
				</Carousel.Wrapper>
			</Carousel.Container>
		</LazyLoad>
	);
};

export default CarouselContainer;
