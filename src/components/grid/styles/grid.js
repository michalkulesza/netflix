import styled from "styled-components/macro";
import { LoadingAnimation } from "../../../styles/common-styles";
import { respondTo } from "../../../styles/respondTo";

export const Wrapper = styled.div`
	width: 100%;
	padding: 20% 2.5em 0 2.5em;
`;

export const Main = styled.div`
	height: 100%;
	width: 100%;
	display: grid;
	gap: 0.6em;

	${respondTo.xs`
		grid-template-columns: repeat(2, 1fr);
	`}

	${respondTo.sm`
		grid-template-columns: repeat(4, 1fr);
	`}

	${respondTo.md`
		grid-template-columns: repeat(5, 1fr);
	`}

	${respondTo.lg`
		grid-template-columns: repeat(6, 1fr);
	`}

	${respondTo.xl`
		grid-template-columns: repeat(7, 1fr);
	`}
`;

export const Loading = styled.div`
	width: 200px;
	height: 300px;
	background: linear-gradient(
		90deg,
		rgba(18, 18, 18, 1) 0%,
		rgba(27, 27, 27, 1) 39%,
		rgba(40, 40, 40, 1) 50%,
		rgba(27, 27, 27, 1) 55%,
		rgba(18, 18, 18, 1) 100%
	);
	animation: ${LoadingAnimation} 15s linear infinite;
`;
