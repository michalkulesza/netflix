import styled from "styled-components/macro";

export const Main = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	height: fit-content;
	width: max-content;
	display: flex;
	flex-direction: column;
	background-color: #262626;
	font-size: 1.2em;
	color: #fff;
	border-radius: 5px;
	transform-origin: right bottom;
	transform: ${({ visible }) => (visible ? "translateY(-100%)" : "translateY(-100%) scale(0.8)")};
	opacity: ${({ visible }) => (visible ? "1" : "0")};
	pointer-events: ${({ visible }) => (visible ? "all" : "none")};
	transition: all 200ms ease-in-out;
`;

export const Dialog = styled.div`
	padding: 1em;
`;
