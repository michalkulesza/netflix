import styled from "styled-components/macro";

export const Item = styled.div`
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

export const Header = styled.div`
	position: relative;
	width: 100%;
	height: 0;
	padding-top: 56.25%;
	overflow: hidden;
`;

export const Placeholder = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	object-fit: cover;
	max-width: calc(100% - 1px);
	transform: translateY(-50%);
	opacity: ${({ showVideo }) => (showVideo ? "0" : "1")};
	transition: opacity 500ms ease-in-out;
`;

export const Video = styled.video`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	opacity: ${({ showVideo }) => (showVideo ? "1" : "0")};
	transition: opacity 500ms ease-in-out;
`;

export const Main = styled.div`
	padding: 5%;
`;

export const Buttons = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const Half = styled.div`
	display: flex;
`;

export const Button = styled.button`
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

export const Info = styled.div`
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

export const Genre = styled.div`
	font-size: 0.6em;
	color: #fff;

	span {
		color: #646464;
	}
`;
