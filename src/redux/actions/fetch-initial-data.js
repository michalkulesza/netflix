import axios from "axios";
import { SET_INITIAL_DATA, SET_DATA_UPDATING } from "../types";
import { setError } from "./error";

export const setInitialData = data => {
	return dispatch => {
		dispatch({
			type: SET_DATA_UPDATING,
			payload: true,
		});

		dispatch({
			type: SET_INITIAL_DATA,
			payload: data,
		});
	};
};

export const setDataUpdating = bool => {
	return {
		type: SET_DATA_UPDATING,
		payload: bool,
	};
};

export const fetchInitialDataBrowse = () => {
	return async dispatch => {
		try {
			dispatch({
				type: SET_DATA_UPDATING,
				payload: true,
			});

			const response = await axios.get("http://localhost:8888/initial/browse");

			dispatch({
				type: SET_INITIAL_DATA,
				payload: response.data,
			});
		} catch (error) {
			dispatch(setError("Whops! Something happend while getting data."));
		}
	};
};

export const fetchInitialDataSeries = () => {
	return async dispatch => {
		try {
			dispatch({
				type: SET_DATA_UPDATING,
				payload: true,
			});

			const response = await axios.get("http://localhost:8888/initial/series");

			dispatch({
				type: SET_INITIAL_DATA,
				payload: response.data,
			});
		} catch (error) {
			dispatch(setError("Whops! Something happend while getting data."));
		}
	};
};

export const fetchInitialDataFilms = () => {
	return async dispatch => {
		try {
			dispatch({
				type: SET_DATA_UPDATING,
				payload: true,
			});

			const response = await axios.get("http://localhost:8888/initial/films");

			dispatch({
				type: SET_INITIAL_DATA,
				payload: response.data,
			});
		} catch (error) {
			dispatch(setError("Whops! Something happend while getting data."));
		}
	};
};

export const fetchInitialDataLatest = () => {
	return async dispatch => {
		try {
			dispatch({
				type: SET_DATA_UPDATING,
				payload: true,
			});

			const response = await axios.get("http://localhost:8888/initial/series");

			dispatch({
				type: SET_INITIAL_DATA,
				payload: response.data,
			});
		} catch (error) {
			dispatch(setError("Whops! Something happend while getting data."));
		}
	};
};
