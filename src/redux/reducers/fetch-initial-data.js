import { SET_DATA_UPDATING, SET_INITIAL_DATA } from "../types";

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
		default:
			return state;
	}
};

export default initialData;
