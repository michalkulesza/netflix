import { SET_USER } from "../types";

const initState = {
	info: null,
	liked: null,
	disliked: null,
	list: null,
};

const toggles = (state = initState, action) => {
	switch (action.type) {
		case SET_USER:
			return { ...state, info: action.payload };
		default:
			return state;
	}
};

export default toggles;
