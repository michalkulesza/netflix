import configuration from "./fetch-configuration";
import genres from "./genres";
import initialData from "./fetch-initial-data";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
	configuration,
	genres,
	initialData,
});

export default rootReducer;
