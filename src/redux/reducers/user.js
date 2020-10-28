import { LIKE_VIDEO, REMOVE_LIKED_VIDEO, SET_USER, SET_USER_INFO } from "../types";

const initState = {
	info: null,
	liked: [],
	disliked: [],
	list: [],
};

const toggles = (state = initState, action) => {
	switch (action.type) {
		case SET_USER_INFO:
			return { ...state, info: action.payload };
		case SET_USER:
			return action.payload;
		case LIKE_VIDEO:
			return { ...state, liked: [...state.liked, action.payload] };
		case REMOVE_LIKED_VIDEO:
			return { ...state, liked: state.liked.filter(el => el !== action.payload) };
		default:
			return state;
	}
};

export default toggles;
