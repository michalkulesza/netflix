import { SET_IS_DETAILS, SET_GLOBAL_MUTE, CLEAR_TOGGLES, AUTH_CHANGE } from "../types";

const initState = {
	globalMute: true,
	isDetails: false,
	authChange: false,
};

const toggles = (state = initState, action) => {
	switch (action.type) {
		case SET_GLOBAL_MUTE:
			return { ...state, globalMute: action.payload };
		case SET_IS_DETAILS:
			return { ...state, isDetails: action.payload };
		case CLEAR_TOGGLES:
			return initState;
		case AUTH_CHANGE:
			return { ...state, authChange: action.payload };
		default:
			return state;
	}
};

export default toggles;
