import { FETCH_INITIAL_DATA } from "../types";

const initialData = (state = [], action) => {
	switch (action.type) {
		case FETCH_INITIAL_DATA:
			return action.payload;
		default:
			return state;
	}
};

export default initialData;
