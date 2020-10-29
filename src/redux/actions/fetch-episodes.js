import axios from "axios";
import { CLEAR_EPISODES, FETCH_EPISODES, SET_EPISODES_UPDATING } from "../types";
import { setError } from "./error";

export const fetchEpisodes = (id, season) => {
	return async dispatch => {
		try {
			dispatch({
				type: SET_EPISODES_UPDATING,
				payload: true,
			});

			const response = await axios.get(`http://localhost:8888/episodes?id=${id}&season=${season}`);

			dispatch({
				type: FETCH_EPISODES,
				payload: response.data,
			});
		} catch (error) {
			dispatch(setError("Whops! Something happend while getting episodes."));
		}
	};
};

export const clearEpisodes = () => {
	return {
		type: CLEAR_EPISODES,
	};
};
