import { SET_USER, SET_USER_INFO } from "../types";

const initState = {
	info: null,
	liked: null,
	disliked: null,
	list: null,
};

const toggles = (state = initState, action) => {
	switch (action.type) {
		case SET_USER_INFO:
			return { ...state, info: action.payload };
		case SET_USER:
			return action.payload;
		default:
			return state;
	}
};

export default toggles;
