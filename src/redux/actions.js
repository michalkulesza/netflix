import { FETCH_INITIAL_DATA, FETCH_DETAILS, FETCH_EPISODES } from "./types";
import axios from "axios";

export const fetchInitialData = () => {
	return async dispatch => {
		try {
			const response = await axios.get("http://localhost:8888/initial");

			dispatch({
				type: FETCH_INITIAL_DATA,
				payload: response.data,
			});
		} catch (error) {
			console.error(error.message);
		}
	};
};

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
			const response = await axios.post("http://localhost:8888/details/tv", { id });

			dispatch({
				type: FETCH_DETAILS,
				payload: response.data,
			});
		} catch (error) {
			console.error(error.message);
		}
	};
};

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
