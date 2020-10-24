import { SET_IS_DETAILS, SET_GLOBAL_MUTE } from "../types";

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
		default:
			return state;
	}
};

export default toggles;
