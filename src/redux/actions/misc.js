import {
	SET_PRESSED_KEY,
	SET_GLOBAL_MUTE,
	SET_HEADER_VIDEO_CAN_PLAY,
	SET_SECONDARY_VIDEO_IS_PLAYING,
	SET_HEADER_VIDEO,
} from "../types";

export const setPressedKey = key => {
	return {
		type: SET_PRESSED_KEY,
		payload: key,
	};
};

export const setGlobalMute = bool => {
	return {
		type: SET_GLOBAL_MUTE,
		payload: bool,
	};
};

export const setHeaderVideoCanPlay = bool => {
	return {
		type: SET_HEADER_VIDEO_CAN_PLAY,
		payload: bool,
	};
};

export const setSecondaryVideoIsPlaying = bool => {
	return {
		type: SET_SECONDARY_VIDEO_IS_PLAYING,
		payload: bool,
	};
};

export const setHeaderVideo = data => {
	return {
		type: SET_HEADER_VIDEO,
		payload: data,
	};
};
