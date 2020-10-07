import { SET_GLOBAL_MUTE } from "../types";

const initState = {
	globalMute: false,
};

const misc = (state = initState, action) => {
	switch (action.type) {
		case SET_GLOBAL_MUTE:
			return { ...state, globalMute: action.payload };
		default:
			return state;
	}
};

export default misc;
