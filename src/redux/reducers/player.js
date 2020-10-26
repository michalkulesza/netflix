import {
	SET_PLAYER_SEASONS,
	SET_PLAYER_FILM,
	SET_PLAYER_TV,
	SET_PLAYER_VOLUME,
	SET_PLAYER_STATE,
	SET_PLAYER_META_LOADED,
} from "../types";

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
	year: null,
	ageRestriction: null,
	runtime: null,
	volume: 0.6,
	state: "paused",
	metaLoaded: false,
};

const misc = (state = initState, action) => {
	switch (action.type) {
		case SET_PLAYER_TV:
			return { ...initState, type: "tv", ...action.payload };
		case SET_PLAYER_FILM:
			return { ...initState, type: "film", ...action.payload };
		case SET_PLAYER_VOLUME:
			return { ...state, volume: action.payload };
		case SET_PLAYER_SEASONS:
			return { ...state, seasons: action.payload };
		case SET_PLAYER_STATE:
			return { ...state, state: action.payload };
		case SET_PLAYER_META_LOADED:
			return { ...state, metaLoaded: action.payload };
		default:
			return state;
	}
};

export default misc;
