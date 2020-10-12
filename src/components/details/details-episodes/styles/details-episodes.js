import styled from "styled-components/macro";
import { LoadingAnimation } from "../../../common-styles";

export const Episodes = styled.div`
	width: 100%;
	height: fit-content;
	padding: 0 3em;
	margin-bottom: 3em;
`;

export const EpisodesHeader = styled.div`
	font-size: 1.4em;
	font-weight: 600;
	margin-bottom: 1em;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const EpisodesSeasons = styled.div`
	position: relative;
`;

export const EpisodesSeasonsButton = styled.button`
	display: flex;
	align-items: center;
	min-width: 4em;
	position: relative;
	font-size: 0.8em;
	font-weight: 600;
	background-color: rgb(36, 36, 36);
	padding: 0.5em 1em;
	color: white;
	border: ${({ seasonsDropdownActive }) =>
		seasonsDropdownActive ? "0.1em solid #fff" : "0.1em solid rgb(77, 77, 77)"};
	border-radius: 0.2em;

	svg {
		margin-left: 1em;
	}
`;

export const EpisodesSeasonsList = styled.ul`
	position: absolute;
	width: 90%;
	top: 100%;
	right: 0;
	border: 0.1em solid rgb(77, 77, 77);
	background-color: rgb(36, 36, 36);
	margin-top: 0.1em;
	visibility: ${({ seasonsDropdownActive }) => (seasonsDropdownActive ? "visible" : "hidden")};
`;

export const EpisodesSeason = styled.li`
	padding: 0.5em 0.8em;
	font-size: 0.8em;
	cursor: pointer;
	&:hover {
		background-color: rgb(66, 66, 66);
	}
`;

export const EpisodesList = styled.div``;

export const EpisodeWrapper = styled.div`
	width: 100%;
	height: 130px;
	border-radius: 5px;
	background-color: transparent;
	border-bottom: 1px solid #404040;
	user-select: none;
	cursor: pointer;

	&:nth-of-type(1) {
		background-color: #333333;
	}

	&:active {
		outline: 2px solid #fff;
	}
`;

export const EpisodeWrapperLoading = styled.div`
	width: 100%;
	height: 130px;
	border-radius: 5px;
	border-bottom: 1px solid #404040;
	user-select: none;
	background: linear-gradient(
		90deg,
		rgba(18, 18, 18, 1) 0%,
		rgba(27, 27, 27, 1) 39%,
		rgba(40, 40, 40, 1) 50%,
		rgba(27, 27, 27, 1) 55%,
		rgba(18, 18, 18, 1) 100%
	);
	animation: ${LoadingAnimation} 3s linear infinite;
`;

export const Episode = styled.div`
	height: 100%;
	width: 85%;
	display: flex;
	margin: 0 auto;
	align-items: center;
`;

export const EpisodeNum = styled.div`
	font-size: 1.8em;
	margin-right: 1em;
`;

export const EpisodeImage = styled.img`
	height: 70%;
	border-radius: 5px;
	margin-right: 1em;
`;

export const EpisodeMain = styled.div``;

export const EpisodeHalf = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const EpisodeTitle = styled.div`
	font-size: 0.9em;
	font-weight: 600;
	margin-bottom: 0.5em;
`;

export const EpisodeTime = styled.div``;

export const EpisodeDescription = styled.div`
	font-size: 0.9em;
	color: #d2d2d2;
`;
