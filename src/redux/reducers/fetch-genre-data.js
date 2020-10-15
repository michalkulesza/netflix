import { CLEAR_GENRE_DATA, FETCH_GENRE_DATA } from "../types";

const initState = {
	data: null,
	page: null,
	total_pages: null,
};

const fetchGenreData = (state = initState, action) => {
	switch (action.type) {
		case FETCH_GENRE_DATA:
			return {
				...state,
				data: action.payload.data,
				page: action.payload.page,
				total_pages: action.payload.total_pages,
			};
		case CLEAR_GENRE_DATA:
			return initState;
		default:
			return state;
	}
};

export default fetchGenreData;
