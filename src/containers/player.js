import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Player, Button } from "../components";
import { HOME, WATCH } from "../constants/routes";
import { ControlsContainer } from "../containers";
import { setPlayerState, setPlayerMetaLoaded } from "../redux/actions/player";

import { GrClose, GrLinkPrevious } from "react-icons/gr";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

let loadingScreenTimer;
let overlayHiddenTimer;

const PlayerContainer = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const playerRef = useRef(null);

	const [loadingScreen, setLoadingScreen] = useState(true);
	const [awayScreen, setAwayScreen] = useState(false);
	const [controlsVisible, setControlsVisible] = useState(false);
	const [overlayVisible, setOverlayVisible] = useState(true);
	const [canPlay, setCanPlay] = useState(false);

	// const data = useSelector(state => state.player);
	const playerState = useSelector(state => state.player.state);

	useEffect(() => {
		if (canPlay)
			loadingScreenTimer = setTimeout(() => {
				setLoadingScreen(false);
				setControlsVisible(true);
			}, 2000);

		return () => clearTimeout(loadingScreenTimer);
	}, [canPlay]);

	useEffect(() => {
		if (!loadingScreen && !awayScreen && overlayVisible)
			overlayHiddenTimer = setTimeout(() => setOverlayVisible(false), 5000);
		return () => clearTimeout(overlayHiddenTimer);
	}, [awayScreen, loadingScreen, overlayVisible]);

	const handleMouseMove = () => {
		console.log("move");
		if (!overlayVisible) {
			clearTimeout(overlayHiddenTimer);
			setOverlayVisible(true);
		}
	};

	const handleCanPlay = () => setCanPlay(true);

	const handleCloseButton = () => (history?.location?.pathname !== WATCH ? history.goBack() : history.push(HOME));

	const handleClickPlay = () => {
		if (playerRef.current && playerState === "playing") {
			playerRef.current.pause();
			dispatch(setPlayerState("paused"));
		}
		if (playerRef.current && playerState === "paused" && !awayScreen && !loadingScreen) {
			playerRef.current.play();
			dispatch(setPlayerState("playing"));
		}
	};

	const handleLoadedMetadata = () => dispatch(setPlayerMetaLoaded(true));

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

	return (
		<Player onMouseMove={handleMouseMove}>
			<Player.OverlayContainer visible={overlayVisible}>
				<Player.OverlayTop>
					{loadingScreen ? (
						<>
							<Player.OverlayTitle>{data.title}</Player.OverlayTitle>
							<Button.Clear padding="0.6em" onMouseDown={handleCloseButton}>
								<GrClose />
							</Button.Clear>
						</>
					) : (
						<Button.Clear padding="0.6em" onMouseDown={handleCloseButton}>
							<GrLinkPrevious />
						</Button.Clear>
					)}
				</Player.OverlayTop>
				<Player.OverlayMiddle onMouseDown={handleClickPlay}>
					{loadingScreen && (
						<Player.OverlaySpinner>
							<AiOutlineLoading3Quarters />
						</Player.OverlaySpinner>
					)}
				</Player.OverlayMiddle>
				<Player.OverlayBottom>
					{controlsVisible && <ControlsContainer handleClickPlay={handleClickPlay} playerRef={playerRef} />}
				</Player.OverlayBottom>
			</Player.OverlayContainer>
			<Player.PlaceholderContainer visible={loadingScreen}>
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
