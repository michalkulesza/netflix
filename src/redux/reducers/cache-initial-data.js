import { SET_CACHE_BROWSE, SET_CACHE_FILMS, SET_CACHE_LATEST, SET_CACHE_SERIES } from "../types";

const initState = {
	browseCache: null,
	seriesCache: null,
	filmsCache: null,
	latestCache: null,
};

const cacheInitialData = (state = initState, action) => {
	switch (action.type) {
		case SET_CACHE_BROWSE:
			return { ...state, ...action.payload };
		case SET_CACHE_SERIES:
			return { ...state, ...action.payload };
		case SET_CACHE_FILMS:
			return { ...state, ...action.payload };
		case SET_CACHE_LATEST:
			return { ...state, ...action.payload };
		default:
			return state;
	}
};

export default cacheInitialData;
