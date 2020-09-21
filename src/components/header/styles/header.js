import styled from "styled-components/macro";

export const Main = styled.div`
	position: relative;
	width: 100%;
	border-bottom: 8px solid #222;
`;

export const BackgroundWrapper = styled.div`
	z-index: 0;
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	overflow: hidden;
`;

export const Background = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background-color: pink;
`;

export const BackgroundImg = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

export const BackgroundGradient = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	height: 100%;
	width: 100%;
	background: rgba(0, 0, 0, 0.4);
	background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%);
`;

export const Container = styled.div`
	position: relative;
	padding: 70px 45px;
	color: #fff;
	z-index: 1;

	@media only screen and (max-width: 590px) {
		padding: 55px 35px;
	}
`;

export const Inner = styled.div`
	width: 100%;
	padding: 75px 0;
	max-width: 950px;
	margin: 0 auto;
	text-align: center;
	margin-top: 5em;

	@media only screen and (max-width: 590px) {
		padding: 0 0 50px 0;
	}
`;

export const Heading = styled.h1`
	font-size: 4rem;
	max-width: 800px;
	margin: 0 auto;

	@media only screen and (max-width: 590px) {
		font-size: 3rem;
	}
`;

export const SubHeading = styled.h2`
	font-size: 1.625rem;
	font-weight: 400;

	@media only screen and (max-width: 590px) {
		font-size: 1.4rem;
	}
`;
