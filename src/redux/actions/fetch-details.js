import axios from "axios";
import { CLEAR_DETAILS, FETCH_DETAILS, FETCH_EPISODES } from "../types";
import { setError } from "../actions/error";

export const fetchDetailsMovie = id => {
	return async dispatch => {
		try {
			const response = await axios.get(`http://localhost:8888/details/movie?id=${id}`);

			dispatch({
				type: FETCH_DETAILS,
				payload: response.data,
			});
		} catch (error) {
			dispatch(setError("Whops! Something happend while getting movie details."));
		}
	};
};

export const fetchDetailsTv = id => {
	return async dispatch => {
		try {
			const response = axios.get(`http://localhost:8888/details/tv?id=${id}`);
			const responseEpisodes = axios.get(`http://localhost:8888/episodes?id=${id}&season=1`);

			axios
				.all([response, responseEpisodes])
				.then(
					axios.spread((...responses) => {
						dispatch({
							type: FETCH_DETAILS,
							payload: responses[0].data,
						});
						dispatch({
							type: FETCH_EPISODES,
							payload: responses[1].data,
						});
					})
				)
				.catch(() => dispatch(setError("Whops! Something happend while getting tv details.")));
		} catch (error) {
			dispatch(setError("Whops! Something happend while getting tv details."));
		}
	};
};

export const clearDetails = () => {
	return {
		type: CLEAR_DETAILS,
	};
};
