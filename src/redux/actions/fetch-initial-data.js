import axios from "axios";
import { SET_INITIAL_DATA, SET_CACHE_BROWSE, SET_CACHE_SERIES, SET_CACHE_FILMS, SET_CACHE_LATEST } from "../types";

export const setInitialData = data => {
	return {
		type: SET_INITIAL_DATA,
		payload: data,
	};
};

export const fetchInitialDataBrowse = () => {
	return async dispatch => {
		try {
			const response = await axios.get("http://localhost:8888/initial/browse");

			dispatch({
				type: SET_INITIAL_DATA,
				payload: response.data,
			});

			dispatch({
				type: SET_CACHE_BROWSE,
				payload: response.data,
			});
		} catch (error) {
			console.error(error.message);
		}
	};
};

export const fetchInitialDataSeries = () => {
	return async dispatch => {
		try {
			const response = await axios.get("http://localhost:8888/initial/series");

			dispatch({
				type: SET_INITIAL_DATA,
				payload: response.data,
			});

			dispatch({
				type: SET_CACHE_SERIES,
				payload: response.data,
			});
		} catch (error) {
			console.error(error.message);
		}
	};
};

export const fetchInitialDataFilms = () => {
	return async dispatch => {
		try {
			const response = await axios.get("http://localhost:8888/initial/films");

			dispatch({
				type: SET_INITIAL_DATA,
				payload: response.data,
			});
			dispatch({
				type: SET_CACHE_FILMS,
				payload: response.data,
			});
		} catch (error) {
			console.error(error.message);
		}
	};
};

export const fetchInitialDataLatest = () => {
	return async dispatch => {
		try {
			const response = await axios.get("http://localhost:8888/initial/latest");

			dispatch({
				type: SET_INITIAL_DATA,
				payload: response.data,
			});
			dispatch({
				type: SET_CACHE_LATEST,
				payload: response.data,
			});
		} catch (error) {
			console.error(error.message);
		}
	};
};
