import styled from "styled-components/macro";

export const Main = styled.div`
	position: fixed;
	max-width: 1920px;
	margin: 0 auto;
	padding: 12px 0;
	width: 100%;
	height: auto;
	z-index: 100;
	background: ${({ scrolled }) =>
		scrolled > 0 ? "#141414" : "linear-gradient(to bottom,rgba(0,0,0,.7) 10%,rgba(0,0,0,0));"};
	transition: background 0.5s ease-in-out;

	@media only screen and (max-width: 590px) {
		padding-top: 10px;
	}
`;

export const Container = styled.div`
	margin: 0 2.5rem;
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
	height: ${({ largeLogo, smallLogo }) => (largeLogo ? "55px" : smallLogo ? "35px" : "45px")};
	padding-top: 0.5em;
	margin-right: 1.5em;

	@media only screen and (max-width: 1449px) and (min-width: 950px) {
		height: ${({ largeLogo, smallLogo }) => (largeLogo ? "46px" : smallLogo ? "33px" : "36px")};
	}

	@media only screen and (max-width: 949px) and (min-width: 550px) {
		height: ${({ largeLogo, smallLogo }) => (largeLogo ? "42px" : smallLogo ? "30px" : "32px")};
	}

	@media only screen and (max-width: 549px) and (min-width: 400px),
		only screen and (max-width: 399px) and (min-width: 350px),
		only screen and (max-width: 349px) {
		height: ${({ largeLogo, smallLogo }) => (largeLogo ? "34px" : smallLogo ? "25px" : "24px")};
	}
`;

export const Menu = styled.ul`
	display: flex;
	align-items: center;

	a.active {
		font-weight: 600;
		li {
			color: #fff;
		}
	}
`;

export const MenuItem = styled.li`
	color: #e5e5e5;
	cursor: pointer;
	transition: color 0.4s;
	margin-right: 1.8em;
	font-size: 1vw;

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
