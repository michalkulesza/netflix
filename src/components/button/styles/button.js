import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { respondTo } from "../../../styles/respondTo";

export const Main = styled(Link)`
	background-color: #e50914;
	padding: 7px 17px;
	height: fit-content;
	margin-top: 0.5rem;
	color: #fff;
	border-radius: 3px;
	cursor: pointer;
	text-decoration: none;
`;

export const Square = styled.button`
	padding: 1.5vw 2.7vw;
	border-radius: 4px;
	font-weight: 600;
	font-size: 0.8em;
	display: flex;
	align-items: center;
	background-color: ${({ dark }) => (dark ? "#616f6d" : "#fff")};
	color: ${({ dark }) => (dark ? "#fff" : "#000")};
	margin-right: ${({ marginRight = "4%" }) => marginRight};

	svg {
		pointer-events: none;
		margin-right: 0.5em;
		transform: ${({ iconScale = 1 }) => `scale(${iconScale})`};
		fill: ${({ dark }) => (dark ? "#000" : "#fff")};

		path {
			stroke: ${({ dark }) => (dark ? "#fff" : "#000")};
		}
	}

	&:hover {
		background-color: ${({ dark }) => (dark ? "rgba(109, 109, 110, 0.4);" : "rgba(255, 255, 255, 0.7)")};
	}

	${respondTo.sm`
		font-size: 0.9em;
		padding: 1vw 2.3vw;

	`}
`;

export const Label = styled.div`
	position: absolute;
	top: -35px;
	transform: translateX(-50%);
	left: 50%;
	width: max-content;
	background-color: #e2e2e2;
	color: #000;
	padding: 0.3em 0.6em;
	opacity: 0;
	transition: opacity 200ms ease-in-out;
	box-shadow: "rgba(0, 0, 0, 0.75) 0px 3px 10px"};
	pointer-events: none;

	&::after {
		content: "";
		position: absolute;
		left: 50%;
		transform: translateX(-50%) rotate(45deg);
		bottom: -2px;
		height: 10px;
		width: 10px;
		background-color: #e2e2e2;
		z-index: -1;
	}
`;

export const Container = styled.div`
	position: relative;
	margin-right: ${({ marginRight = "3%" }) => marginRight};

	&:hover {
		> ${Label} {
			opacity: 1;
		}
	}
`;

export const Round = styled.button`
	background-color: ${({ inverted }) => (inverted ? "#fff" : "#232323")};
	border: ${({ inverted, dark }) => (inverted ? "1px solid #fff" : dark ? "none" : "1px solid #919191")};
	border-radius: 50%;
	height: 40px;
	width: 40px;
	display: flex;
	justify-content: center;
	align-items: center;

	&:hover {
		background-color: ${({ inverted }) => inverted && "#e2e2e2"};
		border-color: ${({ inverted, dark }) => (inverted ? "#e2e2e2" : dark ? "none" : "#fff")};
	}

	svg {
		pointer-events: none;
		fill: ${({ inverted }) => (inverted ? "#232323" : "#fff")};
		transform: ${({ inverted }) => (inverted ? "scale(1.5)" : "scale(1.2)")};

		path {
			stroke: ${({ inverted }) => (inverted ? "#232323" : "#fff")};
		}
	}
`;
