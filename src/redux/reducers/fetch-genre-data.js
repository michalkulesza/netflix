import { CLEAR_GENRE_DATA, FETCH_MORE_GENRE_DATA, FETCH_GENRE_DATA, SET_GENRE_DATA_UPDATING } from "../types";

const initState = {
	data: null,
	page: null,
	total_pages: null,
	id: null,
	isUpdating: false,
};

const fetchGenreData = (state = initState, action) => {
	switch (action.type) {
		case FETCH_GENRE_DATA:
			return {
				...state,
				data: action.payload.data,
				page: action.payload.page,
				total_pages: action.payload.total_pages,
				id: action.payload.id,
				isUpdating: false,
			};
		case FETCH_MORE_GENRE_DATA:
			return {
				...state,
				data: [...state.data, ...action.payload.data],
				page: action.payload.page,
				total_pages: action.payload.total_pages,
				id: action.payload.id,
				isUpdating: false,
			};
		case SET_GENRE_DATA_UPDATING:
			return {
				...state,
				isUpdating: action.payload,
			};
		case CLEAR_GENRE_DATA:
			return initState;
		default:
			return state;
	}
};

export default fetchGenreData;
