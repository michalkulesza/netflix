import styled from "styled-components/macro";

export const Main = styled.div`
	border-bottom: 8px solid #333;
	padding: 50px 5%;
	margin-bottom: 0;
	background: 0 0;
	color: #fff;

	@media only screen and (max-width: 590px) {
		padding: 35px 3%;
	}
`;

export const Container = styled.div`
	max-width: 1100px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	flex-direction: ${({ direction }) => direction};

	@media only screen and (max-width: 949px) {
		flex-direction: column;
	}
`;

export const Half = styled.div`
	width: ${({ direction }) => (direction === "row" ? "52%" : "48%")};
	display: flex;
	flex-direction: column;
	justify-content: center;

	&::last-of-type {
		width: ${({ direction }) => (direction === "row" ? "48%" : "52%")};
	}

	@media only screen and (max-width: 949px) {
		width: 90%;
		margin: 0 auto;
	}
`;

export const Title = styled.h1`
	font-size: 3.125rem;
	line-height: 1.1;
	margin-bottom: 0.5rem;

	@media only screen and (max-width: 949px) {
		text-align: center;
	}

	@media only screen and (max-width: 550px) {
		font-size: 3rem;
	}
`;

export const SubTitle = styled.h2`
	font-size: 26px;
	font-weight: normal;
	line-height: normal;

	@media only screen and (max-width: 949px) {
		text-align: center;
	}

	@media only screen and (max-width: 550px) {
		font-size: 20px;
	}
`;

export const Image = styled.img`
	max-width: 100%;
	height: 100%;
	object-fit: scale-down;
`;
