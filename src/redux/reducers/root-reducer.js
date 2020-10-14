import initialData from "./fetch-initial-data";
import fetchDetails from "./fetch-details";
import fetchEpisodes from "./fetch-episodes";
import error from "./error";
import toggles from "./toggles";
import misc from "./misc";
import genres from "./genres";
import fetchGenreData from "./fetch-genre-data";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
	initialData,
	fetchDetails,
	fetchEpisodes,
	fetchGenreData,
	error,
	toggles,
	misc,
	genres,
});

export default rootReducer;
