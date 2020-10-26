import React, { useState, useRef, useEffect } from "react";
import { SeekBar } from "../../components";

let currentTimeInterval;

const SeekBarContainer = ({ metaLoaded, isVideoPlaying, playerRef }) => {
	const barRef = useRef(null);
	const [isDragged, setIsDragged] = useState(false);
	const [seekBarPosition, setSeekBarPosition] = useState(null);
	const [indicatorPosition, setIndicatorPosition] = useState(null);
	const [pixelsToPercent, setPixelsToPercent] = useState(null);
	const [currentTime, setCurrentTime] = useState(null);
	const [videoLength, setVideoLength] = useState(null);

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

	const handleBarMouseDown = () => setIsDragged(true);
	const handleBarMouseUp = () => setIsDragged(false);

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
				ref={barRef}
			>
				<SeekBar.SeekBarContainer>
					<SeekBar.SeekBarTotal>
						<SeekBar.SeekBarCurrent></SeekBar.SeekBarCurrent>
					</SeekBar.SeekBarTotal>
				</SeekBar.SeekBarContainer>
				<SeekBar.SeekIndicator position={indicatorPosition}></SeekBar.SeekIndicator>
			</SeekBar.Main>
			<SeekBar.Time>{videoLength - currentTime}</SeekBar.Time>
		</SeekBar>
	);
};

export default SeekBarContainer;
