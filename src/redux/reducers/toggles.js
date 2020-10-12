import { SET_IS_DETAILS, SET_DETAILS_POSITION, SET_IS_EXPANDED, IS_USER_AWAY } from "../types";

const initState = {
	isDetails: false,
	detailsPosition: null,
	isExpanded: false,
	isUserAway: false,
};

const toggles = (state = initState, action) => {
	switch (action.type) {
		case SET_IS_DETAILS:
			return { ...state, ...action.payload };
		case SET_IS_EXPANDED:
			return { ...state, isExpanded: action.payload };
		case SET_DETAILS_POSITION:
			return { ...state, ...action.payload };
		case IS_USER_AWAY:
			return { ...state, isUserAway: action.payload };
		default:
			return state;
	}
};

export default toggles;
