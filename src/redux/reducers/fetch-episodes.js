import { CLEAR_EPISODES, FETCH_EPISODES } from "../types";

const fetchEpisodes = (state = null, action) => {
	switch (action.type) {
		case FETCH_EPISODES:
			return action.payload;
		case CLEAR_EPISODES:
			return null;
		default:
			return state;
	}
};

export default fetchEpisodes;
