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
	GrLayer,
	GrChapterNext,
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
	type: "tv",
	ep_number: 1,
	ep_season: 6,
	ep_title: "Forever",
	seasons: [
		{
			_id: "5d98d2b78c40f7001179ee4f",
			air_date: "2020-10-04",
			name: "Season 1",
			overview:
				"A group of teenagers living in a community sheltered from the dangers of the apocalypse receive a message that inspires them to leave the safety of the only home they have ever known and embark on a cross-country journey to save their father.",
			id: 133610,
			poster_path: "/z31GxpVgDsFAF4paZR8PRsiP16D.jpg",
			season_number: 1,
			episodes: [
				{
					air_date: "2005-09-13",
					episode_number: 1,
					id: 163114,
					name: "Pilot",
					overview:
						'Two brothers, Sam and Dean Winchester, witness their mother\'s paranormal death as children and grow up trained to fight by a distraught father who wants nothing more then to hunt down the thing that killed his wife. Sam escapes to college to start a new, normal life, but gets pulled back in after Dean shows up on his doorstep to tell him their father is missing. Following clues from an eerie phone message from him, the boys travel to a small town and encounter a vengeful spirit called the "Woman in White" who then starts to haunt Sam.',
					production_code: "475285",
					season_number: 1,
					show_id: 1622,
					still_path: "/nGUD5H2wU7bYBqpqDPTybTWunrR.jpg",
					vote_average: 6.343,
					vote_count: 51,
				},
				{
					air_date: "2020-10-11",
					episode_number: 2,
					id: 2451318,
					name: "The Blaze of Gory",
					overview:
						"The group adjusts to the reality of life beyond the walls of their community; Iris tries to take over, despite Hope's reservations; Felix and Huck follow the teenagers, while Felix is ​​forced to face unwanted memories.",
					production_code: "",
					season_number: 1,
					show_id: 94305,
					still_path: "/nvuQqeDPBksSE019KHnseWOJ1YB.jpg",
					vote_average: 3.6,
					vote_count: 5,
				},
			],
		},
	],
};

const PlayerContainer = () => {
	const dispatch = useDispatch();
	const playerRef = useRef(null);
	const volume = useSelector(state => state.player.volume);
	const [placeholderVisible, setPlaceholderVisible] = useState(false);
	const [controlButtonsHover, setControlButtonsHover] = useState(false);
	const [volumeSliderVisible, setVolumeSliderVisible] = useState(false);
	const [metaLoaded, setMetaLoaded] = useState(false);
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

	const handleLoadedMetadata = () => setMetaLoaded(true);

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
						<SeekBarContainer metaLoaded={metaLoaded} isVideoPlaying={videoState === "playing"} playerRef={playerRef} />
						<Player.ControlButtonsContainer>
							<Player.ControlLeft>
								<Button.Clear
									grayedOut={controlButtonsHover}
									padding="0.6em 1.4em 0.6em 0.6em"
									onMouseDown={handleClickPlay}
									onMouseEnter={handleButtonMouseEnter}
									onMouseLeave={handleButtonMouseLeave}
								>
									{videoState === "playing" ? <GrPlayFill /> : <GrPauseFill />}
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
								<Player.ControlTitle>
									{data?.type === "film" ? (
										data.title
									) : (
										<>
											{`${data.title} `}
											<span>{`S${data.ep_season}:E${data.ep_number} ${data.ep_title}`}</span>
										</>
									)}
								</Player.ControlTitle>
							</Player.ControlMiddle>
							<Player.ControlRight>
								<Button.Clear
									padding="0.6em 1.4em 0.6em 0.6em"
									onMouseEnter={handleButtonMouseEnter}
									onMouseLeave={handleButtonMouseLeave}
								>
									<GrCircleQuestion />
								</Button.Clear>
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
							</Player.ControlRight>
						</Player.ControlButtonsContainer>
					</Player.ControlsContainer>
				</Player.OverlayBottom>
			</Player.OverlayContainer>
			<Player.PlaceholderContainer visible={placeholderVisible}>
				<Player.Placeholder src={data.backdrop} />
			</Player.PlaceholderContainer>
			<Player.VideoContainer>
				<Player.Video
					ref={playerRef}
					onLoadedMetadata={handleLoadedMetadata}
					onCanPlay={handleCanPlay}
					src={data.src}
				/>
			</Player.VideoContainer>
		</Player>
	);
};

export default PlayerContainer;
