import React, { useState, useRef, useEffect } from "react";
import { SeekBar } from "../../components";

const SeekBarContainer = ({ playerRef }) => {
	const barRef = useRef(null);
	const [isDragged, setIsDragged] = useState(false);
	const [seekBarPosition, setSeekBarPosition] = useState(null);
	const [indicatorPosition, setIndicatorPosition] = useState(null);
	const [pixelsToPercent, setPixelsToPercent] = useState(null);
	const [currentTime, setCurrentTime] = useState(null);

	useEffect(() => {
		if (playerRef?.current) {
			setCurrentTime(playerRef.current.currentTime);
		}
	}, [playerRef]);

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
			<SeekBar.Time>{currentTime}</SeekBar.Time>
		</SeekBar>
	);
};

export default SeekBarContainer;
