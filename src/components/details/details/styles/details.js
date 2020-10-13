import styled from "styled-components/macro";
import { fadeInAnim, fadeOutAnim } from "../../../../styles/common-styles";

export const Container = styled.div`
	position: fixed;
	overflow-y: ${({ shouldRender }) => (shouldRender ? "scroll" : "hidden")};
	overflow-x: hidden;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	z-index: 999;
	pointer-events: ${({ shouldRender }) => (shouldRender ? "all" : "none")};
	background-color: ${({ shouldRender }) => `rgba(0, 0, 0, ${shouldRender ? "0.4" : "0"})`};
	transition: background-color 0.5s ease-in-out;
`;

export const OverlayTrigger = styled.div`
	position: fixed;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
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
