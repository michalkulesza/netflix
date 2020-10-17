import styled from "styled-components/macro";

export const Main = styled.div`
	position: relative;
	width: 100%;
	margin-top: -15vw;
	z-index: 5;
`;

export const Container = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	margin-bottom: 8%;
	min-height: 250px;
`;

export const Category = styled.h1`
	position: absolute;
	top: -3em;
	margin-left: 2.5em;
	font-size: 1.5vw;
	font-weight: 500;
	color: #e5e5e5;
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
	z-index: 10;
`;

export const Button = styled.button`
	position: absolute;
	top: 0;
	pointer-events: auto;
	height: ${({ tileWidth }) => `calc(${tileWidth}vw * 1.518712025909371)`};
	width: ${({ tileWidth }) => `calc(${tileWidth / 4}vw)`};
	background: rgba(20, 20, 20, 0.5);
	border: none;
	padding: 0;

	&:focus {
		outline: none;
	}

	&:hover {
		background: rgba(20, 20, 20, 0.7);

		svg {
			transform: scale(3.2);
		}
	}

	&:nth-of-type(1) {
		border-radius: 0 5px 5px 0;
		visibility: ${({ isFirstSlide }) => (isFirstSlide ? "hidden" : "visible")};
		left: 0;
	}

	&:nth-of-type(2) {
		border-radius: 5px 0 0 5px;
		right: 0;
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
	height: fit-content;

	::-webkit-scrollbar {
		height: 0px;
		background: transparent;
	}
`;

export const ItemsContainer = styled.div`
	height: 100%;
	display: flex;
	transition: transform 500ms cubic-bezier(0.5, 0, 0.1, 1) 0s, -webkit-transform 500ms cubic-bezier(0.5, 0, 0.1, 1) 0s,
		-moz-transform 500ms cubic-bezier(0.5, 0, 0.1, 1) 0s, -o-transform 500ms cubic-bezier(0.5, 0, 0.1, 1) 0s;
`;
