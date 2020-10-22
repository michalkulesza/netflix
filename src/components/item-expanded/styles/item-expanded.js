import styled from "styled-components/macro";
import { expandedAnimIn, expandedAnimInLeft, expandedAnimInRight } from "../../../styles/animations";

export const Item = styled.div`
	top: ${({ position, offset }) => position && `${position.y + position.height / 2 + offset}px`};
	left: ${({ position, transformOrigin }) =>
		transformOrigin === "left"
			? `${position.x}px`
			: transformOrigin === "right"
			? `${position.x + position.width}px`
			: `${position.x + position.width / 2}px`};
	transform: ${({ transformOrigin }) =>
		transformOrigin === "left"
			? "translate3d(0%, -50%, 0) scale(1)"
			: transformOrigin === "right"
			? "translate3d(-100%, -50%, 0) scale(1)"
			: "translate3d(-50%, -50%, 0) scale(1)"};
	transform-origin: ${({ transformOrigin }) =>
		transformOrigin === "left" ? "left" : transformOrigin === "right" ? "right" : "center"};
	position: absolute;
	min-height: ${({ position }) => position && `${position.width * 1.7 * 0.5625}px`};
	width: ${({ position }) => position && `${position.width * 1.7}px`};
	z-index: 99;
	overflow: hidden;
	cursor: default;
	border-radius: 3px;
	background-color: #181818;
	box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;
	animation: ${({ transformOrigin }) =>
		transformOrigin === "left"
			? expandedAnimInLeft
			: transformOrigin === "right"
			? expandedAnimInRight
			: expandedAnimIn};
`;

export const Header = styled.div`
	position: relative;
	width: 100%;
	padding-top: 56.25%;
	z-index: 0;
	border-radius: 6px 6px 0 0;
	overflow: hidden;
`;

export const Placeholder = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	object-fit: cover;
	max-width: calc(100% - 1px);
	opacity: ${({ isPlaceholder }) => (isPlaceholder ? "1" : "0")};
	transition: opacity 1s ease-in-out;
	z-index: 2;
	pointer-events: none;
`;

export const Video = styled.video`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	z-index: -1;
`;

export const Overlay = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: 1;
	padding: 5%;
`;

export const Main = styled.div`
	padding: 5%;
	z-index: 1;
`;

export const Buttons = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const Half = styled.div`
	display: flex;
`;

export const Info = styled.div`
	display: flex;
	align-items: center;
	color: #fff;

	p {
		font-weight: 600;
		color: #46d369;
		margin-right: 3%;
	}

	span {
		margin-right: 3%;
		border: 1px solid #747474;
		padding: 1% 3% 0.5% 3%;
	}
`;

export const GenreWrapper = styled.div`
	color: #fff;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;

	span {
		color: #646464;
	}
`;

export const Genre = styled.div`
	span {
		margin: 0 0.5em;
	}
`;
