import { CLEAR_USER, TOGGLE_LIKE_VIDEO, TOGGLE_DISLIKE_VIDEO, SET_USER, TOGGLE_VIDEO_LIST } from "../types";

const initState = null;

const user = (state = initState, action) => {
	switch (action.type) {
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
			if (state.list.find(obj => obj.id === action.payload.id) !== undefined) {
				return { ...state, list: state.list.filter(item => item.id !== action.payload.id) };
			} else {
				return { ...state, list: [...state.list, action.payload] };
			}
		case CLEAR_USER:
			return initState;
		default:
			return state;
	}
};

export default user;
