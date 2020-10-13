import { css } from "styled-components";
import { breakpoints } from "./breakpoints";

export const respondTo = Object.keys(breakpoints).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (min-width: ${breakpoints[label]}) {
			${css(...args)};
		}
	`;
	return acc;
}, {});
