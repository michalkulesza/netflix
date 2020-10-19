import styled from "styled-components/macro";
import { respondTo } from "../../../styles/respondTo";

export const Main = styled.div`
	text-align: center;
	margin: 0 auto;
	max-width: 750px;
`;

export const Title = styled.h3`
	font-size: 1em;
	font-weight: 400;

	${respondTo.xs`
		font-size: 1.2rem;
	`};
`;

export const FormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const InputContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: center;

	${respondTo.md`
		flex-direction: initial;
	`};
`;

export const InputWrapper = styled.div`
	position: relative;
`;

export const Input = styled.input`
	min-width: auto;
	height: 60px !important;
	padding: 10px 10px 0;
	width: 100%;
	border-radius: 3px;

	${respondTo.md`
	border-radius: 3px 0 0 3px;
		min-width: 450px;
	`};
`;

export const Label = styled.label`
	position: absolute;
	color: #8c8c8c;
	top: ${({ focused }) => (focused ? "25%" : "50%")};
	transform: translateY(-50%) ${({ focused }) => (focused ? "scale(0.8) translateX(-12%)" : "scale(1) translateX(0%)")};
	left: 10px;
	transition: font 0.1s ease, top 0.1s ease, transform 0.1s ease, -webkit-transform 0.1s ease, -moz-transform 0.1s ease,
		-o-transform 0.1s ease;
`;

export const Button = styled.button`
	width: fit-content;
	height: 100%;
	padding: 16px 1em;
	font-size: 1.625rem;
	height: fit-content;
	white-space: nowrap;
	text-align: center;
	border: 0;
	background-color: #e50914;
	color: #fff;
	cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
	border-radius: 3px;
	margin: 0 auto;
	margin-top: 1.2em;

	&:hover {
		background: #f40612;
	}

	${respondTo.md`
		border-radius: 0 3px 3px 0;
		width: initial;
		margin: initial;
		`};
`;

export const Error = styled.div`
	position: absolute;
	top: 4.2em;
	text-align: left;
	color: #ffa00a;
	padding: 6px 3px;
	font-size: 14px;

	${respondTo.xs`
		top: 100%;
	`};
`;
