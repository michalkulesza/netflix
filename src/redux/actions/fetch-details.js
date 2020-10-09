import axios from "axios";
import { CLEAR_DETAILS, FETCH_DETAILS, FETCH_EPISODES } from "../types";

export const fetchDetailsMovie = id => {
	return async dispatch => {
		try {
			const response = await axios.post("http://localhost:8888/details/movie", { id });

			dispatch({
				type: FETCH_DETAILS,
				payload: response.data,
			});
		} catch (error) {
			console.error(error.message);
		}
	};
};

export const fetchDetailsTv = id => {
	return async dispatch => {
		try {
			const response = axios.post("http://localhost:8888/details/tv", { id });
			const responseEpisodes = axios.post("http://localhost:8888/episodes", { id, season: 1 });

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
				.catch(err => console.error(err.message));
		} catch (error) {
			console.error(error.message);
		}
	};
};

export const clearDetails = () => {
	return {
		type: CLEAR_DETAILS,
	};
};
