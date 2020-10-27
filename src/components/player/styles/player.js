import styled from "styled-components/macro";
import { spinnerAnim } from "../../../styles/animations";

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
	opacity: ${({ visible }) => (visible ? "1" : "0")};
	pointer-events: ${({ visible }) => (visible ? "all" : "none")};
	transition: all 500ms ease-in-out;
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
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const OverlaySpinner = styled.div`
	height: 4em;
	width: 4em;
	animation: ${spinnerAnim};

	svg {
		height: 100%;
		width: 100%;
		fill: #e50914;

		path {
			stroke: #e50914;
		}
	}
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
