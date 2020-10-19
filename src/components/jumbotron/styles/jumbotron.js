import styled from "styled-components/macro";
import { respondTo } from "../../../styles/respondTo";

export const Main = styled.div`
	border-bottom: 8px solid #333;
	padding: 35px 3%;
	margin-bottom: 0;
	background: #000;
	color: #fff;
	padding-top: 20%;

	${respondTo.xs`
		padding: 50px 5%;
	`};
`;

export const Container = styled.div`
	max-width: 1100px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	flex-direction: column;

	${respondTo.md`
		flex-direction: ${({ direction }) => direction};
		align-items: center;
	`};
`;

export const Half = styled.div`
	width: 90%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;

	&::last-of-type {
		width: ${({ direction }) => (direction === "row" ? "48%" : "52%")};
	}

	${respondTo.md`
		width: ${({ direction }) => direction === "row" && "52%"};
		margin: 0;
	`};
`;

export const Title = styled.h1`
	font-size: 3rem;
	font-weight: 600;
	line-height: 1.1;
	margin-bottom: 0.5rem;
	text-align: center;

	${respondTo.md`
		text-align: initial;
	`};

	${respondTo.xs`
		font-size: 3.125rem;
	`};
`;

export const SubTitle = styled.h2`
	font-size: 20px;
	font-weight: normal;
	line-height: normal;
	text-align: center;

	${respondTo.md`
		text-align: initial;
	`};

	${respondTo.xs`
		font-size: 26px;
	`};
`;

export const Image = styled.img`
	max-width: 100%;
	object-fit: scale-down;

	${respondTo.xs`
	height: 100%;
	`};
`;
