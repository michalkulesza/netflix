import { CLEAR_DETAILS, FETCH_DETAILS } from "../types";

const fetchDetails = (state = null, action) => {
	switch (action.type) {
		case FETCH_DETAILS:
			return action.payload;
		case CLEAR_DETAILS:
			return null;
		default:
			return state;
	}
};

export default fetchDetails;
