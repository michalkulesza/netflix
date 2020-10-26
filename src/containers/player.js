import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Player, Button } from "../components";
import { SeekBarContainer, VolumeSliderContainer } from "../containers";
import { setError } from "../redux/actions/error";
import { useVolumeIcon } from "../hooks";

import {
	GrClose,
	GrPlayFill,
	GrPauseFill,
	GrForwardTen,
	GrBackTen,
	GrCircleQuestion,
	GrContact,
	GrExpand,
} from "react-icons/gr";
import { ImVolumeMedium } from "react-icons/im";

const data = {
	src: "http://localhost:8888/video/night",
	title: "Angry looking fella",
	backdrop: "http://image.tmdb.org/t/p/w1280/aO5ILS7qnqtFIprbJ40zla0jhpu.jpg",
	description:
		"Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
	year: 1991,
	ageRestriction: 12,
	length: 69,
};

const PlayerContainer = () => {
	const dispatch = useDispatch();
	const playerRef = useRef(null);
	const volume = useSelector(state => state.player.volume);
	const [placeholderVisible, setPlaceholderVisible] = useState(false);
	const [controlButtonsHover, setControlButtonsHover] = useState(false);
	const [volumeSliderVisible, setVolumeSliderVisible] = useState(false);
	const [canPlay, setCanPlay] = useState(false);
	const [videoState, setVideoState] = useState("paused");
	const volumeIcon = useVolumeIcon(volume);

	// const data = useSelector(state => state.player);

	const handleCanPlay = () => setCanPlay(true);

	const handleClickPlay = () => {
		if (playerRef.current && videoState === "playing") {
			playerRef.current.pause();
			setVideoState("paused");
		}
		if (playerRef.current && videoState === "paused") {
			playerRef.current.play();
			setVideoState("playing");
		}
	};

	const handleSkip = (ref, val) => {
		if (ref?.current) {
			const currentTime = ref.current.currentTime;
			ref.current.currentTime = currentTime + val;
		}
	};

	const handleClickSkipBack = () => handleSkip(playerRef, -10);
	const handleClickSkipForward = () => handleSkip(playerRef, 10);

	const handleClickVideo = () => handleClickPlay();

	const handleClickFullscreen = () => {
		const elem = document.documentElement;
		!document.fullscreenElement
			? elem.requestFullscreen && elem.requestFullscreen().catch(err => dispatch(setError(err.message)))
			: document.exitFullscreen();
	};

	const handleButtonMouseEnter = () => setControlButtonsHover(true);
	const handleButtonMouseLeave = () => setControlButtonsHover(false);

	const handleVolumeButtonEnter = () => setVolumeSliderVisible(true);
	const handleVolumeButtonLeave = () => setVolumeSliderVisible(false);

	return (
		<Player>
			<Player.OverlayContainer>
				<Player.OverlayTop>
					<Player.OverlayTitle>{data.title}</Player.OverlayTitle>
					<Button.Clear padding="0.6em">
						<GrClose />
					</Button.Clear>
				</Player.OverlayTop>
				<Player.OverlayMiddle onMouseDown={handleClickVideo}></Player.OverlayMiddle>
				<Player.OverlayBottom>
					<Player.ControlsContainer>
						<SeekBarContainer />
						<Player.ControlButtonsContainer>
							<Player.ControlLeft>
								<Button.Clear
									grayedOut={controlButtonsHover}
									padding="0.6em 1.9em 0.6em 0.6em"
									onMouseDown={handleClickPlay}
									onMouseEnter={handleButtonMouseEnter}
									onMouseLeave={handleButtonMouseLeave}
								>
									{videoState === "playing" ? <GrPlayFill /> : <GrPauseFill />}
								</Button.Clear>
								<Button.Clear
									grayedOut={controlButtonsHover}
									padding="0.6em 1.9em 0.6em 0.6em"
									onMouseDown={handleClickSkipBack}
									onMouseEnter={handleButtonMouseEnter}
									onMouseLeave={handleButtonMouseLeave}
								>
									<GrBackTen />
								</Button.Clear>
								<Button.Clear
									grayedOut={controlButtonsHover}
									padding="0.6em 1.9em 0.6em 0.6em"
									onMouseDown={handleClickSkipForward}
									onMouseEnter={handleButtonMouseEnter}
									onMouseLeave={handleButtonMouseLeave}
								>
									<GrForwardTen />
								</Button.Clear>

								<Player.ButtonContainer
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
								</Player.ButtonContainer>
							</Player.ControlLeft>
							<Player.ControlMiddle>
								<Player.ControlTitle>{data.title}</Player.ControlTitle>
							</Player.ControlMiddle>
							<Player.ControlRight>
								<Button.Clear
									padding="0.6em 1.9em 0.6em 0.6em"
									onMouseEnter={handleButtonMouseEnter}
									onMouseLeave={handleButtonMouseLeave}
								>
									<GrCircleQuestion />
								</Button.Clear>
								<Button.Clear
									padding="0.6em 1.9em 0.6em 0.6em"
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
							</Player.ControlRight>
						</Player.ControlButtonsContainer>
					</Player.ControlsContainer>
				</Player.OverlayBottom>
			</Player.OverlayContainer>
			<Player.PlaceholderContainer visible={placeholderVisible}>
				<Player.Placeholder src={data.backdrop} />
			</Player.PlaceholderContainer>
			<Player.VideoContainer>
				<Player.Video ref={playerRef} onCanPlay={handleCanPlay} src={data.src} />
			</Player.VideoContainer>
		</Player>
	);
};

export default PlayerContainer;
