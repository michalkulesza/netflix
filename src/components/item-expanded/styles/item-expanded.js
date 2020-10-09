import styled from "styled-components/macro";

export const Item = styled.div`
	position: absolute;
	z-index: 20;
	left: ${({ position }) => (position === "first" ? "0" : position === "middle" ? "50%" : "")};
	right: ${({ position }) => position === "last" && "0"};
	min-height: 60%;
	width: 170%;
	transform: ${({ isExpanded, position }) =>
		`translateX(${position === "middle" ? "-50%" : "0"}) ${isExpanded ? "scale(1)" : "scale(.7)"}`};
	transform-origin: ${({ position }) => (position === "first" ? "left" : position === "last" ? "right" : "center")};
	pointer-events: ${({ position }) => (position === "outside" ? "none" : "all")};
	opacity: ${({ isExpanded }) => (isExpanded ? `1` : `0`)};
	transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
	border-radius: 3px;
	background-color: #181818;
	pointer-events: ${({ isExpanded }) => (isExpanded ? `all` : `none`)};
	box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;
	overflow: hidden;
`;

export const Header = styled.div`
	position: relative;
	width: 100%;
	padding-top: 56.25%;
	overflow: hidden;
`;

export const Placeholder = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	object-fit: cover;
	max-width: calc(100% - 1px);
	opacity: ${({ showVideo }) => (showVideo ? "0" : "1")};
	transition: opacity 500ms ease-in-out;
`;

export const Video = styled.video`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	/* opacity: ${({ showVideo }) => (showVideo ? "1" : "0")}; */
	transition: opacity 500ms ease-in-out;
	z-index: -1;
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

export const Genre = styled.div``;
