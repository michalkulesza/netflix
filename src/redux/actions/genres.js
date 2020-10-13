import { SET_GENRES, CLEAR_GENRES } from "../types";

export const setGenres = data => {
	return {
		type: SET_GENRES,
		payload: data,
	};
};

export const clearGenres = data => {
	return {
		type: CLEAR_GENRES,
		payload: data,
	};
};
