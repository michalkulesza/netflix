import styled from "styled-components/macro";

export const Main = styled.div`
	position: absolute;
	top: 0;
	left: 50%;
	padding: 1em;
	transform: translate(-50%, -100%);
	transition: all 200ms ease-in-out;
	opacity: ${({ visible }) => (visible ? "1" : "0")};
	pointer-events: ${({ visible }) => (visible ? "all" : "none")};
`;

export const Volume = styled.div`
	height: fit-content;
	width: fit-content;
	padding: 1em 0.6em;
	background-color: #262626;
	border-radius: 7px;
`;

export const VolumeBarContainer = styled.div`
	position: relative;
`;

export const VolumeBar = styled.div`
	position: relative;
	height: 120px;
	width: 8px;
	background-color: #5b5b5b;
`;

export const VolumeBarCurrent = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	height: 60%;
	width: 100%;
	background-color: #e50914;
`;

export const VolumeBarIndicator = styled.div`
	position: absolute;
	bottom: 60%;
	left: 50%;
	transform: translate(-50%, 50%);
	background-color: #e50914;
	height: 17px;
	width: 17px;
	border-radius: 50%;
`;
