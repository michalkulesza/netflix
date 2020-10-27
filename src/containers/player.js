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
let awayScreenTimer;

const PlayerContainer = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const playerRef = useRef(null);

	const [loadingScreen, setLoadingScreen] = useState(true);
	const [awayScreen, setAwayScreen] = useState(false);
	const [controlsVisible, setControlsVisible] = useState(false);
	const [overlayVisible, setOverlayVisible] = useState(true);
	const [canPlay, setCanPlay] = useState(false);

	const data = useSelector(state => state.player);
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
			overlayHiddenTimer = setTimeout(() => setOverlayVisible(false), 2000);
		return () => clearTimeout(overlayHiddenTimer);
	}, [awayScreen, loadingScreen, overlayVisible]);

	const handleMouseMove = () => {
		if (!overlayVisible) {
			clearTimeout(overlayHiddenTimer);
			setOverlayVisible(true);
		}
	};

	const handleMouseLeave = () => {
		if (!loadingScreen && !awayScreen)
			awayScreenTimer = setTimeout(() => {
				setAwayScreen(true);
				setOverlayVisible(true);
				setControlsVisible(false);
			}, 5000);
	};
	const handleMouseEnter = () => {
		clearTimeout(awayScreenTimer);
		if (awayScreen) {
			setAwayScreen(false);
			setControlsVisible(true);
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

	return (
		<Player onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
			<Player.OverlayContainer visible={overlayVisible}>
				<Player.OverlayTop>
					{loadingScreen ? (
						<>
							<Player.OverlayTitle>{data.title}</Player.OverlayTitle>
							<Button.Clear padding="0.6em" onMouseDown={handleCloseButton}>
								<GrClose />
							</Button.Clear>
						</>
					) : !loadingScreen && !awayScreen ? (
						<Button.Clear padding="0.6em" onMouseDown={handleCloseButton}>
							<GrLinkPrevious />
						</Button.Clear>
					) : null}
				</Player.OverlayTop>
				<Player.OverlayMiddle onMouseDown={handleClickPlay}>
					{loadingScreen ? (
						<Player.OverlaySpinner>
							<AiOutlineLoading3Quarters />
						</Player.OverlaySpinner>
					) : !loadingScreen && awayScreen ? (
						<Player.OverlayInfo>
							<p>Your're watching</p>
							<h1>{data.title}</h1>
							<h2>
								{data.type === "tv"
									? `Season ${data.ep_season}: Ep. ${data.ep_number}`
									: `${data.year} ${data.ageRestriction} ${data.runtime}min`}
							</h2>
							{data.type === "tv" && <h2>{data.ep_title}</h2>}
							<p>{data.description}</p>
						</Player.OverlayInfo>
					) : null}
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
