import Axios from "axios";
import { SET_PLAYER_TV, SET_PLAYER_FILM, SET_PLAYER_VOLUME, SET_PLAYER_SEASONS } from "../types";
import { setError } from "./error";

export const setPlayerTV = ({ id, title, src, backdrop, description, ep_title, ep_number, ep_season }) => {
	return async dispatch => {
		try {
			dispatch({
				type: SET_PLAYER_TV,
				payload: { title, src, backdrop, description, ep_title, ep_number, ep_season },
			});

			const seasons = await Axios.post("http://localhost:8888/episodes/all", { id });

			dispatch({
				type: SET_PLAYER_SEASONS,
				payload: seasons.data,
			});
		} catch (error) {
			dispatch(setError("Whops! Something happend while getting seasons and episodes."));
		}
	};
};

export const setPlayerFilm = ({ title, src, backdrop, description, year, ageRestriction, runtime }) => {
	return {
		type: SET_PLAYER_FILM,
		payload: { title, src, backdrop, description, year, ageRestriction, runtime },
	};
};

export const setPlayerVolume = vol => {
	return {
		type: SET_PLAYER_VOLUME,
		payload: vol,
	};
};
