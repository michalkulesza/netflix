import { SET_PLAYER_TV, SET_PLAYER_FILM, SET_PLAYER_VOLUME } from "../types";

export const setPlayerTV = ({
	title,
	src,
	backdrop,
	description,
	ep_title,
	ep_number,
	ep_season,
	seasons,
	episodes,
}) => {
	return {
		type: SET_PLAYER_TV,
		payload: { title, src, backdrop, description, ep_title, ep_number, ep_season, seasons, episodes },
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
