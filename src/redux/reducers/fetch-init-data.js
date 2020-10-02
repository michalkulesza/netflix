import { FETCH_INIT_DATA } from "../types";

const initialData = (state = ["I AM A STATE"], action) => {
	switch (action.type) {
		case FETCH_INIT_DATA:
			return state;
		default:
			return state;
	}
};

export default initialData;
