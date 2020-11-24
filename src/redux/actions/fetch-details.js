import axios from "axios";
import { CLEAR_DETAILS, FETCH_DETAILS, FETCH_EPISODES } from "../types";
import { setError } from "../actions/error";
import { config } from "../../constants/config";

export const fetchDetailsMovie = (id, dataCallback) => {
	return async dispatch => {
		try {
			const response = await axios.get(`${config.BASE_PATH}/details/movie?id=${id}`);

			dispatch({
				type: FETCH_DETAILS,
				payload: response.data,
			});

			dataCallback && dataCallback(response.data);
		} catch (error) {
			dispatch(setError("Whops! Something happend while getting movie details."));
		}
	};
};

export const fetchDetailsTv = (id, dataCallback, episodesCallback) => {
	return async dispatch => {
		try {
			const response = axios.get(`${config.BASE_PATH}/details/tv?id=${id}`);
			const responseEpisodes = axios.get(`${config.BASE_PATH}/episodes?id=${id}&season=1`);

			await axios
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
						dataCallback && dataCallback(responses[0].data);
						episodesCallback && episodesCallback(responses[1].data);
					})
				)
				.catch(() => dispatch(setError("Whops! Something happend while getting tv details.")));
		} catch (error) {
			dispatch(setError("Whops! Something happend while getting tv details."));
			console.error(error);
		}
	};
};

export const clearDetails = () => {
	return {
		type: CLEAR_DETAILS,
	};
};
