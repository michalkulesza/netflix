import styled from "styled-components/macro";

export const Container = styled.div`
	height: max-content;
	width: 100%;
	display: flex;
`;

export const Main = styled.div`
	position: relative;
	height: 100%;
	display: flex;
	align-items: center;
	flex: 1;
`;

export const Time = styled.div`
	height: 100%;
	width: max-content;
	display: flex;
	align-items: center;
	margin-left: 1em;
	font-size: 1.1em;
`;

export const SeekBarContainer = styled.div`
	height: 23px;
	width: 100%;
	display: flex;
	align-items: center;
	transition: all 150ms ease-in-out;
	cursor: pointer;

	&:hover {
		transform: scaleY(1.7);
	}
`;

export const SeekIndicator = styled.div`
	position: absolute;
	top: 50%;
	left: 0;
	transform: translate(-50%, -50%);
	transition: all 200ms ease-in-out;
	background-color: #e50914;
	height: 23px;
	width: 23px;
	border-radius: 50%;
	cursor: pointer;

	&:hover {
		transform: translate(-50%, -50%) scale(1.2);
	}
`;

export const SeekBarTotal = styled.div`
	position: relative;
	height: 5px;
	width: 100%;
	background-color: #5b5b5b;
	transition: all 200ms ease-in-out;
`;

export const SeekBarCurrent = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	background-color: #7c7c7c;
	height: 100%;
	width: 22%;
`;
