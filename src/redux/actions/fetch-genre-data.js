import { FETCH_GENRE_DATA, FETCH_MORE_GENRE_DATA, CLEAR_GENRE_DATA, SET_GENRE_DATA_UPDATING } from "../types";
import { setError } from "./error";
import axios from "axios";
import { BASE_PATH } from "../../constants/config";

export const fetchGenreData = (type, genreID, page = 1) => {
	return async dispatch => {
		try {
			dispatch({
				type: SET_GENRE_DATA_UPDATING,
				payload: true,
			});

			const response = await axios.get(`${BASE_PATH}/genre/${type}?genreID=${genreID}&page=${page}`);

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

			dispatch({
				type: SET_GENRE_DATA_UPDATING,
				payload: false,
			});
		} catch (error) {
			dispatch(setError("Whops! Something happend while getting genre media."));
			dispatch({
				type: SET_GENRE_DATA_UPDATING,
				payload: false,
			});
		}
	};
};

export const clearGenreData = () => {
	return {
		type: CLEAR_GENRE_DATA,
	};
};
