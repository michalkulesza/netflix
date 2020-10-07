import initialData from "./fetch-initial-data";
import cacheInitialData from "./cache-initial-data";
import fetchDetails from "./fetch-details";
import fetchEpisodes from "./fetch-episodes";
import toggles from "./toggles";
import misc from "./misc";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
	initialData,
	fetchDetails,
	fetchEpisodes,
	toggles,
	misc,
	cacheInitialData,
});

export default rootReducer;
