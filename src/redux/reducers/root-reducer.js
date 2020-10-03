import initialData from "./fetch-initial-data";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
	initialData,
});

export default rootReducer;
