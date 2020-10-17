import styled from "styled-components/macro";
import { LoadingBackgroundAnimation } from "../../../../styles/animations";

export const Header = styled.div`
	position: relative;
	width: 100%;
	height: calc(100% * 0.5625);
`;

export const Video = styled.video`
	position: relative;
	width: 100%;
	height: 100%;
	z-index: 0;
`;

export const Cover = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: 1;
	opacity: ${({ isPlaceholder }) => (isPlaceholder ? "1" : "0")};
	transition: opacity 1s ease-in-out;
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
	z-index: 3;
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

export const Logo = styled.img`
	object-fit: cover;
	width: 30vw;
	min-width: 200px;
	margin-bottom: 2.5vw;
`;

export const ButtonsContainer = styled.div`
	display: flex;
	align-items: center;
`;

export const Loading = styled.div`
	width: 100%;
	height: calc(95vw * 0.5625);
	max-height: calc(1190px * 0.5625);
	background: linear-gradient(
		90deg,
		rgba(18, 18, 18, 1) 0%,
		rgba(27, 27, 27, 1) 39%,
		rgba(40, 40, 40, 1) 50%,
		rgba(27, 27, 27, 1) 55%,
		rgba(18, 18, 18, 1) 100%
	);
	animation: ${LoadingBackgroundAnimation} 15s linear infinite;
`;
