import {
	CLEAR_USER,
	TOGGLE_LIKE_VIDEO,
	TOGGLE_DISLIKE_VIDEO,
	SET_USER,
	SET_USER_INFO,
	TOGGLE_VIDEO_LIST,
} from "../types";

const initState = null;

const toggles = (state = initState, action) => {
	switch (action.type) {
		case SET_USER_INFO:
			return { ...state, info: action.payload };
		case SET_USER:
			return action.payload;
		case TOGGLE_LIKE_VIDEO:
			if (!state.liked.includes(action.payload)) {
				return { ...state, liked: [...state.liked, action.payload] };
			} else {
				return { ...state, liked: state.liked.filter(el => el !== action.payload) };
			}
		case TOGGLE_DISLIKE_VIDEO:
			if (!state.disliked.includes(action.payload)) {
				return { ...state, disliked: [...state.disliked, action.payload] };
			} else {
				return { ...state, disliked: state.disliked.filter(el => el !== action.payload) };
			}
		case TOGGLE_VIDEO_LIST:
			if (!state.list.includes(action.payload)) {
				return { ...state, list: [...state.list, action.payload] };
			} else {
				return { ...state, list: state.list.filter(el => el !== action.payload) };
			}
		case CLEAR_USER:
			return initState;
		default:
			return state;
	}
};

export default toggles;
