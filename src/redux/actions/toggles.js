import { SET_IS_DETAILS, SET_IS_EXPANDED, SET_GLOBAL_MUTE } from "../types";

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

export const setGlobalMute = bool => {
	return {
		type: SET_GLOBAL_MUTE,
		payload: bool,
	};
};
