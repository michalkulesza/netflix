import {
	FETCH_INITIAL_DATA,
	FETCH_DETAILS,
	CLEAR_DETAILS,
	FETCH_EPISODES,
	SET_DETAILS,
	SET_DETAILS_POSITION,
	SET_SCROLLED,
} from "./types";
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
			const responseEpisodes = await axios.post("http://localhost:8888/episodes", { id, season: 1 });

			dispatch({
				type: FETCH_DETAILS,
				payload: response.data,
			});
			dispatch({
				type: FETCH_EPISODES,
				payload: responseEpisodes.data,
			});
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

export const setDetails = bool => {
	return {
		type: SET_DETAILS,
		payload: { isDetails: bool },
	};
};

export const setDetailsPosition = (x, y, width, height) => {
	return {
		type: SET_DETAILS_POSITION,
		payload: { detailsPosition: { x, y, width, height } },
	};
};

export const setScrolled = scrolled => {
	return {
		type: SET_SCROLLED,
		payload: { scrolled },
	};
};
