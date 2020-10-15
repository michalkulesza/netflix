import { FETCH_GENRE_DATA, FETCH_MORE_GENRE_DATA, CLEAR_GENRE_DATA, SET_GENRE_DATA_UPDATING } from "../types";
import { setError } from "./error";
import axios from "axios";

export const fetchGenreData = (type, genreID, page = 1) => {
	return async dispatch => {
		try {
			dispatch({
				type: SET_GENRE_DATA_UPDATING,
				payload: true,
			});

			const response = await axios.post(`http://localhost:8888/genre/${type}`, { genreID, page });

			if (page > 1) {
				dispatch({
					type: FETCH_MORE_GENRE_DATA,
					payload: { ...response.data, id: genreID },
				});
			} else {
				dispatch({
					type: FETCH_GENRE_DATA,
					payload: { ...response.data, id: genreID },
				});
			}
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
