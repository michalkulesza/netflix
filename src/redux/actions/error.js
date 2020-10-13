import { SET_ERROR, CLEAR_ERROR } from "../types";

export const setError = error => {
	return {
		type: SET_ERROR,
		payload: error,
	};
};

export const clearError = error => {
	return {
		type: CLEAR_ERROR,
		payload: error,
	};
};
