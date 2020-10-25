import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Player } from "../components";
import { Button } from "../components";

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
import { ImVolumeHigh, ImVolumeMedium, ImVolumeLow, ImVolumeMute2 } from "react-icons/im";

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
	const playerRef = useRef(null);
	const [placeholderVisible, setPlaceholderVisible] = useState(false);
	const [buttonHover, setButtonHover] = useState(false);
	const [canPlay, setCanPlay] = useState(false);
	const [videoState, setVideoState] = useState("paused");

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

	const handleClickSkipBack = () => null;

	const handleClickSkipForward = () => null;

	const handleClickMute = () => null;

	const handleButtonMouseEnter = () => setButtonHover(true);

	const handleButtonMouseLeave = () => setButtonHover(false);

	return (
		<Player>
			<Player.OverlayContainer>
				<Player.OverlayTop>
					<Player.OverlayTitle>{data.title}</Player.OverlayTitle>
					<Button.Clear padding="0.6em">
						<GrClose />
					</Button.Clear>
				</Player.OverlayTop>
				<Player.OverlayMiddle></Player.OverlayMiddle>
				<Player.OverlayBottom>
					<Player.ControlsContainer>
						<Player.ControlSeekContainer>
							<Player.ControlSeek>
								<Player.ControlSeekBarContainer>
									<Player.ControlSeekBar>
										<Player.ControlSeekBarCurrent></Player.ControlSeekBarCurrent>
									</Player.ControlSeekBar>
								</Player.ControlSeekBarContainer>
								<Player.ControlSeekIndicator></Player.ControlSeekIndicator>
							</Player.ControlSeek>
							<Player.Time>1:34:25</Player.Time>
						</Player.ControlSeekContainer>
						<Player.ControlButtonsContainer>
							<Player.ControlLeft>
								<Button.Clear
									grayedOut={buttonHover}
									padding="0.6em 1.9em 0.6em 0.6em"
									onMouseDown={handleClickPlay}
									onMouseEnter={handleButtonMouseEnter}
									onMouseLeave={handleButtonMouseLeave}
								>
									{videoState === "playing" ? <GrPlayFill /> : <GrPauseFill />}
								</Button.Clear>
								<Button.Clear
									grayedOut={buttonHover}
									padding="0.6em 1.9em 0.6em 0.6em"
									onMouseDown={handleClickSkipBack}
									onMouseEnter={handleButtonMouseEnter}
									onMouseLeave={handleButtonMouseLeave}
								>
									<GrBackTen />
								</Button.Clear>
								<Button.Clear
									grayedOut={buttonHover}
									padding="0.6em 1.9em 0.6em 0.6em"
									onMouseDown={handleClickSkipForward}
									onMouseEnter={handleButtonMouseEnter}
									onMouseLeave={handleButtonMouseLeave}
								>
									<GrForwardTen />
								</Button.Clear>
								<Button.Clear
									padding="0.6em"
									onMouseDown={handleClickMute}
									onMouseEnter={handleButtonMouseEnter}
									onMouseLeave={handleButtonMouseLeave}
								>
									<ImVolumeHigh />
								</Button.Clear>
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
									grayedOut={buttonHover}
									padding="0.7em"
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
