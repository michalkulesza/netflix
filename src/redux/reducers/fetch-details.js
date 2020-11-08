import { CLEAR_DETAILS, FETCH_DETAILS } from "../types";

const initState = null;

const fetchDetails = (state = initState, action) => {
	switch (action.type) {
		case FETCH_DETAILS:
			return action.payload;
		case CLEAR_DETAILS:
			return initState;
		default:
			return state;
	}
};

export default fetchDetails;
