import { SET_IS_DETAILS, SET_GLOBAL_MUTE, CLEAR_TOGGLES } from "../types";

const initState = {
	globalMute: true,
	isDetails: false,
};

const toggles = (state = initState, action) => {
	switch (action.type) {
		case SET_GLOBAL_MUTE:
			return { ...state, globalMute: action.payload };
		case SET_IS_DETAILS:
			return { ...state, ...action.payload };
		case CLEAR_TOGGLES:
			return initState;
		default:
			return state;
	}
};

export default toggles;
