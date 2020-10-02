import { FETCH_CONFIGURATION } from "../types";

const configuration = (state = [], action) => {
	switch (action.type) {
		case FETCH_CONFIGURATION:
			return action.payload;
		default:
			return state;
	}
};

export default configuration;
