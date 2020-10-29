import Axios from "axios";
import { BASE_PATH } from "../../constants/config";
import {
	SET_PLAYER_TV,
	SET_PLAYER_FILM,
	SET_PLAYER_VOLUME,
	SET_PLAYER_SEASONS,
	SET_PLAYER_STATE,
	SET_PLAYER_META_LOADED,
} from "../types";
import { setError } from "./error";

export const setPlayer = ({
	type,
	id,
	title,
	src,
	backdrop,
	description,
	ep_title,
	ep_number,
	ep_season,
	year,
	ageRestriction,
	runtime,
}) => {
	if (type === "tv") {
		return async dispatch => {
			try {
				dispatch({
					type: SET_PLAYER_TV,
					payload: { title, src, backdrop, description, ep_title, ep_number, ep_season },
				});

				const seasons = await Axios.get(`${BASE_PATH}/episodes/all&id=${id}`);

				dispatch({
					type: SET_PLAYER_SEASONS,
					payload: seasons.data,
				});
			} catch (error) {
				dispatch(setError("Whops! Something happend while getting seasons and episodes."));
			}
		};
	} else {
		return {
			type: SET_PLAYER_FILM,
			payload: { title, src, backdrop, description, year, ageRestriction, runtime },
		};
	}
};

export const setPlayerVolume = vol => {
	return {
		type: SET_PLAYER_VOLUME,
		payload: vol,
	};
};

export const setPlayerState = state => {
	return {
		type: SET_PLAYER_STATE,
		payload: state,
	};
};

export const setPlayerMetaLoaded = bool => {
	return {
		type: SET_PLAYER_META_LOADED,
		payload: bool,
	};
};
