import { FETCH_CONFIGURATION, FETCH_INITIAL_DATA } from "./types";
import { API_KEY } from "../API_KEY";
import axios from "axios";

export const fetchConfiguration = () => {
	return async dispatch => {
		try {
			const configData = await axios.get(`https:/api.themoviedb.org/3/configuration?api_key=${API_KEY}`);
			const genreData = await axios.get(`https:/api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);

			dispatch({
				type: FETCH_CONFIGURATION,
				payload: { ...configData.data, ...genreData.data },
			});
		} catch (error) {
			console.error(error.message);
		}
	};
};

export const fetchInitialData = () => {
	return async dispatch => {
		try {
			const trending = await axios.get(`https:/api.themoviedb.org/3/trending/films/week?api_key=${API_KEY}`);
			const popular = await axios.get(`https:/api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
			const toprated = await axios.get(`https:/api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`);
			const upcoming = await axios.get(`https:/api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`);

			dispatch({
				type: FETCH_INITIAL_DATA,
				payload: [
					{ trending: trending.data.results },
					{ popular: popular.data.results },
					{ top_rated: toprated.data.results },
					{ upcoming: upcoming.data.results },
				],
			});
		} catch (error) {
			console.error(error.message);
		}
	};
};
