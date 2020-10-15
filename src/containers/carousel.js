import React, { useState, useEffect } from "react";
import { useTilesInViewport } from "../hooks";
import { Carousel } from "../components";
import { ItemContainer } from "../containers";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const CarouselContainer = ({ data, title }) => {
	const [buffer, setBuffer] = useState([]);
	const [scrollDeltaX, setScrollDeltaX] = useState(0);
	const [touchX, setTouchX] = useState(0);
	const [isFirstSlide, setisFirstSlide] = useState(true);
	const [scrolled, setScrolled] = useState(0);
	const [scrolling, setScrolling] = useState(false);
	const [margin, setMargin] = useState(0);
	const { totalTilesInVievport } = useTilesInViewport();
	const tileWidth = 100 / totalTilesInVievport;
	const tilesToScroll = totalTilesInVievport - 1;

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

			setTimeout(() => setScrolling(false), 540); //540ms is the duration of carousel animation
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

	const handleScroll = ({ deltaX }) => {
		if (deltaX !== -0) {
			const newDeltaX = scrollDeltaX + deltaX;
			newDeltaX > scrollDeltaX ? handleArrowForward() : handleArrowBack();
			setScrollDeltaX(newDeltaX);
		}
	};

	const handleTouchStart = ({ touches }) => {
		setTouchX(touches[0]?.screenX);
	};

	const handleTouchEnd = ({ changedTouches }) => {
		if (changedTouches[0]?.screenX < touchX) handleArrowForward();
		if (changedTouches[0]?.screenX > touchX) handleArrowBack();
	};

	return buffer ? (
		<>
			<Carousel.Container
				onWheel={({ nativeEvent }) => handleScroll(nativeEvent)}
				onTouchStart={({ nativeEvent }) => handleTouchStart(nativeEvent)}
				onTouchEnd={({ nativeEvent }) => handleTouchEnd(nativeEvent)}
			>
				<Carousel.Category>{title && title}</Carousel.Category>
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
						{buffer.map((item, i) => (
							<ItemContainer
								key={item.id}
								item={item}
								i={i}
								scrolled={scrolled}
								isFirstSlide={isFirstSlide}
								totalTilesInVievport={totalTilesInVievport}
							/>
						))}
					</Carousel.ItemsContainer>
				</Carousel.Wrapper>
			</Carousel.Container>
		</>
	) : null;
};

export default CarouselContainer;
