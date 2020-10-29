import {
	CLEAR_USER,
	DISLIKE_VIDEO,
	LIKE_VIDEO,
	REMOVE_DISLIKED_VIDEO,
	REMOVE_LIKED_VIDEO,
	SET_USER,
	SET_USER_INFO,
} from "../types";

const initState = null;

const toggles = (state = initState, action) => {
	switch (action.type) {
		case SET_USER_INFO:
			return { ...state, info: action.payload };
		case SET_USER:
			return action.payload;
		case LIKE_VIDEO:
			if (!state.liked.includes(action.payload)) {
				return { ...state, liked: [...state.liked, action.payload] };
			} else {
				return state;
			}
		case REMOVE_LIKED_VIDEO:
			return { ...state, liked: state.liked.filter(el => el !== action.payload) };
		case DISLIKE_VIDEO:
			if (!state.disliked.includes(action.payload)) {
				return { ...state, disliked: [...state.disliked, action.payload] };
			} else {
				return state;
			}
		case REMOVE_DISLIKED_VIDEO:
			return { ...state, disliked: state.disliked.filter(el => el !== action.payload) };
		case CLEAR_USER:
			return initState;
		default:
			return state;
	}
};

export default toggles;
