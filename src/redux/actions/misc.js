import { SET_PRESSED_KEY, SET_HEADER_VIDEO, SET_DETAILS_POSITION, SET_SCROLLBAR_WIDTH } from "../types";

export const setPressedKey = key => {
	return {
		type: SET_PRESSED_KEY,
		payload: key,
	};
};

export const setHeaderVideo = data => {
	return {
		type: SET_HEADER_VIDEO,
		payload: data,
	};
};

export const setDetailsPosition = (x, y, width, height) => {
	return {
		type: SET_DETAILS_POSITION,
		payload: { x, y, width, height },
	};
};

export const setScrollbarWidth = width => {
	return {
		type: SET_SCROLLBAR_WIDTH,
		payload: width,
	};
};
