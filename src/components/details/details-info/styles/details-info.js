import styled from "styled-components/macro";
import { LoadingAnimation } from "../../../../styles/common-styles";

export const Main = styled.div`
	padding: 2vw 5vw;
	display: flex;
	gap: 2em;
	margin-bottom: 2em;
`;

export const Half = styled.div`
	&:nth-of-type(1) {
		width: 65%;
	}

	&:nth-of-type(2) {
		width: 35%;
	}
`;

export const Content = styled.div`
	display: flex;
	align-items: center;
	gap: 0.6em;
	color: #fff;
	font-size: 1.1em;
	margin-bottom: 1em;

	p {
		color: #46d369;
		font-weight: 600;
		margin: 0;
	}
	span {
		border: 1px solid #6b6b6b;
		padding: 0.1em 0.3em;
	}
`;

export const Description = styled.div`
	font-size: 1.15em;
	line-height: 1.5em;
`;

export const Cast = styled.div`
	margin-bottom: 1em;
	font-size: 0.9em;
	line-height: 1.5em;
	span {
		color: #777777;
	}
`;

export const Loading = styled.div`
	width: 100%;
	height: calc(95vw * 0.5625);
	max-height: calc(1190px * 0.5625);
	background: linear-gradient(
		90deg,
		rgba(18, 18, 18, 1) 0%,
		rgba(27, 27, 27, 1) 39%,
		rgba(40, 40, 40, 1) 50%,
		rgba(27, 27, 27, 1) 55%,
		rgba(18, 18, 18, 1) 100%
	);
	animation: ${LoadingAnimation} 15s linear infinite;
`;
