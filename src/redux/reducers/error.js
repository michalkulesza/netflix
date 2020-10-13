import { SET_ERROR, CLEAR_ERROR } from "../types";

const initState = {
	error: null,
};

const error = (state = initState, action) => {
	switch (action.type) {
		case SET_ERROR:
			return { ...state, error: action.payload };
		case CLEAR_ERROR:
			return initState;
		default:
			return state;
	}
};

export default error;
