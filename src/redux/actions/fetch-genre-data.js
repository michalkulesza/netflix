import { FETCH_GENRE_DATA, CLEAR_GENRE_DATA } from "../types";
import { setError } from "./error";
import axios from "axios";

export const fetchGenreData = (type, genreID) => {
	return async dispatch => {
		try {
			const response = await axios.post(`http://localhost:8888/genre/${type}`, { genreID });

			dispatch({
				type: FETCH_GENRE_DATA,
				payload: response.data,
			});
		} catch (error) {
			dispatch(setError("Whops! Something happend while getting genre media."));
		}
	};
};

export const clearGenreData = () => {
	return {
		type: CLEAR_GENRE_DATA,
	};
};
