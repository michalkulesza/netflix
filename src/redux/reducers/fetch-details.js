import { FETCH_DETAILS } from "../types";

const fetchDetails = (state = null, action) => {
	switch (action.type) {
		case FETCH_DETAILS:
			return action.payload;
		default:
			return state;
	}
};

export default fetchDetails;
