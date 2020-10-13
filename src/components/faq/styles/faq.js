import styled from "styled-components/macro";
import { respondTo } from "../../../styles/respondTo";

export const Main = styled.div`
	position: relative;
	border-bottom: 8px solid #222;
	padding: 50px 5%;
	margin-bottom: 0;
	background: 0 0;
	color: #fff;
`;

export const Container = styled.div`
	font-size: 1.625em;
	font-weight: 400;
	text-align: center;
`;

export const Title = styled.h1`
	font-size: 2em;

	${respondTo.xs`
		font-size: 1em;
	`}
`;

export const List = styled.ul`
	width: 100%;
	margin: 2em auto;
	max-width: 815px;
	list-style: none;

	${respondTo.xs`
		width: 75%;
	`}
`;

export const Item = styled.li`
	margin-bottom: 8px;
`;

export const Header = styled.div`
	background-color: #303030;
	padding: 0.8em 1.2em;
	margin-bottom: 1px;
	font-weight: 400;
	position: relative;
	border: 0;
	text-align: left;
	font-size: 0.7em;
	display: flex;
	justify-content: space-between;
	user-select: none;

	${respondTo.xs`
		font-size: 1em;
	`}
`;

export const Icon = styled.div`
	height: 0.8em;
	width: 0.8em;
	filter: invert(1);
	transform: ${({ active }) => (active ? "rotate(0deg)" : "rotate(45deg)")};
	transition: transform 0.25s cubic-bezier(0.5, 0, 0.1, 1);
`;

export const Body = styled.div`
	background-color: #333;
	font-size: 0.7em;
	text-align: left;
	max-height: ${({ active }) => (active ? "800px" : "0px")};
	overflow: hidden;
	transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);

	${respondTo.xs`
		font-size: 1em;
	`}
`;

export const Text = styled.div`
	padding: 1.2em;
`;
