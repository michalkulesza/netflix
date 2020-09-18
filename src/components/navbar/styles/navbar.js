import styled from "styled-components/macro";

export const Main = styled.div`
	position: relative;
	max-width: 1920px;
	margin: 0 auto;
	padding-top: 20px;
	width: 100%;
	height: 5rem;
	z-index: 1;
`;

export const Container = styled.div`
	margin: 0 3.5rem;
	height: 100%;
	display: flex;
	justify-content: space-between;

	@media only screen and (max-width: 949px) and (min-width: 550px) {
		margin: 0 45px;
	}

	@media only screen and (max-width: 549px) and (min-width: 400px),
		only screen and (max-width: 399px) and (min-width: 350px),
		only screen and (max-width: 349px) {
		margin: 0 5%;
	}
`;

export const Logo = styled.img`
	height: 45px;
	padding-top: 0.5em;

	@media only screen and (max-width: 1449px) and (min-width: 950px) {
		height: 36px;
	}

	@media only screen and (max-width: 949px) and (min-width: 550px) {
		height: 32px;
	}

	@media only screen and (max-width: 549px) and (min-width: 400px),
		only screen and (max-width: 399px) and (min-width: 350px),
		only screen and (max-width: 349px) {
		height: 24px;
	}
`;
