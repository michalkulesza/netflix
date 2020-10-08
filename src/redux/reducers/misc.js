import { SET_GLOBAL_MUTE, SET_HEADER_VIDEO, SET_HEADER_VIDEO_CAN_PLAY, SET_SECONDARY_VIDEO_IS_PLAYING } from "../types";

const initState = {
	globalMute: false,
	headerVideoCanPssslay: false,
	secondaryVideoIsPlaying: false,
	headerVideo: null,
};

const misc = (state = initState, action) => {
	switch (action.type) {
		case SET_GLOBAL_MUTE:
			return { ...state, globalMute: action.payload };
		case SET_HEADER_VIDEO_CAN_PLAY:
			return { ...state, headerVideoCanPlay: action.payload };
		case SET_SECONDARY_VIDEO_IS_PLAYING:
			return { ...state, secondaryVideoIsPlaying: action.payload };
		case SET_HEADER_VIDEO:
			return { ...state, headerVideo: action.payload };
		default:
			return state;
	}
};

export default misc;
