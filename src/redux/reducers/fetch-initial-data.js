import { CLEAR_INITIAL_DATA, SET_DATA_UPDATING, SET_INITIAL_DATA } from "../types";

const initState = {
	data: null,
	isUpdating: false,
};

const initialData = (state = initState, action) => {
	switch (action.type) {
		case SET_INITIAL_DATA:
			return { isUpdating: false, data: action.payload };
		case SET_DATA_UPDATING:
			return { ...state, isUpdating: action.payload };
		case CLEAR_INITIAL_DATA:
			return initState;
		default:
			return state;
	}
};

export default initialData;
