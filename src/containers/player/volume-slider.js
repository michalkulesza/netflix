import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { VolumeSlider } from "../../components";
import { setPlayerVolume } from "../../redux/actions/player";

const VolumeSliderContainer = ({ visible, playerRef }) => {
	const dispatch = useDispatch();
	const volumeBarRef = useRef(null);
	const initVolume = useSelector(state => state.player.config.volume);
	const [isDragged, setIsDragged] = useState(false);
	const [volumeBarPos, setVolumeBarPos] = useState(null);
	const [percentToPixels, setPercentToPixels] = useState(null);
	const [indicatorPosition, setIndicatorPosition] = useState(initVolume * 100);

	useEffect(() => {
		if (playerRef?.current) {
			playerRef.current.volume = indicatorPosition / 100;
			dispatch(setPlayerVolume(indicatorPosition / 100));
		}
	}, [indicatorPosition, playerRef, dispatch]);

	useEffect(() => {
		if (volumeBarRef?.current) {
			setVolumeBarPos(volumeBarRef.current.getBoundingClientRect());
			setPercentToPixels(volumeBarRef.current.getBoundingClientRect().height / 100);
		}
	}, [volumeBarRef]);

	const handleBarMouseDown = () => setIsDragged(true);
	const handleBarMouseUp = () => setIsDragged(false);

	const handleBarMouseMove = e => {
		if (isDragged && volumeBarPos) {
			if (e.clientY > volumeBarPos.y && e.clientY < volumeBarPos.bottom) {
				const percentageVal = 100 - (e.clientY - volumeBarPos.y) / percentToPixels;
				percentageVal < 6
					? setIndicatorPosition(0)
					: percentageVal > 94
					? setIndicatorPosition(100)
					: setIndicatorPosition(percentageVal);
			}
		}
	};

	return (
		<VolumeSlider
			visible={visible}
			onMouseDown={handleBarMouseDown}
			onMouseMove={e => handleBarMouseMove(e)}
			onMouseUp={handleBarMouseUp}
			onMouseLeave={handleBarMouseUp}
		>
			<VolumeSlider.Volume>
				<VolumeSlider.VolumeBarContainer>
					<VolumeSlider.VolumeBar ref={volumeBarRef}>
						<VolumeSlider.VolumeBarCurrent position={indicatorPosition}></VolumeSlider.VolumeBarCurrent>
					</VolumeSlider.VolumeBar>
					<VolumeSlider.VolumeBarIndicator position={indicatorPosition}></VolumeSlider.VolumeBarIndicator>
				</VolumeSlider.VolumeBarContainer>
			</VolumeSlider.Volume>
		</VolumeSlider>
	);
};

export default VolumeSliderContainer;
