import styled from "styled-components/macro";

export const Main = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const ButtonsContainer = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: row;
`;

export const Left = styled.div`
	height: 100%;
	width: max-content;
	display: flex;
	align-items: center;
`;

export const ButtonContainer = styled.div`
	position: relative;
`;

export const Middle = styled.div`
	height: 100%;
	flex: 1;
	margin: 0 1em;
	display: flex;
	overflow: hidden;
	align-items: center;
`;

export const Title = styled.h3`
	width: 100%;
	font-weight: 600;
	white-space: nowrap;
	span {
		color: #adadad;
	}
`;

export const Right = styled.div`
	height: 100%;
	width: max-content;
	display: flex;
	align-items: center;
`;
