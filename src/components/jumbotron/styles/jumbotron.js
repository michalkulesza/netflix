import styled from "styled-components/macro";

export const Main = styled.div`
	border-bottom: 8px solid #333;
	padding: 50px 5%;
	margin-bottom: 0;
	background: 0 0;
	color: #fff;
`;

export const Container = styled.div`
	max-width: 1100px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	flex-direction: ${({ direction }) => direction};
`;

export const Half = styled.div`
	width: ${({ direction }) => (direction === "row" ? "52%" : "48%")};
	display: flex;
	flex-direction: column;
	justify-content: center;

	&::last-of-type {
		width: ${({ direction }) => (direction === "row" ? "48%" : "52%")};
	}
`;

export const Title = styled.h1`
	font-size: 3.125rem;
	line-height: 1.1;
	margin-bottom: 0.5rem;
`;

export const SubTitle = styled.h2`
	font-size: 26px;
	font-weight: normal;
	line-height: normal;
`;

export const Image = styled.img`
	max-width: 100%;
	height: 100%;
	object-fit: scale-down;
`;
