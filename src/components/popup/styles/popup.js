import styled from "styled-components/macro";

export const Main = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background-color: red;
	z-index: 15;
	border-radius: 5px 5px 0 0;
`;

export const SmallContent = styled.div`
	position: absolute;
	background-color: yellow;
	height: 100px;
	width: 100%;
	bottom: -100px;
	left: 0;
	border-radius: 0 0 5px 5px;
`;

export const Fade = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	z-index: 15;
`;
