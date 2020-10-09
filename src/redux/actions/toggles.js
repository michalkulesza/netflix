import { SET_IS_DETAILS, SET_IS_EXPANDED, SET_DETAILS_POSITION } from "../types";

export const setIsDetails = bool => {
	return {
		type: SET_IS_DETAILS,
		payload: { isDetails: bool },
	};
};

export const setIsExpanded = bool => {
	return {
		type: SET_IS_EXPANDED,
		payload: bool,
	};
};

export const setDetailsPosition = (x, y, width, height) => {
	return {
		type: SET_DETAILS_POSITION,
		payload: { detailsPosition: { x, y, width, height } },
	};
};
