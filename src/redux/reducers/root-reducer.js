import initialData from "./fetch-init-data";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
	initialData,
});

export default rootReducer;
