import {
	SET_PLAYER_TV,
	SET_PLAYER_FILM,
	SET_PLAYER_VOLUME,
	SET_PLAYER_STATE,
	SET_PLAYER_META_LOADED,
	SET_ERROR,
} from "../types";

export const setPlayer = ({
	type,
	title,
	src,
	backdrop,
	ep_title,
	ep_number,
	ep_season,
	year,
	ageRestriction,
	runtime,
}) => {
	if (type === "tv") {
		return {
			type: SET_PLAYER_TV,
			payload: { title, src, backdrop, ep_title, ep_number, ep_season },
		};
	} else if (type === "movie") {
		return {
			type: SET_PLAYER_FILM,
			payload: { title, src, backdrop, year, ageRestriction, runtime },
		};
	} else {
		return {
			type: SET_ERROR,
			payload: "Whops! Something happend while setting player up.",
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
