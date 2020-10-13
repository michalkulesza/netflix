import styled from "styled-components/macro";
import { notificationAnimIn, notificationAnimOut } from "../../common-styles";

export const Main = styled.div`
	background-color: #e53935;
	padding: 10px 20px;
	border-radius: 5px;
	font-size: 0.8em;
	pointer-events: all;
	animation: ${({ error }) => (error ? notificationAnimIn() : notificationAnimOut())};
	box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;
	display: flex;
	align-items: center;

	svg {
		transform: scale(1.3);
		margin-right: 1em;
	}
`;

export const Wrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	padding: 1%;
	z-index: 9999;
	pointer-events: none;
`;
