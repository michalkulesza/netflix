import configuration from "./fetch-configuration";
import initialData from "./fetch-initial-data";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
	configuration,
	initialData,
});

export default rootReducer;
