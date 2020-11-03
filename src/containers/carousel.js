import React, { useState, useEffect } from "react";
import { useConvertPxToVw, useTilesInViewport } from "../hooks";
import { Carousel } from "../components";
import { ItemContainer } from "../containers";
import { useDispatch, useSelector } from "react-redux";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { clearActiveExpanded } from "../redux/actions/misc";

const CarouselContainer = ({ data, title, parentID }) => {
	const dispatch = useDispatch();
	const totalTilesInVievport = useTilesInViewport();
	const { scrollbarWidth: scrollbarWidthPx } = useSelector(state => state.misc);
	const scrollbarWidth = useConvertPxToVw(scrollbarWidthPx);
	const [lastTotalTilesInViewport, setLastTotalTilesInViewport] = useState(totalTilesInVievport);
	const [isFirstSlide, setisFirstSlide] = useState(true);
	const [isScrolling, setIsScrolling] = useState(false);
	const [buffer, setBuffer] = useState([]);
	const [scrollDeltaX, setScrollDeltaX] = useState(0);
	const [touchX, setTouchX] = useState(0);
	const [scrolled, setScrolled] = useState(0);
	const [margin, setMargin] = useState(0);

	const tileWidth = (100 - scrollbarWidth - totalTilesInVievport * 0.5) / (totalTilesInVievport - 0.5);
	const tilesToScroll = totalTilesInVievport - 1;

	useEffect(() => {
		if (totalTilesInVievport !== lastTotalTilesInViewport) {
			setLastTotalTilesInViewport(totalTilesInVievport);
			setScrolled(0);
			isFirstSlide ? setMargin(0) : setMargin(-tileWidth - 0.5);
		}
	}, [totalTilesInVievport, lastTotalTilesInViewport, isFirstSlide, tileWidth]);

	useEffect(() => {
		setBuffer(data);
	}, [data]);

	const handleArrowBack = () => {
		if (!isScrolling && data.length >= totalTilesInVievport) {
			setIsScrolling(true);

			let bufferCopy = [...buffer];
			const post = bufferCopy.slice((totalTilesInVievport - 1) * -1);
			bufferCopy.splice((totalTilesInVievport - 1) * -1);
			setBuffer([...post, ...bufferCopy]);
			setMargin((scrolled + tilesToScroll * tileWidth + tileWidth + totalTilesInVievport * 0.5) * -1);
			setScrolled(scrolled + tilesToScroll * tileWidth + tilesToScroll * 0.5);

			setTimeout(() => setIsScrolling(false), 540); //540ms is the duration of carousel animation
		}
	};

	const handleArrowForward = () => {
		if (!isScrolling && data.length >= totalTilesInVievport) {
			const newScrolledValue = scrolled - tilesToScroll * tileWidth - tilesToScroll * 0.5;
			setScrolled(newScrolledValue);
			setIsScrolling(true);

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
				setMargin(Math.abs(newScrolledValue) - tileWidth - 0.5);
				setIsScrolling(false);
			}, 540); //540ms is the duration of carousel animation
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
		const diff = touchX - changedTouches[0]?.screenX;
		if (diff && Math.abs(diff) < 50) return;
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
				{data.length >= totalTilesInVievport && (
					<Carousel.Overlay>
						<Carousel.Button
							onMouseDown={handleArrowBack}
							tileWidth={tileWidth}
							scrollbarWidth={scrollbarWidth}
							isFirstSlide={isFirstSlide}
						>
							<IoIosArrowBack />
						</Carousel.Button>
						<Carousel.Button onMouseDown={handleArrowForward} tileWidth={tileWidth} scrollbarWidth={scrollbarWidth}>
							<IoIosArrowForward />
						</Carousel.Button>
					</Carousel.Overlay>
				)}
				<Carousel.Wrapper>
					<Carousel.ItemsContainer
						style={{ transform: `translate3d(${scrolled}vw, 0, 0)`, marginLeft: `${margin}vw` }}
						onMouseLeave={() => dispatch(clearActiveExpanded())}
					>
						{buffer.map((item, i) => (
							<ItemContainer
								key={item.id}
								item={item}
								i={i}
								parentID={parentID}
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
