import initialData from "./fetch-initial-data";
import fetchDetails from "./fetch-details";
import fetchEpisodes from "./fetch-episodes";
import error from "./error";
import toggles from "./toggles";
import misc from "./misc";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
	initialData,
	fetchDetails,
	fetchEpisodes,
	toggles,
	misc,
	error,
});

export default rootReducer;
