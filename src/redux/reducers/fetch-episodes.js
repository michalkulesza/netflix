import { CLEAR_EPISODES, FETCH_EPISODES, SET_EPISODES_UPDATING } from "../types";

const initState = {
	data: null,
	isUpdating: false,
};

const fetchEpisodes = (state = initState, action) => {
	switch (action.type) {
		case FETCH_EPISODES:
			return { data: action.payload };
		case SET_EPISODES_UPDATING:
			return { ...state, isUpdating: true };
		case CLEAR_EPISODES:
			return { data: null, isUpdating: false };
		default:
			return state;
	}
};

export default fetchEpisodes;
