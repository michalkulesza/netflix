import { FETCH_GENRES, DECODE_GENRES } from "../types";

const configuration = (state = [], action) => {
	switch (action.type) {
		case FETCH_GENRES:
			return action.payload;
		case DECODE_GENRES:
			return state;
		default:
			return state;
	}
};

export default configuration;
