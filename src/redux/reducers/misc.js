import { SET_HEADER_VIDEO, SET_PRESSED_KEY, SET_DETAILS_POSITION, SET_SCROLLBAR_WIDTH } from "../types";

const initState = {
	headerVideo: null,
	pressedKey: null,
	detailsPosition: null,
	scrollbarWidth: null,
};

const misc = (state = initState, action) => {
	switch (action.type) {
		case SET_HEADER_VIDEO:
			return { ...state, headerVideo: action.payload };
		case SET_PRESSED_KEY:
			return { ...state, pressedKey: action.payload };
		case SET_DETAILS_POSITION:
			return { ...state, detailsPosition: action.payload };
		case SET_SCROLLBAR_WIDTH:
			return { ...state, scrollbarWidth: action.payload };
		default:
			return state;
	}
};

export default misc;
