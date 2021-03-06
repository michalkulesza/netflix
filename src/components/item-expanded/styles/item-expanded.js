import styled from "styled-components/macro";
import { LoadingBackgroundAnimation } from "../../../styles/animations";


export const Item = styled.div`
position: absolute;
	z-index: 20;
	left: ${({ position }) => (position === "first" ? "0" : position === "middle" ? "50%" : "")};
	right: ${({ position }) => position === "last" && "0"};
	min-height: 60%;
	width: 170%;
	transform: ${({ isVisible, position }) =>
		`translateX(${position === "middle" ? "-50%" : "0"}) ${isVisible ? "scale(1)" : "scale(.7)"}`};
	transform-origin: ${({ position }) => (position === "first" ? "left" : position === "last" ? "right" : "center")};
	pointer-events: ${({ position }) => (position === "outside" ? "none" : "all")};
	opacity: ${({ isVisible }) => (isVisible ? `1` : `0`)};
	transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
	border-radius: 3px;
	background-color: #181818;
	pointer-events: ${({ isVisible }) => (isVisible ? `all` : `none`)};
	box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;
	cursor: default;
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
	top: 50%;
	left: 0;
	object-fit: cover;
	max-width: calc(100% - 1px);
	opacity: ${({ isPlaceholder }) => (isPlaceholder ? "1" : "0")};
	transform: translateY(-50%);
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

export const Loading = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
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
