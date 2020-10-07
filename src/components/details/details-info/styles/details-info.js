import styled from "styled-components/macro";

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
