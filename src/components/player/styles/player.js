import styled from "styled-components/macro";

export const Main = styled.div`
	height: 100vh;
	width: 100%;
	overflow: hidden;
	background-color: #000;
	position: relative;
`;

export const VideoContainer = styled.div`
	height: 100%;
	width: 100%;
	padding-top: 56.25%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 0;
`;

export const Video = styled.video`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
`;

export const PlaceholderContainer = styled.div`
	height: 100%;
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;
	opacity: ${({ visible }) => (visible ? "1" : "0")};
`;

export const Placeholder = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

export const OverlayContainer = styled.div`
	height: 100%;
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	z-index: 99;
`;

export const OverlayTop = styled.div`
	height: 7.5em;
	width: 100%;
	background: rgb(0, 0, 0);
	background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.5) 60%, rgba(0, 0, 0, 0) 100%);
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 4%;
`;

export const OverlayMiddle = styled.div`
	flex: 1;
	width: 100%;
	/* background-color: lime; */
	opacity: 0.7;
`;

export const OverlayBottom = styled.div`
	height: 7.5em;
	width: 100%;
	background: rgb(0, 0, 0);
	background: linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.5) 60%, rgba(0, 0, 0, 0) 100%);
	padding: 0 4%;
`;

export const OverlayTitle = styled.h1`
	font-weight: 600;
`;

export const ControlsContainer = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const ControlSeekContainer = styled.div`
	height: max-content;
	width: 100%;
	display: flex;
`;

export const ControlSeek = styled.div`
	position: relative;
	height: 100%;
	display: flex;
	align-items: center;
	flex: 1;
`;

export const ControlSeekBarContainer = styled.div`
	height: 23px;
	width: 100%;
	display: flex;
	align-items: center;
	transition: all 150ms ease-in-out;
	cursor: pointer;

	&:hover {
		transform: scaleY(1.7);
	}
`;

export const ControlSeekBar = styled.div`
	position: relative;
	height: 5px;
	width: 100%;
	background-color: #5b5b5b;
	transition: all 200ms ease-in-out;
`;

export const ControlSeekBarCurrent = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	background-color: #7c7c7c;
	height: 100%;
	width: 22%;
`;

export const ControlSeekIndicator = styled.div`
	position: absolute;
	top: 50%;
	left: 0;
	transform: translate(-50%, -50%);
	transition: all 200ms ease-in-out;
	background-color: #e50914;
	height: 23px;
	width: 23px;
	border-radius: 50%;
	cursor: pointer;

	&:hover {
		transform: translate(-50%, -50%) scale(1.2);
	}
`;

export const Time = styled.div`
	height: 100%;
	width: max-content;
	display: flex;
	align-items: center;
	margin-left: 1em;
	font-size: 1.1em;
`;

export const ControlButtonsContainer = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: row;
`;

export const ControlLeft = styled.div`
	height: 100%;
	width: max-content;
	display: flex;
	align-items: center;
`;

export const ControlMiddle = styled.div`
	height: 100%;
	flex: 1;
	margin: 0 1em;
	display: flex;
	align-items: center;
`;

export const ControlTitle = styled.h3`
	font-weight: 600;
`;

export const ControlRight = styled.div`
	height: 100%;
	width: max-content;
	display: flex;
	align-items: center;
`;

export const ControlVolumeContainer = styled.div`
	position: absolute;
	top: 0;
	left: 50%;
	padding: 1em;
	transform: translate(-50%, -100%);
	transition: all 200ms ease-in-out;
	opacity: ${({ visible }) => (visible ? "1" : "0")};
	pointer-events: ${({ visible }) => (visible ? "all" : "none")};
`;

export const ControlVolume = styled.div`
	height: fit-content;
	width: fit-content;
	padding: 1em 0.6em;
	background-color: #262626;
	border-radius: 7px;
`;

export const ControlVolumeBarContainer = styled.div`
	position: relative;
`;

export const ControlVolumeBar = styled.div`
	position: relative;
	height: 120px;
	width: 8px;
	background-color: #5b5b5b;
`;

export const ControlVolumeBarCurrent = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	height: 60%;
	width: 100%;
	background-color: #e50914;
`;

export const ControlVolumeBarIndicator = styled.div`
	position: absolute;
	bottom: 60%;
	left: 50%;
	transform: translate(-50%, 50%);
	background-color: #e50914;
	height: 17px;
	width: 17px;
	border-radius: 50%;
`;
