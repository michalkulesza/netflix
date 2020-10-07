import styled from "styled-components/macro";

export const Header = styled.div`
	position: relative;
	width: 100%;
	height: calc(100% * 0.5625);
`;

export const Video = styled.video`
	width: 100%;
`;

export const Cover = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
`;

export const Overlay = styled.div`
	position: absolute;
	display: flex;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background: rgb(27, 27, 27);
	background: linear-gradient(180deg, rgba(27, 27, 27, 0) 50%, rgba(24, 24, 24, 1) 100%);
	padding: 2vw 2vw 4vw 5vw;
`;

export const OverlayHalf = styled.div`
	height: 100%;
	width: 50%;
	display: flex;
	flex-direction: column;

	&:nth-of-type(1) {
		justify-content: flex-end;
	}
	&:nth-of-type(2) {
		justify-content: space-between;
		align-items: flex-end;
	}
`;

export const Logo = styled.img`
	object-fit: cover;
	width: 30vw;
	min-width: 200px;
	margin-bottom: 2.5vw;
`;

export const ButtonsContainer = styled.div`
	display: flex;
	align-items: center;
`;
