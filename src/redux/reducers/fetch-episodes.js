import { FETCH_EPISODES } from "../types";

const fetchEpisodes = (state = null, action) => {
	switch (action.type) {
		case FETCH_EPISODES:
			return action.payload;
		default:
			return state;
	}
};

export default fetchEpisodes;
