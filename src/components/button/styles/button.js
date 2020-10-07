import styled from "styled-components/macro";
import { Link } from "react-router-dom";

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
	padding: 1vw 2.3vw 1vw 1.9vw;
	border-radius: 4px;
	font-weight: 600;
	font-size: 0.9em;
	display: flex;
	align-items: center;
	background-color: ${({ dark }) => (dark ? "#616f6d" : "#fff")};
	color: ${({ dark }) => (dark ? "#fff" : "#000")};
	margin-right: ${({ marginRight = "0.5em" }) => marginRight};

	svg {
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

	@media only screen and (max-width: 949px) {
		padding: 1.5vw 2.8vw 1.5vw 2.3vw;
	}
`;
