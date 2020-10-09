import axios from "axios";
import { CLEAR_EPISODES, FETCH_EPISODES } from "../types";

export const fetchEpisodes = (id, season) => {
	return async dispatch => {
		try {
			const response = await axios.post("http://localhost:8888/episodes", { id, season });
			dispatch({
				type: FETCH_EPISODES,
				payload: response.data,
			});
		} catch (error) {
			console.error(error.message);
		}
	};
};

export const clearEpisodes = () => {
	return {
		type: CLEAR_EPISODES,
	};
};
