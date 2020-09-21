import styled from "styled-components/macro";

export const Main = styled.div`
	margin: 0 auto;
	background-color: transparent;
	max-width: 480px;
	padding: 0 5%;
	margin-top: -6em;
`;

export const Container = styled.div`
	padding: 60px 68px 40px;
	background-color: rgba(0, 0, 0, 0.75);
	border-radius: 4px;
	text-align: left;
`;

export const Title = styled.h1`
	margin-bottom: 28px;
	font-size: 2.3em;
`;

export const Input = styled.input`
	border-radius: 4px;
	border: 0;
	height: 50px;
	line-height: 50px;
	padding: 16px 20px 0;
	width: 100%;
	box-sizing: border-box;
	color: #fff;
	background-color: #333333;
	z-index: 10;

	&:focus {
		outline: none;
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
`;

export const Error = styled.div`
	font-size: 0.9em;
	color: #e87c03;
	margin: 0.5em 0 0 0.5em;
	margin-bottom: 10px;
`;

export const Button = styled.button`
	background-color: #e50914;
	border-radius: 4px;
	margin: 24px 0 12px;
	width: 100%;
	max-width: 100%;
	padding: 16px;
	border: none;
	color: #fff;
	font-weight: 600;
	cursor: pointer;
`;

export const Redirect = styled.div`
	margin-top: 1em;
	font-size: 1.1em;
	color: #737373;
	margin-bottom: 2em;

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
	font-size: 0.9em;
`;
