import styled from "styled-components/macro";
import { respondTo } from "../../../styles/respondTo";

export const Main = styled.div`
	margin: 0 auto;
	background-color: transparent;
	max-width: 450px;
	margin-top: -6vw;
`;

export const Container = styled.form`
	padding: 40px 30px;
	background-color: rgba(0, 0, 0, 0.75);
	border-radius: 4px;
	text-align: left;

	${respondTo.md`
	padding: 40px 50px;
	`}
`;

export const Title = styled.h1`
	margin-bottom: 28px;
	font-weight: 600;
	font-size: 2.3em;
`;

export const Input = styled.input`
	border-radius: 4px;
	border: 0;
	height: 50px;
	line-height: 50px;
	padding: 16px 20px 0;
	width: 100%;
	color: #fff;
	background-color: #333333;
	z-index: 10;

	&:focus {
		background-color: #454545;
	}
`;

export const InputWrapper = styled.div`
	position: relative;
`;

export const Label = styled.label`
	position: absolute;
	top: 50%;
	left: 0;
	left: 1.5em;
	font-size: 1.1em;
	transform: ${({ activeInput }) =>
		activeInput ? "translateX(-10px) translateY(-100%) scale(0.8)" : "translateY(-50%)"};
	color: #8c8c8c;
	transition: font 0.1s ease, top 0.1s ease, transform 0.1s ease, -webkit-transform 0.1s ease, -moz-transform 0.1s ease,
		-o-transform 0.1s ease;
	pointer-events: none;
`;

export const Error = styled.div`
	font-size: 0.8em;
	color: #e87c03;
	margin: 0.5em 0 0 0.5em;
	margin-bottom: 10px;
`;

export const Redirect = styled.div`
	margin-top: 1em;
	font-size: 0.9em;
	color: #737373;
	margin-bottom: 1em;

	a {
		color: #fff;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
`;

export const Text = styled.span`
	color: #8c8c8c;
	font-size: 0.7em;
`;

export const MainError = styled.div`
	background-color: #e87c03;
	padding: ${({ children }) => (children ? "1em 1em" : "0em 1em")};
	border-radius: 3px;
`;
