import { SET_GENRES, CLEAR_GENRES, SET_SELECTED_GENRE, CLEAR_SELECTED_GENRE } from "../types";

const initState = {
	genres: null,
	genresType: null,
	selectedGenre: null,
};

const genres = (state = initState, action) => {
	switch (action.type) {
		case SET_GENRES:
			return { ...state, genres: action.payload.genres, genresType: action.payload.genresType };
		case SET_SELECTED_GENRE:
			return { ...state, selectedGenre: action.payload };
		case CLEAR_SELECTED_GENRE:
			return { ...state, selectedGenre: null };
		case CLEAR_GENRES:
			return initState;
		default:
			return state;
	}
};

export default genres;
