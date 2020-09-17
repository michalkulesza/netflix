import styled from "styled-components/macro";

export const Main = styled.div`
	width: 100%;
	border-bottom: 8px solid #333;
	padding: 50px 5%;
	margin-bottom: 0;
	background: 0 0;
	color: #fff;

	@media only screen and (max-width: 949px) and (min-width: 550px),
		only screen and (max-width: 1449px) and (min-width: 950px),
		only screen and (min-width: 1450px) {
		padding: 70px 45px;
	}
`;

export const Container = styled.div``;

export const Half = styled.div`
	width: 50%;

	@media (max-width: 1000px) {
		width: 100%;
		padding: 0 45px;
		text-align: center;
	}
`;

export const Title = styled.h1`
	font-size: 50px;
	line-height: 1.1;
	margin-bottom: 8px;

	@media (max-width: 600px) {
		font-size: 35px;
	}
`;

export const SubTitle = styled.h2`
	font-size: 26px;
	font-weight: normal;
	line-height: normal;

	@media (max-width: 600px) {
		font-size: 18px;
	}
`;

export const Image = styled.img`
	max-width: 100%;
	height: auto;
`;
