import styled from "styled-components/macro";
import { respondTo } from "../../../styles/respondTo";

export const Wrapper = styled.div`
	width: 100%;
	padding: 20% 2.5em 0 2.5em;
`;

export const Main = styled.div`
	height: 100%;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);

	${respondTo.xs`
		grid-template-columns: repeat(2, 1fr);
		gap: 1em;
	`}

	${respondTo.sm`
		grid-template-columns: repeat(3, 1fr);
		gap: 1em;
	`}

	${respondTo.md`
		grid-template-columns: repeat(4, 1fr);
		gap: 1em;
	`}

	${respondTo.lg`
		grid-template-columns: repeat(5, 1fr);
		gap: 1em;
	`}

	${respondTo.xl`
		grid-template-columns: repeat(6, 1fr);
		gap: 1em;
	`}
	

	${respondTo.xxl`
		grid-template-columns: repeat(8, 1fr);
		gap: 1em;
	`}
`;
