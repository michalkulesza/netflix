import { CLEAR_INITIAL_DATA, SET_DATA_UPDATING, SET_INITIAL_DATA, SET_INITIAL_LIST } from "../types";

const initState = {
	isUpdating: false,
	data: null,
	userList: null,
};

const initialData = (state = initState, action) => {
	switch (action.type) {
		case SET_INITIAL_DATA:
			return { ...state, data: action.payload };
		case SET_INITIAL_LIST:
			return { ...state, list: action.payload };
		case SET_DATA_UPDATING:
			return { ...state, isUpdating: action.payload };
		case CLEAR_INITIAL_DATA:
			return initState;
		default:
			return state;
	}
};

export default initialData;
