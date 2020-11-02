import {
	SET_HEADER_VIDEO,
	SET_DETAILS_POSITION,
	SET_SCROLLBAR_WIDTH,
	SET_ACTIVE_EXPANDED,
	CLEAR_ACTIVE_EXPANDED,
	CLEAR_MISC,
} from "../types";

const initState = {
	headerVideo: null,
	detailsPosition: null,
	scrollbarWidth: null,
	activeExpanded: null,
};

const misc = (state = initState, action) => {
	switch (action.type) {
		case SET_HEADER_VIDEO:
			return { ...state, headerVideo: action.payload };
		case SET_DETAILS_POSITION:
			return { ...state, detailsPosition: action.payload };
		case SET_SCROLLBAR_WIDTH:
			return { ...state, scrollbarWidth: action.payload };
		case SET_ACTIVE_EXPANDED:
			return { ...state, activeExpanded: action.payload };
		case CLEAR_ACTIVE_EXPANDED:
			return { ...state, activeExpanded: null };
		case CLEAR_MISC:
			return initState;
		default:
			return state;
	}
};

export default misc;
