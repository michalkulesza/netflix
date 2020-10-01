import styled from "styled-components/macro";

export const Container = styled.div`
	height: 100%;
	display: flex;
	transition: transform 0.54s cubic-bezier(0.5, 0, 0.1, 1) 0s, -webkit-transform 0.54s cubic-bezier(0.5, 0, 0.1, 1) 0s,
		-moz-transform 0.54s cubic-bezier(0.5, 0, 0.1, 1) 0s, -o-transform 0.54s cubic-bezier(0.5, 0, 0.1, 1) 0s;
`;

export const Wrapper = styled.div`
	position: relative;

	@media only screen and (min-width: 0px) {
		width: calc((100vw / 4) - 0.5vw); /* Width of one tile */
		height: calc(((100vw / 4) - 0.5vw) * 1.518712025909371);
		margin-right: 0.5vw;
		display: flex;
		justify-content: center;
		align-items: center;

		&:nth-of-type(1) {
			margin-left: calc(((100vw / 4) + 0.5vw) / 2);
		}
	}

	@media only screen and (min-width: 768px) {
		width: calc((100vw / 5) - 0.5vw); /* Width of one tile */
		height: calc(((100vw / 5) - 0.5vw) * 1.518712025909371);
		margin-right: 0.5vw;

		&:nth-of-type(1) {
			margin-left: calc(((100vw / 5) + 0.5vw) / 2);
		}
	}

	@media only screen and (min-width: 980px) {
		width: calc((100vw / 6) - 0.5vw); /* Width of one tile */
		height: calc(((100vw / 6) - 0.5vw) * 1.518712025909371);
		margin-right: 0.5vw;

		&:nth-of-type(1) {
			margin-left: calc(((100vw / 6) + 0.5vw) / 2);
		}
	}

	@media only screen and (min-width: 1260px) {
		width: calc((100vw / 8) - 0.5vw); /* Width of one tile */
		height: calc(((100vw / 8) - 0.5vw) * 1.518712025909371);
		margin-right: 0.5vw;

		&:nth-of-type(1) {
			margin-left: calc(((100vw / 8) + 0.5vw) / 2);
		}
	}

	@media only screen and (min-width: 1800px) {
		width: calc((100vw / 9) - 0.5vw); /* Width of one tile */
		height: calc(((100vw / 9) - 0.5vw) * 1.518712025909371);
		margin-right: 0.5vw;

		&:nth-of-type(1) {
			margin-left: calc(((100vw / 9) + 0.5vw) / 2);
		}
	}
`;

export const Main = styled.img`
	border-radius: 5px;
	height: 100%;
	width: 100%;
	background-color: blue;
	box-sizing: content-box;
`;

export const Loader = styled.img`
	max-height: 25%;
`;

export const ExpandedSmall = styled.div`
	position: absolute;
	z-index: 20;
	top: 15%;
	left: 0;
	min-height: 60%;
	width: 100%;
	transform: ${({ isExpanded }) => (isExpanded ? `scale(1.7)` : `scale(1)`)};
	transform-origin: ${({ position }) => (position === "first" ? "left" : position === "last" ? "right" : "center")};
	pointer-events: ${({ position }) => (position === "outside" ? "none" : "all")};
	opacity: ${({ isExpanded }) => (isExpanded ? `1` : `0`)};
	transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
	border-radius: 3px;
	overflow: hidden;
	background-color: #181818;
	pointer-events: ${({ isExpanded }) => (isExpanded ? `all` : `none`)}; ;
`;

export const ExpandedSmallHeader = styled.div`
	position: relative;
	width: 100%;
	height: 0;
	padding-top: 56.25%;
	overflow: hidden;
`;

export const ExpandedSmallVideo = styled.video`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	opacity: ${({ showVideo }) => (showVideo ? "1" : "0")};
	transition: opacity 500ms ease-in-out;
`;

export const ExpandedSmallPlaceholder = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	object-fit: cover;
	max-width: calc(100% - 1px);
	transform: translateY(-50%);
	opacity: ${({ showVideo }) => (showVideo ? "0" : "1")};
	transition: opacity 500ms ease-in-out;
`;

export const ExpandedSmallMain = styled.div`
	padding: 5%;
`;

export const ExpandedSmallButtons = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const ExpandedSmallButtonsHalf = styled.div`
	display: flex;
`;

export const ExpandedSmallButton = styled.button`
	background-color: ${({ inverted }) => (inverted ? "#fff" : "#232323")};
	border: ${({ inverted }) => (inverted ? "1px solid #fff" : "1px solid #919191")};
	border-radius: 50%;
	height: 1.5em;
	width: 1.5em;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 4%;
	cursor: pointer;
	margin-bottom: 5%;

	&:hover {
		background-color: ${({ inverted }) => inverted && "#e2e2e2"};
		border-color: ${({ inverted }) => (inverted ? "#e2e2e2" : "#fff")};
	}

	&:nth-last-of-type() {
		margin-right: 0;
	}

	svg {
		fill: ${({ inverted }) => (inverted ? "#232323" : "#fff")};
		transform: ${({ inverted }) => (inverted ? "scale(1.5)" : "scale(1.2)")};
	}
`;

export const ExpandedSmallInfo = styled.div`
	display: flex;
	align-items: center;
	font-size: 0.55em;
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

export const ExpandedSmallGenre = styled.div`
	font-size: 0.6em;
	color: #fff;

	span {
		color: #646464;
	}
`;
