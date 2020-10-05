import { SET_SCROLLED } from "../types";

const initState = {
	scrolled: 0,
};

const misc = (state = initState, action) => {
	switch (action.type) {
		case SET_SCROLLED:
			return { ...state, ...action.payload };
		default:
			return state;
	}
};

export default misc;
