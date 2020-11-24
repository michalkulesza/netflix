import axios from "axios";
import { config } from "../../constants/config";
import { SET_INITIAL_DATA, SET_DATA_UPDATING, SET_INITIAL_LIST } from "../types";
import { setError } from "./error";

export const fetchInitialDataBrowse = () => {
	return async dispatch => {
		try {
			dispatch({
				type: SET_DATA_UPDATING,
				payload: true,
			});

			const response = await axios.get(`${config.BASE_PATH}/initial/browse`);

			dispatch({
				type: SET_INITIAL_DATA,
				payload: response.data,
			});

			dispatch({
				type: SET_DATA_UPDATING,
				payload: false,
			});
		} catch (error) {
			dispatch(setError("Whops! Something happend while getting data."));
			dispatch({
				type: SET_DATA_UPDATING,
				payload: false,
			});
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

			const response = await axios.get(`${config.BASE_PATH}/initial/series`);

			dispatch({
				type: SET_INITIAL_DATA,
				payload: response.data,
			});

			dispatch({
				type: SET_DATA_UPDATING,
				payload: false,
			});
		} catch (error) {
			dispatch(setError("Whops! Something happend while getting data."));
			dispatch({
				type: SET_DATA_UPDATING,
				payload: false,
			});
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

			const response = await axios.get(`${config.BASE_PATH}/initial/films`);

			dispatch({
				type: SET_INITIAL_DATA,
				payload: response.data,
			});

			dispatch({
				type: SET_DATA_UPDATING,
				payload: false,
			});
		} catch (error) {
			dispatch(setError("Whops! Something happend while getting data."));
			dispatch({
				type: SET_DATA_UPDATING,
				payload: false,
			});
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

			const response = await axios.get(`${config.BASE_PATH}/initial/latest`);

			dispatch({
				type: SET_INITIAL_DATA,
				payload: response.data,
			});

			dispatch({
				type: SET_DATA_UPDATING,
				payload: false,
			});
		} catch (error) {
			dispatch(setError("Whops! Something happend while getting data."));
			dispatch({
				type: SET_DATA_UPDATING,
				payload: false,
			});
		}
	};
};

export const fetchInitialDataList = () => {
	const userID = JSON.parse(localStorage.getItem("authUser"))?.uid;

	return async dispatch => {
		try {
			const response = await axios.get(`${config.BASE_PATH}/initial/list?userID=${userID}`);

			dispatch({
				type: SET_INITIAL_LIST,
				payload: response.data,
			});
		} catch (error) {
			dispatch(setError("Whops! Something happend while getting user list data."));
		}
	};
};
