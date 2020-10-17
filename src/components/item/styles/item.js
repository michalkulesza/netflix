import styled from "styled-components/macro";
import { respondTo } from "../../../styles/respondTo";

export const Container = styled.div`
	height: 100%;
	display: flex;
	transition: transform 0.54s cubic-bezier(0.5, 0, 0.1, 1) 0s, -webkit-transform 0.54s cubic-bezier(0.5, 0, 0.1, 1) 0s,
		-moz-transform 0.54s cubic-bezier(0.5, 0, 0.1, 1) 0s, -o-transform 0.54s cubic-bezier(0.5, 0, 0.1, 1) 0s;
`;

export const Wrapper = styled.div`
	position: relative;
	cursor: pointer;
	width: ${({ grid, scrollbarWidth }) => !grid && `calc(((100vw - ${scrollbarWidth}vw - 4* 0.5vw) / 3.5))`};
	height: ${({ grid, scrollbarWidth }) =>
		!grid && `calc(((100vw - ${scrollbarWidth}vw - 4 * 0.5vw) / 3.5) * 1.518712025909371)`};

	margin-right: ${({ grid }) => !grid && "0.5vw"};
	display: flex;
	justify-content: center;
	align-items: center;

	&:nth-of-type(1) {
		margin-left: ${({ grid, scrollbarWidth }) =>
			!grid && `calc(((100vw - ${scrollbarWidth}vw - 4 * 0.5vw ) /3.5) / 4 + 0.5vw)`};
	}

	${respondTo.sm`
		width: ${({ grid, scrollbarWidth }) => !grid && `calc(((100vw - ${scrollbarWidth}vw - 5 * 0.5vw) / 4.5))`};
		height: ${({ grid, scrollbarWidth }) =>
			!grid && `calc(((100vw - ${scrollbarWidth}vw - 5 * 0.5vw) / 4.5) * 1.518712025909371)`};

		&:nth-of-type(1) {
			margin-left: ${({ grid, scrollbarWidth }) =>
				!grid && `calc(((100vw - ${scrollbarWidth}vw - 5 * 0.5vw ) / 4.5) / 4 + 0.5vw)`};
		}
	`};

	${respondTo.md`
		width: ${({ grid, scrollbarWidth }) => !grid && `calc(((100vw - ${scrollbarWidth}vw - 6 * 0.5vw) / 5.5))`};
		height: ${({ grid, scrollbarWidth }) =>
			!grid && `calc(((100vw - ${scrollbarWidth}vw - 6 * 0.5vw) / 5.5) * 1.518712025909371)`};

		&:nth-of-type(1) {
			margin-left: ${({ grid, scrollbarWidth }) =>
				!grid && `calc(((100vw - ${scrollbarWidth}vw - 6 * 0.5vw ) / 5.5) / 4 + 0.5vw)`};
		}
	`};

	${respondTo.lg`
		width: ${({ grid, scrollbarWidth }) => !grid && `calc(((100vw - ${scrollbarWidth}vw - 8 * 0.5vw) / 7.5))`};
		height: ${({ grid, scrollbarWidth }) =>
			!grid && `calc(((100vw - ${scrollbarWidth}vw - 8 * 0.5vw) / 7.5) * 1.518712025909371)`};

		&:nth-of-type(1) {
			margin-left: ${({ grid, scrollbarWidth }) =>
				!grid && `calc(((100vw - ${scrollbarWidth}vw - 8 * 0.5vw ) / 7.5) / 4 + 0.5vw)`};
		}
	`};

	${respondTo.xl`
		width: ${({ grid, scrollbarWidth }) => !grid && `calc(((100vw - ${scrollbarWidth}vw - 9 * 0.5vw) / 8.5))`};
		height: ${({ grid, scrollbarWidth }) =>
			!grid && `calc(((100vw - ${scrollbarWidth}vw - 9 * 0.5vw) / 8.5) * 1.518712025909371)`};

		&:nth-of-type(1) {
			margin-left: ${({ grid, scrollbarWidth }) =>
				!grid && `calc(((100vw - ${scrollbarWidth}vw - 9 * 0.5vw ) / 8.5) / 4 + 0.5vw)`};
		}
	`};
`;

export const Main = styled.img`
	border-radius: 5px;
	height: 100%;
	width: 100%;
	background-color: #1b1b1b;
	box-sizing: content-box;
`;

export const Loader = styled.img`
	max-height: 25%;
`;
