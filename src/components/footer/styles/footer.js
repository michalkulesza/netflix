import styled from "styled-components/macro";
import { respondTo } from "../../../styles/respondTo";

export const Main = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 0px 25px;

	${respondTo.xs`
		padding: 0px 45px;
	`}
`;

export const Container = styled.div`
	margin: 0 auto;
	width: 100%;
	min-width: 190px;
	width: 100%;
	margin-top: 80px;
	padding-bottom: 20px;
	font-size: 1em;
	color: #757575;
`;

export const Heading = styled.p`
	font-weight: 400;
	margin: 0 0 30px 0;
`;

export const Grid = styled.div`
	width: 100%;
	display: grid;
	grid-template-rows: repeat(2, 1fr);
	grid-template-columns: repeat(2, 1fr);
	gap: 1em;

	${respondTo.xs`
		grid-template-rows: none;
		grid-template-columns: repeat(4, 1fr);
		gap: normal;
	`}
`;

export const Ul = styled.ul``;

export const Li = styled.li`
	margin-bottom: 1em;
	font-size: 0.85em;
`;

export const Text = styled.p`
	font-size: 0.85em;
`;
