import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Controls, Button } from "../../components";
import { SeekBarContainer, VolumeSliderContainer, PopupContainer } from "../../containers";
import { useVolumeIcon, useKeyDownListener } from "../../hooks";
import { setError } from "../../redux/actions/error";

import { ImVolumeMedium } from "react-icons/im";
import {
	GrPlayFill,
	GrPauseFill,
	GrForwardTen,
	GrBackTen,
	GrCircleQuestion,
	GrContact,
	GrExpand,
	GrLayer,
	GrChapterNext,
} from "react-icons/gr";

const ControlsContainer = ({ handleClickPlay, playerRef }) => {
	const volume = useSelector(state => state.player?.volume);
	const data = useSelector(state => state.player);
	const playerState = useSelector(state => state.player?.state);
	const metaLoaded = useSelector(state => state.player?.metaLoaded);
	const dispatch = useDispatch();
	const volumeIcon = useVolumeIcon(volume);
	const [controlButtonsHover, setControlButtonsHover] = useState(false);
	const [volumeSliderVisible, setVolumeSliderVisible] = useState(false);
	const [feedbackHover, setFeedbackHover] = useState(false);

	const handleClickFullscreen = () => {
		const elem = document.documentElement;
		!document.fullscreenElement
			? elem.requestFullscreen && elem.requestFullscreen().catch(err => dispatch(setError(err.message)))
			: document.exitFullscreen();
	};

	const handleSkip = (ref, val) => {
		if (ref?.current) {
			const currentTime = ref.current.currentTime;
			ref.current.currentTime = currentTime + val;
		}
	};

	const handleClickSkipBack = () => handleSkip(playerRef, -10);
	const handleClickSkipForward = () => handleSkip(playerRef, 10);

	const handleButtonMouseEnter = () => setControlButtonsHover(true);
	const handleButtonMouseLeave = () => setControlButtonsHover(false);

	const handleVolumeButtonEnter = () => setVolumeSliderVisible(true);
	const handleVolumeButtonLeave = () => setVolumeSliderVisible(false);

	const handleFeedbackHoverEnter = () => setFeedbackHover(true);
	const handleFeedbackHoverLeave = () => setFeedbackHover(false);

	useKeyDownListener(null, null, handleClickSkipBack, handleClickSkipForward);

	return data ? (
		<Controls>
			<SeekBarContainer metaLoaded={metaLoaded} isVideoPlaying={playerState === "playing"} playerRef={playerRef} />
			<Controls.ButtonsContainer>
				<Controls.Left>
					<Button.Clear
						grayedOut={controlButtonsHover}
						padding="0.6em 1.4em 0.6em 0.6em"
						onMouseDown={handleClickPlay}
						onMouseEnter={handleButtonMouseEnter}
						onMouseLeave={handleButtonMouseLeave}
					>
						{playerState === "playing" ? <GrPlayFill /> : <GrPauseFill />}
					</Button.Clear>
					<Button.Clear
						grayedOut={controlButtonsHover}
						padding="0.6em 1.4em 0.6em 0.6em"
						onMouseDown={handleClickSkipBack}
						onMouseEnter={handleButtonMouseEnter}
						onMouseLeave={handleButtonMouseLeave}
					>
						<GrBackTen />
					</Button.Clear>
					<Button.Clear
						grayedOut={controlButtonsHover}
						padding="0.6em 1.4em 0.6em 0.6em"
						onMouseDown={handleClickSkipForward}
						onMouseEnter={handleButtonMouseEnter}
						onMouseLeave={handleButtonMouseLeave}
					>
						<GrForwardTen />
					</Button.Clear>

					<Controls.ButtonContainer
						onMouseEnter={() => {
							handleButtonMouseEnter();
							handleVolumeButtonEnter();
						}}
						onMouseLeave={() => {
							handleButtonMouseLeave();
							handleVolumeButtonLeave();
						}}
					>
						<Button.Clear padding="0.6em" mouseover={volumeSliderVisible}>
							{volumeIcon ? volumeIcon : <ImVolumeMedium />}
						</Button.Clear>
						<VolumeSliderContainer
							visible={volumeSliderVisible}
							playerRef={playerRef}
							onMouseEnter={() => {
								handleButtonMouseEnter();
								handleVolumeButtonEnter();
							}}
							onMouseLeave={() => {
								handleButtonMouseLeave();
								handleVolumeButtonLeave();
							}}
						/>
					</Controls.ButtonContainer>
				</Controls.Left>
				<Controls.Middle>
					<Controls.Title>
						{data.type === "film" ? (
							data.title
						) : (
							<>
								{`${data.title} `}
								<span>{`S${data.ep_season}:E${data.ep_number} ${data.ep_title}`}</span>
							</>
						)}
					</Controls.Title>
				</Controls.Middle>
				<Controls.Right>
					<Button.Clear
						padding="0.6em 1.4em 0.6em 0.6em"
						onMouseEnter={() => {
							handleButtonMouseEnter();
							handleFeedbackHoverEnter();
						}}
						onMouseLeave={() => {
							handleButtonMouseLeave();
							handleFeedbackHoverLeave();
						}}
					>
						<GrCircleQuestion />
						<PopupContainer visible={feedbackHover}>Hi there. Something wrong?</PopupContainer>
					</Button.Clear>
					{data.type === "tv" && (
						<>
							<Button.Clear
								padding="0.6em 1.4em 0.6em 0.6em"
								onMouseEnter={handleButtonMouseEnter}
								onMouseLeave={handleButtonMouseLeave}
							>
								<GrChapterNext />
							</Button.Clear>
							<Button.Clear
								padding="0.6em 1.4em 0.6em 0.6em"
								onMouseEnter={handleButtonMouseEnter}
								onMouseLeave={handleButtonMouseLeave}
							>
								<GrLayer />
							</Button.Clear>
						</>
					)}
					<Button.Clear
						padding="0.6em 1.4em 0.6em 0.6em"
						margin="0 1.3em 0 0"
						onMouseEnter={handleButtonMouseEnter}
						onMouseLeave={handleButtonMouseLeave}
					>
						<GrContact />
					</Button.Clear>
					<Button.Clear
						grayedOut={controlButtonsHover}
						padding="0.7em"
						onMouseDown={handleClickFullscreen}
						onMouseEnter={handleButtonMouseEnter}
						onMouseLeave={handleButtonMouseLeave}
					>
						<GrExpand />
					</Button.Clear>
				</Controls.Right>
			</Controls.ButtonsContainer>
		</Controls>
	) : null;
};

export default ControlsContainer;
