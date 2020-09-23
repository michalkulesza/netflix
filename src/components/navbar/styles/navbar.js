import styled from "styled-components/macro";

export const Main = styled.div`
	position: absolute;
	max-width: 1920px;
	margin: 0 auto;
	padding-top: 20px;
	width: 100%;
	height: auto;
	z-index: 2;

	@media only screen and (max-width: 590px) {
		padding-top: 10px;
	}
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
	height: ${({ largeLogo, smallLogo }) => (largeLogo ? "55px" : smallLogo ? "30px" : "45px")};
	padding-top: 0.5em;
	margin-right: 1.5em;

	@media only screen and (max-width: 1449px) and (min-width: 950px) {
		height: ${({ largeLogo, smallLogo }) => (largeLogo ? "46px" : smallLogo ? "30px" : "36px")};
	}

	@media only screen and (max-width: 949px) and (min-width: 550px) {
		height: ${({ largeLogo, smallLogo }) => (largeLogo ? "42px" : smallLogo ? "28px" : "32px")};
	}

	@media only screen and (max-width: 549px) and (min-width: 400px),
		only screen and (max-width: 399px) and (min-width: 350px),
		only screen and (max-width: 349px) {
		height: ${({ largeLogo, smallLogo }) => (largeLogo ? "34px" : smallLogo ? "20px" : "24px")};
	}
`;

export const Menu = styled.ul`
	display: flex;
	align-items: center;
`;

export const MenuItem = styled.li`
	color: #e5e5e5;
	cursor: pointer;
	transition: color 0.4s;
	margin-left: 1.1em;
	font-size: 1em;

	&:hover {
		color: #b3b3b3;
	}

	@media only screen and (max-width: 949px) {
		font-size: 0.8em;
	}
`;

export const Divide = styled.div`
	display: flex;
`;
