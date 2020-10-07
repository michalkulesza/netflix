import styled from "styled-components/macro";

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
	/* margin-bottom: 5%; */

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
	display: flex;
	align-items: center;

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
