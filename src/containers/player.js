import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Player, Button } from "../components";
import { HOME, WATCH } from "../constants/routes";
import { ControlsContainer } from "../containers";
import { setPlayerState, setPlayerMetaLoaded } from "../redux/actions/player";

import { GrClose } from "react-icons/gr";

const PlayerContainer = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const playerRef = useRef(null);

	const [placeholderVisible, setPlaceholderVisible] = useState(false);
	const [canPlay, setCanPlay] = useState(false);

	const data = useSelector(state => state.player);
	const playerState = useSelector(state => state.player.state);

	const handleCanPlay = () => setCanPlay(true);

	const handleCloseButton = () => (history?.location?.pathname !== WATCH ? history.goBack() : history.push(HOME));

	const handleClickPlay = () => {
		if (playerRef.current && playerState === "playing") {
			playerRef.current.pause();
			dispatch(setPlayerState("paused"));
		}
		if (playerRef.current && playerState === "paused") {
			playerRef.current.play();
			dispatch(setPlayerState("playing"));
		}
	};

	const handleLoadedMetadata = () => dispatch(setPlayerMetaLoaded(true));

	return (
		<Player>
			<Player.OverlayContainer>
				<Player.OverlayTop>
					<Player.OverlayTitle>{data.title}</Player.OverlayTitle>
					<Button.Clear padding="0.6em" onMouseDown={handleCloseButton}>
						<GrClose />
					</Button.Clear>
				</Player.OverlayTop>
				<Player.OverlayMiddle onMouseDown={handleClickPlay}></Player.OverlayMiddle>
				<Player.OverlayBottom>
					<ControlsContainer handleClickPlay={handleClickPlay} playerRef={playerRef} />
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
