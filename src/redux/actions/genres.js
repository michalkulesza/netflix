import { SET_GENRES, CLEAR_GENRES, SET_SELECTED_GENRE } from "../types";
import { setError } from "./error";
import axios from "axios";

export const setSeriesGenres = () => {
	return async dispatch => {
		try {
			const response = await axios.get("http://localhost:8888/genres/series");

			dispatch({
				type: SET_GENRES,
				payload: { genres: response.data, genresType: "Series" },
			});
		} catch (error) {
			dispatch(setError("Whops! Something happend while getting genres."));
		}
	};
};

export const setFilmsGenres = () => {
	return async dispatch => {
		try {
			const response = await axios.get("http://localhost:8888/genres/films");

			dispatch({
				type: SET_GENRES,
				payload: { genres: response.data, genresType: "Films" },
			});
		} catch (error) {
			dispatch(setError("Whops! Something happend while getting genres."));
		}
	};
};

export const clearGenres = data => {
	return {
		type: CLEAR_GENRES,
		payload: data,
	};
};

export const setSelectedGenre = genreString => {
	return {
		type: SET_SELECTED_GENRE,
		payload: genreString,
	};
};
