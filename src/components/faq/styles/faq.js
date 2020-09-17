import styled from "styled-components/macro";

export const Main = styled.div`
	position: relative;
	border-bottom: 8px solid #222;
	padding: 50px 5%;
	margin-bottom: 0;
	background: 0 0;
	color: #fff;
`;

export const Container = styled.div`
	font-size: 1.625rem;
	font-weight: 400;
	text-align: center;
`;

export const Title = styled.h1``;

export const List = styled.ul`
	width: 75%;
	margin: 2em auto;
	max-width: 815px;
	list-style: none;
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
	display: flex;
	justify-content: space-between;
	user-select: none;
`;

export const Icon = styled.div`
	height: 0.8em;
	width: 0.8em;
	filter: invert(1);
	transform: ${({ active }) => (active ? "rotate(0deg)" : "rotate(45deg)")};
	transition: all 0.1s ease-in-out;
`;

export const Body = styled.div`
	background-color: #333;
	padding: ${({ active }) => (active ? "1.2em" : "0")};
	text-align: left;
	max-height: ${({ active }) => (active ? "auto" : "0px")};
	overflow: hidden;
`;
