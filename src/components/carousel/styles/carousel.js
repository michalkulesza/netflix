import styled from "styled-components/macro";

export const Main = styled.div`
	position: relative;
	width: 100%;
	margin-top: -15vw;
	z-index: 5;
`;

export const Container = styled.div`
	margin-bottom: 500px;
	position: relative;
	display: flex;
	flex-direction: column;
`;

export const Category = styled.h1`
	position: absolute;
	top: -3em;
	margin-left: 2.5vw;
	font-size: 1.5em;
	color: #fff;
	z-index: 10;
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
	pointer-events: auto;
	cursor: pointer;
	height: 100%;
	width: ${({ tileWidth }) => `${(tileWidth - 0.5) / 2}vw`};
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
		visibility: ${({ firstSlide }) => (firstSlide ? "hidden" : "visible")};
	}

	&:nth-of-type(2) {
		border-radius: 5px 0 0 5px;
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
	height: fit-content;

	::-webkit-scrollbar {
		height: 0px;
		background: transparent;
	}
`;

export const ItemsContainer = styled.div`
	height: 100%;
	display: flex;
	transition: transform 0.54s cubic-bezier(0.5, 0, 0.1, 1) 0s, -webkit-transform 0.54s cubic-bezier(0.5, 0, 0.1, 1) 0s,
		-moz-transform 0.54s cubic-bezier(0.5, 0, 0.1, 1) 0s, -o-transform 0.54s cubic-bezier(0.5, 0, 0.1, 1) 0s;
`;

export const ItemWrapper = styled.div`
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

export const Item = styled.img`
	border-radius: 5px;
	height: 100%;
	width: 100%;
	background-color: blue;
	box-sizing: content-box;
`;

export const Loader = styled.img`
	max-height: 25%;
`;
