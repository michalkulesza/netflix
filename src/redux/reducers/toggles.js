import { SET_DETAILS, SET_DETAILS_POSITION } from "../types";

const initState = {
	isDetails: false,
	detailsPosition: null,
};

const toggles = (state = initState, action) => {
	switch (action.type) {
		case SET_DETAILS:
			return { ...state, ...action.payload };
		case SET_DETAILS_POSITION:
			return { ...state, ...action.payload };
		default:
			return state;
	}
};

export default toggles;
