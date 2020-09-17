import styled from "styled-components/macro";

export const Main = styled.div`
	text-align: center;
	margin: 0 auto;
	max-width: 750px;
`;

export const Title = styled.h3`
	padding-bottom: 20px;
	font-size: 1.2rem;
	font-weight: 400;
`;

export const FormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const InputWrapper = styled.div`
	display: flex;
	position: relative;
`;

export const Input = styled.input`
	min-width: 450px;
	height: 60px !important;
	padding: 10px 10px 0;
	width: 100%;
	border-radius: 3px 0 0 3px;

	&:focus {
		outline: none;
	}
`;

export const Label = styled.label`
	position: absolute;
	color: #8c8c8c;
	font-weight: ${({ focused }) => (focused ? "bold" : "regular")};
	top: ${({ focused }) => (focused ? "25%" : "50%")};
	transform: translateY(-50%) ${({ focused }) => (focused ? "scale(0.8) translateX(-12%)" : "scale(1) translateX(0%)")};
	left: 10px;
	transition: font 0.1s ease, top 0.1s ease, transform 0.1s ease, -webkit-transform 0.1s ease, -moz-transform 0.1s ease,
		-o-transform 0.1s ease;
`;

export const Button = styled.button`
	height: 100%;
	padding: 0 1em;
	font-size: 1.625rem;
	min-height: 70px;
	white-space: nowrap;
	text-align: center;
	border: 0;
	background-color: #e50914;
	color: #fff;
	cursor: pointer;
	border-radius: 0 3px 3px 0;

	&:hover {
		background: #f40612;
	}
`;

export const Error = styled.div`
	text-align: left;
	color: #ffa00a;
	padding: 6px 3px;
	font-size: 14px;
`;
