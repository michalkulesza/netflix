import { SET_IS_DETAILS, SET_GLOBAL_MUTE } from "../types";

export const setIsDetails = bool => {
	return {
		type: SET_IS_DETAILS,
		payload: bool,
	};
};

export const setGlobalMute = bool => {
	return {
		type: SET_GLOBAL_MUTE,
		payload: bool,
	};
};
