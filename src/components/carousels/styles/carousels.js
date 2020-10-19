import styled from "styled-components/macro";
import { LoadingBackgroundAnimation } from "../../../styles/animations";

export const Main = styled.div`
	position: relative;
	z-index: 15;
	margin-top: ${({ biggerMargin }) => (biggerMargin ? "-20%" : "-12%")};
`;

export const Loading = styled.div`
	padding: 2em 3.5em;
	display: flex;
`;

export const LoadingItem = styled.div`
	height: 300px;
	width: 200px;
	border-radius: 5px;
	background: rgb(18, 18, 18);
	margin-right: 1em;
	background-size: 200%;
	background: linear-gradient(
		90deg,
		rgba(18, 18, 18, 1) 0%,
		rgba(27, 27, 27, 1) 35%,
		rgba(35, 35, 35, 1) 50%,
		rgba(27, 27, 27, 1) 65%,
		rgba(18, 18, 18, 1) 100%
	);
	animation: ${LoadingBackgroundAnimation} 15s linear infinite;
	display: flex;
	justify-content: flex-end;
	padding: 1em;
	flex-direction: column;
`;

export const LoadingPlaceholder = styled.div`
	height: 30px;
	width: 100%;
	margin-bottom: 0.5em;
	background-color: #1b1b1b;
	border-radius: 5px;
`;
