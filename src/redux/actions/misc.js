import {
	SET_PRESSED_KEY,
	SET_HEADER_VIDEO,
	SET_DETAILS_POSITION,
	SET_SCROLLBAR_WIDTH,
	SET_EXPANDED_POSITION,
	CLEAR_EXPANDED_POSITION,
	SET_EXPANDED_TRANSFORM_ORIGIN,
} from "../types";

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

export const setExpandedPosition = ({ x, y, width, height }) => {
	return {
		type: SET_EXPANDED_POSITION,
		payload: { x, y, width, height },
	};
};

export const clearExpandedPosition = () => {
	return {
		type: CLEAR_EXPANDED_POSITION,
	};
};

export const setExpandedTranformOrigin = origin => {
	return {
		type: SET_EXPANDED_TRANSFORM_ORIGIN,
		payload: origin,
	};
};
