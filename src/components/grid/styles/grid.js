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
