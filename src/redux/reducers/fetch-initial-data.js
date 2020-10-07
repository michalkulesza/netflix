import { SET_INITIAL_DATA } from "../types";

const initialData = (state = null, action) => {
	switch (action.type) {
		case SET_INITIAL_DATA:
			return action.payload;
		default:
			return state;
	}
};

export default initialData;
