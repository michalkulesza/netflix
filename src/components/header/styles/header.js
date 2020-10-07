import styled, { keyframes } from "styled-components/macro";

export const Main = styled.div`
	position: relative;
	width: 100%;
	margin-bottom: -22%;
`;

export const Border = styled.div`
	height: 8px;
	width: 100%;
`;

export const BackgroundWrapper = styled.div`
	z-index: 0;
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	overflow: hidden;
`;

export const Background = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
`;

export const BackgroundImg = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

export const BackgroundGradient = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	height: 100%;
	width: 100%;
	background: rgba(0, 0, 0, 0.4);
	background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%);
`;

export const Container = styled.div`
	position: relative;
	padding: 70px 45px;
	color: #fff;
	z-index: 1;

	@media only screen and (max-width: 590px) {
		padding: 55px 35px;
	}
`;

export const Inner = styled.div`
	width: 100%;
	padding: 75px 0;
	max-width: 950px;
	margin: 0 auto;
	text-align: center;
	margin-top: 5em;

	@media only screen and (max-width: 590px) {
		padding: 0 0 50px 0;
	}
`;

export const Heading = styled.h1`
	font-size: 4rem;
	max-width: 800px;
	margin: 0 auto;

	@media only screen and (max-width: 590px) {
		font-size: 3rem;
	}
`;

export const SubHeading = styled.h2`
	font-size: 1.625rem;
	font-weight: 400;

	@media only screen and (max-width: 590px) {
		font-size: 1.4rem;
	}
`;

export const VideoWrapper = styled.div`
	width: 100%;
	height: 56.25vw;
	overflow: hidden;
	position: relative;
`;

export const Video = styled.video`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
	min-width: 100%;
	min-height: 100%;
	width: auto;
	height: auto;
	overflow: hidden;
`;

export const VideoGradient = styled.div`
	position: absolute;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	z-index: 1;
	background: rgb(2, 0, 36);
	background: linear-gradient(
		180deg,
		rgba(20, 20, 20, 0.6) 0%,
		rgba(20, 20, 20, 0) 13%,
		rgba(20, 20, 20, 0) 90%,
		rgba(20, 20, 20, 1) 100%
	);
`;

export const ContainerInVideo = styled.div`
	position: absolute;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	color: #fff;
	display: flex;
	z-index: 1;
`;

export const ContainerInVideoHalf = styled.div`
	height: 50%;
	display: flex;

	&:nth-of-type(1) {
		width: calc(50% - 3.5em);
		margin-top: 8vw;
		margin-left: 3.5em;
		flex-direction: column;
		justify-content: center;
	}

	&:nth-of-type(2) {
		width: 50%;
		margin-top: 12vw;
		align-items: flex-end;
		justify-content: flex-end;
	}
`;

export const VideoMuteContainer = styled.div`
	display: flex;
	align-items: center;
`;

export const AgeRestriction = styled.div`
	background-color: rgba(51, 51, 51, 0.6);
	font-size: 0.8em;
	padding: 0.5vw 3.5vw 0.5vw 0.8vw;
	border-left: 4px solid #dcdcdc;
`;

export const VideoLogo = styled.img`
	object-fit: cover;
	width: 30vw;
	min-width: 200px;
	margin-bottom: 1.5vw;
`;

export const VideoDescription = styled.div`
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
	margin-bottom: 1.5vw;
	font-size: 1.5vw;

	@media only screen and (max-width: 549px) {
		font-size: 2.5vw;
	}
`;

export const VideoButtonsContainer = styled.div`
	display: flex;
`;

const LoadingAnimation = keyframes`
	from {
		background-position-x: 0vw;
	}
	to {
		background-position-x: 100vw;
	}
`;

export const Loading = styled.div`
	padding-left: 3.5em;
	width: 100%;
	height: 30vw;
	background: rgb(18, 18, 18);
	padding-top: 1em;
	background: linear-gradient(
		90deg,
		rgba(18, 18, 18, 1) 0%,
		rgba(27, 27, 27, 1) 39%,
		rgba(40, 40, 40, 1) 50%,
		rgba(27, 27, 27, 1) 55%,
		rgba(18, 18, 18, 1) 100%
	);
	animation: ${LoadingAnimation} 1.5s linear infinite;
	display: flex;
	align-items: center;
`;

export const Placeholder = styled.div`
	height: 10%;
	width: 40%;
	background-color: #1b1b1b;
	border-radius: 5px;

	&:after {
		content: "";
		height: 100%;
		width: 60%;
		margin-top: 10%;
		display: block;
		background-color: #1b1b1b;
		border-radius: 5px;
	}
`;
