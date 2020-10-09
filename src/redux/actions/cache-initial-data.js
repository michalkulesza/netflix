import { SET_CACHE_BROWSE, SET_CACHE_SERIES, SET_CACHE_FILMS, SET_CACHE_LATEST } from "../types";

export const setCacheBrowse = data => {
	return {
		type: SET_CACHE_BROWSE,
		payload: { browseCache: data },
	};
};

export const setCacheSeries = data => {
	return {
		type: SET_CACHE_SERIES,
		payload: { seriesCache: data },
	};
};

export const setCacheFilms = data => {
	return {
		type: SET_CACHE_FILMS,
		payload: { filmsCache: data },
	};
};

export const setCacheLatest = data => {
	return {
		type: SET_CACHE_LATEST,
		payload: { latestCache: data },
	};
};
