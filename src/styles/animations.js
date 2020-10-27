import { keyframes, css } from "styled-components/macro";

export const LoadingBackgroundAnimation = keyframes`
	from {
		background-position-x: 0px;
	}
	to {
		background-position-x: 3000px;
	}
`;

export const detailsFadeInAnim = (x, y, width) => css`
	${detailsFadeIn(x, y, width)} 0.5s;
`;

export const detailsFadeIn = (x, y, width) => keyframes`
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

export const detailsFadeOutAnim = (x, y, width) => css`
	${detailsFadeOut(x, y, width)} 0.5s;
`;

export const detailsFadeOut = (x, y, width) => keyframes`
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

export const expandedAnimIn = () => css`
	${expandedIn} 400ms;
`;

export const expandedIn = () => keyframes`
		0% {
			opacity: 0;
			transform: translate3d(-50%, -50%, 0) scale(0.6);
			};
		100% {
			opacity: 1;
			transform: translate3d(-50%, -50%, 0) scale(1);
			};
`;

export const expandedAnimInLeft = () => css`
	${expandedInLeft} 400ms;
`;

export const expandedInLeft = () => keyframes`
		0% {
			opacity: 0;
			transform: translate3d(0%, -50%, 0) scale(0.6);
			};
		100% {
			opacity: 1;
			transform: translate3d(0%, -50%, 0) scale(1);
			};
`;

export const expandedAnimInRight = () => css`
	${expandedInRight} 400ms;
`;

export const expandedInRight = () => keyframes`
		0% {
			opacity: 0;
			transform: translate3d(-100%, -50%, 0) scale(0.6);
			};
		100% {
			opacity: 1;
			transform: translate3d(-100%, -50%, 0) scale(1);
			};
`;

export const spinnerAnim = () => css`
	${spinner} 600ms infinite linear;
`;

export const spinner = () => keyframes`
		0% {
			transform: rotate(0deg);
			};
		100% {
			transform: rotate(360deg);
			};
`;
