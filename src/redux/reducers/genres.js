import { SET_GENRES, CLEAR_GENRES, SET_SELECTED_GENRE } from "../types";

const initState = {
	genres: null,
	genresType: null,
	selectedGenre: null,
};

const genres = (state = initState, action) => {
	switch (action.type) {
		case SET_GENRES:
			return { ...state, ...action.payload };
		case CLEAR_GENRES:
			return initState;
		case SET_SELECTED_GENRE:
			return { ...state, selectedGenre: action.payload };
		default:
			return state;
	}
};

export default genres;
