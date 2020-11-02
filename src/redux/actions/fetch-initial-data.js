import axios from "axios";
import { BASE_PATH } from "../../constants/config";
import { SET_INITIAL_DATA, SET_DATA_UPDATING, SET_INITIAL_USER_LIST } from "../types";
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

			const response = await axios.get(`${BASE_PATH}/initial/browse`);

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

			const response = await axios.get(`${BASE_PATH}/initial/series`);

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

			const response = await axios.get(`${BASE_PATH}/initial/films`);

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

			const response = await axios.get(`${BASE_PATH}/initial/series`);

			dispatch({
				type: SET_INITIAL_DATA,
				payload: response.data,
			});
		} catch (error) {
			dispatch(setError("Whops! Something happend while getting data."));
		}
	};
};

export const fetchInitialDataUserList = () => {
	const userID = JSON.parse(localStorage.getItem("authUser"))?.uid;
	return async dispatch => {
		try {
			dispatch({
				type: SET_DATA_UPDATING,
				payload: true,
			});

			const response = await axios.get(`${BASE_PATH}/initial/list?id=${userID}`);

			dispatch({
				type: SET_INITIAL_USER_LIST,
				payload: response.data,
			});
		} catch (error) {
			dispatch(setError("Whops! Something happend while getting user list data."));
		}
	};
};
