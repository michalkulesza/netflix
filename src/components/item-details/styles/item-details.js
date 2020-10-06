import styled, { css, keyframes } from "styled-components/macro";

export const Container = styled.div`
	position: fixed;
	overflow-y: ${({ isDetails }) => (isDetails ? "scroll" : "hidden")};
	overflow-x: hidden;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	z-index: 999;
	pointer-events: ${({ isDetails }) => (isDetails ? "all" : "none")};
	background-color: ${({ isDetails }) => `rgba(0, 0, 0, ${isDetails ? "0.4" : "0"})`};
	transition: background-color 0.5s ease-in-out;
`;

export const Main = styled.div`
	position: absolute;
	max-width: 1190px;
	margin: 3vw 0;
	width: 95vw;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	transform-origin: center;
	overflow: hidden;
	border-radius: 5px;
	background-color: #181818;
	box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;
	animation: ${({ isDetails, position }) =>
		isDetails
			? fadeInAnim(position.x, position.y, position.width)
			: fadeOutAnim(position.x, position.y, position.width)};
`;

const fadeInAnim = (x, y, width) => css`
	${fadeIn(x, y, width)} 0.5s;
`;

const fadeIn = (x, y, width) => keyframes`
	0% {
			opacity: 0;
			width: ${width}px;
			top: ${y}px;
			left: ${x}px;
			transform: translateX(0);
		}
		30% {
			opacity: 1;
		}
		100% {
			opacity: 1;
			width: 95vw;
			top: 0;
			left: 50%;
			transform: translateX(-50%);
		}
`;

const fadeOut = (x, y, width) => keyframes`
	0% {
			opacity: 1;
			width: 95vw;
			top: 0;
		}
		50% {
			opacity: 1;
		}
		100% {
			opacity: 0;
			width: ${width}px;
			top: ${y}px;
			left: ${x}px;
			transform: translateX(0);
		}
`;

const fadeOutAnim = (x, y, width) => css`
	${fadeOut(x, y, width)} 0.5s;
`;

export const Header = styled.div`
	position: relative;
	width: 100%;
	height: calc(100% * 0.5625);
`;

export const Video = styled.video`
	width: 100%;
`;

export const Cover = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
`;

export const Overlay = styled.div`
	position: absolute;
	display: flex;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background: rgb(27, 27, 27);
	background: linear-gradient(180deg, rgba(27, 27, 27, 0) 50%, rgba(24, 24, 24, 1) 100%);
	padding: 2vw 2vw 4vw 5vw;
`;

export const OverlayHalf = styled.div`
	height: 100%;
	width: 50%;
	display: flex;
	flex-direction: column;

	&:nth-of-type(1) {
		justify-content: flex-end;
	}
	&:nth-of-type(2) {
		justify-content: space-between;
		align-items: flex-end;
	}
`;

export const OverlayButtonClose = styled.button`
	height: 2.5em;
	width: 2.5em;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #181818;

	border-radius: 50%;
	padding: 0.5em;

	svg > path {
		stroke: #fff;
	}
`;

export const Label = styled.div`
	position: absolute;
	top: -37px;
	transform: ${({ lastButton }) => !lastButton && "translateX(-50%)"};
	left: ${({ lastButton }) => !lastButton && "50%"};
	right: ${({ lastButton }) => lastButton && "-30%"};
	width: max-content;
	background-color: #e2e2e2;
	font-size: 1em;
	padding: 0.3em 0.6em;
	opacity: 0;
	transition: opacity 200ms ease-in-out;
	box-shadow: ${({ lastButton }) => !lastButton && "rgba(0, 0, 0, 0.75) 0px 3px 10px"};

	&::after {
		content: "";
		position: absolute;
		left: ${({ lastButton }) => !lastButton && "50%"};
		right: ${({ lastButton }) => lastButton && "8px"};
		transform: translateX(-50%) rotate(45deg);
		bottom: -2px;
		height: 10px;
		width: 10px;
		background-color: #e2e2e2;
		z-index: -1;
	}
`;

export const Button = styled.button`
	position: relative;
	background-color: ${({ inverted }) => (inverted ? "#fff" : "rgba(42,42,42,.6)")};
	border: ${({ inverted }) => (inverted ? "1px solid #fff" : "1px solid #919191")};
	border-radius: 50%;
	height: 2.5em;
	width: 2.5em;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 2%; /* from 4% */
	cursor: pointer;
	/* margin-bottom: 5%; */
	outline: none;

	&:hover {
		background-color: ${({ inverted }) => inverted && "#e2e2e2"};
		border-color: ${({ inverted }) => (inverted ? "#e2e2e2" : "#fff")};

		> ${Label} {
			opacity: 1;
		}
	}

	svg {
		transform: scale(1.3);
		fill: #fff;
		stroke: #fff;
	}

	&:nth-last-of-type() {
		margin-right: 0;
	}
`;

export const Logo = styled.img`
	object-fit: cover;
	width: 30vw;
	min-width: 200px;
	margin-bottom: 2.5vw;
`;

export const VideoButton = styled.button`
	border: none;
	width: fit-content;
	padding: 1vw 2.3vw 1vw 1.9vw;
	border-radius: 4px;
	font-weight: 600;
	font-size: 0.9em;
	cursor: pointer;
	display: flex;
	align-items: center;
	outline: none;

	&:nth-of-type(1) {
		background-color: #fff;
		color: #000;
		margin-right: 1em;

		svg {
			margin-right: 0.5em;
		}

		&:hover {
			background-color: rgba(255, 255, 255, 0.7);
		}
	}

	&:nth-of-type(2) {
		background-color: #616f6d;
		color: #fff;

		svg {
			transform: scale(1.4);
			margin-right: 0.7em;

			path {
				stroke: #fff;
			}
		}

		&:hover {
			background-color: rgba(109, 109, 110, 0.4);
		}
	}

	@media only screen and (max-width: 949px) {
		padding: 1.5vw 2.8vw 1.5vw 2.3vw;
	}
`;

export const ButtonsContainer = styled.div`
	display: flex;
	align-items: center;
`;

export const Info = styled.div`
	padding: 2vw 5vw;
	display: flex;
	gap: 2em;
	margin-bottom: 2em;
`;

export const InfoHalf = styled.div`
	&:nth-of-type(1) {
		width: 65%;
	}

	&:nth-of-type(2) {
		width: 35%;
	}
`;

export const InfoContent = styled.div`
	display: flex;
	align-items: center;
	gap: 0.6em;
	color: #fff;
	font-size: 1.1em;
	margin-bottom: 1em;

	p {
		color: #46d369;
		font-weight: 600;
		margin: 0;
	}
	span {
		border: 1px solid #6b6b6b;
		padding: 0.1em 0.3em;
	}
`;

export const InfoDescription = styled.div`
	font-size: 1.15em;
	line-height: 1.5em;
`;

export const InfoCast = styled.div`
	margin-bottom: 1em;
	font-size: 0.9em;
	line-height: 1.5em;
	span {
		color: #777777;
	}
`;

export const Episodes = styled.div`
	width: 100%;
	height: fit-content;
	padding: 0 3em;
	margin-bottom: 3em;
`;

export const EpisodesHeader = styled.div`
	font-size: 1.4em;
	font-weight: 600;
	margin-bottom: 1em;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const EpisodesSeasons = styled.div`
	position: relative;
`;

export const EpisodesSeasonsButton = styled.button`
	display: flex;
	align-items: center;
	min-width: 4em;
	position: relative;
	font-size: 0.8em;
	font-weight: 600;
	background-color: rgb(36, 36, 36);
	padding: 0.5em 1em;
	color: white;
	cursor: pointer;
	border: ${({ seasonsDropdownActive }) =>
		seasonsDropdownActive ? "0.1em solid #fff" : "0.1em solid rgb(77, 77, 77)"};
	border-radius: 0.2em;

	svg {
		margin-left: 1em;
	}
`;

export const EpisodesSeasonsList = styled.ul`
	position: absolute;
	width: 90%;
	top: 100%;
	right: 0;
	border: 0.1em solid rgb(77, 77, 77);
	background-color: rgb(36, 36, 36);
	margin-top: 0.1em;
	visibility: ${({ seasonsDropdownActive }) => (seasonsDropdownActive ? "visible" : "hidden")};
`;

export const EpisodesSeason = styled.li`
	padding: 0.5em 0.8em;
	font-size: 0.8em;
	cursor: pointer;
	&:hover {
		background-color: rgb(66, 66, 66);
	}
`;

export const EpisodesList = styled.div``;

export const EpisodeWrapper = styled.div`
	width: 100%;
	height: 130px;
	border-radius: 5px;
	background-color: transparent;
	border-bottom: 1px solid #404040;
	user-select: none;
	cursor: pointer;

	&:nth-of-type(1) {
		background-color: #333333;
	}

	&:active {
		outline: 2px solid #fff;
	}
`;

export const Episode = styled.div`
	height: 100%;
	width: 85%;
	display: flex;
	margin: 0 auto;
	align-items: center;
`;

export const EpisodeNum = styled.div`
	font-size: 1.8em;
	margin-right: 1em;
`;

export const EpisodeImage = styled.img`
	height: 70%;
	border-radius: 5px;
	margin-right: 1em;
`;

export const EpisodeMain = styled.div``;

export const EpisodeHalf = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const EpisodeTitle = styled.div`
	font-size: 0.9em;
	font-weight: 600;
	margin-bottom: 0.5em;
`;

export const EpisodeTime = styled.div``;

export const EpisodeDescription = styled.div`
	font-size: 0.9em;
	color: #d2d2d2;
`;

export const Related = styled.div`
	width: 100%;
	padding: 0 3em;
	margin-bottom: 3em;
`;

export const RelatedHeader = styled.div`
	font-size: 1.4em;
	font-weight: 600;
	margin-bottom: 1em;
`;

export const RelatedItems = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1em;
`;

export const RelatedItem = styled.div`
	width: 100%;
	background-color: #2f2f2f;
	border-radius: 5px;
	overflow: hidden;
`;

export const RelatedItemImage = styled.img`
	width: 100%;
`;

export const RelatedItemMain = styled.div`
	padding: 1em 1em 2em 1em;
`;

export const RelatedItemTitle = styled.div`
	margin-bottom: 0.3em;
	font-weight: 600;
`;

export const RelatedItemInfo = styled.div`
	margin-bottom: 1em;
	color: #e9e9e9;

	span {
		border: 1px solid #636363;
		padding: 0.1em 0.3em;
	}
`;

export const RelatedItemDescription = styled.div`
	font-size: 0.9em;
	line-height: 1.3em;
	color: #e9e9e9;
`;

export const About = styled.div`
	width: 100%;
	padding: 0 3em;
	margin-bottom: 3em;
`;

export const AboutHeader = styled.div`
	font-size: 1.5em;
	font-weight: 600;
	margin-bottom: 1em;
`;

export const AboutPiece = styled.div`
	display: flex;
	color: #777777;
	font-size: 0.95em;
	margin-bottom: 1em;

	p {
		margin: 0;
		color: #fff;

		&:nth-of-type(1) {
			margin-left: 0.5em;
		}
	}
	span {
		border: 1px solid #636363;
		padding: 0.1em 0.3em;
		margin-left: 0.5em;
		color: #fff;
	}
`;
