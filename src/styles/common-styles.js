import { keyframes, css } from "styled-components/macro";

export const LoadingAnimation = keyframes`
	from {
		background-position-x: 0px;
	}
	to {
		background-position-x: 3000px;
	}
`;

export const fadeInAnim = (x, y, width) => css`
	${fadeIn(x, y, width)} 0.5s;
`;

export const fadeIn = (x, y, width) => keyframes`
	0% {
			opacity: 0;
			width: ${width}px;
			top: ${y}px;
			left: ${x}px;
			transform: translateX(0);
		}
		30% {
			opacity: 1;
		}
		100% {
			opacity: 1;
			width: 95vw;
			top: 0;
			left: 50%;
			transform: translateX(-50%);
		}
`;

export const fadeOut = (x, y, width) => keyframes`
	0% {
			opacity: 1;
			width: 95vw;
			top: 0;
		}
		50% {
			opacity: 1;
		}
		100% {
			opacity: 0;
			width: ${width}px;
			top: ${y}px;
			left: ${x}px;
			transform: translateX(0);
		}
`;

export const fadeOutAnim = (x, y, width) => css`
	${fadeOut(x, y, width)} 0.5s;
`;

export const notificationAnimIn = () => css`
	${notificationIn} 0.4s;
`;

export const notificationIn = () => keyframes`
	0% {
			opacity: 0;
			transform: translateY(30px);
		}

		70%{
			opacity: 1;
		}

		100% {
			opacity: 1;
			transform: translateY(0px);
		}
`;

export const notificationAnimOut = () => css`
	${notificationOut} 0.4s;
`;

export const notificationOut = () => keyframes`
	0% {
			opacity: 1;
			transform: translateY(0px);
		}
		30%{
			opacity: 1;
		}
		100% {
			opacity: 0;
			transform: translateY(30px);
		}
`;
