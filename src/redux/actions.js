import { FETCH_INITIAL_DATA } from "./types";
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
