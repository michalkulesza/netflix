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
	background-color: #1b1b1b;
	box-sizing: content-box;
`;

export const Loader = styled.img`
	max-height: 25%;
`;
