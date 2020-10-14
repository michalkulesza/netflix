import { FETCH_GENRE_DATA } from "../types";

const initState = {
	data: null,
};

const fetchGenreData = (state = initState, action) => {
	switch (action.type) {
		case FETCH_GENRE_DATA:
			return { ...state, data: action.payload };
		default:
			return state;
	}
};

export default fetchGenreData;
