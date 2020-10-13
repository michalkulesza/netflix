import { SET_GENRES, CLEAR_GENRES } from "../types";

const initState = {
	genres: null,
};

const genres = (state = initState, action) => {
	switch (action.type) {
		case SET_GENRES:
			return { ...state, genres: action.payload };
		case CLEAR_GENRES:
			return initState;
		default:
			return state;
	}
};

export default genres;
