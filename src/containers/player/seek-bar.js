import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { SeekBar } from "../../components";

let currentTimeInterval;

const SeekBarContainer = ({ isVideoPlaying, playerRef }) => {
	const barRef = useRef(null);
	const [isDragged, setIsDragged] = useState(false);
	const [seekBarPosition, setSeekBarPosition] = useState(null);
	const [indicatorPosition, setIndicatorPosition] = useState(null);
	const [pixelsToPercent, setPixelsToPercent] = useState(null);
	const [currentTime, setCurrentTime] = useState(null);
	const [videoLength, setVideoLength] = useState(null);
	const metaLoaded = useSelector(state => state.player.state);

	useEffect(() => {
		if (currentTime !== null && videoLength && !isDragged) {
			setIndicatorPosition((currentTime / videoLength) * 100);
		}
	}, [currentTime, videoLength, isDragged]);

	useEffect(() => {
		if (playerRef?.current && metaLoaded) {
			setCurrentTime(Math.floor(playerRef.current.currentTime));
			setVideoLength(Math.floor(playerRef.current.duration));
			if (isVideoPlaying) {
				currentTimeInterval = setInterval(() => setCurrentTime(Math.floor(playerRef.current.currentTime)), 150);
			} else {
				clearInterval(currentTimeInterval);
			}
		}
	}, [playerRef, isVideoPlaying, metaLoaded]);

	useEffect(() => {
		if (barRef?.current) {
			setSeekBarPosition(barRef.current.getBoundingClientRect());
			setPixelsToPercent(barRef.current.getBoundingClientRect().width / 100);
		}
	}, []);

	const handleBarMouseLeave = () => isDragged && handleBarMouseUp();
	const handleBarMouseDown = () => setIsDragged(true);
	const handleBarMouseUp = () => {
		if (playerRef.current) {
			const newTime = Math.floor((videoLength / 100) * indicatorPosition);
			playerRef.current.currentTime = newTime;
			setCurrentTime(newTime);
			setIsDragged(false);
		} else {
			handleBarMouseLeave();
		}
	};

	const handleBarMouseMove = e => {
		if (isDragged && seekBarPosition) {
			if (e.clientX > seekBarPosition.x && e.clientX < seekBarPosition.right) {
				const percentageVal = (e.clientX - seekBarPosition.x) / pixelsToPercent;
				setIndicatorPosition(Math.ceil(percentageVal));
			}
		}
	};

	return (
		<SeekBar>
			<SeekBar.Main
				onMouseDown={handleBarMouseDown}
				onMouseUp={handleBarMouseUp}
				onMouseMove={e => handleBarMouseMove(e)}
				onMouseLeave={handleBarMouseLeave}
				isDragged={isDragged}
				ref={barRef}
			>
				<SeekBar.SeekBarContainer>
					<SeekBar.SeekBarTotal />
				</SeekBar.SeekBarContainer>
				<SeekBar.SeekIndicator position={indicatorPosition}></SeekBar.SeekIndicator>
			</SeekBar.Main>
			<SeekBar.Time>
				{metaLoaded && videoLength && currentTime
					? new Date((videoLength - currentTime) * 1000).toISOString().substr(12, 7)
					: "0:00:00"}
			</SeekBar.Time>
		</SeekBar>
	);
};

export default SeekBarContainer;
