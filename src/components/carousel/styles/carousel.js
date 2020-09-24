import styled from "styled-components/macro";

export const Main = styled.div`
	position: relative;
	width: 100%;
	margin-bottom: 300px;
	margin-top: -15vw;
	z-index: 5;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
`;

export const Category = styled.h1`
	margin-left: 2.5vw;
	font-size: 1.5em;
	color: #fff;
`;

export const Overlay = styled.div`
	position: absolute;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	pointer-events: none;
`;

export const Button = styled.button`
	pointer-events: auto;
	cursor: pointer;
	height: 100%;
	background: none;
	border: none;

	&:focus {
		outline: none;
	}

	&:hover > svg {
		transform: scale(3.2);
	}

	svg {
		transition: transform 0.1s ease-out 0s, -webkit-transform 0.1s ease-out 0s, -moz-transform 0.1s ease-out 0s,
			-o-transform 0.1s ease-out 0s;
		fill: #fff;
		transform: scale(2.5);
	}
`;

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	overflow-x: scroll;

	::-webkit-scrollbar {
		width: 0px;
		background: transparent;
	}
`;

export const ItemsContainer = styled.div`
	height: 100%;
	display: flex;
`;

export const ItemWrapper = styled.div`
	margin-right: 0.5vw;
	height: auto;
	width: 15vw;

	&:nth-of-type(1) {
		margin-left: 2.5vw;
	}
`;

export const Item = styled.img`
	border-radius: 5px;
	height: 100%;
	width: 100%;
	background-color: blue;
	box-sizing: content-box;
`;
