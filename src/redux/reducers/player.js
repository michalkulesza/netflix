import { SET_PLAYER_FILM, SET_PLAYER_TV } from "../types";

const initState = {
	type: null,
	title: null,
	src: null,
	backdrop: null,
	description: null,
	ep_title: null,
	ep_number: null,
	ep_season: null,
	seasons: null,
	episodes: null,
	year: null,
	ageRestriction: null,
	runtime: null,
};

const misc = (state = initState, action) => {
	switch (action.type) {
		case SET_PLAYER_TV:
			return { ...state, type: "tv", ...action.payload };
		case SET_PLAYER_FILM:
			return { ...state, type: "film", ...action.payload };
		default:
			return state;
	}
};

export default misc;
